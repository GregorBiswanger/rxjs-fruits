import { Exercise } from '../shared/exercise';

export class DistinctExercise implements Exercise {
    readonly fruits = ['fresh-apple',
        'fresh-apple',
        'fresh-banana',
        'fresh-apple'];
    readonly expectedFruits = ['fresh-apple',
        'fresh-banana'];
    readonly code = `const fruits = from([
    "fresh-apple",
    "fresh-apple",
    "fresh-banana",
    "fresh-apple"]);
fruits.pipe(
\t
);`;
    readonly minPositionLineNumber = 7;
    readonly maxPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
    readonly codeLineLength = 8;
}
