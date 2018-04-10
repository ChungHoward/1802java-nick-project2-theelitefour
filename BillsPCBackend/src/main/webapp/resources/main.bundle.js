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

module.exports = "/*desktop*/\n@media only screen and (min-width: 992px) {\n  .main-panel {\n    width: calc(100% - 220px);\n  }\n}\n.sidebar {\n  max-width: 220px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
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
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_filter_pipe__ = __webpack_require__("./src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_pipe_sort_pipe__ = __webpack_require__("./src/app/pipe/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__teambuilder_teambuilder_component__ = __webpack_require__("./src/app/teambuilder/teambuilder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pokemonbox_pokemonbox_component__ = __webpack_require__("./src/app/pokemonbox/pokemonbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__corecoverage_corecoverage_component__ = __webpack_require__("./src/app/corecoverage/corecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__defensivecoverage_defensivecoverage_component__ = __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__offensivecoverage_offensivecoverage_component__ = __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__offensevsdefense_offensevsdefense_component__ = __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__featured_featured_component__ = __webpack_require__("./src/app/featured/featured.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_logging_service__ = __webpack_require__("./src/app/services/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pipes


// Components










// Services







// Modules

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__teambuilder_teambuilder_component__["a" /* TeambuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pokemonbox_pokemonbox_component__["a" /* PokemonBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_14__corecoverage_corecoverage_component__["a" /* CoreCoverageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__defensivecoverage_defensivecoverage_component__["a" /* DefensiveCoverageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__offensivecoverage_offensivecoverage_component__["a" /* OffensiveCoverageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__offensevsdefense_offensevsdefense_component__["a" /* OffenseVsDefenseComponent */],
                __WEBPACK_IMPORTED_MODULE_18__featured_featured_component__["a" /* FeaturedComponent */],
                __WEBPACK_IMPORTED_MODULE_19__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipe_filter_pipe__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_9_app_pipe_sort_pipe__["a" /* Sort */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_27_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_logging_service__["a" /* LoggingService */], __WEBPACK_IMPORTED_MODULE_22__services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_21__services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_23__services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_24__services_type_service__["a" /* TypeService */], __WEBPACK_IMPORTED_MODULE_25__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_26__services_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teambuilder_teambuilder_component__ = __webpack_require__("./src/app/teambuilder/teambuilder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pokemonbox_pokemonbox_component__ = __webpack_require__("./src/app/pokemonbox/pokemonbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__corecoverage_corecoverage_component__ = __webpack_require__("./src/app/corecoverage/corecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__defensivecoverage_defensivecoverage_component__ = __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__offensivecoverage_offensivecoverage_component__ = __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__offensevsdefense_offensevsdefense_component__ = __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__featured_featured_component__ = __webpack_require__("./src/app/featured/featured.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'teambuilder', component: __WEBPACK_IMPORTED_MODULE_6__teambuilder_teambuilder_component__["a" /* TeambuilderComponent */] },
    { path: 'pokemonbox', component: __WEBPACK_IMPORTED_MODULE_7__pokemonbox_pokemonbox_component__["a" /* PokemonBoxComponent */] },
    { path: 'corecoverage', component: __WEBPACK_IMPORTED_MODULE_8__corecoverage_corecoverage_component__["a" /* CoreCoverageComponent */] },
    { path: 'defensivecoverage', component: __WEBPACK_IMPORTED_MODULE_9__defensivecoverage_defensivecoverage_component__["a" /* DefensiveCoverageComponent */] },
    { path: 'offensivecoverage', component: __WEBPACK_IMPORTED_MODULE_10__offensivecoverage_offensivecoverage_component__["a" /* OffensiveCoverageComponent */] },
    { path: 'offensevsdefense', component: __WEBPACK_IMPORTED_MODULE_11__offensevsdefense_offensevsdefense_component__["a" /* OffenseVsDefenseComponent */] },
    { path: 'featured', component: __WEBPACK_IMPORTED_MODULE_12__featured_featured_component__["a" /* FeaturedComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '', redirectTo: 'teambuilder', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container-fluid\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a href=\"https://www.reddit.com/u/me\">\n            Contact\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.revature.com\">\n            Revature\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/revatureclass/1802java-nick-project2-theelitefour\">\n            Github\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.twitter.com\">\n            Follow Us\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <p class=\"copyright pull-right\">\n      &copy; {{test | date: 'yyyy'}}\n      <a href=\"#\">The Elite Four</a>\n    </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul *ngIf=\"trainer == null; then ifLoggedOut; else elseLogin\" class=\"nav navbar-nav navbar-right\"></ul>\n      <ng-template #ifLoggedOut>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLink='login'>\n              <i class=\"material-icons\">account_circle</i>\n              Login\n            </a>\n          </li>\n          <li>\n            <a routerLink='register'>\n              <i class=\"material-icons\">person</i>\n              Register\n            </a>\n          </li>\n          </ul>\n      </ng-template>\n      <ng-template #elseLogin>\n          <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a>\n            <!-- Profile icon changes depending on role: trainer, pro, admin -->\n            <i class=\"material-icons\" *ngIf=\"\">face</i>\n            <i class=\"material-icons\" *ngIf=\"\">whatshot</i>\n            <i class=\"material-icons\" *ngIf=\"\">supervisor_account</i>\n            {{trainer.username}}\n          </a>\n        </li>\n        <li>\n          <a (click)=\"logout()\">\n            <i class=\"material-icons\">exit_to_app</i>\n            Logout\n          </a>\n        </li>\n        </ul>\n      </ng-template>\n      <form class=\"navbar-form navbar-right\" role=\"search\">\n        <div class=\"form-group form-black is-empty\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n          <i class=\"material-icons\">search</i>\n          <div class=\"ripple-container\"></div>\n        </button>\n      </form>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, element, loginService) {
        this.element = element;
        this.loginService = loginService;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 200px;\n}\n.sidebar-wrapper {\n  width: 222px;\n}\n.nav-container {\n  width: 220px;\n}\nli {\n  width: 210px;\n}\nli a {\n  margin-left: 8px;\n  margin-right: 8px;\n  width: 200px;\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"#\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"assets/img/angular2-logo-red.png\"/>\n        </div>\n        Bill's PC\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    \n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'teambuilder', title: 'Teambuilder', icon: 'view_quilt', class: '' },
    { path: 'pokemonbox', title: 'Pokemon Box', icon: 'grid_on', class: '' },
    { path: 'corecoverage', title: 'Core Coverage', icon: 'repeat_one', class: '' },
    { path: 'defensivecoverage', title: 'Defensive Coverage', icon: 'view_list', class: '' },
    { path: 'offensivecoverage', title: 'Offensive Coverage', icon: 'view_stream', class: '' },
    { path: 'offensevsdefense', title: 'Offense vs Defense', icon: 'poll', class: '' },
    { path: 'featured', title: 'Featured Teams', icon: 'trending_up', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Material Dashboard Heading</h4>\n            <p class=\"category\">Created using Roboto Font Family</p>\n          </div>\n          <div class=\"card-content\">\n            <div id=\"typography\">\n              <div class=\"title\">\n                <h2>Typography</h2>\n              </div>\n              <div class=\"row\">\n                <div class=\"tim-typo\">\n                  <h1>\n                    <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                </div>\n                <div class=\"tim-typo\">\n                  <h2>\n                    <span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\n                </div>\n                <div class=\"tim-typo\">\n                  <h3>\n                    <span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\n                </div>\n                <div class=\"tim-typo\">\n                  <h4>\n                    <span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\n                </div>\n                <div class=\"tim-typo\">\n                  <h5>\n                    <span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\n                </div>\n                <div class=\"tim-typo\">\n                  <h6>\n                    <span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\n                </div>\n                <div class=\"tim-typo\">\n                  <p>\n                    <span class=\"tim-note\">Paragraph</span>\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.\n                    I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people,\n                    this is the level that things could be at.</p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Quote</span>\n                  <blockquote>\n                    <p>\n                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.\n                      I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people,\n                      this is the level that things could be at.\n                    </p>\n                    <small>\n                      Kanye West, Musician\n                    </small>\n                  </blockquote>\n                </div>\n\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Muted Text</span>\n                  <p class=\"text-muted\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                  </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Primary Text</span>\n                  <p class=\"text-primary\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Info Text</span>\n                  <p class=\"text-info\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Success Text</span>\n                  <p class=\"text-success\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Warning Text</span>\n                  <p class=\"text-warning\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                  </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <span class=\"tim-note\">Danger Text</span>\n                  <p class=\"text-danger\">\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                </div>\n                <div class=\"tim-typo\">\n                  <h2>\n                    <span class=\"tim-note\">Small Tag</span>\n                    Header with small subtitle\n                    <br>\n                    <small>Use \"small\" tag for the headers</small>\n                  </h2>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreCoverageComponent = (function () {
    function CoreCoverageComponent() {
    }
    CoreCoverageComponent.prototype.ngOnInit = function () {
    };
    CoreCoverageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-corecoverage',
            template: __webpack_require__("./src/app/corecoverage/corecoverage.component.html"),
            styles: [__webpack_require__("./src/app/corecoverage/corecoverage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreCoverageComponent);
    return CoreCoverageComponent;
}());

//# sourceMappingURL=corecoverage.component.js.map

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.row {\n  width: 100%;\n}\n.card {\n  margin-bottom: 0px;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n  padding: 0px;\n  margin: 0px;\n}\n/* Squeeze more space out of our tables */\n.card-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.card-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.card-footer {\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\ntable {\n  font-size: 14px;\n}\n.pkmn-table {\n  width: 100%;\n}\n.pls-land {\n  vertical-align: bottom;\n}\n/* Highlights */\n.bg-red {\n  background-color: rgb(245, 70, 60);\n}\n.bg-red:hover {\n  background-color: rgb(255, 90, 70);\n}\n.bg-pink {\n  background-color: rgb(240, 100, 90);\n}\n.bg-pink:hover {\n  background-color: rgb(240, 120, 110);\n}\n.bg-lime {\n  background-color: rgb(140, 210, 140);\n}\n.bg-lime:hover {\n  background-color: rgb(150, 220, 150);\n}\n.bg-green {\n  background-color: rgb(90, 190, 90);\n}\n.bg-green:hover {\n  background-color: rgb(110, 200, 110);\n}\n/* Readability */\nthead {\n  color: #333333;\n}\ntd {\n  color: #000000;\n  font-weight: bold;\n}\n.material-icons.md-18 {\n  font-size: 18px;\n}\n.ta-center {\n  text-align: center;\n}\na i {\n  display: inline;\n}\n.nav-link {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.nav {\n  margin: 0px\n}"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n\n          <div class=\"card-content\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center pls-land\">\n                      <img src=\"{{ types.none }}\" class=\"type\">\n                      <br/> Type <br/>\n                    </th>\n                    <th class=\"ta-center\" *ngFor=\"let pkmn of pokemonCol; let i = index\">\n                      <img src=\"{{ pkmn.sprites }}\" class=\"sprite\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\n                      <br/>{{ pkmn.name | titlecase }}\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <!-- translation: foreach (Pokemon in favTeam.sort(sortBy, ascending)) } -->\n                  <tr *ngFor=\"let type of types.img; let i = index\" class=\"{{ rowColor[i] }}\">\n                    <td class=\"ta-center\">\n                      <img src=\"{{ type }}\" class=\"type\">\n                    </td>\n                    <td *ngFor=\"let effective of myTable\" class=\"ta-center\">\n                      {{ effective[i] | percent }}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefensiveCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefensiveCoverageComponent = (function () {
    function DefensiveCoverageComponent() {
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */]();
        /* Assign my favTeam using teamService */
        this.teamService = new __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__["a" /* TeamService */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-defensivecoverage',
            template: __webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.html"),
            styles: [__webpack_require__("./src/app/defensivecoverage/defensivecoverage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefensiveCoverageComponent);
    return DefensiveCoverageComponent;
}());

//# sourceMappingURL=defensivecoverage.component.js.map

/***/ }),

/***/ "./src/app/featured/featured.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<input [(ngModel)]=\"id\" type=\"text\"/>\n<button (click)=\"getPokemon()\">get pokemon</button>\n<p>Name: {{myPokemon.name}}</p>\n<p>Height: {{myPokemon.height}}</p>\n-->\n"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedComponent = (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () { };
    FeaturedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-featured',
            template: __webpack_require__("./src/app/featured/featured.component.html"),
            styles: [__webpack_require__("./src/app/featured/featured.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());

//# sourceMappingURL=featured.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-bottom: 1px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-bottom: 1px solid #a94442; /* red */\n  }\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      \n      <div class=\"col-lg-4\">\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Login</h4>\n            <p class=\"category\">To access your saved pokemon and teams</p>\n          </div>\n          <div class=\"card-content\">\n            <!-- Display warning here if username is taken or some other error -->\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\n\n            <div *ngIf=\"!submitted\">\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"username\">Username</label>\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"password\">Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n                      [(ngModel)]=\"password\">\n                    </div>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!loginForm.form.valid\">Login</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n            <!-- Invisible before submit -->\n            <div *ngIf=\"submitted\">\n              <div *ngIf=\"valid\">\n                <div class=\"h3\">\n                    You have successfully Logged In!\n                </div>\n              </div>\n              <div *ngIf=\"!valid\">\n                <div class=\"h3\">\n                    Invalid login credentials\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/offensevsdefense/offensevsdefense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffenseVsDefenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-offensevsdefense',
            template: __webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.html"),
            styles: [__webpack_require__("./src/app/offensevsdefense/offensevsdefense.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffenseVsDefenseComponent);
    return OffenseVsDefenseComponent;
}());

//# sourceMappingURL=offensevsdefense.component.js.map

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header\" data-background-color=\"red\">\n        <h4 class=\"title\">Notifications</h4>\n        <p class=\"category\">Handcrafted by our friend\n        </p>\n      </div>\n      <div class=\"card-content\">\n        \n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffensiveCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OffensiveCoverageComponent = (function () {
    function OffensiveCoverageComponent() {
    }
    OffensiveCoverageComponent.prototype.ngOnInit = function () { };
    OffensiveCoverageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-offensivecoverage',
            template: __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.html"),
            styles: [__webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffensiveCoverageComponent);
    return OffensiveCoverageComponent;
}());

//# sourceMappingURL=offensivecoverage.component.js.map

/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'pkmnFilter'
        })
    ], Filter);
    return Filter;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'pkmnSort'
        })
    ], Sort);
    return Sort;
}());

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "./src/app/pokemon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon; });
var Pokemon = (function () {
    function Pokemon() {
    }
    return Pokemon;
}());

