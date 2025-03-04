"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.send = send;
exports.count = count;
exports.products = [];
function send(data) {
    exports.products.push(data);
}
function count() {
    var total = 0;
    exports.products.forEach(function (item) {
        total += item.stock;
    });
    return total;
}
