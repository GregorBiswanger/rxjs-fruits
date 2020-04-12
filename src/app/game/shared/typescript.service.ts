import { Injectable } from '@angular/core';
import * as ts from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class TypescriptService {
  transpile(code: string) {
    return ts.transpile(code, {
      module: ts.ModuleKind.None,
      target: ts.ScriptTarget.ES2015
    });
  }
}