//# sourceMappingURL=pokemon.js.map

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.row {\n  width: 100%;\n}\n.card {\n  height: 575px;\n  margin-bottom: 0px;\n}\n.table-responsive {\n  max-height: 435px;\n  overflow-y: scroll;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n}\n/* Squeeze more space out of our tables */\n.card-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.card-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.card-footer {\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n}\ntable {\n  font-size: 12px;\n}\ntd input {\n  width: 100px;\n}\n.type-col {\n  width: 70px;\n}\n.form-group {\n  margin-top: 0px;\n}\n.poke-search {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n.pkmn-table {\n  width: 100%;\n}\n/* Readability */\nthead {\n  color: #333333;\n}\n.material-icons.md-18 { font-size: 18px; }\n.ta-center { text-align: center; }\na i {\n  display: inline;\n}\n.nav-link {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.nav {\n  margin: 0px\n}"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"purple\">\n            <ul class=\"nav nav-pills ta-center\">\n              <li>\n                <a role=\"button\" (click)=\"newTeam()\">\n                  <i class=\"material-icons\">create_new_folder</i> New Team\n                </a>\n              </li>\n              <li>\n                <a role=\"button\" (click)=\"saveTeam(newTeamName)\">\n                  <i class=\"material-icons\">save</i> Save Team\n                </a>\n              </li>\n              <li>\n                <a role=\"button\" (click)=\"setFavoriteTeam(newTeamName)\">\n                  <i class=\"material-icons\">{{ favoriteIcon }}</i> Favorite\n                </a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"card-content\">\n            <form class=\"row poke-search\" role=\"search\">\n              <div class=\"form-group col-sm-12 col-xl-12\">\n                <input [(ngModel)]=\"newTeamName\" name=\"newTeamName\" type=\"text\" class=\"form-control\" placeholder=\"Team Name\" [(value)]=\"Untitled\">\n                <span class=\"material-input\"></span>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\n                      {{ col | titlecase }}\n                    </th>\n                  </tr>\n                </thead>\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"favTeam\">\n                  <tr *ngFor=\"let pkmn of favTeam; let i = index\"\n                    dnd-sortable [sortableIndex]=\"i\">\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name }}</td>\n                    <td class=\"ta-center type-col\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"purple\">\n            <ul class=\"nav nav-pills\">\n              <li class=\"active\">\n                <a data-toggle=\"pill\" href=\"#pokeBox\">\n                  <i class=\"material-icons\">line_weight</i> Pokemon\n                </a>\n              </li>\n              <li>\n                <a data-toggle=\"pill\" href=\"#teamBox\">\n                  <i class=\"material-icons\">view_module</i> Teams\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-content\">\n            <form class=\"row poke-search\" role=\"search\">\n              <div class=\"form-group col-sm-12 col-xl-12\">\n                <input [(ngModel)]=\"searchBox\" name=\"searchBox\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Search Pokemon\">\n                <span class=\"material-input\"></span>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer tab-content\">\n\n            <div class=\"table-responsive pkmn-table tab-pane fade in active\" id=\"pokeBox\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\n                      {{ col | titlecase }}\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"myBox\">\n                  <!-- translation: foreach (Pokemon in myBox.sort(sortBy, ascending)) { filterBy(searchBox) } -->\n                  <tr *ngFor=\"let boxpkmn of ((myBox | pkmnSort: sortBy:ascending) | pkmnFilter: searchBox); let i = index\"\n                    dnd-sortable [sortableIndex]=\"i\">\n                    <td class=\"ta-center\" (click)=\"selectPokemon(boxpkmn)\" role=\"button\">{{ boxpkmn.name }}</td>\n                    <td class=\"ta-center type-col\">\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[1])] }}\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center\" *ngFor=\"let move of boxpkmn.moveset\">{{ move }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div class=\"table-responsive pkmn-table tab-pane fade\" id=\"teamBox\">\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonBoxComponent = (function () {
    function PokemonBoxComponent() {
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */]();
        /* Assign my favTeam using teamService */
        this.teamService = new __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__["a" /* TeamService */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pokemonbox',
            template: __webpack_require__("./src/app/pokemonbox/pokemonbox.component.html"),
            styles: [__webpack_require__("./src/app/pokemonbox/pokemonbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PokemonBoxComponent);
    return PokemonBoxComponent;
}());

//# sourceMappingURL=pokemonbox.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-bottom: 1px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-bottom: 1px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Register</h4>\n            <p class=\"category\">To start saving your teams and Pokemon</p>\n          </div>\n          <div class=\"card-content\">\n            <!-- Display warning here if username is taken or some other error -->\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\n\n            <div *ngIf=\"!submitted\">\n              <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"username\">Username</label>\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"email\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"password\">Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"cpassword\">Confirm Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"cpassword\" name=\"cpassword\"\n                      [(ngModel)]=\"cpassword\" (ngModelChange)=\"matchPassword()\">\n                    </div>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!registerForm.form.valid\" \n                  [disabled]=\"!passwordMatch\">\n                  Register\n                </button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n            <!-- Invisible before submit -->\n            <div *ngIf=\"submitted\">\n              <div *ngIf=\"valid\">\n                <div class=\"h3\">\n                  You have successfully registered!\n                </div>\n                <div class=\"h4\">\n                  No email confirmation necessary\n                </div>\n              </div>\n              <div *ngIf=\"!valid\">\n                <div class=\"h3\">\n                    Registration Failed\n                  </div>\n                  <div class=\"h4\">\n                    Username is already in use\n                  </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a href=\"#bill\">\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\n            </a>\n          </div>\n\n          <div class=\"content\">\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\n            <p class=\"card-content\">\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\n              analytics and statistics are provided by our leading Professors.\n            </p>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/services/logging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggingService = (function () {
    function LoggingService() {
    }
    LoggingService.prototype.log = function (status, message) {
        console.log('Status: ' + status + ' message: ' + message);
    };
    LoggingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], LoggingService);
    return LoggingService;
}());

