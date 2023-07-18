"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getOneUser = exports.getAllUsers = exports.createNewUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = __importDefault(require("../models/user_model"));
exports.createNewUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email, password } = req.body;
    try {
        const user = yield user_model_1.default.create({ _id: id, email, password });
        console.log(user);
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.getAllUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        console.log(users);
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.getOneUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findById(id);
        console.log(user);
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.updateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.findByIdAndUpdate(id, { $set: { email, password } }, { new: true });
        console.log(user);
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findByIdAndDelete(id);
        console.log(user);
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
