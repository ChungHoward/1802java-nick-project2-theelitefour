webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/*desktop*/\r\n@media only screen and (min-width: 992px) {\r\n  .main-panel {\r\n    width: calc(100% - 220px);\r\n  }\r\n}\r\n.sidebar {\r\n  max-width: 220px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var perfect_scrollbar_1 = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            _this.navbar.sidebarClose();
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        core_1.ViewChild(navbar_component_1.NavbarComponent),
        __metadata("design:type", typeof (_a = typeof navbar_component_1.NavbarComponent !== "undefined" && navbar_component_1.NavbarComponent) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var components_module_1 = __webpack_require__("./src/app/components/components.module.ts");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
// Pipes
var filter_pipe_1 = __webpack_require__("./src/app/pipe/filter.pipe.ts");
var sort_pipe_1 = __webpack_require__("./src/app/pipe/sort.pipe.ts");
// Components
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var teambuilder_component_1 = __webpack_require__("./src/app/teambuilder/teambuilder.component.ts");
var pokemonbox_component_1 = __webpack_require__("./src/app/pokemonbox/pokemonbox.component.ts");
var corecoverage_component_1 = __webpack_require__("./src/app/corecoverage/corecoverage.component.ts");
var defensivecoverage_component_1 = __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.ts");
var offensivecoverage_component_1 = __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.ts");
var offensevsdefense_component_1 = __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.ts");
var featured_component_1 = __webpack_require__("./src/app/featured/featured.component.ts");
var view_users_component_1 = __webpack_require__("./src/app/view-users/view-users.component.ts");
// Services
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var convert_service_1 = __webpack_require__("./src/app/services/convert.service.ts");
var feature_service_1 = __webpack_require__("./src/app/services/feature.service.ts");
var view_user_service_1 = __webpack_require__("./src/app/services/view-user.service.ts");
// Custom Modules
var ng2_dnd_1 = __webpack_require__("./node_modules/ng2-dnd/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                teambuilder_component_1.TeambuilderComponent,
                pokemonbox_component_1.PokemonBoxComponent,
                corecoverage_component_1.CoreCoverageComponent,
                defensivecoverage_component_1.DefensiveCoverageComponent,
                offensivecoverage_component_1.OffensiveCoverageComponent,
                offensevsdefense_component_1.OffenseVsDefenseComponent,
                featured_component_1.FeaturedComponent,
                filter_pipe_1.Filter,
                sort_pipe_1.Sort,
                view_users_component_1.ViewUsersComponent
            ],
            imports: [
                forms_2.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                ng2_dnd_1.DndModule.forRoot()
            ],
            providers: [
                pokemon_service_1.PokemonService,
                move_service_1.MoveService,
                team_service_1.TeamService,
                type_service_1.TypeService,
                login_service_1.LoginService,
                register_service_1.RegisterService,
                convert_service_1.ConvertService,
                feature_service_1.FeatureService,
                view_user_service_1.ViewUserService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var teambuilder_component_1 = __webpack_require__("./src/app/teambuilder/teambuilder.component.ts");
var pokemonbox_component_1 = __webpack_require__("./src/app/pokemonbox/pokemonbox.component.ts");
var corecoverage_component_1 = __webpack_require__("./src/app/corecoverage/corecoverage.component.ts");
var defensivecoverage_component_1 = __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.ts");
var offensivecoverage_component_1 = __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.ts");
var offensevsdefense_component_1 = __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.ts");
var featured_component_1 = __webpack_require__("./src/app/featured/featured.component.ts");
var view_users_component_1 = __webpack_require__("./src/app/view-users/view-users.component.ts");
var routes = [
    { path: 'view-user', component: view_users_component_1.ViewUsersComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'teambuilder', component: teambuilder_component_1.TeambuilderComponent },
    { path: 'pokemonbox', component: pokemonbox_component_1.PokemonBoxComponent },
    { path: 'corecoverage', component: corecoverage_component_1.CoreCoverageComponent },
    { path: 'defensivecoverage', component: defensivecoverage_component_1.DefensiveCoverageComponent },
    { path: 'offensivecoverage', component: offensivecoverage_component_1.OffensiveCoverageComponent },
    { path: 'offensevsdefense', component: offensevsdefense_component_1.OffenseVsDefenseComponent },
    { path: 'featured', component: featured_component_1.FeaturedComponent },
    { path: 'view-users', component: view_users_component_1.ViewUsersComponent },
    { path: '', redirectTo: 'teambuilder', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var footer_component_1 = __webpack_require__("./src/app/components/footer/footer.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var sidebar_component_1 = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
            ],
            declarations: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent
            ],
            exports: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"pull-left\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"mailto:email@example.com\">\r\n            Contact\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.revature.com\">\r\n            Revature\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://github.com/revatureclass/1802java-nick-project2-theelitefour\">\r\n            Github\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.veryobservantindeed.com\">\r\n            Observant, aren't you?\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <p class=\"copyright pull-right\">\r\n      &copy; {{test | date: 'yyyy'}}\r\n      <a href=\"#\">The Elite Four</a>\r\n    </p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul *ngIf=\"trainer == null; then ifLoggedOut; else elseLogin\" class=\"nav navbar-nav navbar-right\"></ul>\r\n      <ng-template #ifLoggedOut>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a routerLink='login'>\r\n              <i class=\"material-icons\">account_circle</i>\r\n              Login\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink='register'>\r\n              <i class=\"material-icons\">person</i>\r\n              Register\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </ng-template>\r\n      <ng-template #elseLogin>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a>\r\n              <!-- Profile icon changes depending on role: trainer, pro, admin -->\r\n              <!-- <i class=\"material-icons\" *ngIf=\"\">face</i>\r\n              <i class=\"material-icons\" *ngIf=\"\">whatshot</i>\r\n              <i class=\"material-icons\" *ngIf=\"\">supervisor_account</i> -->\r\n              Hello {{trainer.name}}\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"trainer.role === '3'\">\r\n            <a routerLink=\"view-user\">\r\n              <i class =\"material-icons\">exit_to_app</i>\r\n              View Users\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"logout()\">\r\n              <i class=\"material-icons\">exit_to_app</i>\r\n              Logout\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </ng-template>\r\n      <form class=\"navbar-form navbar-right\" role=\"search\">\r\n        <div class=\"form-group form-black is-empty\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n          <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n          <i class=\"material-icons\">search</i>\r\n          <div class=\"ripple-container\"></div>\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var sidebar_component_1 = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var NavbarComponent = (function () {
    function NavbarComponent(location, element, loginService) {
        var _this = this;
        this.element = element;
        this.loginService = loginService;
        this.location = location;
        this.sidebarVisible = false;
        this.loginService.currentTrainer.subscribe(function (trainer) {
            _this.trainer = trainer;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (loggedOut) {
            localStorage.removeItem('trainer');
            localStorage.removeItem('sets');
            localStorage.removeItem('teams');
            _this.loginService.changeTrainer(null);
        });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  width: 200px;\r\n}\r\n.sidebar-wrapper {\r\n  width: 222px;\r\n}\r\n.nav-container {\r\n  width: 220px;\r\n}\r\nli {\r\n  width: 210px;\r\n}\r\nli a {\r\n  margin-left: 8px;\r\n  margin-right: 8px;\r\n  width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"#\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"assets/img/angular2-logo-red.png\"/>\r\n        </div>\r\n        Bill's PC\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    \r\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\r\n        <div class=\"form-group form-black is-empty\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n        </button>\r\n    </form>\r\n\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
exports.ROUTES = [
    { path: 'teambuilder', title: 'Teambuilder', icon: 'view_quilt', class: '' },
    { path: 'pokemonbox', title: 'Pokemon Box', icon: 'grid_on', class: '' },
    { path: 'corecoverage', title: 'Core Coverage', icon: 'repeat_one', class: '' },
    { path: 'defensivecoverage', title: 'Defensive Coverage', icon: 'view_list', class: '' },
    { path: 'offensivecoverage', title: 'Offensive Coverage', icon: 'view_stream', class: '' },
    { path: 'featured', title: 'Featured Teams', icon: 'trending_up', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.container-fluid {\r\n  padding-left: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n.stats {\r\n  width: 100%;\r\n}\r\n/* Card styling */\r\n.card {\r\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\r\n          box-shadow: 0px 2px 8px #BBBBBB;\r\n  margin: 18px 0px;\r\n}\r\n.card-content {\r\n  padding-bottom: 0px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  min-height: 110px;\r\n}\r\n.card-stats {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  max-height: 230px;\r\n}\r\n.card-footer {\r\n  min-height: 110px;\r\n}\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.badge {\r\n  margin: 5px;\r\n  background-color: rgb(255, 70, 60);\r\n}\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.stat-col {\r\n  width: 42px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n.ta-left {\r\n  text-align: left;\r\n}\r\n.ta-center {\r\n  text-align: center;\r\n}\r\n.ta-right {\r\n  text-align: right;\r\n}\r\n.va-center {\r\n  vertical-align: center;\r\n}\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n.no-pad-top {\r\n  padding-top: 0px!important;\r\n}\r\n.mt-10 {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card card-plain\">\r\n      <div class=\"card-header row\" data-background-color=\"red\">\r\n        <div class=\"col-lg-10 col-xs-9\">\r\n          <h4 class=\"title\">Core Coverage shows you which teammates make good partners for your Pokemon</h4>\r\n          <p class=\"category\">Adjust the number of resistances you prefer on an ideal partner using the controls on the right.</p>\r\n        </div>\r\n        <div class=\"col-lg-2 col-xs-3 ta-right\">\r\n          <i class=\"material-icons\" role=\"button\" (click)=\"subThresh()\">\r\n            indeterminate_check_box\r\n          </i>\r\n          <span class=\"h3\">{{ threshold }}</span>\r\n          <i class=\"material-icons\" role=\"button\" (click)=\"addThresh()\">\r\n            add_box\r\n          </i>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"row\">\r\n        <!-- Loop through and print every Pokemon in favTeam -->\r\n        <div class=\"col-lg-4 col-xs-6\" *ngFor=\"let pkmn of favTeam; let i = index\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\r\n              <img src=\"{{ favTeam[i].sprite }}\" />\r\n            </div>\r\n            <div class=\"card-content ta-center row va-center\">\r\n              <span class=\"badge col-xs-3 col-xl-3\" *ngFor=\"let partner of partners[i]\">\r\n                {{ partner | titlecase }}\r\n              </span>\r\n            </div>\r\n            <div class=\"card-footer ta-left row\">\r\n              <div class=\"col-xl-5 col-xs-5\">\r\n                <h4 class=\"title\">{{ favTeam[i].name | titlecase }}</h4>\r\n                <img class=\"type\" src=\"{{ types.img[types.name.indexOf(favTeam[i].types[0])] }}\" />\r\n                <img class=\"type\" src=\"{{ types.name.indexOf(favTeam[i].types[1]) >= 0 ? types.img[types.name.indexOf(favTeam[i].types[1])] : types.img[15] }}\" />\r\n              </div>\r\n              <div class=\"col-xl-7 col-xs-7\">\r\n                is weak to\r\n                <br/>\r\n                <img *ngFor=\"let typeID of weaknesses[i]\" [src]=\"types.img[typeID]\" class=\"type\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var CoreCoverageComponent = (function () {
    function CoreCoverageComponent(pokemonService, teamService) {
        this.pokemonService = pokemonService;
        this.teamService = teamService;
        // The number of resistances we would like on an ideal partner
        this.threshold = 0;
        // two-way data binding wouldn't work so here's the hard way
        this.thresholdChange = new core_1.EventEmitter();
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Assign my favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        // Assign my favTeam using localStorage TODO: or from session if one exists
        this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
        // if null, get an empty team
        if (!this.favTeam) {
            this.favTeam = new Array();
        }
        // My default selected Pokemon
        this.selectedPkmn = this.favTeam[0];
        // Arbitrary value. Pokemon typically have between 1 and 5 weaknesses. 3 is the average.
        this.threshold = 3;
    }
    // The maximum amount of weaknesses a Pokemon can have is 7
    CoreCoverageComponent.prototype.addThresh = function () {
        if (this.threshold < 7) {
            this.threshold++;
            this.checkCoreCoverage(this.threshold);
            this.thresholdChange.emit(this.threshold);
        }
    };
    // Disallow negatives
    CoreCoverageComponent.prototype.subThresh = function () {
        if (this.threshold > 0) {
            this.threshold--;
            this.checkCoreCoverage(this.threshold);
            this.thresholdChange.emit(this.threshold);
        }
    };
    /**
     * Gets a list of pokemon for each member of your team that resists all the weaknesses of another pokemon of your team
     * @return a 2-D array of Pokemon names.
     * [x][y] x=the pokemon at that index of your team. y=names of partners that resist the weaknesses of x.
     * @param numResist The minimum number of resistances the user considers a good partner to have
     */
    CoreCoverageComponent.prototype.checkCoreCoverage = function (numResist) {
        var myWeaknesses;
        var type1ID, type2ID;
        var myResist;
        var partners; // Just the Pokemon's name is fine;
        partners = [];
        this.weaknesses = [];
        // Begin the forbidden O(n^3) loop
        for (var _i = 0, _a = this.favTeam; _i < _a.length; _i++) {
            var pkmn = _a[_i];
            myWeaknesses = new Array();
            // get pkmn's types
            type1ID = this.types.name.indexOf(pkmn.types[0]);
            type2ID = this.types.name.indexOf(pkmn.types[1]);
            // if type2 is not defined, set it to none
            if (type2ID < 0) {
                type2ID = 15;
            }
            // Find attacks that are super-effective against my type
            for (var i = 0; i < this.types.chart.length; i++) {
                // Test
                console.log(this.types.name[i] + ' vs ' + this.types.name[type1ID] + ' ' + this.types.name[type2ID]
                    + ' = ' + this.types.chart[i][type1ID] * this.types.chart[i][type2ID]);
                // chart[A][D], A=attack type, D=defending type -- if the multiplier is higher than 1, the move is super effective
                if (this.types.chart[i][type1ID] * this.types.chart[i][type2ID] > 1) {
                    // add the super effective move ID to myWeaknesses
                    myWeaknesses.push(i);
                }
            }
            this.weaknesses.push(myWeaknesses);
            // now that we have pkmn's weaknesses -- check if any teammates resists all (or some) of those weaknesses
            for (var _b = 0, _c = this.favTeam; _b < _c.length; _b++) {
                var teammate = _c[_b];
                // get teammate's types
                type1ID = this.types.name.indexOf(teammate.types[0]);
                type2ID = this.types.name.indexOf(teammate.types[1]);
                myResist = 0;
                // Check to see if a teammate resists every weakness of pkmn, or up to numResist
                for (var _d = 0, myWeaknesses_1 = myWeaknesses; _d < myWeaknesses_1.length; _d++) {
                    var weakness = myWeaknesses_1[_d];
                    // if the multiplier is < 1, then this teammate resists pkmn's weakness.
                    if (this.types.chart[weakness][type1ID] * this.types.chart[weakness][type2ID] < 1) {
                        myResist++;
                    }
                }
                partners.push(new Array());
                // if teammate's number of resistances is less than the user specified threshold in the param,
                // or teammate resists every weakness of pkmn, then teammate is a partner
                if (myResist >= numResist || myResist === myWeaknesses.length) {
                    // hacky way of getting the index of my team rather than using an index variable
                    // in my for loop because I don't plan ahead
                    partners[this.favTeam.indexOf(pkmn)].push(teammate.name);
                }
            }
        }
        this.partners = partners;
    };
    CoreCoverageComponent.prototype.ngOnInit = function () {
        this.checkCoreCoverage(this.threshold);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CoreCoverageComponent.prototype, "threshold", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CoreCoverageComponent.prototype, "thresholdChange", void 0);
    CoreCoverageComponent = __decorate([
        core_1.Component({
            selector: 'app-corecoverage',
            template: __webpack_require__("./src/app/corecoverage/corecoverage.component.html"),
            styles: [__webpack_require__("./src/app/corecoverage/corecoverage.component.css")],
            providers: [pokemon_service_1.PokemonService, team_service_1.TeamService, type_service_1.TypeService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object, typeof (_b = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" && _b || Object])
    ], CoreCoverageComponent);
    return CoreCoverageComponent;
    var _a, _b;
}());
exports.CoreCoverageComponent = CoreCoverageComponent;
//# sourceMappingURL=corecoverage.component.js.map

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n}\r\n.card {\r\n  margin-bottom: 0px;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n/* Squeeze more space out of our tables */\r\n.card-header {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.card-content {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\ntable {\r\n  font-size: 14px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n}\r\n.pls-land {\r\n  vertical-align: bottom;\r\n}\r\n/* Highlights */\r\n.bg-red {\r\n  background-color: rgb(245, 70, 60);\r\n}\r\n.bg-red:hover {\r\n  background-color: rgb(255, 90, 70);\r\n}\r\n.bg-pink {\r\n  background-color: rgb(240, 100, 90);\r\n}\r\n.bg-pink:hover {\r\n  background-color: rgb(240, 120, 110);\r\n}\r\n.bg-lime {\r\n  background-color: rgb(140, 210, 140);\r\n}\r\n.bg-lime:hover {\r\n  background-color: rgb(150, 220, 150);\r\n}\r\n.bg-green {\r\n  background-color: rgb(90, 190, 90);\r\n}\r\n.bg-green:hover {\r\n  background-color: rgb(110, 200, 110);\r\n}\r\n/* Readability */\r\nthead {\r\n  color: #333333;\r\n}\r\ntd {\r\n  color: #000000;\r\n  font-weight: bold;\r\n}\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n.ta-center {\r\n  text-align: center;\r\n}\r\na i {\r\n  display: inline;\r\n}\r\n.nav-link {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.nav {\r\n  margin: 0px\r\n}"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Defensive Coverage shows what resistances your team needs</h4>\r\n            <p class=\"category\">As well as the resistances your team has plenty of.</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center pls-land\">\r\n                      <img src=\"{{ types.none }}\" class=\"type\">\r\n                      <br/> Type\r\n                      <br/>\r\n                    </th>\r\n                    <th class=\"ta-center\" *ngFor=\"let pkmn of pokemonCol; let i = index\">\r\n                      <img src=\"{{ pkmn.sprite }}\" class=\"sprite\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\r\n                      <br/>{{ pkmn.name | titlecase }}\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <!-- translation: foreach (Pokemon in favTeam.sort(sortBy, ascending)) } -->\r\n                  <tr *ngFor=\"let type of types.img; let i = index\" class=\"{{ rowColor[i] }}\">\r\n                    <td class=\"ta-center\">\r\n                      <img src=\"{{ type }}\" class=\"type\">\r\n                    </td>\r\n                    <td *ngFor=\"let effective of myTable\" class=\"ta-center\">\r\n                      {{ effective[i] | percent }}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var DefensiveCoverageComponent = (function () {
    function DefensiveCoverageComponent(teamService) {
        this.teamService = teamService;
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Assign my favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        // Assign my favTeam using localStorage TODO: or from session if one exists
        this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
        // if null, get an empty team
        if (!this.favTeam) {
            this.favTeam = new Array();
        }
        this.curTeam = new Array();
        this.curTeam = Object.assign([], this.favTeam);
        this.pokemonCol = new Array();
        // Show sprite, name, and types in table header
        for (var i = 0; i < this.curTeam.length; i++) {
            this.pokemonCol[i] = this.curTeam[i];
        }
        this.rowColor = new Array();
    }
    /**
     * Makes a table that shows what types each pokemon on your team
     * is weak or resistant to and by how much
     */
    DefensiveCoverageComponent.prototype.createTable = function () {
        this.myTable = new Array();
        var effective;
        var defType1;
        var defType2;
        var numPkmn = this.favTeam.length;
        var numTypes = this.types.chart.length;
        var row = new Array();
        // for each pokemon on your team
        for (var i = 0; i < numPkmn; i++) {
            // for each attack type in the game
            for (var atkType = 0; atkType < numTypes - 1; atkType++) {
                // get the types of that pokemon
                defType1 = this.types.name.indexOf(this.favTeam[i].types[0]);
                defType2 = this.types.name.indexOf(this.favTeam[i].types[1]);
                // if type2 is not defined, set it to none
                if (defType2 < 0) {
                    defType2 = 15;
                }
                // and see how effective every attack type is against your pokemon
                effective = this.types.chart[atkType][defType1];
                effective *= this.types.chart[atkType][defType2];
                // then update our table
                row.push(effective);
            }
            this.myTable.push(row);
            row = new Array();
        }
        var sum;
        for (var y = 0; y < numTypes; y++) {
            sum = 0;
            for (var x = 0; x < numPkmn; x++) {
                if (this.myTable[x][y] === 1.0) {
                    sum += 1;
                }
                else if (this.myTable[x][y] > 1.0) {
                    sum += 1.5;
                }
                else if (this.myTable[x][y] < 1.0) {
                    sum += 0.5;
                }
            }
            if (sum === 0) {
            }
            else if (sum > 6.5) {
                this.rowColor[y] = 'bg-red';
            }
            else if (sum > 6) {
                this.rowColor[y] = 'bg-pink';
            }
            else if (sum < 5.5) {
                this.rowColor[y] = 'bg-green';
            }
            else if (sum < 6) {
                this.rowColor[y] = 'bg-lime';
            }
        }
    };
    DefensiveCoverageComponent.prototype.ngOnInit = function () {
        this.createTable();
    };
    DefensiveCoverageComponent = __decorate([
        core_1.Component({
            selector: 'app-defensivecoverage',
            template: __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.html"),
            styles: [__webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" && _a || Object])
    ], DefensiveCoverageComponent);
    return DefensiveCoverageComponent;
    var _a;
}());
exports.DefensiveCoverageComponent = DefensiveCoverageComponent;
//# sourceMappingURL=defensivecoverage.component.js.map

/***/ }),

/***/ "./src/app/featured/featured.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n  \r\n      <div class=\"card card-plain\">\r\n        <div class=\"card-header\" data-background-color=\"red\">\r\n          <h4 class=\"title\">Featured Teams by our ace trainers</h4>\r\n          <p class=\"category\">Ace trainers are carefully chosen by our experts to ensure the highest quality teams</p>\r\n        </div>\r\n  \r\n        <div class=\"card-content\">\r\n          <div class=\"row\" *ngFor=\"let featTeam of featTeamArray\">\r\n            <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of featTeam; let i = index\">\r\n  \r\n              <div class=\"card\" [style.background-color]=\"(selected === i) ? 'rgb(255, 200, 200)' : 'rgb(255, 255, 255)'\">\r\n                <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectTeamPokemon(i, pkmn)\">\r\n                  <img [src]=\"favTeam[i].sprite\" alt=\"\" />\r\n                </div>\r\n      \r\n                <div class=\"card-content ta-center\" (click)=\"selectTeamPokemon(i, pkmn)\" role=\"button\">\r\n                  <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[0])]\" class=\"type\" />\r\n                  <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[1])]\" class=\"type\" />\r\n                  <h4 class=\"title\">\r\n                    {{ favTeam[i].name | titlecase}}\r\n                  </h4>\r\n                </div>\r\n      \r\n                <div class=\"card-footer ta-center\">\r\n                  <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\r\n                    {{ collapse }}\r\n                  </i>\r\n                  <div class=\"stats\" *ngIf=\"expandOrCollapse\">\r\n                    <ul>\r\n                      <li *ngFor=\"let atk of favTeam[i].moveset\">\r\n                        {{ atk }}\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  \r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"card-footer\">\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var feature_service_1 = __webpack_require__("./src/app/services/feature.service.ts");
var FeaturedComponent = (function () {
    function FeaturedComponent(featureService) {
        this.featureService = featureService;
    }
    FeaturedComponent.prototype.selectTeamPokemon = function (pkmn) {
        // TODO: Save this pokemon to your box
    };
    FeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.featureService.getFeaturedTeams().subscribe(function (response) {
            _this.featTeamArray = response;
            console.log(_this.featTeamArray.toString());
            // if the Array is not empty, we should turn the sets inside into pokemon
            if (_this.featTeamArray) {
                // do something
            }
        }, function (error) {
            console.error(error);
        });
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'app-featured',
            template: __webpack_require__("./src/app/featured/featured.component.html"),
            styles: [__webpack_require__("./src/app/featured/featured.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof feature_service_1.FeatureService !== "undefined" && feature_service_1.FeatureService) === "function" && _a || Object])
    ], FeaturedComponent);
    return FeaturedComponent;
    var _a;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=featured.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-bottom: 1px solid #42A948; /* green */\r\n}\r\n  \r\n.ng-invalid:not(form)  {\r\n  border-bottom: 1px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-4\">\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Login</h4>\r\n            <p class=\"category\">To access your saved pokemon and teams</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!loginForm.form.valid\">Login</button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted && valid === undefined\">\r\n              <div class=\"h3\">\r\n                Just a moment...\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"submitted && valid === true\">\r\n              <div class=\"h3\">\r\n                You have successfully Logged In!\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"submitted && valid === false\">\r\n              <div class=\"h3\">\r\n                Invalid login credentials\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loginService.login(this.username, this.password).subscribe(function (result) {
            var trainer = result[0];
            var sets = result[1];
            var teams = result[2];
            alert(JSON.stringify(trainer));
            _this.valid = trainer !== null;
            if (trainer !== null) {
                _this.loginService.changeTrainer(trainer);
                localStorage.setItem('trainer', JSON.stringify(trainer));
                localStorage.setItem('sets', JSON.stringify(sets));
                localStorage.setItem('teams', JSON.stringify(teams));
                _this.router.navigate(['/teambuilder']);
            }
        }, function (error) {
            console.error(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/move.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Move = (function () {
    function Move() {
        this.id = null;
        this.name = null;
        this.accuracy = null;
        this.effect = null;
        this.effectChance = null;
        this.pp = null;
        this.power = null;
        this.damageClass = null;
        this.type = null;
    }
    ;
    return Move;
}());
exports.Move = Move;
//# sourceMappingURL=move.js.map

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" data-background-color=\"red\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-primary\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var OffenseVsDefenseComponent = (function () {
    function OffenseVsDefenseComponent() {
    }
    OffenseVsDefenseComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'offensevsdefense',
            message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    OffenseVsDefenseComponent.prototype.ngOnInit = function () {
    };
    OffenseVsDefenseComponent = __decorate([
        core_1.Component({
            selector: 'app-offensevsdefense',
            template: __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.html"),
            styles: [__webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffenseVsDefenseComponent);
    return OffenseVsDefenseComponent;
}());
exports.OffenseVsDefenseComponent = OffenseVsDefenseComponent;
//# sourceMappingURL=offensevsdefense.component.js.map

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.ta-center {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" data-background-color=\"red\">\r\n        <h4 class=\"title\">Missing type coverage</h4>\r\n        <p class=\"category\">Your team <strong>lacks</strong> super-effective attacks against these Type combinations</p>\r\n      </div>\r\n\r\n      <div class=\"card-content row\">\r\n        <div *ngFor=\"let type of uncoveredTypes\" class=\"col-xs-2 col-xl-2\">\r\n          <div>\r\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"ta-center\" *ngIf=\"uncoveredTypes.length === 0\">\r\n          <h3>Congratulations! You have full type coverage!</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-content\"></div>\r\n    </div>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-header\" data-background-color=\"red\">\r\n        <h4 class=\"title\">Types covered</h4>\r\n        <p class=\"category\">Your team has super-effective attacks against these Type combinations!</p>\r\n      </div>\r\n\r\n      <div class=\"card-content row\">\r\n        <div *ngFor=\"let type of coveredTypes\" class=\"col-xs-2 col-xl-2\">\r\n          <div>\r\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var OffensiveCoverageComponent = (function () {
    function OffensiveCoverageComponent(pokemonService, moveService, teamService, types) {
        // Assign my favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        this.teamService = teamService;
        this.types = types;
        // Assign my favTeam using localStorage TODO: or from session if one exists
        this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
        // if null, get an empty team
        if (!this.favTeam) {
            this.favTeam = new Array();
        }
        // Initialize
        this.teamMoveTypes = new Array();
        this.uniqueTypes = new Array();
        this.coveredTypes = new Array();
        this.uncoveredTypes = new Array();
    }
    // Among all 151 pokemon, get only the unique type combinations
    OffensiveCoverageComponent.prototype.getUniqueTypes = function () {
        var result = new Array();
        // initialize array with at least one value to check
        result.push(this.pokedex[0].types);
        // for every pokemon in the pokedex
        loop1: for (var _i = 0, _a = this.pokedex; _i < _a.length; _i++) {
            var pkmn = _a[_i];
            // for every unique type discovered so far
            for (var _b = 0, result_1 = result; _b < result_1.length; _b++) {
                var type = result_1[_b];
                // if a pokemon's type1 and type2 has been discovered
                if ((pkmn.types[0] === type[0] && pkmn.types[1] === type[1]) ||
                    (pkmn.types[0] === type[1] && pkmn.types[1] === type[0])) {
                    continue loop1; // check the next pokemon
                }
            } // add unique type to result
            result.push([pkmn.types[0], pkmn.types[1]]);
        }
        this.uniqueTypes = result;
    };
    /**
     * Deprecated
     * Load 151 Pokemon into this.pokedex
     */
    OffensiveCoverageComponent.prototype.getPokeAPIjson = function () {
        var _this = this;
        this.pokemonService.getJson().subscribe(function (data) {
            _this.pokedex = data;
        }, function (error) {
            console.error(error);
        });
    };
    /**
     * Deprecated
     * Reads json file created by pokeAPI, and edited by Howard by hand <--wtf
     * because the data was for gen7 and we needed gen1, then fills our movedex with 164 Moves
     */
    OffensiveCoverageComponent.prototype.getMoveAPIjson = function () {
        var _this = this;
        this.moveService.getJson().subscribe(function (data) {
            _this.movedex = data;
        }, function (error) {
            console.error(error);
        });
    };
    // get an array of unique damaging types of attacks on our team
    OffensiveCoverageComponent.prototype.getTeamMoveTypes = function () {
        var detailedMove;
        // for each pokemon on my team
        for (var _i = 0, _a = this.favTeam; _i < _a.length; _i++) {
            var pkmn = _a[_i];
            // for each attack they know
            loop1: for (var i = 0; i < pkmn.attackIds.length; i++) {
                detailedMove = this.movedex[pkmn.attackIds[i] - 1];
                // if that attack deals damage
                if (detailedMove && detailedMove.power > 0) {
                    // always add it to our list of damaging move types if our list is empty
                    if (this.teamMoveTypes.length === 0) {
                        this.teamMoveTypes.push(detailedMove.type);
                    }
                    else {
                        // We don't want duplicates. if one exists, check the next attack
                        for (var _b = 0, _c = this.teamMoveTypes; _b < _c.length; _b++) {
                            var type = _c[_b];
                            if (type === detailedMove.type) {
                                continue loop1;
                            }
                        } // add unique type to our array if there are no dupes
                        this.teamMoveTypes.push(detailedMove.type);
                    }
                }
            }
        }
    };
    OffensiveCoverageComponent.prototype.compareOurMovesVsUniqueTypes = function () {
        var _this = this;
        var effective;
        var atkType;
        var defType1;
        var defType2;
        // for each unique defending type combination
        loop1: for (var _i = 0, _a = this.uniqueTypes; _i < _a.length; _i++) {
            var pairTypes = _a[_i];
            // for each attack type on my team
            for (var _b = 0, _c = this.teamMoveTypes; _b < _c.length; _b++) {
                var moveType = _c[_b];
                // get the types of the defending pokemon
                atkType = this.types.name.indexOf(moveType);
                defType1 = this.types.name.indexOf(pairTypes[0]);
                defType2 = this.types.name.indexOf(pairTypes[1]);
                // if defType2 is undefined, set it to "none = 15"
                defType2 = (defType2 < 0) ? 15 : defType2;
                // and see how effective my attack type is against every other pokemon
                effective = this.types.chart[atkType][defType1];
                effective *= this.types.chart[atkType][defType2];
                // if our attack is super effective
                if (effective > 1) {
                    console.log(moveType + ' vs ' + this.types.name[defType1] + ' ' + this.types.name[defType2]
                        + ' = ' + effective);
                    // add it to our list of covered types
                    this.coveredTypes.push(pairTypes);
                    // then check a new type combination
                    continue loop1;
                }
            }
        }
        // uncovered types is what remains of unique types excluding covered types
        this.uncoveredTypes = this.uniqueTypes.filter(function (types) { return !_this.coveredTypes.includes(types); });
    };
    OffensiveCoverageComponent.prototype.ngOnInit = function () {
        // this.getPokeAPIjson();
        // this.getMoveAPIjson();
        var _this = this;
        // the above methods are being replaced by the below method which calls both Observables
        // in parallel and waits for them to finish -- or apparently not
        // Observable.zip(
        //   this.pokemonService.getJson(),
        //   this.moveService.getJson()
        // ).subscribe(myTuple => {
        //   this.pokedex = myTuple[0];
        //   this.movedex = myTuple[1];
        Rx_1.Observable.forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
            // calling these functions here because this is the only location where
            // we can guarantee our pokedex and movedex have been fully loaded
            _this.getUniqueTypes();
            _this.getTeamMoveTypes();
            _this.compareOurMovesVsUniqueTypes();
        });
    };
    OffensiveCoverageComponent = __decorate([
        core_1.Component({
            selector: 'app-offensivecoverage',
            template: __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.html"),
            styles: [__webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.css")],
            providers: [move_service_1.MoveService, pokemon_service_1.PokemonService, team_service_1.TeamService, type_service_1.TypeService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object, typeof (_b = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" && _b || Object, typeof (_c = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" && _c || Object, typeof (_d = typeof type_service_1.TypeService !== "undefined" && type_service_1.TypeService) === "function" && _d || Object])
    ], OffensiveCoverageComponent);
    return OffensiveCoverageComponent;
    var _a, _b, _c, _d;
}());
exports.OffensiveCoverageComponent = OffensiveCoverageComponent;
//# sourceMappingURL=offensivecoverage.component.js.map

/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Filter = (function () {
    function Filter() {
    }
    Filter.prototype.transform = function (pkmnList, searchText) {
        if (!pkmnList) {
            return [];
        }
        if (!searchText) {
            return pkmnList;
        }
        searchText = searchText.toLowerCase();
        var newList = new Array();
        pkmnList.forEach(function (pkmn) {
            if (pkmn.name.toLowerCase().includes(searchText)) {
                newList.push(pkmn);
            }
        });
        return newList;
    };
    Filter = __decorate([
        core_1.Pipe({
            name: 'pkmnFilter'
        })
    ], Filter);
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/sort.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Sort = (function () {
    function Sort() {
    }
    Sort.prototype.transform = function (pkmnList, sortBy, ascending) {
        if (!pkmnList) {
            return [];
        }
        if (!sortBy) {
            return pkmnList;
        }
        var sortedArray;
        if (sortBy === 'name') {
            sortedArray = pkmnList.sort(function (p1, p2) {
                if (p1.name > p2.name) {
                    return 1;
                }
                else if (p1.name < p2.name) {
                    return -1;
                }
                return 0;
            });
        }
        else if (sortBy === 'type') {
            sortedArray = pkmnList.sort(function (p1, p2) {
                if (p1.types[0] > p2.types[0]) {
                    return 1;
                }
                else if (p1.types[0] < p2.types[0]) {
                    return -1;
                }
                else {
                    if (p1.types[1] > p2.types[1]) {
                        return 1;
                    }
                    else if (p1.types[1] < p2.types[1]) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        }
        else if (sortBy.includes('move')) {
            var lastChar = sortBy.substr(sortBy.length - 1, 1);
            var i_1 = Number.parseInt(lastChar) - 1;
            sortedArray = pkmnList.sort(function (p1, p2) {
                if (p1.moveset[i_1] > p2.moveset[i_1]) {
                    return 1;
                }
                else if (p1.moveset[i_1] < p2.moveset[i_1]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            if (sortBy === 'hp') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.hp - p2.stats.hp; });
            }
            else if (sortBy === 'atk') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.atk - p2.stats.atk; });
            }
            else if (sortBy === 'def') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.def - p2.stats.def; });
            }
            else if (sortBy === 'satk') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.satk - p2.stats.satk; });
            }
            else if (sortBy === 'sdef') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.sdef - p2.stats.sdef; });
            }
            else if (sortBy === 'spe') {
                sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats.spe - p2.stats.spe; });
            }
        }
        if (ascending) {
            return sortedArray;
        }
        else {
            return sortedArray.reverse();
        }
    };
    Sort = __decorate([
        core_1.Pipe({
            name: 'pkmnSort'
        })
    ], Sort);
    return Sort;
}());
exports.Sort = Sort;
//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "./src/app/pokemon.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Used before I had db access
var Pokemon = (function () {
    // A missingno for our placeholder!
    function Pokemon() {
        this.id = 0;
        this.setId = 0;
        this.trainerId = 1;
        this.attackIds = [null, null, null, null];
        this.name = 'missingno';
        this.sprite = 'assets/img/question.png';
        this.moveset = [null, null, null, null];
        this.moves = [];
        this.stats = { hp: 33, atk: 136, def: 0, satk: 6, sdef: 6, spe: 29 };
        this.types = ['normal'];
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
// Used to read pokeAPIjson
var PokeAPI = (function () {
    function PokeAPI() {
        this.id = 0;
        this.setId = 0;
        this.trainerId = 1;
        this.attackIds = [null, null, null, null];
        this.name = 'missingno';
        this.sprite = 'assets/img/question.png';
        this.moveset = [null, null, null, null];
        this.moves = [];
        this.stats = { hp: 33, atk: 136, def: 0, satk: 6, sdef: 6, spe: 29 };
        this.types = ['normal'];
    }
    return PokeAPI;
}());
exports.PokeAPI = PokeAPI;
//# sourceMappingURL=pokemon.js.map

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n}\r\n.card {\r\n  height: 500px;\r\n  margin-bottom: 0px;\r\n}\r\n.table-responsive {\r\n  max-height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n/* Squeeze more space out of our tables */\r\n.card-header {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.card-content {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n  min-height: 80px;\r\n  position: relative;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  margin-left: 10px;\r\n  margin-right: 0px;\r\n  margin-bottom: 0px;\r\n}\r\ntable {\r\n  font-size: 12px;\r\n}\r\nth {\r\n  height: 39px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n}\r\n/* Readability */\r\nthead {\r\n  color: #333333;\r\n}\r\n.material-icons.md-18 { font-size: 18px; }\r\n.ta-center { text-align: center; }\r\n.ta-right { text-align: right; }\r\na i {\r\n  display: inline;\r\n}\r\n.nav-link {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.nav {\r\n  margin: 0px\r\n}"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <!--\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills ta-center\">\r\n              <li>\r\n                <a role=\"button\" (click)=\"newTeam()\">\r\n                  <i class=\"material-icons\">create_new_folder</i> New Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"saveTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">save</i> Save Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"setFavoriteTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">{{ favoriteIcon }}</i> Favorite\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          -->\r\n\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-7 col-xl-7\">\r\n                <h4>My Team</h4>\r\n                <!-- <input [(ngModel)]=\"newTeamName\" name=\"newTeamName\" type=\"text\" class=\"form-control\" placeholder=\"Team Name\" [(value)]=\"Untitled\">\r\n                <span class=\"material-input\"></span> -->\r\n              </div>\r\n              <div class=\"col-sm-4 col-xl-4 ta-right\">\r\n                <button class=\"btn btn-primary btn-sm save-button\" (click)=\"saveTeam()\">\r\n                  <i class=\"material-icons\">save</i>\r\n                  Save Team\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"favTeam\">\r\n                  <tr *ngFor=\"let pkmn of favTeam; let i = index\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"updateTeam(pkmn, i)\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\r\n                    <td class=\"ta-center type-col\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <!--\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills\">\r\n              <li class=\"active\">\r\n                <a data-toggle=\"pill\" href=\"#pokeBox\">\r\n                  <i class=\"material-icons\">line_weight</i> Pokemon\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a data-toggle=\"pill\" href=\"#teamBox\">\r\n                  <i class=\"material-icons\">view_module</i> Teams\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          -->\r\n          <div class=\"card-content\">\r\n            <form class=\"row form-group label-floating is-empty poke-search\" role=\"search\">\r\n              <div class=\"col-sm-11 col-xl-11\">\r\n                <label class=\"control-label\" for=\"searchBox\">Search Box</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"searchBox\" name=\"searchBox\" [(ngModel)]=\"searchBox\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer tab-content\">\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade in active\" id=\"pokeBox\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"myBox\">\r\n                  <!-- translation: foreach (Pokemon in myBox.sort(sortBy, ascending)) { filterBy(searchBox) } -->\r\n                  <tr *ngFor=\"let boxpkmn of ((myBox | pkmnSort: sortBy:ascending) | pkmnFilter: searchBox); let i = index\" dnd-sortable [sortableIndex]=\"i\"\r\n                    (onDropSuccess)=\"updateBox(boxpkmn, i)\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(boxpkmn)\" role=\"button\">{{ boxpkmn.name | titlecase }}</td>\r\n                    <td class=\"ta-center type-col\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[0])] }}\" class=\"type\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[1])] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of boxpkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade\" id=\"teamBox\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var convert_service_1 = __webpack_require__("./src/app/services/convert.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var PokemonBoxComponent = (function () {
    function PokemonBoxComponent(teamService, convertService, loginService) {
        this.teamService = teamService;
        this.convertService = convertService;
        this.loginService = loginService;
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Assign my favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        // Assign my favTeam using localStorage or from session if one exists
        this.loadTeam();
        // Load Box
        this.loadBox();
        // Unimplemented
        this.myTeams = new Array();
        this.pkmnBoxColNames = ['name', 'type', 'move 1', 'move 2', 'move 3', 'move 4'];
        this.colSortIcons = [
            'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
        ];
        this.sortBy = 'name';
        this.ascending = true;
    }
    /**
     * Switches all other column icons to swap_vert, then toggles the clicked icon,
     * then changes the sorting strategy
     * @param i the column index to sort
     */
    PokemonBoxComponent.prototype.toggleSort = function (i) {
        if (this.colSortIcons[i] === 'swap_vert') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_down';
            this.ascending = false;
        }
        else if (this.colSortIcons[i] === 'arrow_drop_down') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_up';
            this.ascending = true;
        }
        else if (this.colSortIcons[i] === 'arrow_drop_up') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_down';
            this.ascending = false;
        }
        this.sortBy = this.pkmnBoxColNames[i];
    };
    PokemonBoxComponent.prototype.newTeam = function () {
        this.favTeam = new Array();
    };
    PokemonBoxComponent.prototype.loadTeam = function () {
        var myTeams;
        var myTrainer;
        myTrainer = JSON.parse(sessionStorage.getItem('trainer'));
        // if user is logged in
        if (myTrainer) {
            // Get my team
            myTeams = JSON.parse(sessionStorage.getItem('teams'));
            // Convert our team into a format our back-end can receive
            if (myTeams[0]) {
                this.favTeam = this.convertService.teamToPokeTeam(myTeams[0], myTrainer.id);
            }
        }
        else {
            // if no one is logged in
            this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
            // if null, get an empty team
            if (!this.favTeam) {
                this.favTeam = new Array();
            }
        }
    };
    PokemonBoxComponent.prototype.loadBox = function () {
        var mySets;
        var myTrainer;
        this.myBox = new Array();
        myTrainer = JSON.parse(sessionStorage.getItem('trainer'));
        // if user is logged in
        if (myTrainer) {
            // Get my team
            mySets = JSON.parse(sessionStorage.getItem('sets'));
            // Convert our team into a format our back-end can receive
            if (mySets) {
                for (var _i = 0, mySets_1 = mySets; _i < mySets_1.length; _i++) {
                    var set = mySets_1[_i];
                    this.myBox.push(this.convertService.setToPokeapi(set, myTrainer.id));
                }
            }
        }
        else {
            mySets = JSON.parse(sessionStorage.getItem('sets'));
            // this.myBox.push(this.teamService.pkmn1); // give myself some pokemon
            // this.myBox.push(this.teamService.pkmn2);
            // this.myBox.push(this.teamService.pkmn3);
            // this.myBox.push(this.teamService.pkmn4);
            // this.myBox.push(this.teamService.pkmn5);
            // this.myBox.push(this.teamService.pkmn6);
        }
    };
    /**
     * Adds the curTeam to myTeams and sets the team name to newTeamName
     * @param newTeamName saves as 'Untitled' if newTeamName is empty
     */
    PokemonBoxComponent.prototype.saveTeam = function (newTeamName) {
        // if our team isn't over the legal limit
        if (this.favTeam.length <= 6) {
            var oldTeam = void 0;
            var myTeam = [];
            var myTrainer = void 0;
            myTrainer = JSON.parse(sessionStorage.getItem('trainer'));
            // User must be logged in to save team
            if (myTrainer) {
                // We need the old team ID of the ONLY (SINGULAR) team we are saving
                oldTeam = JSON.parse(sessionStorage.getItem('teams'));
                // Convert our team into a format our back-end can receive
                myTeam[0] = this.convertService.pokeTeamToSetTeam(this.favTeam, newTeamName, oldTeam[0].teamId);
                // Save our team to localstorage
                this.loginService.changeTeam(myTeam);
                // TODO: MAKE PUT REQUEST HERE USING SOME SERVICE
            }
            // Put our favTeam in local storage so even an unregistered user can use our service
            localStorage.setItem('favTeam', JSON.stringify(this.favTeam));
            localStorage.setItem('myPkmnBox', JSON.stringify(this.myBox));
            // Add the team to my currently unused array of teams
            this.myTeams.push(this.favTeam);
            return true;
        }
        this.showNotification('The maximum team size is 6 Pokemon');
        return false;
    };
    /**
     * Unimplemented
     * Assigns the curTeam as favTeam and sets favTeam's name to newTeamName
     * @param newTeamName saves as 'Untitled' if newTeamName is empty
     */
    PokemonBoxComponent.prototype.setFavoriteTeam = function (newTeamName) {
        this.favTeam = this.favTeam;
        this.favoriteIcon = 'star';
        if (newTeamName.length < 1) {
            newTeamName = 'Untitled';
        }
        // set favTeam.name = newTeamName;
    };
    PokemonBoxComponent.prototype.showNotification = function (myMessage) {
        // const type = ['', 'info', 'success', 'warning', 'danger'];
        // const color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notification',
            message: myMessage
        }, {
            type: 'warning',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    };
    /**
     * When we drag and drop we should update our team
     */
    PokemonBoxComponent.prototype.updateTeam = function (pkmn, i) {
        console.log('drop team ' + pkmn.name + ' at index ' + i);
        // inserts pkmn at index i, deleting 0 elements
        // this.favTeam.splice(i, 0, pkmn);
        // removes pkmn from box
        // this.myBox.splice(this.myBox.indexOf(pkmn), 1);
    };
    /**
     * When we drag and drop we should update our box
     */
    PokemonBoxComponent.prototype.updateBox = function (pkmn, i) {
        console.log('drop box ' + pkmn.name + ' at index ' + i);
        // inserts pkmn at index i, deleting 0 elements
        // this.myBox.splice(i, 0, pkmn);
        // removes pkmn from box
        // this.favTeam.splice(this.favTeam.indexOf(pkmn), 1);
    };
    // Only works if favorite feature gets implemented
    PokemonBoxComponent.prototype.ngOnInit = function () {
        if (this.favTeam === this.favTeam) {
            this.favoriteIcon = 'star';
        }
        else {
            this.favoriteIcon = 'star_border';
        }
    };
    PokemonBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-pokemonbox',
            template: __webpack_require__("./src/app/pokemonbox/pokemonbox.component.html"),
            styles: [__webpack_require__("./src/app/pokemonbox/pokemonbox.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" && _a || Object, typeof (_b = typeof convert_service_1.ConvertService !== "undefined" && convert_service_1.ConvertService) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object])
    ], PokemonBoxComponent);
    return PokemonBoxComponent;
    var _a, _b, _c;
}());
exports.PokemonBoxComponent = PokemonBoxComponent;
//# sourceMappingURL=pokemonbox.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-bottom: 1px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-bottom: 1px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Register</h4>\r\n            <p class=\"category\">To start saving your teams and Pokemon</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\r\n                        [(ngModel)]=\"username\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"email\">Email address</label>\r\n                      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"cpassword\">Confirm Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"cpassword\" name=\"cpassword\"\r\n                      [(ngModel)]=\"cpassword\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!registerForm.form.valid\" \r\n                  [disabled]=\"!passwordMatch\">\r\n                  Register\r\n                </button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted\">\r\n              <div *ngIf=\"valid\">\r\n                <div class=\"h3\">\r\n                  You have successfully registered!\r\n                </div>\r\n                <div class=\"h4\">\r\n                  No email confirmation necessary\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!valid\">\r\n                <div class=\"h3\">\r\n                    Registration Failed\r\n                  </div>\r\n                  <div class=\"h4\">\r\n                    Username is already in use\r\n                  </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <a href=\"#bill\">\r\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"content\">\r\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\r\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\r\n            <p class=\"card-content\">\r\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\r\n              analytics and statistics are provided by our leading Professors.\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.submitted = false;
        this.passwordMatch = false;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.registerService.register(this.username, this.password, this.email).subscribe(function (successful) { _this.valid = successful; }, function (error) { return console.error(error); });
    };
    RegisterComponent.prototype.matchPassword = function () {
        if (this.password === this.cpassword) {
            this.passwordMatch = true;
        }
        else {
            this.passwordMatch = false;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _a || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/services/convert.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var set_1 = __webpack_require__("./src/app/set.ts");
var pokemon_1 = __webpack_require__("./src/app/pokemon.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var team_1 = __webpack_require__("./src/app/team.ts");
var ConvertService = (function () {
    function ConvertService(pokemonService, moveService) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        Rx_1.Observable.forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
        });
    }
    ConvertService.prototype.pokeapiToSet = function (pkmn) {
        var result = new set_1.Set();
        result.setId = 1;
        result.pokemonId = pkmn.id;
        result.nickname = pkmn.name;
        result.atk1 = pkmn.attackIds[0];
        result.atk2 = pkmn.attackIds[1];
        result.atk3 = pkmn.attackIds[2];
        result.atk4 = pkmn.attackIds[3];
        return result;
    };
    /**
     * For some reason, my back end team didn't want to send me an array of Sets,
     * so I can't write a loop
     * @param pkmnArray The team to send to back-end
     * @param teamName The optional team name
     * @param teamID The original team ID if one exists
     */
    ConvertService.prototype.pokeTeamToSetTeam = function (pkmnArray, teamName, teamID) {
        var result;
        var myTeam = new team_1.Team();
        var resultArray = [];
        if (teamID) {
            myTeam.teamId = teamID;
        }
        else {
            myTeam.teamId = -1;
        }
        if (teamName) {
            myTeam.teamName = teamName;
        }
        else {
            myTeam.teamName = 'Untitled';
        }
        result = new set_1.Set();
        result.setId = pkmnArray[0].setId;
        result.pokemonId = pkmnArray[0].id;
        result.nickname = pkmnArray[0].name;
        result.atk1 = pkmnArray[0].attackIds[0];
        result.atk2 = pkmnArray[0].attackIds[1];
        result.atk3 = pkmnArray[0].attackIds[2];
        result.atk4 = pkmnArray[0].attackIds[3];
        myTeam.set1 = result;
        result = new set_1.Set();
        result.setId = pkmnArray[1].setId;
        result.pokemonId = pkmnArray[1].id;
        result.nickname = pkmnArray[1].name;
        result.atk1 = pkmnArray[1].attackIds[0];
        result.atk2 = pkmnArray[1].attackIds[1];
        result.atk3 = pkmnArray[1].attackIds[2];
        result.atk4 = pkmnArray[1].attackIds[3];
        myTeam.set2 = result;
        result = new set_1.Set();
        result.setId = pkmnArray[2].setId;
        result.pokemonId = pkmnArray[2].id;
        result.nickname = pkmnArray[2].name;
        result.atk1 = pkmnArray[2].attackIds[0];
        result.atk2 = pkmnArray[2].attackIds[1];
        result.atk3 = pkmnArray[2].attackIds[2];
        result.atk4 = pkmnArray[2].attackIds[3];
        myTeam.set3 = result;
        result = new set_1.Set();
        result.setId = pkmnArray[3].setId;
        result.pokemonId = pkmnArray[3].id;
        result.nickname = pkmnArray[3].name;
        result.atk1 = pkmnArray[3].attackIds[0];
        result.atk2 = pkmnArray[3].attackIds[1];
        result.atk3 = pkmnArray[3].attackIds[2];
        result.atk4 = pkmnArray[3].attackIds[3];
        myTeam.set4 = result;
        result = new set_1.Set();
        result.setId = pkmnArray[4].setId;
        result.pokemonId = pkmnArray[4].id;
        result.nickname = pkmnArray[4].name;
        result.atk1 = pkmnArray[4].attackIds[0];
        result.atk2 = pkmnArray[4].attackIds[1];
        result.atk3 = pkmnArray[4].attackIds[2];
        result.atk4 = pkmnArray[4].attackIds[3];
        myTeam.set5 = result;
        result = new set_1.Set();
        result.setId = pkmnArray[5].setId;
        result.pokemonId = pkmnArray[5].id;
        result.nickname = pkmnArray[5].name;
        result.atk1 = pkmnArray[5].attackIds[0];
        result.atk2 = pkmnArray[5].attackIds[1];
        result.atk3 = pkmnArray[5].attackIds[2];
        result.atk4 = pkmnArray[5].attackIds[3];
        myTeam.set6 = result;
        return myTeam;
    };
    ConvertService.prototype.setToPokeapi = function (set, trainerID) {
        var result = new pokemon_1.PokeAPI();
        var pkmn = this.pokedex[set.pokemonId - 1]; // Minus 1 because we're zero-indexed and the pokedex is not
        result.attackIds = [];
        result.attackIds[0] = set.atk1;
        result.attackIds[1] = set.atk2;
        result.attackIds[2] = set.atk3;
        result.attackIds[3] = set.atk4;
        result.id = set.pokemonId;
        result.moves = pkmn.moves;
        result.moveset = [];
        result.moveset[0] = this.movedex[set.atk1].name;
        result.moveset[1] = this.movedex[set.atk2].name;
        result.moveset[2] = this.movedex[set.atk3].name;
        result.moveset[3] = this.movedex[set.atk4].name;
        result.name = pkmn.name;
        result.sprite = pkmn.sprite;
        result.stats = pkmn.stats;
        result.trainerId = trainerID;
        result.types = pkmn.types;
        return result;
    };
    /**
     * For some reason, my back end team didn't want to send me an array of Sets,
     * so I can't write a loop
     * @param myTeam The team to convert from
     * @param trainerID The owner of the team
     */
    ConvertService.prototype.teamToPokeTeam = function (myTeam, trainerID) {
        var result;
        var resultArray = [];
        // Find my pokemon in the pokedex using (id - 1) because we're zero-indexed and the pokedex is not
        result = Object.assign(this.pokedex[myTeam.set1.pokemonId - 1]);
        // These fields are being provided by the pokedex and do not need to be set
        // result.moves = pkmn.moves;
        // result.name = pkmn.name;
        // result.sprite = pkmn.sprite;
        // result.stats = pkmn.stats;
        // result.types = pkmn.types;
        // Pokemon 1
        result.id = myTeam.set1.pokemonId;
        result.setId = myTeam.set1.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set1.atk1;
        result.attackIds[1] = myTeam.set1.atk2;
        result.attackIds[2] = myTeam.set1.atk3;
        result.attackIds[3] = myTeam.set1.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set1.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set1.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set1.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set1.atk4].name;
        resultArray.push(result);
        // Pokemon 2
        result = Object.assign(this.pokedex[myTeam.set2.pokemonId - 1]);
        result.id = myTeam.set2.pokemonId;
        result.setId = myTeam.set2.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set2.atk1;
        result.attackIds[1] = myTeam.set2.atk2;
        result.attackIds[2] = myTeam.set2.atk3;
        result.attackIds[3] = myTeam.set2.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set2.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set2.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set2.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set2.atk4].name;
        resultArray.push(result);
        // Pokemon 3
        result = Object.assign(this.pokedex[myTeam.set3.pokemonId - 1]);
        result.id = myTeam.set3.pokemonId;
        result.setId = myTeam.set3.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set3.atk1;
        result.attackIds[1] = myTeam.set3.atk2;
        result.attackIds[2] = myTeam.set3.atk3;
        result.attackIds[3] = myTeam.set3.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set3.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set3.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set3.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set3.atk4].name;
        resultArray.push(result);
        // Pokemon 4
        result = Object.assign(this.pokedex[myTeam.set4.pokemonId - 1]);
        result.id = myTeam.set4.pokemonId;
        result.setId = myTeam.set4.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set4.atk1;
        result.attackIds[1] = myTeam.set4.atk2;
        result.attackIds[2] = myTeam.set4.atk3;
        result.attackIds[3] = myTeam.set4.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set4.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set4.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set4.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set4.atk4].name;
        resultArray.push(result);
        // Pokemon 5
        result = Object.assign(this.pokedex[myTeam.set5.pokemonId - 1]);
        result.id = myTeam.set5.pokemonId;
        result.setId = myTeam.set5.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set5.atk1;
        result.attackIds[1] = myTeam.set5.atk2;
        result.attackIds[2] = myTeam.set5.atk3;
        result.attackIds[3] = myTeam.set5.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set5.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set5.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set5.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set5.atk4].name;
        resultArray.push(result);
        // Pokemon 6
        result = Object.assign(this.pokedex[myTeam.set6.pokemonId - 1]);
        result.id = myTeam.set6.pokemonId;
        result.setId = myTeam.set6.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set6.atk1;
        result.attackIds[1] = myTeam.set6.atk2;
        result.attackIds[2] = myTeam.set6.atk3;
        result.attackIds[3] = myTeam.set6.atk4;
        result.moveset = [];
        result.moveset[0] = this.movedex[myTeam.set6.atk1].name;
        result.moveset[1] = this.movedex[myTeam.set6.atk2].name;
        result.moveset[2] = this.movedex[myTeam.set6.atk3].name;
        result.moveset[3] = this.movedex[myTeam.set6.atk4].name;
        resultArray.push(result);
        return resultArray;
    };
    ConvertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object, typeof (_b = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" && _b || Object])
    ], ConvertService);
    return ConvertService;
    var _a, _b;
}());
exports.ConvertService = ConvertService;
//# sourceMappingURL=convert.service.js.map

/***/ }),

