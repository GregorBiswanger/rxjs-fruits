import { Exercise } from '../../shared/exercise';

export class SkiplastSkipMergeExercise implements Exercise {
    readonly fruits = ['apple', 'dirty-apple', 'apple', 'old-apple', 'old-apple',
    'old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana'];
    readonly expectedFruits = ['apple', 'apple', 'apple', 'banana', 'banana', 'banana'];
    readonly code = `const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'old-apple']);
const bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);

const freshApples = apples.pipe(
\t
);

const freshBananas = bananas.pipe(
\t
);

EMPTY.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 4;
    readonly positionColumnNumber = 2;
}
