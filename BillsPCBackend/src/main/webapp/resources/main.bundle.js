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
var upgrade_component_1 = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
// Services
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var view_user_service_1 = __webpack_require__("./src/app/services/view-user.service.ts");
// Modules
var ng2_dnd_1 = __webpack_require__("./node_modules/ng2-dnd/index.js");
var view_users_component_1 = __webpack_require__("./src/app/view-users/view-users.component.ts");
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
                upgrade_component_1.UpgradeComponent,
                filter_pipe_1.Filter,
                sort_pipe_1.Sort,
                view_users_component_1.ViewUsersComponent
            ],
            imports: [
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
var upgrade_component_1 = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
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
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
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

module.exports = "<footer>\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"pull-left\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://www.reddit.com/u/me\">\r\n            Contact\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.revature.com\">\r\n            Revature\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://github.com/revatureclass/1802java-nick-project2-theelitefour\">\r\n            Github\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.twitter.com\">\r\n            Follow Us\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <p class=\"copyright pull-right\">\r\n      &copy; {{test | date: 'yyyy'}}\r\n      <a href=\"#\">The Elite Four</a>\r\n    </p>\r\n  </div>\r\n</footer>"

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

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul *ngIf=\"trainer == null; then ifLoggedOut; else elseLogin\" class=\"nav navbar-nav navbar-right\"></ul>\r\n      <ng-template #ifLoggedOut>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a routerLink='login'>\r\n              <i class=\"material-icons\">account_circle</i>\r\n              Login\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink='register'>\r\n              <i class=\"material-icons\">person</i>\r\n              Register\r\n            </a>\r\n          </li>\r\n          </ul>\r\n      </ng-template>\r\n      <ng-template #elseLogin>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a>\r\n            <!-- Profile icon changes depending on role: trainer, pro, admin -->\r\n            <i class=\"material-icons\" *ngIf=\"\">face</i>\r\n            <i class=\"material-icons\" *ngIf=\"\">whatshot</i>\r\n            <i class=\"material-icons\" *ngIf=\"\">supervisor_account</i>\r\n            {{trainer.username}}\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a (click)=\"logout()\">\r\n            <i class=\"material-icons\">exit_to_app</i>\r\n            Logout\r\n          </a>\r\n        </li>\r\n        </ul>\r\n      </ng-template>\r\n      <form class=\"navbar-form navbar-right\" role=\"search\">\r\n        <div class=\"form-group form-black is-empty\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n          <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n          <i class=\"material-icons\">search</i>\r\n          <div class=\"ripple-container\"></div>\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>"

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
        this.element = element;
        this.loginService = loginService;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.loginService.currentTrainer.subscribe(function (trainer) {
            _this.trainer = trainer;
        });
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

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.container-fluid {\r\n  padding-left: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n.stats {\r\n  width: 100%;\r\n}\r\n/* Card styling */\r\n.card {\r\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\r\n          box-shadow: 0px 2px 8px #BBBBBB;\r\n  margin: 18px 0px;\r\n}\r\n.card-content {\r\n  padding-bottom: 0px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n  min-height: 110px;\r\n}\r\n.card-stats {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  max-height: 230px;\r\n}\r\n.card-footer {\r\n  min-height: 110px;\r\n}\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.badge {\r\n  margin: 5px;\r\n  background-color: rgb(255, 70, 60);\r\n}\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.stat-col {\r\n  width: 42px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n.ta-left {\r\n  text-align: left;\r\n}\r\n.ta-center {\r\n  text-align: center;\r\n}\r\n.ta-right {\r\n  text-align: right;\r\n}\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n.no-pad-top {\r\n  padding-top: 0px!important;\r\n}\r\n.mt-10 {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card card-plain\">\r\n      <div class=\"card-header row\" data-background-color=\"red\">\r\n        <div class=\"col-lg-10 col-xs-9\">\r\n          <h4 class=\"title\">Core Coverage shows you which teammates make good partners for your Pokemon</h4>\r\n          <p class=\"category\">Adjust the number of resistances you prefer on an ideal partner using the controls on the right.</p>\r\n        </div>\r\n        <div class=\"col-lg-2 col-xs-3 ta-right\">\r\n          <i class=\"material-icons\" role=\"button\" (click)=\"subThresh()\">\r\n            indeterminate_check_box\r\n          </i>\r\n          <span class=\"h3\">{{ threshold }}</span>\r\n          <i class=\"material-icons\" role=\"button\" (click)=\"addThresh()\">\r\n            add_box\r\n          </i>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"row\">\r\n        <!-- Loop through and print every Pokemon in favTeam -->\r\n        <div class=\"col-lg-4 col-xs-6\" *ngFor=\"let pkmn of favTeam; let i = index\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\r\n              <img src=\"{{ favTeam[i].sprite }}\" />\r\n            </div>\r\n            <div class=\"card-content ta-center\">\r\n              <h5>Partners with</h5>\r\n              <span class=\"badge\" *ngFor=\"let partner of partners[i]\">\r\n                {{ partner }}\r\n              </span>\r\n            </div>\r\n            <div class=\"card-footer ta-left row\">\r\n              <div class=\"col-xl-5 col-xs-5\">\r\n                <h4 class=\"title\">{{ favTeam[i].name }}</h4>\r\n                <img src=\"{{ types.img[types.name.indexOf(favTeam[i].types[0])] }}\" alt=\"\" class=\"type\" />\r\n                <img src=\"{{ types.img[types.name.indexOf(favTeam[i].types[1])] }}\" alt=\"\" class=\"type\" />\r\n              </div>\r\n              <div class=\"col-xl-7 col-xs-7\">\r\n                is weak to\r\n                <br/>\r\n                <img *ngFor=\"let typeID of weaknesses[i]\" [src]=\"types.img[typeID]\" class=\"type\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
    function CoreCoverageComponent(pokemonService) {
        this.pokemonService = pokemonService;
        // The number of resistances we would like on an ideal partner
        this.threshold = 0;
        // two-way data binding wouldn't work so here's the hard way
        this.thresholdChange = new core_1.EventEmitter();
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Assign my favTeam using teamService
        this.teamService = new team_service_1.TeamService();
        this.favTeam = this.teamService.favTeam;
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
            // Find attacks that are super-effective against my type
            for (var i = 0; i < this.types.chart.length; i++) {
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
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object])
    ], CoreCoverageComponent);
    return CoreCoverageComponent;
    var _a;
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
    function DefensiveCoverageComponent() {
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        /* Assign my favTeam using teamService */
        this.teamService = new team_service_1.TeamService();
        this.favTeam = this.teamService.favTeam;
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
                if (this.myTable[x][y] <= 1.0) {
                    sum += this.myTable[x][y];
                }
                else if (this.myTable[x][y] > 1.0) {
                    sum += this.myTable[x][y] - 0.5;
                }
            }
            if (sum === 0) {
            }
            else if (sum > 7) {
                this.rowColor[y] = 'bg-red';
            }
            else if (sum > 6) {
                this.rowColor[y] = 'bg-pink';
            }
            else if (sum < 5) {
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
        __metadata("design:paramtypes", [])
    ], DefensiveCoverageComponent);
    return DefensiveCoverageComponent;
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

