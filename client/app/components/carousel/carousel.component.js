"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.images = IMAGES;
    }
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'carousel',
        templateUrl: 'carousel.component.html',
        styleUrls: ['carousel.component.css']
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
var IMAGES = [
    { "title": "Attract new customers & increase revenue with gift cards.", "url": "img/cash-management.jpg" },
    { "title": "Track all cash movements from cash float to register closure.", "url": "img/gift-cards.jpg" },
    { "title": "The beautifully fast web-based checkout experience. Try it now!", "url": "img/register.jpg" },
    { "title": "Retail ebooks, guides, live events, webinars and training.", "url": "img/vend-u.jpg" },
    { "title": "Attract new customers & increase revenue with gift cards.", "url": "img/cash-management.jpg" }
];
//# sourceMappingURL=carousel.component.js.map