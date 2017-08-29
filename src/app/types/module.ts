export class IModule {
  _id: string;
  name: string;
}

export class Module {
  _id: string;
  name: string;

  constructor({_id, name}: IModule) {
    this._id = _id;
    this.name = name;
  }
}
