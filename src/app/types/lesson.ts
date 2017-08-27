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

  private static timeDifference(time1: string, time2: string): number {
    const partsTime1 = time1.split(':');
    const partsTime2 = time2.split(':');
    return +partsTime2[0] - +partsTime1[0] + (+partsTime2[1] - +partsTime1[1]) / 60;
  }

  getOffsetFrom(time: string): number {
    return Lesson.timeDifference(time, this.startTime);
  }

  getDuration(): number {
    return Lesson.timeDifference(this.startTime, this.endTime);
  }
}
