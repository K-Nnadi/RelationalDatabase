"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
const typeorm_1 = require("typeorm");
const customer_enity_1 = require("./customer.enity");
const tag_entity_1 = require("./tag.entity");
let BankAccount = class BankAccount {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BankAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BankAccount.prototype, "accNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BankAccount.prototype, "sortCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_enity_1.Customer),
    __metadata("design:type", customer_enity_1.Customer)
], BankAccount.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tag_entity_1.Tag, tags => tags.bankAcc),
    __metadata("design:type", Array)
], BankAccount.prototype, "tags", void 0);
BankAccount = __decorate([
    (0, typeorm_1.Entity)()
], BankAccount);
exports.BankAccount = BankAccount;
