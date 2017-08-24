import {IRoom, Room} from './room';
import {IModule, Module} from './module';
import {IWeek, Week} from './week';

export interface ILesson {
  startTime: string;
  endTime: string;
  module: IModule;
  group: string;
  type: string;
  rooms: IRoom[];
  weeks: IWeek[];
}

export class Lesson {
  startTime: string;
  endTime: string;
  module: Module;
  group: string;
  type: string;
  rooms: Room[];
  weeks: Week[];

  constructor({startTime, endTime, module, group, type, rooms, weeks}: ILesson) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.module = new Module(module);
    this.group = group;
    this.type = type;
    this.rooms = rooms.map(room => new Room(room));
    this.weeks = weeks.map(week => new Week(week));
  }

  getDuration(): number {
    const start = this.startTime.split(':');
    const end = this.endTime.split(':');
    return +end[0] - +start[0] + (+end[1] - +start[1]) / 60;
  }
}
