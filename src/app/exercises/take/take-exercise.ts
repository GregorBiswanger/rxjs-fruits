import { Exercise } from '../../shared/exercise';

export class TakeExercise implements Exercise {
    readonly fruits = ['banana',
        'banana',
        'banana',
        'banana'];
    readonly expectedFruits = ['banana',
        'banana'];
    readonly code = `const fruits = from([
    "banana",
    "banana",
    "banana",
    "banana"]);

fruits.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));`;
    readonly minPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
}