/***/ "./src/app/services/feature.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
var FeatureService = (function () {
    function FeatureService(http) {
        this.http = http;
        this.featTeamSource = new BehaviorSubject_1.BehaviorSubject(JSON.parse(localStorage.getItem('featTeams')));
        this.featuredTeams = this.featTeamSource.asObservable();
    }
    FeatureService.prototype.getFeaturedTeams = function () {
        // const body = new HttpParams();
        return this.http.get('featured'); // , body);
    };
    FeatureService.prototype.changeFeaturedTeams = function (featTeams) {
        this.featTeamSource.next(featTeams);
        localStorage.setItem('featTeams', JSON.stringify(featTeams));
    };
    FeatureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], FeatureService);
    return FeatureService;
    var _a;
}());
exports.FeatureService = FeatureService;
//# sourceMappingURL=feature.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.trainerSource = new BehaviorSubject_1.BehaviorSubject(JSON.parse(localStorage.getItem('trainer')));
        this.currentTrainer = this.trainerSource.asObservable();
        this.setSource = new BehaviorSubject_1.BehaviorSubject(JSON.parse(localStorage.getItem('sets')));
        this.currentSet = this.trainerSource.asObservable();
        this.teamSource = new BehaviorSubject_1.BehaviorSubject(JSON.parse(localStorage.getItem('teams')));
        this.currentTeam = this.trainerSource.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var body = new http_1.HttpParams().set('username', username).set('password', password);
        return this.http.post('login', body);
    };
    LoginService.prototype.logout = function () {
        localStorage.clear(); // Seems important yeah?
        return this.http.get('logout');
    };
    LoginService.prototype.changeTrainer = function (trainer) {
        this.trainerSource.next(trainer);
        localStorage.setItem('trainer', JSON.stringify(trainer));
    };
    LoginService.prototype.changeSets = function (sets) {
        this.setSource.next(sets);
        localStorage.setItem('sets', JSON.stringify(sets));
    };
    LoginService.prototype.changeTeam = function (team) {
        this.teamSource.next(team);
        localStorage.setItem('teams', JSON.stringify(team));
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/move.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var MoveService = (function () {
    function MoveService(http) {
        this.http = http;
    }
    MoveService.prototype.getJson = function () {
        return this.http.get('assets/moveAPI.json');
    };
    MoveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], MoveService);
    return MoveService;
    var _a;
}());
exports.MoveService = MoveService;
//# sourceMappingURL=move.service.js.map

