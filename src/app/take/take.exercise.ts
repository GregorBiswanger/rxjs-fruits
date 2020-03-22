import { Exercise } from './../shared/exercise';

export class TakeExercise implements Exercise {
    readonly fruits = ['fresh-banana',
        'fresh-banana',
        'fresh-banana',
        'fresh-banana'];
    readonly expectedFruits = ['fresh-banana',
        'fresh-banana'];
    code = `const fruits = from([
    "fresh-banana",
    "fresh-banana",
    "fresh-banana",
    "fresh-banana"]);
fruits.pipe(
\t
);`;
}
