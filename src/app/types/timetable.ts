import {ILesson, Lesson} from './lesson';

export interface ITimetable {
  _id: string;
  monday: ILesson[];
  tuesday: ILesson[];
  wednesday: ILesson[];
  thursday: ILesson[];
  friday: ILesson[];
  saturday: ILesson[];
}

export class Timetable {
  _id: string;
  monday: Lesson[];
  tuesday: Lesson[];
  wednesday: Lesson[];
  thursday: Lesson[];
  friday: Lesson[];
  saturday: Lesson[];

  constructor({_id, monday, tuesday, wednesday, thursday, friday, saturday}: ITimetable) {
    const toLesson = lesson => new Lesson(lesson);
    this._id = _id;
    this.monday = monday.map(toLesson);
    this.tuesday = tuesday.map(toLesson);
    this.wednesday = wednesday.map(toLesson);
    this.thursday = thursday.map(toLesson);
    this.friday = friday.map(toLesson);
    this.saturday = saturday.map(toLesson);
  }

  toArray(includeSaturday: boolean = false): Lesson[][] {
    const dayArray: Lesson[][] = [
      this.monday,
      this.tuesday,
      this.wednesday,
      this.thursday,
      this.friday
    ];
    if (includeSaturday) {
      dayArray.push(this.saturday);
    }
    return dayArray;
  }
}
