"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Express And resizingRoute Module
var express_1 = __importDefault(require("express"));
var app_1 = __importDefault(require("./../appFunction/app"));
// Using Express Router
var routes = express_1.default.Router();
routes.use('/api', app_1.default);
exports.default = routes;