module.exports = "<!--\r\n<input [(ngModel)]=\"id\" type=\"text\"/>\r\n<button (click)=\"getPokemon()\">get pokemon</button>\r\n<p>Name: {{myPokemon.name}}</p>\r\n<p>Height: {{myPokemon.height}}</p>\r\n-->\r\n"

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
var FeaturedComponent = (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () { };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'app-featured',
            template: __webpack_require__("./src/app/featured/featured.component.html"),
            styles: [__webpack_require__("./src/app/featured/featured.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
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

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-lg-4\">\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Login</h4>\r\n            <p class=\"category\">To access your saved pokemon and teams</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                      [(ngModel)]=\"password\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!loginForm.form.valid\">Login</button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted\">\r\n              <div *ngIf=\"valid\">\r\n                <div class=\"h3\">\r\n                    You have successfully Logged In!\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!valid\">\r\n                <div class=\"h3\">\r\n                    Invalid login credentials\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        this.loginService.login(this.username, this.password).subscribe(function (trainer) {
            alert(JSON.stringify(trainer));
            _this.valid = trainer !== null;
            if (trainer !== null) {
                _this.loginService.changeTrainer(trainer);
                localStorage.setItem('trainer', JSON.stringify(trainer));
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

module.exports = "\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" data-background-color=\"red\">\r\n        <h4 class=\"title\">Missing type coverage</h4>\r\n        <p class=\"category\">Your team\r\n          <strong>does not</strong> have a super-effective attack against these Types</p>\r\n      </div>\r\n\r\n      <div class=\"card-content row\">\r\n        <div *ngFor=\"let type of uncoveredTypes\" class=\"col-xs-2 col-xl-2\">\r\n          <div>\r\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-content\"></div>\r\n    </div>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-header\" data-background-color=\"red\">\r\n        <h4 class=\"title\">Types covered</h4>\r\n        <p class=\"category\">Your team has super-effective attacks against these Types</p>\r\n      </div>\r\n\r\n      <div class=\"card-content row\">\r\n        <div *ngFor=\"let type of uniqueTypes\" class=\"col-xs-2 col-xl-2\">\r\n          <div>\r\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
    function OffensiveCoverageComponent(pokemonService, moveService, types) {
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        this.types = types;
        // Assign my favTeam using teamService
        this.teamService = new team_service_1.TeamService();
        this.favTeam = this.teamService.favTeam;
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
    // Load 151 Pokemon into this.pokedex
    OffensiveCoverageComponent.prototype.getPokeAPIjson = function () {
        var _this = this;
        this.pokemonService.getJson().subscribe(function (data) {
            _this.pokedex = data;
        }, function (error) {
            console.error(error);
        });
    };
    /**
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
                if (detailedMove.power > 0) {
                    // always add it to our list of damaging move types if our list is empty
                    if (this.teamMoveTypes.length > 0) {
                        // We don't want duplicates. if one exists, check the next attack
                        for (var _b = 0, _c = this.teamMoveTypes; _b < _c.length; _b++) {
                            var type = _c[_b];
                            if (type === detailedMove.type) {
                                continue loop1;
                            }
                        } // add unique type to our array if there are no dupes
                        this.teamMoveTypes.push(detailedMove.type);
                    }
                    else {
                        // I subtract 1 because our json is 1-indexed while arrays are 0-indexed
                        this.teamMoveTypes.push(detailedMove.type);
                    }
                }
            }
        }
    };
    OffensiveCoverageComponent.prototype.compareOurMovesVsUniqueTypes = function () {
        var _this = this;
        var effective;
        var defType1;
        var defType2;
        // for each unique defending type combination
        loop1: for (var _i = 0, _a = this.uniqueTypes; _i < _a.length; _i++) {
            var pairTypes = _a[_i];
            // for each attack type on my team
            for (var _b = 0, _c = this.teamMoveTypes; _b < _c.length; _b++) {
                var atkType = _c[_b];
                // get the types of the defending pokemon
                defType1 = this.types.name.indexOf(pairTypes[0]);
                defType2 = this.types.name.indexOf(pairTypes[1]);
                console.log(this.types.chart[atkType]);
                // and see how effective my attack type is against every other pokemon
                effective = this.types.chart[atkType][defType1];
                effective *= this.types.chart[atkType][defType2];
                console.log(atkType + ' vs ' + defType1 + ' ' + defType2 + ' = ' + effective);
                // if our attack is super effective
                if (effective > 1) {
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
        Rx_1.Observable.forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
            // calling these functions here because this is the only location where
            // we can guarantee our pokedex and movedex have been fully loaded
            _this.getUniqueTypes();
            _this.getMoveAPIjson();
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
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object, typeof (_b = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" && _b || Object, typeof (_c = typeof type_service_1.TypeService !== "undefined" && type_service_1.TypeService) === "function" && _c || Object])
    ], OffensiveCoverageComponent);
    return OffensiveCoverageComponent;
    var _a, _b, _c;
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
// Used for temporary storage such as team building
var Pokemon = (function () {
    // A missingno for our placeholder!
    function Pokemon() {
        this.id = 0;
        this.trainerId = 1;
        this.attackIds = [];
        this.name = 'missingno';
        this.sprite = 'assets/img/question.png';
        this.moveset = ['', '', '', ''];
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
        this.trainerId = 1;
        this.attackIds = [];
        this.name = 'missingno';
        this.sprite = 'assets/img/question.png';
        this.moveset = ['', '', '', ''];
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

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n}\r\n.card {\r\n  height: 575px;\r\n  margin-bottom: 0px;\r\n}\r\n.table-responsive {\r\n  max-height: 435px;\r\n  overflow-y: scroll;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n/* Squeeze more space out of our tables */\r\n.card-header {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.card-content {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  margin-left: 10px;\r\n  margin-right: 0px;\r\n  margin-bottom: 0px;\r\n}\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n}\r\n/* Readability */\r\nthead {\r\n  color: #333333;\r\n}\r\n.material-icons.md-18 { font-size: 18px; }\r\n.ta-center { text-align: center; }\r\na i {\r\n  display: inline;\r\n}\r\n.nav-link {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.nav {\r\n  margin: 0px\r\n}"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills ta-center\">\r\n              <li>\r\n                <a role=\"button\" (click)=\"newTeam()\">\r\n                  <i class=\"material-icons\">create_new_folder</i> New Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"saveTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">save</i> Save Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"setFavoriteTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">{{ favoriteIcon }}</i> Favorite\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-12 col-xl-12\">\r\n                <input [(ngModel)]=\"newTeamName\" name=\"newTeamName\" type=\"text\" class=\"form-control\" placeholder=\"Team Name\" [(value)]=\"Untitled\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"favTeam\">\r\n                  <tr *ngFor=\"let pkmn of favTeam; let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name }}</td>\r\n                    <td class=\"ta-center type-col\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills\">\r\n              <li class=\"active\">\r\n                <a data-toggle=\"pill\" href=\"#pokeBox\">\r\n                  <i class=\"material-icons\">line_weight</i> Pokemon\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a data-toggle=\"pill\" href=\"#teamBox\">\r\n                  <i class=\"material-icons\">view_module</i> Teams\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-12 col-xl-12\">\r\n                <input [(ngModel)]=\"searchBox\" name=\"searchBox\" type=\"text\" class=\"form-control\"\r\n                  placeholder=\"Search Pokemon\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer tab-content\">\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade in active\" id=\"pokeBox\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"myBox\">\r\n                  <!-- translation: foreach (Pokemon in myBox.sort(sortBy, ascending)) { filterBy(searchBox) } -->\r\n                  <tr *ngFor=\"let boxpkmn of ((myBox | pkmnSort: sortBy:ascending) | pkmnFilter: searchBox); let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(boxpkmn)\" role=\"button\">{{ boxpkmn.name }}</td>\r\n                    <td class=\"ta-center type-col\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[0])] }}\" class=\"type\">\r\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[1])] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of boxpkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade\" id=\"teamBox\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
var PokemonBoxComponent = (function () {
    function PokemonBoxComponent() {
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        /* Assign my favTeam using teamService */
        this.teamService = new team_service_1.TeamService();
        this.favTeam = this.teamService.favTeam;
        this.curTeam = new Array();
        this.curTeam = Object.assign([], this.favTeam);
        this.myBox = new Array();
        this.myBox.push(this.teamService.pkmn1); // give myself some pokemon
        this.myBox.push(this.teamService.pkmn6);
        this.myBox.push(this.teamService.pkmn2);
        this.myBox.push(this.teamService.pkmn2);
        this.myBox.push(this.teamService.pkmn6);
        this.myBox.push(this.teamService.pkmn4);
        this.myBox.push(this.teamService.pkmn3);
        this.myBox.push(this.teamService.pkmn2);
        this.myBox.push(this.teamService.pkmn3);
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
        this.curTeam = new Array();
    };
    /**
     * Adds the curTeam to myTeams and sets the team name to newTeamName
     * @param newTeamName saves as 'Untitled' if newTeamName is empty
     */
    PokemonBoxComponent.prototype.saveTeam = function (newTeamName) {
        if (this.curTeam.length === 6) {
            this.myTeams.push(this.curTeam);
            if (newTeamName.length < 1) {
                newTeamName = 'Untitled';
            }
            return true;
        }
        return false;
    };
    /**
     * Assigns the curTeam as favTeam and sets favTeam's name to newTeamName
     * @param newTeamName saves as 'Untitled' if newTeamName is empty
     */
    PokemonBoxComponent.prototype.setFavoriteTeam = function (newTeamName) {
        this.favTeam = this.curTeam;
        this.favoriteIcon = 'star';
        if (newTeamName.length < 1) {
            newTeamName = 'Untitled';
        }
        // set favTeam.name = newTeamName;
    };
    PokemonBoxComponent.prototype.ngOnInit = function () {
        if (this.curTeam === this.favTeam) {
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
        __metadata("design:paramtypes", [])
    ], PokemonBoxComponent);
    return PokemonBoxComponent;
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

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Register</h4>\r\n            <p class=\"category\">To start saving your teams and Pokemon</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"email\">Email address</label>\r\n                      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"cpassword\">Confirm Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"cpassword\" name=\"cpassword\"\r\n                      [(ngModel)]=\"cpassword\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!registerForm.form.valid\" \r\n                  [disabled]=\"!passwordMatch\">\r\n                  Register\r\n                </button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted\">\r\n              <div *ngIf=\"valid\">\r\n                <div class=\"h3\">\r\n                  You have successfully registered!\r\n                </div>\r\n                <div class=\"h4\">\r\n                  No email confirmation necessary\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!valid\">\r\n                <div class=\"h3\">\r\n                    Registration Failed\r\n                  </div>\r\n                  <div class=\"h4\">\r\n                    Username is already in use\r\n                  </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <a href=\"#bill\">\r\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"content\">\r\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\r\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\r\n            <p class=\"card-content\">\r\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\r\n              analytics and statistics are provided by our leading Professors.\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
    }
    LoginService.prototype.login = function (username, password) {
        var body = new http_1.HttpParams().set('username', username).set('password', password);
        return this.http.post('login', body);
    };
    LoginService.prototype.logout = function () {
        return this.http.get('logout');
    };
    LoginService.prototype.changeTrainer = function (trainer) {
        this.trainerSource.next(trainer);
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
    function TeamService() {
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Making my team
        this.pkmn1 = new pokemon_1.Pokemon();
        this.pkmn2 = new pokemon_1.Pokemon();
        this.pkmn3 = new pokemon_1.Pokemon();
        this.pkmn4 = new pokemon_1.Pokemon();
        this.pkmn5 = new pokemon_1.Pokemon();
        this.pkmn6 = new pokemon_1.Pokemon();
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
        __metadata("design:paramtypes", [])
    ], TeamService);
    return TeamService;
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

/***/ "./src/app/teambuilder/teambuilder.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.container-fluid {\r\n  padding-left: 0px;\r\n}\r\n.row {\r\n  width:100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n.stats {\r\n  width:100%;\r\n}\r\n.col-md-12 {\r\n  max-height: 470px;\r\n}\r\n/* Card styling */\r\n.card {\r\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\r\n          box-shadow: 0px 2px 8px #BBBBBB;\r\n  margin: 18px 0px;\r\n  max-height: 450px;\r\n}\r\n.card-content {\r\n  padding-bottom: 0px;\r\n  padding-left: 4px;\r\n  padding-right: 4px;\r\n}\r\n.card-stats {\r\n  min-height: 450px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  max-height: 500px;\r\n}\r\n.card-footer.ta-center {\r\n  margin-bottom: 0px!important;\r\n}\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n.badge {\r\n  margin: 5px;\r\n  background-color: rgb(255, 70, 60);\r\n}\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.type-col {\r\n  width: 70px;\r\n}\r\n.stat-col {\r\n  width: 42px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n  max-height: 450px;\r\n  margin-left: 4px;\r\n}\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n  }\r\n.ta-center {\r\n  text-align: center;\r\n  }\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n.no-pad-top {\r\n  padding-top: 0px!important;\r\n}\r\n.mt-10 {\r\n  margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <!-- <div *ngFor=\"let move of movedex\">\r\n      {{ move.name }}\r\n    </div> -->\r\n    <div class=\"row\">\r\n      <!-- Loop through and print every Pokemon in favTeam -->\r\n      <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of favTeam; let i = index\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectTeamPokemon(i, pkmn)\">\r\n            <img [src]=\"favTeam[i].sprite\" alt=\"\" />\r\n          </div>\r\n          <div class=\"card-content ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\r\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[0])]\" class=\"type\" />\r\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[1])]\" class=\"type\" />\r\n            <h4 class=\"title\">{{ favTeam[i].name }}</h4>\r\n          </div>\r\n          <div class=\"card-footer ta-center\">\r\n            <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\r\n              {{ collapse }}\r\n            </i>\r\n            <div class=\"stats\" *ngIf=\"expandOrCollapse\">\r\n              <ul>\r\n                <li *ngFor=\"let atk of favTeam[i].moveset\">\r\n                  {{ atk }}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-7 col-md-12\">\r\n        <div class=\"card card-stats container-fluid\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"purple\">\r\n            <div class=\"ct-chart\" id=\"pokemonStatChart\"></div>\r\n          </div>\r\n\r\n          <div class=\"card-content ta-center row\">\r\n            <img class=\"sprite col-sm-3 col-xl-3\" [src]=\"selectedPkmn.sprite\" title=\"{{ selectedPkmn.sprite }}\" />\r\n            <div class=\"no-padding col-sm-3 col-xl-3\">\r\n              <span class=\"badge badge-primary\">\r\n                Critical Rate\r\n                <br/> {{ selectedPkmn.stats.spe * 100 / 512 | number:'2.1-2'}} %\r\n              </span>\r\n              <br/>\r\n              <img [src]=\"types.img[types.name.indexOf(selectedPkmn.types[0])]\" class=\"type\" />\r\n              <img [src]=\"types.img[types.name.indexOf(selectedPkmn.types[1])]\" class=\"type\" />\r\n              <br/>\r\n              <small>\r\n                <a href=\"https://www.smogon.com/dex/rb/pokemon/{{selectedPkmn.name}}\">Smogon Analysis</a>\r\n              </small>\r\n            </div>\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-4 col-xl-4\">\r\n                <input [(ngModel)]=\"searchInput\" name=\"searchInput\" type=\"text\" class=\"form-control\" placeholder=\"Search Pokemon\" [(value)]=\"selectedPkmn.name\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer mt-10\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-primary\">\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Class</th>\r\n                    <th>Pow</th>\r\n                    <th>Acc</th>\r\n                    <th>PP</th>\r\n                    <th>Effect</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"selectedPkmn\">\r\n                  <tr *ngFor=\"let move of selPkmnMoves; let i = index\">\r\n                    <td>\r\n                      <input type=\"text\" [(ngModel)]=\"move.name\"\r\n                        (change)=\"setSelPkmnMoves(i, moveInput)\" list=\"canLearn\">\r\n                      <datalist id=\"canLearn\">\r\n                        <option *ngFor=\"let canlearn of selectedPkmn.moves\" value=\"{{canlearn.name}}\">\r\n                      </datalist>\r\n                    </td>\r\n                    <td>\r\n                      <img [src]=\"types.img[types.name.indexOf(move.type)]\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <!-- if damageClass is not status, use move.type to calculate damage class -->\r\n                      <img class=\"type\" [src]=\r\n\"move.damageClass !== 'status' ? types.classImg[types.oldClass[types.name.indexOf(move.type)]] : types.classImg[2]\">\r\n                    </td>\r\n                    <td>{{ move.power }}</td>\r\n                    <td>{{ move.accuracy }}</td>\r\n                    <td>{{ move.pp }}</td>\r\n                    <td>{{ move.effect }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-5 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content no-pad-top\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnTableColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <br/>\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <!-- translation: foreach (Pokemon in Pokedex.sort(sortBy, ascending)) { filterBy(searchInput) } -->\r\n                  <tr class=\"search-row\" *ngFor=\"let pkmn of ((pokedex | pkmnSort: sortBy:ascending) | pkmnFilter: searchInput); let i = index\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\r\n                    <td class=\"ta-center type-col\">\r\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[1])]\" class=\"type\">\r\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[0])]\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.hp }}</td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.atk }}</td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.def }}</td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.satk }}</td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.sdef }}</td>\r\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.spe }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
var pokemon_1 = __webpack_require__("./src/app/pokemon.ts");
var move_service_1 = __webpack_require__("./src/app/services/move.service.ts");
var pokemon_service_1 = __webpack_require__("./src/app/services/pokemon.service.ts");
var team_service_1 = __webpack_require__("./src/app/services/team.service.ts");
var type_service_1 = __webpack_require__("./src/app/services/type.service.ts");
var Chartist = __webpack_require__("./node_modules/chartist/dist/chartist.js");
var TeambuilderComponent = (function () {
    function TeambuilderComponent(pokemonService, moveService) {
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        // Assigns the value of types to their respective image
        this.types = new type_service_1.TypeService();
        // Assign my favTeam using teamService
        this.teamService = new team_service_1.TeamService();
        this.favTeam = this.teamService.favTeam;
        // Make a team full of missingno
        this.curTeam = new Array();
        for (var i = 0; i < 6; i++) {
            this.curTeam.push(new pokemon_1.PokeAPI());
        }
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
    TeambuilderComponent.prototype.selectTeamPokemon = function (i, pkmn) {
        // TODO: Actually modify our pokemon if any changes are made to it
        this.selected = i;
        this.selectPokemon(pkmn);
    };
    TeambuilderComponent.prototype.selectNewPokemon = function (pkmn) {
    };
    TeambuilderComponent.prototype.selectPokemon = function (pkmn) {
        this.selectedPkmn = pkmn;
        this.loadStatChart();
        // Assign detailed attack info into selPkmnMoves
        if (!!this.selectedPkmn.attackIds.length) {
            for (var i = 0; i < this.selectedPkmn.attackIds.length; i++) {
                // subtract 1 because our json is 1-indexed while arrays are 0-indexed
                this.selPkmnMoves[i] = this.movedex[this.selectedPkmn.attackIds[i] - 1];
                if (!!this.selPkmnMoves[i].effectChance) {
                    this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
                    String(this.selPkmnMoves[i].effectChance)); // with this
                }
            }
        }
        else {
            for (var i = 0; i < 4; i++) {
                this.selPkmnMoves[i] = this.movedex[164]; // 164 is my placeholder
            }
        }
    };
    /**
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
        alert(i + ' ' + attackName); // TODO:
        for (var _i = 0, _a = this.movedex; _i < _a.length; _i++) {
            var move = _a[_i];
            if (move.name === attackName) {
                this.selPkmnMoves[i] = move;
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
        // Load 151 Pokemon into this.pokedex
        this.getPokeAPIjson();
        this.getMoveAPIjson();
    };
    TeambuilderComponent = __decorate([
        core_1.Component({
            selector: 'app-teambuilder',
            template: __webpack_require__("./src/app/teambuilder/teambuilder.component.html"),
            styles: [__webpack_require__("./src/app/teambuilder/teambuilder.component.css")],
            providers: [move_service_1.MoveService, pokemon_service_1.PokemonService, team_service_1.TeamService, type_service_1.TypeService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof pokemon_service_1.PokemonService !== "undefined" && pokemon_service_1.PokemonService) === "function" && _a || Object, typeof (_b = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" && _b || Object])
    ], TeambuilderComponent);
    return TeambuilderComponent;
    var _a, _b;
}());
exports.TeambuilderComponent = TeambuilderComponent;
//# sourceMappingURL=teambuilder.component.js.map

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\r\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"table-responsive table-upgrade\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th class=\"text-center\">Free</th>\r\n                                        <th class=\"text-center\">PRO</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Components</td>\r\n                                        <td class=\"text-center\">60</td>\r\n                                        <td class=\"text-center\">200</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Plugins</td>\r\n                                        <td class=\"text-center\">2</td>\r\n                                        <td class=\"text-center\">15</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Example Pages</td>\r\n                                        <td class=\"text-center\">3</td>\r\n                                        <td class=\"text-center\">27</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Login, Register, Pricing, Lock Pages</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Mini Sidebar</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Premium Support</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td class=\"text-center\">Free</td>\r\n                                        <td class=\"text-center\">Just $49</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-center\"></td>\r\n                                        <td class=\"text-center\">\r\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
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
var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        core_1.Component({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());
exports.UpgradeComponent = UpgradeComponent;
//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "./src/app/view-users/view-users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <thead>\r\n        <tr>\r\n          <th>Username</th>\r\n          <th>Role</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor='let user of users; let i = index'>\r\n        <td>{{ user.username }}</td>\r\n        <td>{{ user.role }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>>"

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
var ViewUsersComponent = (function () {
    function ViewUsersComponent(viewUserService) {
        this.viewUserService = viewUserService;
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewUserService.viewUsers().subscribe(function (users) {
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
        __metadata("design:paramtypes", [typeof (_a = typeof view_user_service_1.ViewUserService !== "undefined" && view_user_service_1.ViewUserService) === "function" && _a || Object])
    ], ViewUsersComponent);
    return ViewUsersComponent;
    var _a;
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