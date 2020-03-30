import { Exercise } from '../shared/exercise';

export class FilterExercise implements Exercise {
    readonly fruits = [
        'apple',
        'apple',
        'old-apple',
        'apple',
        'old-apple',
        'banana',
        'old-banana',
        'old-banana',
        'banana',
        'banana'
    ];
    readonly expectedFruits = [
        'apple',
        'apple',
        'apple',
        'banana',
        'banana',
        'banana'
    ];
    readonly code = `const fruits = from([
    "apple",
    "apple",
    "old-apple",
    "apple",
    "old-apple",
    "banana",
    "old-banana",
    "old-banana",
    "banana",
    "banana"]);
fruits.pipe(
\t
).subscribe({
    next: fruit => toConveyorBelt(fruit)
});`;
    readonly minPositionLineNumber = 13;
    readonly maxPositionLineNumber = 13;
    readonly positionColumnNumber = 2;
    readonly codeLineLength = 16;
    readonly recipeDescription = 'Es sollen alle frischen Äpfel und Bananen gemixt werden. (Hinweis: Verwende filter)';
}
