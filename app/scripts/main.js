/// <reference path="../../typings/tsd.d.ts" />
var HogeViewModel = (function () {
    function HogeViewModel(name, age) {
        // 何も指定しないと public になる
        this.name = ko.observable('');
        this.age = ko.observable(0);
        this.name(name);
        this.age(age);
    }
    return HogeViewModel;
})();
$(function () {
    ko.applyBindings(new HogeViewModel('山田', 32));
});
//# sourceMappingURL=main.js.map