//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.trainerSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](JSON.parse(localStorage.getItem('trainer')));
        this.currentTrainer = this.trainerSource.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('username', username).set('password', password);
        return this.http.post('login', body);
    };
    LoginService.prototype.logout = function () {
        return this.http.get('logout');
    };
    LoginService.prototype.changeTrainer = function (trainer) {
        this.trainerSource.next(trainer);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/move.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoveService = (function () {
    function MoveService(http) {
        this.http = http;
        this.url = 'https://pokeapi.co/api/v2/move/';
    }
    MoveService.prototype.getMove = function (name) {
        return this.http.get(this.url + name);
    };
    MoveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], MoveService);
    return MoveService;
    var _a;
}());

//# sourceMappingURL=move.service.js.map

/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonService = (function () {
    function PokemonService(http) {
        this.http = http;
    }
    PokemonService.prototype.getJson = function () {
        return this.http.get('assets/pokeAPI.json');
    };
    PokemonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], PokemonService);
    return PokemonService;
    var _a;
}());

//# sourceMappingURL=pokemon.service.js.map

/***/ }),

/***/ "./src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (username, password, email) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('username', username).set('password', password).set('email', email);
        return this.http.post('register', body);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "./src/app/services/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon__ = __webpack_require__("./src/app/pokemon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = (function () {
    function TeamService() {
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */]();
        // Making my team
        this.pkmn1 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn2 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn3 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn4 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn5 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn6 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* Pokemon */]();
        this.pkmn1.name = 'Jolteon';
        this.pkmn1.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
        this.pkmn1.types = ['electric', 'none'];
        this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
        this.pkmn1.stats = { hp: 65, atk: 65, def: 60, satk: 110, sdef: 110, spe: 130 };
        this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
        this.pkmn2.name = 'Exeggutor';
        this.pkmn2.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
        this.pkmn2.types = ['grass', 'psychic'];
        this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
        this.pkmn2.stats = { hp: 95, atk: 95, def: 85, satk: 125, sdef: 125, spe: 55 };
        this.pkmn3.name = 'Moltres';
        this.pkmn3.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
        this.pkmn3.types = ['fire', 'flying'];
        this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
        this.pkmn3.stats = { hp: 90, atk: 100, def: 90, satk: 125, sdef: 125, spe: 90 };
        this.pkmn4.name = 'Slowbro';
        this.pkmn4.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
        this.pkmn4.types = ['water', 'psychic'];
        this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
        this.pkmn4.stats = { hp: 65, atk: 75, def: 110, satk: 80, sdef: 80, spe: 30 };
        this.pkmn5.name = 'Chansey';
        this.pkmn5.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
        this.pkmn5.types = ['normal', 'none'];
        this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
        this.pkmn5.stats = { hp: 250, atk: 5, def: 5, satk: 105, sdef: 105, spe: 50 };
        this.pkmn6.name = 'Gengar';
        this.pkmn6.sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
        this.pkmn6.types = ['ghost', 'poison'];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TeamService);
    return TeamService;
}());

