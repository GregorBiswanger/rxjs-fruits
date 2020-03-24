import { Exercise } from '../shared/exercise';

export class FilterExercise implements Exercise {
    readonly fruits = [
        'fresh-apple',
        'fresh-apple',
        'old-apple',
        'fresh-apple',
        'old-apple',
        'fresh-banana',
        'old-banana',
        'old-banana',
        'fresh-banana',
        'fresh-banana'
    ];
    readonly expectedFruits = [
        'fresh-apple',
        'fresh-apple',
        'fresh-apple',
        'fresh-banana',
        'fresh-banana',
        'fresh-banana'
    ];
    readonly code = `const fruits = from([
        "fresh-apple",
        "fresh-apple",
        "old-apple",
        "fresh-apple",
        "old-apple",
        "fresh-banana",
        "old-banana",
        "old-banana",
        "fresh-banana",
        "fresh-banana"]);
fruits.pipe(
\t
);`;
    readonly minPositionLineNumber = 13;
    readonly maxPositionLineNumber = 13;
    readonly positionColumnNumber = 2;
    readonly codeLineLength = 14;
    readonly recipeDescription = 'Es sollen alle frischen Äpfel und Bananen gemixt werden. (Hinweis: Verwende filter)';
}
