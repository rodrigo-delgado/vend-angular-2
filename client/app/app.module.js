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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var footer_component_1 = require("./components/footer/footer.component");
var carousel_component_1 = require("./components/carousel/carousel.component");
var signin_form_component_1 = require("./components/signin-form/signin-form.component");
var body_container_component_1 = require("./components/body-container/body-container.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent,
            navigation_component_1.NavigationComponent,
            footer_component_1.FooterComponent,
            signin_form_component_1.SignInFormComponent,
            carousel_component_1.CarouselComponent,
            body_container_component_1.BodyContainerComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map