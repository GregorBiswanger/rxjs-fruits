import { Exercise } from '../shared/exercise';

export class DistinctExercise implements Exercise {
    readonly fruits = ['fresh-apple',
        'fresh-apple',
        'fresh-banana',
        'fresh-apple'];
    readonly expectedFruits = ['fresh-apple',
        'fresh-banana'];
    code = `const fruits = from([
    "fresh-apple",
    "fresh-apple",
    "fresh-banana",
    "fresh-apple"]);
fruits.pipe(
\t
);`;
}