/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var PokemonService = (function () {
    function PokemonService(http) {
        this.http = http;
    }
    PokemonService.prototype.getJson = function () {
        return this.http.get('assets/pokeAPI.json');
    };
    PokemonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], PokemonService);
    return PokemonService;
    var _a;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map

/***/ }),

/***/ "./src/app/services/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (username, password, email) {
        var body = new http_1.HttpParams().set('username', username).set('password', password).set('email', email);
        return this.http.post('register', body);
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "./src/app/services/team.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var pokemon_1 = __webpack_require__("./src/app/pokemon.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var TeamService = (function () {
    function TeamService(types) {
        this.types = types;
        this.curTeam = new Array();
        // Making my team
        this.pkmn1 = new pokemon_1.PokeAPI();
        this.pkmn2 = new pokemon_1.PokeAPI();
        this.pkmn3 = new pokemon_1.PokeAPI();
        this.pkmn4 = new pokemon_1.PokeAPI();
        this.pkmn5 = new pokemon_1.PokeAPI();
        this.pkmn6 = new pokemon_1.PokeAPI();
        this.pkmn1.name = 'Jolteon';
        this.pkmn1.trainerId = 1;
        this.pkmn1.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
        this.pkmn1.types = ['electric', 'none'];
        this.pkmn1.attackIds = [85, 42, 24, 86];
        this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
        this.pkmn1.stats = { hp: 65, atk: 65, def: 60, satk: 110, sdef: 110, spe: 130 };
        this.pkmn2.name = 'Exeggutor';
        this.pkmn2.trainerId = 1;
        this.pkmn2.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
        this.pkmn2.types = ['grass', 'psychic'];
        this.pkmn2.attackIds = [79, 115, 94, 153];
        this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
        this.pkmn2.stats = { hp: 95, atk: 95, def: 85, satk: 125, sdef: 125, spe: 55 };
        this.pkmn3.name = 'Moltres';
        this.pkmn3.trainerId = 1;
        this.pkmn3.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
        this.pkmn3.types = ['fire', 'flying'];
        this.pkmn3.attackIds = [97, 83, 126, 63];
        this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
        this.pkmn3.stats = { hp: 90, atk: 100, def: 90, satk: 125, sdef: 125, spe: 90 };
        this.pkmn4.name = 'Slowbro';
        this.pkmn4.trainerId = 1;
        this.pkmn4.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
        this.pkmn4.types = ['water', 'psychic'];
        this.pkmn4.attackIds = [133, 57, 94, 115];
        this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
        this.pkmn4.stats = { hp: 65, atk: 75, def: 110, satk: 80, sdef: 80, spe: 30 };
        this.pkmn5.name = 'Chansey';
        this.pkmn5.trainerId = 1;
        this.pkmn5.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
        this.pkmn5.types = ['normal', 'none'];
        this.pkmn5.attackIds = [85, 58, 68, 135];
        this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Soft-boiled'];
        this.pkmn5.stats = { hp: 250, atk: 5, def: 5, satk: 105, sdef: 105, spe: 50 };
        this.pkmn6.name = 'Gengar';
        this.pkmn6.trainerId = 1;
        this.pkmn6.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
        this.pkmn6.types = ['ghost', 'poison'];
        this.pkmn6.attackIds = [85, 72, 109, 153];
        this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
        this.pkmn6.stats = { hp: 60, atk: 65, def: 60, satk: 130, sdef: 130, spe: 110 };
        this.favTeam = new Array();
        this.favTeam.push(this.pkmn1);
        this.favTeam.push(this.pkmn2);
        this.favTeam.push(this.pkmn3);
        this.favTeam.push(this.pkmn4);
        this.favTeam.push(this.pkmn5);
        this.favTeam.push(this.pkmn6);
    }
    TeamService.prototype.ngOnInit = function () { };
    TeamService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof type_service_1.TypeService !== "undefined" && type_service_1.TypeService) === "function" && _a || Object])
    ], TeamService);
    return TeamService;
    var _a;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ "./src/app/services/type.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TypeService = (function () {
    function TypeService() {
        this.none = 'assets/img/types/none.png';
        this.normal = 'assets/img/types/normal.png';
        this.grass = 'assets/img/types/grass.png';
        this.fire = 'assets/img/types/fire.png';
        this.water = 'assets/img/types/water.png';
        this.electric = 'assets/img/types/electric.png';
        this.ice = 'assets/img/types/ice.png';
        this.bug = 'assets/img/types/bug.png';
        this.poison = 'assets/img/types/poison.png';
        this.ground = 'assets/img/types/ground.png';
        this.rock = 'assets/img/types/rock.png';
        this.fighting = 'assets/img/types/fighting.png';
        this.flying = 'assets/img/types/flying.png';
        this.psychic = 'assets/img/types/psychic.png';
        this.ghost = 'assets/img/types/ghost.png';
        this.dragon = 'assets/img/types/dragon.png';
        this.physical = 'assets/img/types/physical.png';
        this.special = 'assets/img/types/special.png';
        this.status = 'assets/img/types/status.png';
        this.name = [
            'normal', 'psychic', 'electric', 'ice',
            'ground', 'rock', 'water', 'grass',
            'flying', 'fighting', 'fire', 'bug',
            'poison', 'ghost', 'dragon', 'none'
        ];
        this.img = [
            this.normal, this.psychic, this.electric, this.ice,
            this.ground, this.rock, this.water, this.grass,
            this.flying, this.fighting, this.fire, this.bug,
            this.poison, this.ghost, this.dragon, this.none
        ];
        this.class = ['physical', 'special', 'status'];
        this.classImg = [this.physical, this.special, this.status];
        this.oldClass = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, -1];
        this.chart = [
            // nrm, psy, elc, ice, grd, rck, wtr, grs, fly, ftg, fir, bug, psn, gst, drg, none
            [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0],
            [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0],
            [1.0, 1.0, 0.5, 1.0, 0.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0],
            [1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0],
            [1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 0.5, 0.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0, 1.0],
            [1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0],
            [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.5, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0],
            [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0],
            [1.0, 1.0, 0.5, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0],
            [2.0, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.5, 0.5, 0.0, 1.0, 1.0],
            [1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0, 0.5, 1.0],
            [1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 0.5, 1.0, 2.0, 0.5, 1.0, 1.0],
            [1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0],
            [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0],
            [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0],
            [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0] // none
        ];
    }
    TypeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TypeService);
    return TypeService;
}());
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map

