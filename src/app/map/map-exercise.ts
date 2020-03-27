import { Exercise } from '../shared/exercise';

export class MapExercise implements Exercise {
    fruits: [
        'dirty-fresh-apple',
        'fresh-apple',
        'dirty-fresh-banana',
        'fresh-banana'];
    expectedFruits = [
        'fresh-apple',
        'fresh-apple',
        'fresh-banana',
        'fresh-banana'
    ];
    code = `const fruits = from([
        "dirty-fresh-apple",
        "fresh-apple",
        "dirty-fresh-banana",
        "fresh-banana"]);
fruits.pipe(
\t
);`;
    minPositionLineNumber = 7;
    maxPositionLineNumber = 7;
    positionColumnNumber = 2;
    codeLineLength = 8;
    recipeDescription = 'Es sollen alle Äpfel und Bananen vom dreck befreit werden. (Hinweis: Verwende map)';
}