//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ "./src/app/services/type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TypeService);
    return TypeService;
}());

//# sourceMappingURL=type.service.js.map

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.container-fluid {\n  padding-left: 0px;\n}\n.row {\n  width:100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.stats {\n  width:100%;\n}\n.col-md-12 {\n  max-height: 470px;\n}\n/* Card styling */\n.card {\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\n          box-shadow: 0px 2px 8px #BBBBBB;\n  margin: 18px 0px;\n  max-height: 450px;\n}\n.card-content {\n  padding-bottom: 0px;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.card-stats {\n  min-height: 450px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.card-footer {\n  padding-top: 0px;\n  max-height: 500px;\n}\n.card-footer.ta-center {\n  margin-bottom: 0px!important;\n}\n/* Removes bullets and the padding that would normally be for the bullets */\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n  padding: 0px;\n  margin: 0px;\n}\n.badge {\n  margin: 5px;\n  background-color: rgb(255, 70, 60);\n}\n/* Squeeze more space out of our tables */\ntable {\n  font-size: 12px;\n}\ntd input {\n  width: 100px;\n}\n.type-col {\n  width: 70px;\n}\n.stat-col {\n  width: 42px;\n}\n.form-group {\n  margin-top: 0px;\n}\n.poke-search {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n.pkmn-table {\n  width: 100%;\n  max-height: 450px;\n  margin-left: 4px;\n}\n.material-icons.md-18 {\n  font-size: 18px;\n  }\n.ta-center {\n  text-align: center;\n  }\n.no-padding {\n  padding: 0px;\n}\n.no-pad-top {\n  padding-top: 0px!important;\n}\n.mt-10 {\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <ul *ngIf=\"selectedPkmn\">\n      Test div please ignore\n      <li *ngFor=\"let app of apps\">\n      </li>\n    </ul>\n    <div class=\"row\">\n      <!-- Loop through and print every Pokemon in favTeam -->\n      <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of favTeam; let i = index\">\n        <div class=\"card\">\n          <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectPokemon(pkmn)\">\n            <img src=\"{{ favTeam[i].sprites }}\" alt=\"\" />\n          </div>\n          <div class=\"card-content ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\n            <img src=\"{{ types.img[types.name.indexOf(favTeam[i].types[0])] }}\" alt=\"\" class=\"type\" />\n            <img src=\"{{ types.img[types.name.indexOf(favTeam[i].types[1])] }}\" alt=\"\" class=\"type\" />\n            <h4 class=\"title\">{{ favTeam[i].name }}</h4>\n          </div>\n          <div class=\"card-footer ta-center\">\n            <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\n              {{ collapse }}\n            </i>\n            <div class=\"stats\" *ngIf=\"expandOrCollapse\">\n              <ul>\n                <li *ngFor=\"let atk of favTeam[i].moveset\">{{ atk }}</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-7 col-md-12\">\n        <div class=\"card card-stats container-fluid\">\n          <div class=\"card-header card-chart\" data-background-color=\"purple\">\n            <div class=\"ct-chart\" id=\"pokemonStatChart\"></div>\n          </div>\n\n          <div class=\"card-content ta-center row\">\n            <img class=\"sprite col-sm-3 col-xl-3\" src=\"{{ selectedPkmn.sprites }}\" title=\"{{ selectedPkmn.sprites }}\" />\n            <div class=\"no-padding col-sm-3 col-xl-3\">\n              <img src=\"{{ types.img[types.name.indexOf(selectedPkmn.types[0])] }}\" class=\"type\" />\n              <img src=\"{{ types.img[types.name.indexOf(selectedPkmn.types[1])] }}\" class=\"type\" />\n              <br/>\n              <span class=\"badge red\">\n                Critical Rate\n                <br/> {{ selectedPkmn.stats.spe * 100 / 512 | number:'2.1-2'}} %\n              </span>\n              <br/>\n              <small>\n                <a href=\"https://www.smogon.com/dex/rb/pokemon/{{selectedPkmn.name}}\">Smogon Analysis</a>\n              </small>\n            </div>\n            <form class=\"row poke-search\" role=\"search\">\n              <div class=\"form-group col-sm-4 col-xl-4\">\n                <input [(ngModel)]=\"searchInput\" name=\"searchInput\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Search Pokemon\" [(value)]=\"selectedPkmn.name\">\n                <span class=\"material-input\"></span>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer mt-10\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Class</th>\n                    <th>Pow</th>\n                    <th>Acc</th>\n                    <th>PP</th>\n                    <th>Effect</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[0]\" list=\"canLearn\" name=\"move\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.electric }}\" class=\"type\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.special }}\" class=\"type\">\n                    </td>\n                    <td>95</td>\n                    <td>100%</td>\n                    <td>16</td>\n                    <td>10% paralysis chance.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[1]\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.ice }}\" class=\"type\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.special }}\" class=\"type\">\n                    </td>\n                    <td>95</td>\n                    <td>100%</td>\n                    <td>16</td>\n                    <td>10% freeze chance.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[2]\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.fight }}\" class=\"type\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.physical }}\" class=\"type\">\n                    </td>\n                    <td>--</td>\n                    <td>100%</td>\n                    <td>32</td>\n                    <td>If hit by normal or fighting type attack, returns double damage.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[3]\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.normal }}\" class=\"type\">\n                    </td>\n                    <td>\n                      <img src=\"{{ types.status }}\" class=\"type\">\n                    </td>\n                    <td>--</td>\n                    <td>--</td>\n                    <td>16</td>\n                    <td>Heals self by 50% of max HP.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-5 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-content no-pad-top\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnTableColNames; let i = index\">\n                      {{ col | titlecase }}\n                      <br/>\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <!-- translation: foreach (Pokemon in Pokedex.sort(sortBy, ascending)) { filterBy(searchInput) } -->\n                  <tr class=\"search-row\" \n                  *ngFor=\"let pkmn of ((pokedex | pkmnSort: sortBy:ascending) | pkmnFilter: searchInput); let i = index\">\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\n                    <td class=\"ta-center type-col\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.hp }}</td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.atk }}</td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.def }}</td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.satk }}</td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.sdef }}</td>\n                    <td class=\"ta-center stat-col\">{{ pkmn.stats.spe }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeambuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeambuilderComponent = (function () {
    function TeambuilderComponent(pokemonService) {
        this.pokemonService = pokemonService;
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_4_app_services_type_service__["a" /* TypeService */]();
        // Assign my favTeam using teamService
        this.teamService = new __WEBPACK_IMPORTED_MODULE_3_app_services_team_service__["a" /* TeamService */]();
        this.favTeam = this.teamService.favTeam;
        // My default selected Pokemon
        this.selectedPkmn = this.favTeam[0];
        // by default our attacks are collapsed
        this.expandOrCollapse = false;
        this.collapse = 'arrow_drop_down';
        // this can be used as a placeholder image before searching for a pokemon
        this.questionSprite = 'assets/img/question.png';
        this.pkmnTableColNames = ['name', 'type', 'hp', 'atk', 'def', 'satk', 'sdef', 'spe'];
        this.colSortIcons = [
            'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert',
            'swap_vert', 'swap_vert', 'swap_vert', 'swap_vert'
        ];
        this.sortBy = 'name';
        this.ascending = true;
        //
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
    TeambuilderComponent.prototype.selectPokemon = function (pkmn) {
        this.selectedPkmn = pkmn;
        this.ngOnInit();
        // The below for loop doesnt work
        // for (let i = 0; i < pkmn.moveset.length; i++) {
        //   this.moveService.getMove(pkmn.moveset[i]).subscribe(data => this.selPkmnMoves[i] = data);
        //   console.log(this.selPkmnMoves[i]);
        // }
    };
    TeambuilderComponent.prototype.getPokeAPIjson = function () {
        var _this = this;
        this.pokemonService.getJson().subscribe(function (data) {
            _this.pokedex = data;
        }, function (error) {
            console.error(error);
        });
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
    TeambuilderComponent.prototype.ngOnInit = function () {
        // Load 151 Pokemon into this.pokedex
        this.getPokeAPIjson();
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
        var pokemonStatChart = new __WEBPACK_IMPORTED_MODULE_5_chartist__["Bar"]('#pokemonStatChart', dataPokemonStatChart, optionsPokemonStatChart, responsiveOptions);
        // start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(pokemonStatChart);
    };
    TeambuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-teambuilder',
            template: __webpack_require__("./src/app/teambuilder/teambuilder.component.html"),
            styles: [__webpack_require__("./src/app/teambuilder/teambuilder.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_2_app_services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_3_app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4_app_services_type_service__["a" /* TypeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object])
    ], TeambuilderComponent);
    return TeambuilderComponent;
    var _a;
}());

//# sourceMappingURL=teambuilder.component.js.map

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map