/***/ }),

/***/ "./src/app/services/view-user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var ViewUserService = (function () {
    function ViewUserService(http) {
        this.http = http;
    }
    ViewUserService.prototype.viewUsers = function () {
        return this.http.get('view-user');
    };
    ViewUserService.prototype.promoteUser = function (username) {
        var body = new http_1.HttpParams().set('username', username);
        return this.http.post('view-user', body);
    };
    ViewUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], ViewUserService);
    return ViewUserService;
    var _a;
}());
exports.ViewUserService = ViewUserService;
//# sourceMappingURL=view-user.service.js.map

/***/ }),

/***/ "./src/app/set.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Set = (function () {
    function Set() {
    }
    return Set;
}());
exports.Set = Set;
//# sourceMappingURL=set.js.map

/***/ }),

/***/ "./src/app/team.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Team = (function () {
    function Team() {
        this.set1 = null;
        this.set2 = null;
        this.set3 = null;
        this.set4 = null;
        this.set5 = null;
        this.set6 = null;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.container-fluid {\r\n  padding-left: 0px;\r\n}\r\n.row {\r\n  width:100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n.stats {\r\n  width:100%;\r\n}\r\n.col-md-12 {\r\n  max-height: 500px;\r\n}\r\n/* Card styling */\r\n.card {\r\n  -webkit-box-shadow: 0px 2px 8px #DDDDDD;\r\n          box-shadow: 0px 2px 8px #DDDDDD;\r\n  margin: 18px 0px;\r\n  max-height: 500px;\r\n}\r\n.card-content {\r\n  padding-bottom: 0px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n}\r\n.card-stats {\r\n  min-height: 480px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  max-height: 520px;\r\n}\r\n.card-footer.ta-center {\r\n  margin-bottom: 0px!important;\r\n}\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.badge {\r\n  margin: 5px;\r\n  background-color: rgb(255, 70, 60);\r\n}\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.stat-col {\r\n  width: 42px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n  min-height: 470px;\r\n  max-height: 470px;\r\n  margin-left: 4px;\r\n}\r\n.move-table {\r\n  width: 100%;\r\n  max-height: 270px;\r\n}\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n.ta-center {\r\n  text-align: center;\r\n}\r\n.save-button {\r\n  float: right;\r\n  margin-top: 0px;\r\n  margin-bottom: 5px;\r\n}\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n.no-pad-top {\r\n  padding-top: 0px!important;\r\n}\r\n.mt-10 {\r\n  margin-top: 10px;\r\n}\r\n.bg-select {\r\n  background-color: rgb(255, 200, 200);\r\n}\r\n.bg-default {\r\n  background-color: #DDDDDD;\r\n}"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <!-- <div *ngFor=\"let move of movedex\">\r\n      {{ move.name }}\r\n    </div> -->\r\n    <div class=\"row\">\r\n      <!-- Loop through and print every Pokemon in favTeam -->\r\n      <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of favTeam; let i = index\">\r\n        <div class=\"card\" [style.background-color]=\"(selected === i) ? 'rgb(255, 200, 200)' : 'rgb(255, 255, 255)'\">\r\n          <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectTeamPokemon(i, pkmn)\">\r\n            <img [src]=\"favTeam[i].sprite\" alt=\"\" />\r\n          </div>\r\n\r\n          <div class=\"card-content ta-center\" (click)=\"selectTeamPokemon(i, pkmn)\" role=\"button\">\r\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[0])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[1])]\" class=\"type\" />\r\n            <h4 class=\"title\">\r\n              {{ favTeam[i].name | titlecase}}\r\n            </h4>\r\n          </div>\r\n\r\n          <div class=\"card-footer ta-center\">\r\n            <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\r\n              {{ collapse }}\r\n            </i>\r\n            <div class=\"stats\" *ngIf=\"expandOrCollapse\">\r\n              <ul>\r\n                <li *ngFor=\"let atk of favTeam[i].moveset\">\r\n                  {{ atk }}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-7 col-md-12\">\r\n        <div class=\"card card-stats container-fluid\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"purple\">\r\n            <div class=\"ct-chart\" id=\"pokemonStatChart\"></div>\r\n          </div>\r\n\r\n          <div class=\"card-content ta-center row\">\r\n            <img class=\"sprite col-sm-3 col-xl-3\" [src]=\" (selectedPkmn) ? selectedPkmn.sprite : '' \"\r\n              [title]=\" (selectedPkmn) ? selectedPkmn.sprite : '' \" />\r\n            <!-- The errors in the console can be prevented by doing something similar to the above line for every variable -->\r\n            <div class=\"no-padding col-sm-3 col-xl-3\">\r\n              <span class=\"badge badge-primary\">\r\n                Critical Rate\r\n                <br/> {{ (selectedPkmn) ? (selectedPkmn.stats.spe * 100 / 512 | number:'2.1-2') : '' }} %\r\n              </span>\r\n              <br/>\r\n              <!--[src]=\"(selectedPkmn.types[1] === void(0)) ? types.img[types.name.indexOf(selectedPkmn.types[1])] : types.img[15]\"-->\r\n              <img class=\"type\"\r\n              [src]=\" (selectedPkmn) ? types.img[types.name.indexOf(selectedPkmn.types[1])] : '' \" />\r\n              <img class=\"type\"\r\n              [src]=\" (selectedPkmn) ? types.img[types.name.indexOf(selectedPkmn.types[0])] : '' \" />\r\n              <br/>\r\n              <small>\r\n                <a [href]=\"(selectedPkmn) ? 'https://www.smogon.com/dex/rb/pokemon/selectedPkmn.name' : '' \">Smogon Analysis</a>\r\n              </small>\r\n            </div>\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-4 col-xl-4\">\r\n                <input [(ngModel)]=\"searchInput\" name=\"searchInput\" type=\"text\" class=\"form-control\"\r\n                  placeholder=\"Search Pokemon\" [(value)]=\"(selectedPkmn) ? selectedPkmn.name : sortBy \">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer mt-10\">\r\n            <div class=\"table-responsive move-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-primary\">\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Class</th>\r\n                    <th>Pow</th>\r\n                    <th>Acc</th>\r\n                    <th>PP</th>\r\n                    <th>Effect</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"selectedPkmn\">\r\n                  <tr *ngFor=\"let move of selPkmnMoves; let i = index\">\r\n                    <td>\r\n                      <input type=\"text\" [(ngModel)]=\"selPkmnMoves[i].name\" name=\"moveInput{{i}}\" list=\"canLearn\"\r\n                        (change)=\"setSelPkmnMoves(i, selPkmnMoves[i].name)\">\r\n                      <datalist id=\"canLearn\">\r\n                        <option *ngFor=\"let canlearn of selectedPkmn.moves | pkmnSort: 'name':ascending\" value=\"{{canlearn.name}}\">\r\n                      </datalist>\r\n                    </td>\r\n                    <td>\r\n                      <img [src]=\"types.img[types.name.indexOf(move.type)]\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <img class=\"type\" [src]=\"move.damageClass !== 'status' ? types.classImg[types.oldClass[types.name.indexOf(move.type)]] : types.classImg[2]\">\r\n                    </td>\r\n                    <td>{{ move.power }}</td>\r\n                    <td>{{ move.accuracy }}</td>\r\n                    <td>{{ move.pp }}</td>\r\n                    <td>{{ move.effect }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-sm save-button\" (click)=\"savePokemon()\">\r\n              <i class=\"material-icons\">save</i>\r\n              {{ (selected === -1) ? 'Save to Pokemon Box' : 'Save to Team' }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-5 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content no-pad-top\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnTableColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <br/>\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <!-- translation: foreach (Pokemon in Pokedex.sort(sortBy, ascending)) { filterBy(searchInput) } -->\r\n                  <tr class=\"search-row\" *ngFor=\"let pkmn of ((pokedex | pkmnSort: sortBy:ascending) | pkmnFilter: searchInput); let i = index\">\r\n                    <td class=\"ta-center\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\r\n                    <td class=\"ta-center type-col\" (click)=\"selectNewPokemon(pkmn)\">\r\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[1])]\" class=\"type\">\r\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[0])]\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.hp }}\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.atk }}\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.def }}\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.satk }}\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.sdef }}\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\r\n                      {{ pkmn.stats.spe }}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var pokemon_1 = __webpack_require__("./src/app/pokemon.ts");
var move_1 = __webpack_require__("./src/app/move.ts");
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var convert_service_1 = __webpack_require__("./src/app/services/convert.service.ts");
var Chartist = __webpack_require__("./node_modules/chartist/dist/chartist.js");
var TeambuilderComponent = (function () {
    function TeambuilderComponent(convertService, pokemonService, moveService, teamService, types) {
        // Assign my placeholder favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        // now using loadTeam() instead
        this.convertService = convertService;
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        this.teamService = teamService;
        this.types = types;
        // My default selected Pokemon's attacks
        this.selPkmnMoves = new Array();
        // by default our attacks are collapsed
        this.expandOrCollapse = false;
        this.collapse = 'arrow_drop_down';
        this.pkmnTableColNames = ['name', 'type', 'hp', 'atk', 'def', 'satk', 'sdef', 'spe'];
        this.colSortIcons = [
            'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert',
            'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
        ];
        this.sortBy = ''; // default sort by pokedex order
        this.ascending = true;
    }
    TeambuilderComponent.prototype.loadTeam = function () {
        this.trainer = JSON.parse(localStorage.getItem('trainer'));
        this.myTeam = JSON.parse(localStorage.getItem('teams'));
        if (this.myTeam && this.myTeam[0] && this.trainer) {
            this.favTeam = this.convertService.teamToPokeTeam(this.myTeam[0], this.trainer.id);
        }
        else {
            this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
        }
        // if null, get an empty team
        if (!this.favTeam) {
            this.favTeam = new Array();
            for (var i = 0; i < 6; i++) {
                this.favTeam.push(new pokemon_1.PokeAPI());
            }
        }
    };
    // toggles the show moves/hide moves button
    TeambuilderComponent.prototype.toggleCollapse = function () {
        this.expandOrCollapse = !this.expandOrCollapse;
        this.collapse = this.expandOrCollapse ? 'arrow_drop_up' : 'arrow_drop_down';
    };
    /**
     * Switches all other column icons to swap_vert, then toggles the clicked icon,
     * then changes the sorting strategy
     * @param i the column index to sort
     */
    TeambuilderComponent.prototype.toggleSort = function (i) {
        if (this.colSortIcons[i] === 'swap_vert') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_down';
            this.ascending = false;
        }
        else if (this.colSortIcons[i] === 'arrow_drop_down') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_up';
            this.ascending = true;
        }
        else if (this.colSortIcons[i] === 'arrow_drop_up') {
            for (var k = 0; k < this.colSortIcons.length; k++) {
                this.colSortIcons[k] = 'swap_vert';
            }
            this.colSortIcons[i] = 'arrow_drop_down';
            this.ascending = false;
        }
        this.sortBy = this.pkmnTableColNames[i];
    };
    /**
     * Shows you detailed information about your Pokemon, specifically their attacks.
     * If a pokemon from the search box is selected, give them 4 empty attacks
     * @param pkmn The Pokemon you wish to select, whether it be from your team or a new one
     */
    TeambuilderComponent.prototype.selectPokemon = function (pkmn) {
        this.selectedPkmn = pkmn;
        this.loadStatChart();
        this.selPkmnMoves = new Array();
        var myMove;
        // Assign detailed attack info into selPkmnMoves
        for (var i = 0; i < this.selectedPkmn.attackIds.length; i++) {
            // subtract 1 because our json is 1-indexed while arrays are 0-indexed
            myMove = this.movedex[this.selectedPkmn.attackIds[i] - 1];
            if (myMove) {
                this.selPkmnMoves[i] = Object.assign(myMove);
            }
            else {
                myMove = new move_1.Move();
                myMove.name = '';
                this.selPkmnMoves[i] = myMove;
            }
            if (this.selPkmnMoves[i].effectChance) {
                this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
                String(this.selPkmnMoves[i].effectChance)); // with this
            }
        }
        while (this.selPkmnMoves.length < 4) {
            this.selPkmnMoves.push(new move_1.Move());
        }
    };
    /**
     * Selects a pokemon from our team to edit. If already selected, cancel editing
     * @param i the position of the team your pokemon is in
     * @param pkmn the pokemon itself
     */
    TeambuilderComponent.prototype.selectTeamPokemon = function (i, pkmn) {
        if (this.selected !== i) {
            this.selected = i;
        }
        else {
            this.selected = -1;
        }
        this.selectPokemon(pkmn);
    };
    /**
     * If an event needs to occur when selecting a Pokemon from the Pokemon Search box, do it here
     * @param pkmn The pokemon selected
     */
    TeambuilderComponent.prototype.selectNewPokemon = function (pkmn) {
        if (this.favTeam.length < 6) {
            this.selected = this.favTeam.length;
        }
        // Assigns a new instance of the Pokemon, so we don't edit the pokedex itself
        this.selectPokemon(Object.assign(pkmn));
    };
    /**
     * Triggers when the save button is pressed
     */
    TeambuilderComponent.prototype.savePokemon = function () {
        var myTrainer;
        myTrainer = JSON.parse(sessionStorage.getItem('trainer'));
        // wipe our selected Pokemon's old attacks
        this.selectedPkmn.attackIds = [null, null, null, null];
        this.selectedPkmn.moveset = [null, null, null, null];
        // If our trainer is logged in, assign trainer ID
        if (myTrainer) {
            this.selectedPkmn.trainerId = myTrainer.id;
        }
        // Save our Pokemon's attacks
        for (var i = 0; i < 4; i++) {
            // if the move exists
            if (this.selPkmnMoves[i].id) {
                this.selectedPkmn.attackIds[i] = this.selPkmnMoves[i].id;
                this.selectedPkmn.moveset[i] = this.selPkmnMoves[i].name;
            }
            else {
                // if not, assign a placeholder
                console.log(this.selPkmnMoves[i]);
                var m = new move_1.Move();
                m.name = '';
                this.selPkmnMoves[i] = m;
            }
        }
        // Add the Pokemon to our team
        if (this.selected >= 0) {
            this.favTeam[this.selected] = this.selectedPkmn;
        }
        // Save to box
        if (myTrainer) {
            // TODO:
            myTrainer.sets.push(this.selectedPkmn);
        }
        // Put our favTeam in local storage so even an unregistered user can use our service
        localStorage.setItem('favTeam', JSON.stringify(this.favTeam));
    };
    /**
     * Deprecated
     * Reads json file created by pokeAPI and populates our pokedex with 151 Pokemon
     */
    TeambuilderComponent.prototype.getPokeAPIjson = function () {
        var _this = this;
        this.pokemonService.getJson().subscribe(function (data) {
            _this.pokedex = data;
        }, function (error) {
            console.error(error);
        });
    };
    /**
     * Deprecated
     * Reads json file created by pokeAPI, and edited by Howard by hand <--wtf
     * because the data was for gen7 and we needed gen1, then fills our movedex with 164 Moves
     */
    TeambuilderComponent.prototype.getMoveAPIjson = function () {
        var _this = this;
        this.moveService.getJson().subscribe(function (data) {
            _this.movedex = data;
            // I think this throws "Cannot read property 'sprite' of undefined" because things havent loaded yet
            _this.selectPokemon(_this.favTeam[0]);
            _this.loadStatChart();
        }, function (error) {
            console.error(error);
        });
    };
    /**
     * Given an attack name, put the full move details into selPkmnMoves
     * @param i the index of selPkmnMove to change
     * @param attackName the attack name
     */
    TeambuilderComponent.prototype.setSelPkmnMoves = function (i, attackName) {
        var myMove;
        console.log('inside setSelPkmnMoves() ' + i + ' ' + attackName);
        if (attackName === '') {
            myMove = new move_1.Move();
            myMove.name = '';
            this.selPkmnMoves[i] = myMove;
        }
        else {
            for (var _i = 0, _a = this.movedex; _i < _a.length; _i++) {
                var move = _a[_i];
                if (move.name === attackName) {
                    this.selPkmnMoves[i] = Object.assign(move);
                    if (this.selPkmnMoves[i].effectChance) {
                        this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
                        String(this.selPkmnMoves[i].effectChance)); // with this
                    }
                    break;
                }
            }
        }
    };
    TeambuilderComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    TeambuilderComponent.prototype.loadStatChart = function () {
        /* Pokemon Stat Chart initialization  */
        var dataPokemonStatChart = {
            labels: [
                this.selectedPkmn.stats.hp + '\nHP',
                this.selectedPkmn.stats.atk + '\nAtk',
                this.selectedPkmn.stats.def + '\nDef',
                this.selectedPkmn.stats.satk + '\nSatk',
                this.selectedPkmn.stats.sdef + '\nSdef',
                this.selectedPkmn.stats.spe + '\nSpe'
            ],
            series: [[
                    this.selectedPkmn.stats.hp,
                    this.selectedPkmn.stats.atk,
                    this.selectedPkmn.stats.def,
                    this.selectedPkmn.stats.satk,
                    this.selectedPkmn.stats.sdef,
                    this.selectedPkmn.stats.spe
                ]]
        };
        var optionsPokemonStatChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 200,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var pokemonStatChart = new Chartist.Bar('#pokemonStatChart', dataPokemonStatChart, optionsPokemonStatChart, responsiveOptions);
        // start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(pokemonStatChart);
    };
    TeambuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load 151 Pokemon into pokedex and 164 moves into movedex
        // this.getPokeAPIjson();
        // this.getMoveAPIjson();
        // Using a forkJoin to guarantee both dex being loaded before execution
        Rx_1.Observable.forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
            // calling these functions here because this is the only location where
            // we can guarantee our pokedex and movedex have been fully loaded
            _this.loadTeam();
            _this.selectPokemon(_this.favTeam[0]);
            _this.loadStatChart();
            // Assign my favTeam using localStorage or from session if one exists
        });
    };
    TeambuilderComponent = __decorate([
        core_1.Component({
            selector: 'app-teambuilder',
            template: __webpack_require__("./src/app/teambuilder/teambuilder.component.html"),
            styles: [__webpack_require__("./src/app/teambuilder/teambuilder.component.css")],
            providers: [move_service_1.MoveService, pokemon_service_1.PokemonService, team_service_1.TeamService, type_service_1.TypeService, convert_service_1.ConvertService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof convert_service_1.ConvertService !== "undefined" && convert_service_1.ConvertService) === "function" && _a || Object, typeof (_b = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _b || Object, typeof (_c = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" && _c || Object, typeof (_d = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" && _d || Object, typeof (_e = typeof type_service_1.TypeService !== "undefined" && type_service_1.TypeService) === "function" && _e || Object])
    ], TeambuilderComponent);
    return TeambuilderComponent;
    var _a, _b, _c, _d, _e;
}());
exports.TeambuilderComponent = TeambuilderComponent;
//# sourceMappingURL=teambuilder.component.js.map

