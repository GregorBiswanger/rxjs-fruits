import { Exercise } from '../../shared/exercise';

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
    minPositionLineNumber = 6;
    positionColumnNumber = 2;
}
