import { Exercise } from '../../shared/exercise';

export class DistinctExercise implements Exercise {
    readonly fruits = ['apple',
        'apple',
        'banana',
        'apple'];
    readonly expectedFruits = ['apple',
        'banana'];
    readonly code = `const fruits = from([
    "apple",
    "apple",
    "banana",
    "apple"]);

fruits.pipe(
\t
).subscribe({
    next: fruit => toConveyorBelt(fruit)
});
`;
    readonly minPositionLineNumber = 7;
    readonly positionColumnNumber = 2;
    readonly recipeDescription = 'Es soll jede Frucht nur einmal gemixt werden. (Hinweis: Verwende distinct)';
}
