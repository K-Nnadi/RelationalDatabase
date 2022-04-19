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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const bank_acc_entity_1 = require("./bank-acc.entity");
const contact_entity_1 = require("./contact.entity");
const tag_entity_1 = require("./tag.entity");
let Customer = class Customer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_entity_1.Contact, contacts => contacts.customer),
    __metadata("design:type", Array)
], Customer.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bank_acc_entity_1.BankAccount, bankAcc => bankAcc.customer),
    __metadata("design:type", bank_acc_entity_1.BankAccount)
], Customer.prototype, "bankAcc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tag_entity_1.Tag, tags => tags.customer),
    __metadata("design:type", Array)
], Customer.prototype, "tags", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);
exports.Customer = Customer;
