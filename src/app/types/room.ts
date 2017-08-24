export interface IRoom {
  _id: string;
  building: string;
  buildingCode: string;
  floor: string;
  number: string;
}

export class Room {
  _id: string;
  building: string;
  buildingCode: string;
  floor: string;
  number: string;

  constructor({_id, building, buildingCode, floor, number}: IRoom) {
    this._id = _id;
    this.building = building;
    this.buildingCode = buildingCode;
    this.floor = floor;
    this.number = number;
  }
}
