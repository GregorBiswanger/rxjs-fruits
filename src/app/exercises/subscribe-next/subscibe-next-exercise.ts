import { Exercise } from '../../shared/exercise';

export class SubscibeNextExercise implements Exercise {
    readonly fruits = ['apple',
        'banana',
        'cherry'];
    readonly expectedFruits = ['apple',
        'banana',
        'cherry'];
    readonly code = `const fruits = from([
    "apple",
    "banana",
    "cherry"]);

fruits.subscribe({
    next: fruit => 
});
`;
    readonly minPositionLineNumber = 6;
    readonly positionColumnNumber = 20;
}
