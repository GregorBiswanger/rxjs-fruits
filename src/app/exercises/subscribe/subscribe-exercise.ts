import { Exercise } from '../../shared/exercise';

export class SubscribeExercise implements Exercise {
    readonly fruits = [];
    readonly expectedFruits = [];
    readonly code = `const conveyorBelt = EMPTY;
`;
    readonly minPositionLineNumber = 2;
    readonly positionColumnNumber = 1;
}
