var State = (function () {
    function State() {
        this.keyValueStores = {};
        this.ttlStores = {};
        this.singleUseStores = {};
        this.listeners = {};
    }
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map