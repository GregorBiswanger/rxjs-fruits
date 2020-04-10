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

fruits.subscribe(fruit => );
`;
    readonly minPositionLineNumber = 5;
    readonly positionColumnNumber = 27;
}
