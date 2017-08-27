import { Injectable } from '@angular/core';

@Injectable()
export class ModuleColorService {
  colors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#607D8B',
  ];

  constructor() { }

  private getColor(start: number, index: number) {
    return this.colors[(start + 2 * index) % this.colors.length];
  }

  private getStart(seed: string) {
    return Number(seed) % this.colors.length;
  }

  getColorMap(studentId: string, modules: string[]): {[key: string]: string} {
    const map: {[key: string]: string} = {};
    const start = this.getStart(studentId);
    modules.sort().forEach((module, i) => {
      map[module] = this.getColor(start, i);
    });
    return map;
  }

}
