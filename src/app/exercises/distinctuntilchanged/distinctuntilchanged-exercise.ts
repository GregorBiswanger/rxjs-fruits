import { Exercise } from '../../shared/exercise';

export class DistinctuntilchangedExercise implements Exercise {
    readonly fruits = ['banana', 'apple', 'apple', 'banana', 'banana'];
    readonly expectedFruits = ['banana', 'apple', 'banana'];
    readonly code = `const fruits = from([
    "banana",
    "apple",
    "apple",
    "banana",
    "banana"]);

fruits.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 8;
    readonly positionColumnNumber = 2;
}
