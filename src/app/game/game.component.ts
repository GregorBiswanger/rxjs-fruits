import { ColorMixerService } from './shared/color-mixer.service';
// tslint:disable: no-shadowed-variable deprecation no-eval
import { LocalStorageService } from './shared/local-storage.service';
import { OnInit } from '@angular/core';
import { ConfettiService } from './shared/confetti.service';
import { LevelService, Level } from './shared/level.service';
import { ExerciseService } from './../shared/exercise.service';
import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { from as fromX, EMPTY as EMPTYX, merge as mergeX, zip as zipX } from 'rxjs';
import { delay, concatMap, take, filter } from 'rxjs/operators';
import { distinct as distinctX, map as mapX, take as takeX, filter as filterX } from 'rxjs/operators';
import { tap as tapX, distinctUntilChanged as distinctUntilChangedX, takeWhile } from 'rxjs/operators';
import { skip as skipX, takeLast as takeLastX, skipLast as skipLastX, concatMap as concatMapX } from 'rxjs/operators';
import { repeat as repeatX, takeWhile as takeWhileX, retry as retryX, catchError as catchErrorX } from 'rxjs/operators';
import { TimelineLite, Power0, Bounce } from 'gsap';
import { MonacoEditorComponent, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import { GameOverDialogComponent } from '../game-over-dialog/game-over-dialog.component';
import * as monaco from 'monaco-editor';
import { Router } from '@angular/router';
import { Exercise } from './../shared/exercise';
import { TranslateService } from '@ngx-translate/core';
import { ConsoleService } from './shared/console.service';
import { CheatingDetectionService } from './shared/cheating-detection.service';
import { TypescriptService } from './shared/typescript.service';
import { OnChange } from 'property-watch-decorator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {
  @ViewChild(MonacoEditorComponent, { static: false })
  editor: MonacoEditorComponent;
  editorOptions = {
    theme: 'vs-dark',
    language: 'typescript',
    fontSize: 19,
    minimap: {
      enabled: false
    },
    fixedOverflowWidgets: true
  };

  @ViewChild('conveyorbelt', { static: true })
  conveyorBelt: ElementRef<HTMLObjectElement>;

  @ViewChild('bottle', { static: true })
  bottle: ElementRef<HTMLObjectElement>;

  currentBottleHeight = 100;
  lastFruitColor = '';

  @OnChange<string>(function (this: GameComponent, code: string) {
    if (this.isRunActive) {
      this.cancel();
    }

    if (code) {
      const levelTitle = this.levelService.currentLevel.title;
      this.localStorageService.saveCode(levelTitle, code);
    }

    this.isCheatingDetected = this.cheatingDetectionService.analyseCode(code);
  })
  code = '';

  conveyorBeltAnimationTimeline: TimelineLite;
  isRunActive = false;
  isLevelsWrapperOpen = false;
  isLanguageOptionsOpen = false;
  clickedByToggle = false;
  fruits: Fruit[] = [];
  fruitsInPipe: string[] = [];
  isNextExerciseAviable = false;
  isToMuchFruits = false;
  isNoFruitsIncoming = false;
  isToLittleFruits = false;
  isNoActivateSubscribe = false;
  isCheatingDetected = false;
  currentExercise: Exercise = {
    code: '',
    expectedFruits: [],
    fruits: [],
    minPositionLineNumber: 0,
    positionColumnNumber: 0
  };
  isErrorInConsole = false;

  constructor(
    public levelService: LevelService,
    public translate: TranslateService,
    private router: Router,
    private exerciseService: ExerciseService,
    private localStorageService: LocalStorageService,
    private consoleService: ConsoleService,
    private cheatingDetectionService: CheatingDetectionService,
    private confettiService: ConfettiService,
    private typescriptService: TypescriptService,
    private colorMixerService: ColorMixerService,
    private monacoLoader: MonacoEditorLoaderService,
    private httpClient: HttpClient,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe(() => {
      this.localStorageService.saveLanguage(this.translate.currentLang);
    });

    const language = this.localStorageService.loadSelectedLanguage();

    if (language) {
      this.translate.use(language);
    } else {
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    }

    this.exerciseService.exerciseChanged$.pipe(delay(0)).subscribe({
      next: exercise => {
        this.currentExercise = exercise;
        this.code = this.localStorageService.loadCode(this.levelService.currentLevel.title) || exercise.code;
        this.changeMonacoSettings();
      }
    });

    this.exerciseService.assertionChecked$.subscribe({
      next: valid => {
        this.isNextExerciseAviable = valid;

        if (valid === false &&
          this.isRunActive &&
          this.fruitsInPipe.length === 0) {
          this.isNoFruitsIncoming = true;
          this.cancel();
        } else if (valid === false &&
          this.isRunActive &&
          this.currentExercise.expectedFruits.length > this.fruitsInPipe.length) {
          this.isToLittleFruits = true;
        }
      }
    });

    this.monacoLoader.isMonacoLoaded$
      .pipe(
        filter(isLoaded => isLoaded === true),
        take(1)
      )
      .subscribe({
        next: () => {
          this.httpClient
            .get('assets/rx6.d.ts', { responseType: 'text' })
            .subscribe({
              next: data => {
                (window as any).monaco.languages.typescript.typescriptDefaults.addExtraLib(
                  data,
                  ''
                );
              }
            });

          this.setupMonacoSettings();
          this.changeMonacoSettings();
        }
      });

    this.levelService.gameOver$.subscribe({
      next: () => {
        this.confettiService.start();
        const dialogRef = this.dialog.open(GameOverDialogComponent);
        dialogRef.afterClosed().subscribe(() => this.confettiService.stop());
      }
    });

    this.consoleService.showWelcomeMessage();
  }

  previousLevelStyle() {
    return {
      disabled: this.levelService.currentLevelIndex === 0
    };
  }

  nextLevelStyle() {
    return {
      disabled:
        this.levelService.levels.length ===
        this.levelService.currentLevel.number
    };
  }

  levelStateStyle(level: Level) {
    return {
      current: this.levelService.isCurrentLevel(level),
      solved: level.solved
    };
  }

  buttonAnimationStyle() {
    return {
      animated: this.isNextExerciseAviable,
      nextButtonAnimation: this.isNextExerciseAviable
    };
  }

  recipeAnimationStyle() {
    let assertionFailed = false;

    for (let index = 0; index < this.fruitsInPipe.length; index++) {
      const fruit = this.fruitsInPipe[index];
      assertionFailed = this.currentExercise.expectedFruits[index] !== fruit;
    }

    return {
      animated: assertionFailed,
      shake: assertionFailed
    };
  }

  toggleLevelsWrapper() {
    this.clickedByToggle = !this.clickedByToggle;
    this.isLevelsWrapperOpen = !this.isLevelsWrapperOpen;
  }

  toggleLanguageOptions() {
    this.clickedByToggle = !this.clickedByToggle;
    this.isLanguageOptionsOpen = !this.isLanguageOptionsOpen;
  }

  closeTooltipWrapper() {
    if (this.isLanguageOptionsOpen && !this.clickedByToggle) {
      this.isLanguageOptionsOpen = false;
    } else if (this.isLevelsWrapperOpen && !this.clickedByToggle) {
      this.isLevelsWrapperOpen = false;
    } else {
      this.clickedByToggle = false;
    }
  }

  resetAllStates() {
    this.translate.get('APP.CONFIRMRESET').subscribe((text) => {
      if (confirm(text)) {
        this.localStorageService.clearAll();
        location.reload();
      }
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  assertFruitPipeIcon(index: number) {
    if (
      this.fruitsInPipe.length === 0 ||
      typeof this.fruitsInPipe[index] === 'undefined'
    ) {
      return '';
    }

    if (
      this.currentExercise.expectedFruits[index] === this.fruitsInPipe[index]
    ) {
      return '✔';
    }

    return '❌';
  }

  setupMonacoSettings() {
    setTimeout(() => {
      this.editor.editor.onDidChangeCursorPosition(e => {
        const minPositionLineNumber = this.currentExercise.minPositionLineNumber;
        const positionColumnNumber = this.currentExercise.positionColumnNumber;

        if (e.position.lineNumber < minPositionLineNumber) {
          this.editor.editor.setPosition({
            lineNumber: minPositionLineNumber + 1,
            column: positionColumnNumber
          });
        }
      });

      this.editor.editor.onDidChangeModelContent(e => {
        const minPositionLineNumber = this.currentExercise.minPositionLineNumber;

        this.editor.editor.deltaDecorations(
          [],
          [
            {
              range: new monaco.Range(1, 1, minPositionLineNumber - 1, 100),
              options: { inlineClassName: 'myInlineDecoration' }
            }
          ]
        );

        const lineCount = this.editor.editor.getModel().getLineCount();
        if (lineCount < minPositionLineNumber) {
          this.editor.editor.trigger('', 'undo', '');

          // workaround for monaco to accept the style update
          this.code = this.localStorageService.loadCode(this.levelService.currentLevel.title) || this.currentExercise.code;
          this.code = this.code + ' ';
          this.changeMonacoSettings();
        }
      });
    }, 0);
  }

  changeMonacoSettings() {
    setTimeout(() => {
      const minPositionLineNumber = this.currentExercise.minPositionLineNumber;
      const positionColumnNumber = this.currentExercise.positionColumnNumber;

      this.editor.editor?.setPosition({
        lineNumber: minPositionLineNumber + 1,
        column: positionColumnNumber
      });

      this.editor.editor?.deltaDecorations([],
        [
          {
            range: new monaco.Range(1, 1, minPositionLineNumber - 1, 100),
            options: { inlineClassName: 'myInlineDecoration' }
          }
        ]
      );

      this.editor.editor?.focus();
    }, 0);
  }

  run() {
    this.fruits = [];
    this.fruitsInPipe = [];
    this.isToMuchFruits = false;
    this.isNoFruitsIncoming = false;
    this.isToLittleFruits = false;
    this.isNoActivateSubscribe = false;
    this.isErrorInConsole = false;
    this.isRunActive = true;
    this.consoleService.showWelcomeMessage();
    const conveyorBeltSubject = new Subject<string>();

    // workaround for angular tree shaking
    const EMPTY = EMPTYX;
    const from = fromX;
    const distinct = distinctX;
    const map = mapX;
    const take = takeX;
    const filter = filterX;
    const tap = tapX;
    const skip = skipX;
    const merge = mergeX;
    const takeLast = takeLastX;
    const skipLast = skipLastX;
    const repeat = repeatX;
    const takeWhile = takeWhileX;
    const retry = retryX;
    const catchError = catchErrorX;
    const distinctUntilChanged = distinctUntilChangedX;
    const zip = zipX;
    const concatMap = concatMapX;
    const toConveyorBeltX = toConveyorBelt;

    function toConveyorBelt(fruit: string) {
      conveyorBeltSubject.next(fruit);
    }

    if (this.code.includes('conveyorBelt.subscribe()') && this.levelService.currentLevel.number === 1) {
      this.startConveyorBeltAnimation();
      this.isNextExerciseAviable = true;
    } else if (this.code.includes('subscribe(') &&
      this.levelService.currentLevel.number > 1) {
      this.startConveyorBeltAnimation();

      try {
        conveyorBeltSubject
          .pipe(
            concatMap(item => of(item).pipe(delay(1000))),
            takeWhile(() => this.isRunActive),
            tap(x => console.log('Into the pipe: ' + x)),
            tap(fruit => {
              this.fruitsInPipe.push(fruit);

              if (
                this.fruitsInPipe.length >
                this.currentExercise.expectedFruits.length
              ) {
                this.isToMuchFruits = true;
              }
            }),
            tap((fruit: string) => this.addFruitToView(fruit))
          ).subscribe(this.exerciseService.assertExerciseOutput());

        const transpiledCode = this.typescriptService.transpile(this.code);
        eval(transpiledCode);
        conveyorBeltSubject.complete();
      } catch (error) {
        this.consoleService.showRandomErrorImage();
        this.resetCurrentState();

        console.error(error);
        this.isErrorInConsole = true;
      }
    } else {
      this.isNoActivateSubscribe = true;
      this.cancel();
    }
  }

  addFruitToView(fruit: string): void {
    let fruitSelector = '';

    switch (fruit) {
      case 'apple':
        fruitSelector = 'fruit-apple-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-Apple.svg' });
        break;

      case 'dirty-apple':
        fruitSelector = 'fruit-dirty-apple-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-dirty-Apple.svg' });
        break;

      case 'banana':
        fruitSelector = 'fruit-banana-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-Banana.svg' });
        break;

      case 'dirty-banana':
        fruitSelector = 'fruit-dirty-banana-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-dirty-Banana.svg' });
        break;

      case 'cherry':
        fruitSelector = 'fruit-cherry-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-Cherry.svg' });
        break;

      case 'dirty-cherry':
        fruitSelector = 'fruit-dirty-cherry-' + this.fruits.length;
        this.fruits.push({ id: fruitSelector, url: 'assets/Fruit-dirty-Cherry.svg' });
        break;

      default:
        break;
    }
  }

  startFruitAnimation(fruitSelector) {
    fruitSelector = '#' + fruitSelector;
    const width = this.conveyorBelt.nativeElement.offsetTop - (this.conveyorBelt.nativeElement.offsetHeight / 100) * 70;
    // const width = this.conveyorBelt.nativeElement.contentDocument.querySelectorAll('#conveyor-belt')[0].getBBox().width;

    const timeline = new TimelineLite();
    timeline
      .to(fruitSelector, 0, { y: width })
      .to(fruitSelector, 3, { x: '18.5vw', ease: Power0.easeNone })
      .to(fruitSelector, 2, { y: '40vw', ease: Bounce.easeOut })
      .to(fruitSelector, 1, { x: 0, y: 0, visibility: 'hidden' });

    timeline.eventCallback('onComplete', () => {
      let fruitColor = '';

      if (fruitSelector.includes('dirty')) {
        fruitColor = '#814f00';
      } else if (fruitSelector.includes('apple')) {
        fruitColor = '#F8C301';
      } else if (fruitSelector.includes('banana')) {
        fruitColor = '#FDD3A3';
      } else if (fruitSelector.includes('cherry')) {
        fruitColor = '#E83B57';
      }

      let newFruitColor = '';

      if (this.lastFruitColor) {
        newFruitColor = this.colorMixerService.mix(fruitColor, this.lastFruitColor);
        this.lastFruitColor = newFruitColor;
      } else {
        this.lastFruitColor = fruitColor;
      }

      const fullSide = this.bottle.nativeElement.contentDocument.getElementById('full');
      fullSide.style.fill = newFruitColor || fruitColor;

      const blows = this.bottle.nativeElement.contentDocument.getElementsByClassName('st2');

      Array.from(blows).forEach(blow => {
        // tslint:disable-next-line: no-string-literal
        blow['style'].fill = newFruitColor || fruitColor;
      });

      const bottle = this.bottle.nativeElement.contentDocument.getElementById('fill-rect');
      this.currentBottleHeight = this.currentBottleHeight - (100 / this.fruits.length);

      const timeline = new TimelineLite();
      timeline.to(bottle, 1, { attr: { height: this.currentBottleHeight + '%' } });
    });
  }

  startConveyorBeltAnimation() {
    const wheels = this.conveyorBelt.nativeElement.contentDocument.querySelectorAll(
      '[id^=wheel]'
    );

    if (this.conveyorBeltAnimationTimeline === undefined) {
      this.conveyorBeltAnimationTimeline = new TimelineLite();

      this.conveyorBeltAnimationTimeline.to(
        wheels,
        3,
        {
          rotation: 360,
          transformOrigin: 'center',
          ease: Power0.easeNone,
          repeat: -1
        },
        0
      );
    } else {
      this.conveyorBeltAnimationTimeline.play();
    }
  }

  stopConveyorBeltAnimation() {
    this.conveyorBeltAnimationTimeline?.pause();
  }

  resetBottleHeight() {
    this.currentBottleHeight = 100;
    const bottle = this.bottle.nativeElement.contentDocument.getElementById('fill-rect');

    const timeline = new TimelineLite();
    timeline.to(bottle, 0, { attr: { height: '100%' } });
  }

  nextExercise(currentLevelSolved: boolean) {
    this.resetCurrentState();
    this.levelService.nextLevel(currentLevelSolved);
    this.router.navigate([this.levelService.currentLevel.urlPath]);
  }

  previousExercise() {
    this.resetCurrentState();
    this.levelService.previousLevel();
    this.router.navigate([this.levelService.currentLevel.urlPath]);
  }

  goToExercise(level: Level) {
    this.resetCurrentState();
    this.levelService.currentLevel = level;
    this.router.navigate([level.urlPath]);
  }

  cancel() {
    this.fruits = [];
    this.isRunActive = false;
    this.lastFruitColor = '';
    this.stopConveyorBeltAnimation();
    this.resetBottleHeight();
  }

  resetCurrentState() {
    this.fruitsInPipe = [];
    this.fruits = [];
    this.isToMuchFruits = false;
    this.isNoFruitsIncoming = false;
    this.isToLittleFruits = false;
    this.isNoActivateSubscribe = false;
    this.isNextExerciseAviable = false;
    this.isErrorInConsole = false;
    this.isRunActive = false;
    this.lastFruitColor = '';
    this.stopConveyorBeltAnimation();
    this.resetBottleHeight();
  }
}

export interface Fruit {
  id: string;
  url: string;
}
