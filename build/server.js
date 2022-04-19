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
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const post_contoller_1 = require("./controller/post.contoller");
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //init the application;
        this.configuration();
        this.postController = new post_contoller_1.PostController(); //Create a new instance of controller
        this.routes();
    }
    //Configure the Server
    configuration() {
        this.app.set("port", process.env.PORT || 3001);
    }
    //Configure the Routes
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.createConnection)({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "rootroot",
                database: "blog",
                entities: ["build/database/entities/*.js"],
                synchronize: true,
                name: "blog"
            });
            this.app.get("/", (req, res) => {
                res.send("Hello Nigeria!");
            });
            this.app.use(`/api/posts/`, this.postController.router); // Configure the new routes
        });
    }
    // Start server
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening ${this.app.get("port")} port.`);
        });
    }
}
const server = new Server(); // Create server instance
server.start(); // Execute the server
