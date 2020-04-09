import { Exercise } from '../../shared/exercise';

export class SkipLastExercise implements Exercise {
    readonly fruits = ['apple', 'apple', 'banana', 'apple', 'banana'];
    readonly expectedFruits = ['apple', 'apple', 'banana'];
    readonly code = `const fruits = from([
        "apple",
        "apple",
        "banana",
        "apple",
        "banana"]);

fruits.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 8;
    readonly positionColumnNumber = 2;
}