/***/ }),

/***/ "./src/app/view-users/view-users.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n    margin-top: 50px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n  }\r\n.container-fluid {\r\n    padding-left: 0px;\r\n  }\r\n.row {\r\n    width:100%;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n.stats {\r\n    width:100%;\r\n  }\r\n.col-md-12 {\r\n    max-height: 470px;\r\n  }\r\n/* Card styling */\r\n.card {\r\n    -webkit-box-shadow: 0px 2px 8px #BBBBBB;\r\n            box-shadow: 0px 2px 8px #BBBBBB;\r\n    margin: 18px 0px;\r\n    max-height: 450px;\r\n  }\r\n.card-content {\r\n    padding-bottom: 0px;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n  }\r\n.card-stats {\r\n    min-height: 450px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n  }\r\n.card-footer {\r\n    padding-top: 0px;\r\n    max-height: 500px;\r\n  }\r\n.card-footer.ta-center {\r\n    margin-bottom: 0px!important;\r\n  }\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n  }\r\n/* Native image sizes */\r\n.type {\r\n    width: 48px;\r\n    height: 16px;\r\n  }\r\n.sprite {\r\n    width: 96px;\r\n    height: 96px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n  }\r\n.badge {\r\n    margin: 5px;\r\n    background-color: rgb(255, 70, 60);\r\n  }\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n    font-size: 12px;\r\n  }\r\ntd input {\r\n    width: 100px;\r\n  }\r\n.type-col {\r\n    width: 70px;\r\n  }\r\n.stat-col {\r\n    width: 42px;\r\n  }\r\n.form-group {\r\n    margin-top: 0px;\r\n  }\r\n.poke-search {\r\n    margin-top: 0px;\r\n    margin-left: 0px;\r\n  }\r\n.pkmn-table {\r\n    width: 100%;\r\n    max-height: 450px;\r\n    margin-left: 4px;\r\n  }\r\n.material-icons.md-18 {\r\n    font-size: 18px;\r\n    }\r\n.ta-center {\r\n    text-align: center;\r\n    }\r\n.no-padding {\r\n    padding: 0px;\r\n  }\r\n.no-pad-top {\r\n    padding-top: 0px!important;\r\n  }\r\n.mt-10 {\r\n    margin-top: 10px;\r\n  }"

