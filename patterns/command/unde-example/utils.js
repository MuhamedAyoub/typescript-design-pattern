"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var List = /** @class */ (function () {
    function List(item) {
        this.item = item;
        this.next = null;
    }
    return List;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.top = null;
    }
    Stack.prototype.pop = function () {
        if (this.top === null) {
            return null;
        }
        var item = this.top.item;
        this.top = this.top.next;
        return item;
    };
    Stack.prototype.push = function (item) {
        var newItem = new List(item);
        newItem.next = this.top;
        this.top = newItem;
    };
    Stack.prototype.peek = function () {
        var _a, _b;
        return (_b = (_a = this.top) === null || _a === void 0 ? void 0 : _a.item) !== null && _b !== void 0 ? _b : null;
    };
    Stack.prototype.isEmpty = function () {
        return this.top === null;
    };
    return Stack;
}());
exports.Stack = Stack;
