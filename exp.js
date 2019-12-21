"use strict";
exports.__esModule = true;
var hello = /** @class */ (function () {
    function hello(a, b) {
        this.x = a;
        this.y = b;
    }
    hello.prototype.display = function () {
        console.log(this.x, this.y);
    };
    return hello;
}());
exports.hello = hello;
var day = new hello(1, 2);
day.display();
