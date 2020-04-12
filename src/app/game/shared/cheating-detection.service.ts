import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheatingDetectionService {

  analyseCode(code: string) {

    if (code.includes(`toConveyorBelt('apple')`) ||
      code.includes(`toConveyorBelt("apple")`) ||
      code.includes('toConveyorBelt(`apple`)')) {
      return true;
    }

    if (code.includes(`toConveyorBelt('banana')`) ||
    code.includes(`toConveyorBelt("banana")`) ||
    code.includes('toConveyorBelt(`banana`)')) {
      return true;
    }

    if (code.includes(`toConveyorBelt('cherry')`) ||
    code.includes(`toConveyorBelt("cherry")`) ||
    code.includes('toConveyorBelt(`cherry`)')) {
      return true;
    }

    const countOftoConveyorBelt = (code.match(/toConveyorBelt/g) || []).length;
    if (countOftoConveyorBelt > 1) {
      return true;
    }

    return false;
  }
}
