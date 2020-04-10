import { Exercise } from '../../shared/exercise';

export class SkipExercise implements Exercise {
    readonly fruits = ['apple', 'apple', 'banana', 'apple'];
    readonly expectedFruits = ['banana', 'apple'];
    readonly code = `const fruits = from([
    "apple",
    "apple",
    "banana",
    "apple"]);

fruits.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
}
