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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const express_1 = require("express");
const post_service_1 = require("../services/post.service"); //import service
class PostController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postService.index();
            res.send(posts).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req["body"];
            const newPost = yield this.postService.create(post);
            res.send(newPost);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req["body"];
            const id = req["params"]["id"];
            res.send(this.postService.update(post, Number(id)));
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req["params"]["id"];
            res.send(this.postService.delete(Number(id)));
        });
        this.router = (0, express_1.Router)();
        this.postService = new post_service_1.PostService();
        this.routes();
    }
    routes() {
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/", this.update);
        this.router.delete("/", this.delete);
    }
}
exports.PostController = PostController;