/***/ }),

/***/ "./src/app/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class = \"card-footer mt-10\">\r\n    <form [formGroup] = \"form\" (ngSubmit) = \"onSubmit()\">\r\n      <table class = \"table\">\r\n        <thead class=\"text-primary\">\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Role</th>\r\n              <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor='let user of users; let i = index'>\r\n            <td>{{ user.name }}</td>\r\n            <td>{{ user.role }}</td>\r\n            <td><input type = \"radio\" formControlName = \"promote\" [value] = \"user\" > </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p>\r\n          <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n      </p>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-users/view-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var view_user_service_1 = __webpack_require__("./src/app/services/view-user.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ViewUsersComponent = (function () {
    function ViewUsersComponent(viewUserService, fb) {
        this.viewUserService = viewUserService;
        this.fb = fb;
        this.control = new forms_1.FormControl('', forms_1.Validators.required);
        this.form = fb.group({
            'promote': this.control
        });
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewUserService.viewUsers().subscribe(function (users) {
            alert(JSON.stringify(users));
            _this.users = users;
        });
    };
    ViewUsersComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('model-based form submitted');
        console.log(this.form.value.promote.name);
        this.viewUserService.promoteUser(this.form.value.promote.name).subscribe(function (users) {
            alert(JSON.stringify(users));
            _this.users = users;
        });
    };
    ViewUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-view-users',
            template: __webpack_require__("./src/app/view-users/view-users.component.html"),
            styles: [__webpack_require__("./src/app/view-users/view-users.component.css")],
            providers: [view_user_service_1.ViewUserService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof view_user_service_1.ViewUserService !== "undefined" && view_user_service_1.ViewUserService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
    ], ViewUsersComponent);
    return ViewUsersComponent;
    var _a, _b;
}());
exports.ViewUsersComponent = ViewUsersComponent;
//# sourceMappingURL=view-users.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map