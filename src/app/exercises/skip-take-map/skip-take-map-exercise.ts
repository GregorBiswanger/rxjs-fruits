import { Exercise } from '../../shared/exercise';

export class SkipTakeMapExercise implements Exercise {
    readonly fruits = ['dirty-apple', 'apple', 'dirty-banana', 'dirty-banana', 'apple'];
    readonly expectedFruits = ['banana'];
    readonly code = `const fruits = from([
    "dirty-apple",
    "apple",
    "dirty-banana",
    "dirty-banana",
    "apple"]);

fruits.pipe(
\t
).subscribe({
    next: fruit => toConveyorBelt(fruit)
});
`;
    readonly minPositionLineNumber = 8;
    readonly positionColumnNumber = 2;
}
