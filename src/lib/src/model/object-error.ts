export class ObjectError {

  public obj: object;
  public path: string;
  public message: string;

  constructor() {
    this.obj = {};
    this.path = '';
    this.message = '';
  }
}