import { Exercise } from '../../shared/exercise';

export class ZipConcatmapExercise implements Exercise {
    readonly fruits = ['apple', 'apple', 'banana', 'banana'];
    readonly expectedFruits = ['apple', 'banana', 'apple', 'banana'];
    readonly code = `const apples = from(["apple", "apple"]);
const bananas = from(["banana", "banana"]);

EMPTY.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 4;
    readonly positionColumnNumber = 2;
}
