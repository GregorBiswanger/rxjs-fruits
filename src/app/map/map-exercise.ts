import { Exercise } from '../shared/exercise';

export class MapExercise implements Exercise {
    fruits: [
        'dirty-apple',
        'apple',
        'dirty-banana',
        'banana'];
    expectedFruits = [
        'apple',
        'apple',
        'banana',
        'banana'
    ];
    code = `const fruits = from([
    "dirty-apple",
    "apple",
    "dirty-banana",
    "banana"]);
fruits.pipe(
\t
).subscribe({
    next: fruit => toConveyorBelt(fruit)
});`;
    minPositionLineNumber = 7;
    maxPositionLineNumber = 7;
    positionColumnNumber = 2;
    codeLineLength = 10;
    recipeDescription = 'Es sollen alle Äpfel und Bananen vom dreck befreit werden. (Hinweis: Verwende map)';
}
