export class IWeek {
  _id: string;
  name: string;
  date: string;
}

export class Week {
  _id: string;
  name: string;
  date: Date;

  constructor({_id, name, date}: IWeek) {
    this._id = _id;
    this.name = name;
    this.date = new Date(date);
  }
}
