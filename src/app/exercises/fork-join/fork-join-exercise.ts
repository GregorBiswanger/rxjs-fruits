import { Exercise } from '../../shared/exercise';

export class ForkJoinExercise implements Exercise {
  readonly fruits = ['apple', 'banana'];
  readonly expectedFruits = ['apple', 'banana'];

  readonly code = `const apples = from([
    'apple',
    'apple',
    'apple']);

    const bananas = from([
      'banana',
      'banana',
      'banana']);

EMPTY.pipe(
\t
).subscribe(fruit => toConveyorBelt(fruit));
    `;
  readonly minPositionLineNumber = 10;
  readonly positionColumnNumber = 1;

}
