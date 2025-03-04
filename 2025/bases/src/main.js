"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("./product.service");
var product_service_2 = require("./product.service");
console.log(product_service_2.products);
(0, product_service_1.send)({
    title: "title perro ",
    name: "name william ",
    number: 234234,
    date: new Date(),
    stock: 12
});
console.log(product_service_2.products);
console.log(product_service_1.count);
