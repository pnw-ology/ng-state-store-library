export class State {

  public keyValueStores: Object;
  public ttlStores: Object;
  public singleUseStores: Object;
  public listeners: Object;

  constructor() {
    this.keyValueStores = {};
    this.ttlStores = {};
    this.singleUseStores = {};
    this.listeners = {};
  }

}