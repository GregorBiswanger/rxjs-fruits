import { Exercise } from '../../shared/exercise';

export class RepeatExercise implements Exercise {
    readonly fruits = ['apple'];
    readonly expectedFruits = ['apple', 'apple', 'apple'];
    readonly code = `const fruits = from(["apple"]);

fruits.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
`;
    readonly minPositionLineNumber = 3;
    readonly positionColumnNumber = 2;
}
