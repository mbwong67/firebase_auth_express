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
exports.deleteBlogPost = exports.createNewBlogPost = exports.upDateBlogPost = exports.getOneBlogPost = exports.getAllBlogPosts = void 0;
const post_model_1 = __importDefault(require("../models/post_model"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.getAllBlogPosts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogPosts = yield post_model_1.default.find();
        console.log(blogPosts);
        res.status(200).json(blogPosts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.getOneBlogPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const blogPost = yield post_model_1.default.findById(id);
        console.log(blogPost);
        res.status(200).json(blogPost);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.upDateBlogPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const blogPost = yield post_model_1.default.findByIdAndUpdate(id, { $set: { title, content } }, { new: true });
        console.log(blogPost);
        res.status(200).json(blogPost);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.createNewBlogPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, } = req.body;
    try {
        const blogPost = yield post_model_1.default.create({ title, content });
        console.log(blogPost);
        res.status(200).json(blogPost);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
exports.deleteBlogPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const blogPost = yield post_model_1.default.findByIdAndDelete(id);
        console.log(blogPost);
        res.status(200).json(blogPost);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}));
