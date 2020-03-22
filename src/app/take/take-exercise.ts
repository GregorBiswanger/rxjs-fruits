import { Exercise } from '../shared/exercise';

export class TakeExercise implements Exercise {
    readonly fruits = ['fresh-banana',
        'fresh-banana',
        'fresh-banana',
        'fresh-banana'];
    readonly expectedFruits = ['fresh-banana',
        'fresh-banana'];
    readonly code = `const fruits = from([
    "fresh-banana",
    "fresh-banana",
    "fresh-banana",
    "fresh-banana"]);
fruits.pipe(
\t
);`;
    readonly minPositionLineNumber = 7;
    readonly maxPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
    readonly codeLineLength = 8;
}
