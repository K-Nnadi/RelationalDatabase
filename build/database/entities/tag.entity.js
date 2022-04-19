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
exports.Tag = void 0;
const typeorm_1 = require("typeorm");
const bank_acc_entity_1 = require("./bank-acc.entity");
const contact_entity_1 = require("./contact.entity");
const customer_enity_1 = require("./customer.enity");
let Tag = class Tag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tag.prototype, "tagName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tag.prototype, "tagCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_enity_1.Customer),
    __metadata("design:type", customer_enity_1.Customer)
], Tag.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contact_entity_1.Contact),
    __metadata("design:type", contact_entity_1.Contact)
], Tag.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bank_acc_entity_1.BankAccount),
    __metadata("design:type", bank_acc_entity_1.BankAccount)
], Tag.prototype, "bankAcc", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)()
], Tag);
exports.Tag = Tag;
