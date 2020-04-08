import { Exercise } from '../../shared/exercise';

export class FilterMapTakeExercise implements Exercise {
    readonly fruits = ['old-banana', 'apple', 'dirty-banana', 'apple'];
    readonly expectedFruits = ['apple', 'banana'];
    readonly code = `const fruits = from([
    "old-banana",
    "apple",
    "dirty-banana",
    "apple"]);

fruits.pipe(
\t
).subscribe({
    next: fruit => toConveyorBelt(fruit)
});
`;
    readonly minPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
}
