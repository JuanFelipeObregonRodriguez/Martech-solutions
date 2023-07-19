"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otherController_1 = __importDefault(require("../controllers/otherController"));
class OtherRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', otherController_1.default.list);
        this.router.get('/:id', otherController_1.default.getOne);
        this.router.post('/', otherController_1.default.create);
        this.router.put('/:id', otherController_1.default.update);
        this.router.delete('/:id', otherController_1.default.delete);
    }
}
const otherRoutes = new OtherRoutes();
exports.default = otherRoutes.router;
