import { Exercise } from '../../shared/exercise';

export class MergeExercise implements Exercise {
    readonly fruits = [
        'apple', 'apple', 'old-apple', 'apple', 'old-apple',
        'banana', 'old-banana', 'old-banana', 'banana', 'banana'
    ];
    readonly expectedFruits = ['apple', 'apple', 'apple', 'banana', 'banana', 'banana'];
    readonly code = `const apples = from([
    "apple",
    "apple",
    "old-apple",
    "apple",
    "old-apple"]);

const bananas = from([
    "banana",
    "old-banana",
    "old-banana",
    "banana",
    "banana"]);

EMPTY.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 14;
    readonly positionColumnNumber = 1;
}
