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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/index.js");
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
                __WEBPACK_IMPORTED_MODULE_9_app_pipe_sort_pipe__["a" /* Sort */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_25_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_logging_service__["a" /* LoggingService */], __WEBPACK_IMPORTED_MODULE_21__services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_22__services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_23__services_type_service__["a" /* TypeService */], __WEBPACK_IMPORTED_MODULE_24__services_register_service__["a" /* RegisterService */]],
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

module.exports = "<footer>\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"pull-left\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://www.reddit.com/u/me\">\r\n            Contact\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.revature.com\">\r\n            Revature\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://github.com/revatureclass/1802java-nick-project2-theelitefour\">\r\n            Github\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.twitter.com\">\r\n            Follow Us\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <p class=\"copyright pull-right\">\r\n      &copy; {{test | date: 'yyyy'}}\r\n      <a href=\"#\">The Elite Four</a>\r\n    </p>\r\n  </div>\r\n</footer>"

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

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a routerLink='login'>\r\n            <i class=\"material-icons\">account_circle</i>\r\n            Login\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='register'>\r\n            <i class=\"material-icons\">person</i>\r\n            Register\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"\">\r\n          <a>\r\n            <i class=\"material-icons\">exit_to_app</i>\r\n            Logout\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <form class=\"navbar-form navbar-right\" role=\"search\">\r\n        <div class=\"form-group form-black is-empty\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n          <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n          <i class=\"material-icons\">search</i>\r\n          <div class=\"ripple-container\"></div>\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
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
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
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
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());

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

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Material Dashboard Heading</h4>\r\n            <p class=\"category\">Created using Roboto Font Family</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div id=\"typography\">\r\n              <div class=\"title\">\r\n                <h2>Typography</h2>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"tim-typo\">\r\n                  <h1>\r\n                    <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h2>\r\n                    <span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h3>\r\n                    <span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h4>\r\n                    <span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h5>\r\n                    <span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h6>\r\n                    <span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <p>\r\n                    <span class=\"tim-note\">Paragraph</span>\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                    I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people,\r\n                    this is the level that things could be at.</p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Quote</span>\r\n                  <blockquote>\r\n                    <p>\r\n                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                      I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people,\r\n                      this is the level that things could be at.\r\n                    </p>\r\n                    <small>\r\n                      Kanye West, Musician\r\n                    </small>\r\n                  </blockquote>\r\n                </div>\r\n\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Muted Text</span>\r\n                  <p class=\"text-muted\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Primary Text</span>\r\n                  <p class=\"text-primary\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Info Text</span>\r\n                  <p class=\"text-info\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Success Text</span>\r\n                  <p class=\"text-success\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Warning Text</span>\r\n                  <p class=\"text-warning\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                  </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <span class=\"tim-note\">Danger Text</span>\r\n                  <p class=\"text-danger\">\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                </div>\r\n                <div class=\"tim-typo\">\r\n                  <h2>\r\n                    <span class=\"tim-note\">Small Tag</span>\r\n                    Header with small subtitle\r\n                    <br>\r\n                    <small>Use \"small\" tag for the headers</small>\r\n                  </h2>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = ""

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Design Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\r\n                            <iframe src=\"https://design.google.com/icons/\">\r\n                                <p>Your browser does not support iframes.</p>\r\n                            </iframe>\r\n                        </div>\r\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\r\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefensiveCoverageComponent; });
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

var DefensiveCoverageComponent = (function () {
    function DefensiveCoverageComponent() {
    }
    DefensiveCoverageComponent.prototype.ngOnInit = function () {
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

module.exports = "<!--\r\n<input [(ngModel)]=\"id\" type=\"text\"/>\r\n<button (click)=\"getPokemon()\">get pokemon</button>\r\n<p>Name: {{myPokemon.name}}</p>\r\n<p>Height: {{myPokemon.height}}</p>\r\n-->\r\n"

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

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-bottom: 1px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-bottom: 1px solid #a94442; /* red */\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Login</h4>\r\n            <p class=\"category\">To access your saved pokemon and teams</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!loginForm.form.valid\" [disabled]=\"!passwordMatch\">Login</button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted\">\r\n              <div class=\"h3\">\r\n                You have successfully Logged In!\r\n              </div>\r\n              <div class=\"h4\">\r\n                No email confirmation necessary\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <a href=\"#bill\">\r\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"content\">\r\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\r\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\r\n            <p class=\"card-content\">\r\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\r\n              analytics and statistics are provided by our leading Professors.\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = (function () {
    function LoginComponent() {
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        var xhr = new XMLHttpRequest();
        // receive reply
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var reply = JSON.parse(xhr.responseText);
                alert(reply);
                document.getElementById('notification').innerHTML = reply;
            }
        };
        // send request to /login with fields, username, password, email
        xhr.open('POST', 'login', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('username=' + this.username + '&password=' + this.password);
        // xhr.send('username=' + this.username + 'password=' + this.password);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());

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

module.exports = "<div id=\"map\"></div>\r\n"

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
    OffensiveCoverageComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.offensivecoverage.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.offensivecoverage.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.offensivecoverage.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
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
        sortBy = sortBy;
        var sortedArray;
        /* Begin: "I want to use a ternary operator so bad, but it would be hard to read if I did." */
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
            var i_2;
            if (sortBy === 'hp') {
                i_2 = 0;
            }
            else if (sortBy === 'atk') {
                i_2 = 1;
            }
            else if (sortBy === 'def') {
                i_2 = 2;
            }
            else if (sortBy === 'satk') {
                i_2 = 3;
            }
            else if (sortBy === 'sdef') {
                i_2 = 4;
            }
            else if (sortBy === 'spe') {
                i_2 = 5;
            }
            sortedArray = pkmnList.sort(function (p1, p2) { return p1.stats[i_2] - p2.stats[i_2]; });
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

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.row {\r\n  width: 100%;\r\n}\r\n.card {\r\n  height: 575px;\r\n  margin-bottom: 0px;\r\n}\r\n.table-responsive {\r\n  max-height: 435px;\r\n  overflow-y: scroll;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n/* Squeeze more space out of our tables */\r\n.card-header {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.card-content {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n.card-footer {\r\n  padding-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n}\r\n/* Readability */\r\nthead {\r\n  color: #333333;\r\n}\r\n.material-icons.md-18 { font-size: 18px; }\r\n.ta-center { text-align: center; }\r\na i {\r\n  display: inline;\r\n}\r\n.nav-link {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.nav {\r\n  margin: 0px\r\n}"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills ta-center\">\r\n              <li>\r\n                <a role=\"button\" (click)=\"newTeam()\">\r\n                  <i class=\"material-icons\">create_new_folder</i> New Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"saveTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">save</i> Save Team\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a role=\"button\" (click)=\"setFavoriteTeam(newTeamName)\">\r\n                  <i class=\"material-icons\">{{ favoriteIcon }}</i> Favorite\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-12 col-xl-12\">\r\n                <input [(ngModel)]=\"newTeamName\" name=\"newTeamName\" type=\"text\" class=\"form-control\" placeholder=\"Team Name\" [(value)]=\"Untitled\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <br/>\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"favTeam\">\r\n                  <!-- translation: foreach (Pokemon in favTeam.sort(sortBy, ascending)) } -->\r\n                  <tr *ngFor=\"let pkmn of (favTeam | pkmnSort: sortBy:ascending); let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name }}</td>\r\n                    <td class=\"ta-center\">\r\n                      <img src=\"{{ pkmn.types[0] }}\" class=\"type\">\r\n                      <img src=\"{{ pkmn.types[1] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"purple\">\r\n            <ul class=\"nav nav-pills\">\r\n              <li class=\"active\">\r\n                <a data-toggle=\"pill\" href=\"#pokeBox\">\r\n                  <i class=\"material-icons\">line_weight</i> Pokemon\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a data-toggle=\"pill\" href=\"#teamBox\">\r\n                  <i class=\"material-icons\">view_module</i> Teams\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-12 col-xl-12\">\r\n                <input [(ngModel)]=\"searchBox\" name=\"searchBox\" type=\"text\" class=\"form-control\"\r\n                  placeholder=\"Search Pokemon\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer tab-content\">\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade in active\" id=\"pokeBox\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\r\n                      {{ col | titlecase }}\r\n                      <br/>\r\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"myBox\">\r\n                  <!-- translation: foreach (Pokemon in myBox.sort(sortBy, ascending)) { filterBy(searchBox) } -->\r\n                  <tr *ngFor=\"let pkmn of ((myBox | pkmnSort: sortBy:ascending) | pkmnFilter: searchBox); let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name }}</td>\r\n                    <td class=\"ta-center\">\r\n                      <img src=\"{{ pkmn.types[0] }}\" class=\"type\">\r\n                      <img src=\"{{ pkmn.types[1] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-responsive pkmn-table tab-pane fade\" id=\"teamBox\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
        if (this.saveTeam(newTeamName)) {
            this.favTeam = this.curTeam;
            this.favoriteIcon = 'star';
            if (newTeamName.length < 1) {
                newTeamName = 'Untitled';
            }
            // set favTeam.name = newTeamName;
        }
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

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-bottom: 1px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-bottom: 1px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <h4 class=\"title\">Register</h4>\r\n            <p class=\"category\">To start saving your teams and Pokemon</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <!-- Display warning here if username is taken or some other error -->\r\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\r\n\r\n            <div *ngIf=\"!submitted\">\r\n              <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"username\">Username</label>\r\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"email\">Email address</label>\r\n                      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"password\">Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group form-black label-floating is-empty\">\r\n                      <label class=\"control-label\" for=\"cpassword\">Confirm Password</label>\r\n                      <input required type=\"password\" class=\"form-control\" id=\"cpassword\" name=\"cpassword\"\r\n                      [(ngModel)]=\"cpassword\" (ngModelChange)=\"matchPassword()\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!registerForm.form.valid\" \r\n                  [disabled]=\"!passwordMatch\">\r\n                  Register\r\n                </button>\r\n                <div class=\"clearfix\"></div>\r\n              </form>\r\n            </div>\r\n            <!-- Invisible before submit -->\r\n            <div *ngIf=\"submitted\">\r\n              <div *ngIf=\"valid\">\r\n                <div class=\"h3\">\r\n                  You have successfully registered!\r\n                </div>\r\n                <div class=\"h4\">\r\n                  No email confirmation necessary\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!valid\">\r\n                <div class=\"h3\">\r\n                    Registration Failed\r\n                  </div>\r\n                  <div class=\"h4\">\r\n                    Username is already in use\r\n                  </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <a href=\"#bill\">\r\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"content\">\r\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\r\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\r\n            <p class=\"card-content\">\r\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\r\n              analytics and statistics are provided by our leading Professors.\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
    function MoveService() {
        this.url = 'https://pokeapi.co/api/v2/move/';
        this.http = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */](this.handler);
    }
    MoveService.prototype.getMove = function (name) {
        return this.http.get(this.url + name);
    };
    MoveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MoveService);
    return MoveService;
}());

//# sourceMappingURL=move.service.js.map

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
        this.pkmn1.types = [this.types.electric, this.types.none];
        this.pkmn1.stats = [65, 65, 60, 110, 110, 130];
        this.pkmn1.moveset = ['Thunderbolt', 'Pin Missile', 'Double Kick', 'Thunder Wave'];
        this.pkmn1.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png';
        this.pkmn2.name = 'Exeggutor';
        this.pkmn2.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png';
        this.pkmn2.types = [this.types.grass, this.types.psychic];
        this.pkmn2.moveset = ['Sleep Powder', 'Reflect', 'Psychic', 'Explosion'];
        this.pkmn2.stats = [95, 95, 85, 125, 125, 55];
        this.pkmn3.name = 'Moltres';
        this.pkmn3.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
        this.pkmn3.types = [this.types.fire, this.types.flying];
        this.pkmn3.moveset = ['Agility', 'Fire Spin', 'Fire Blast', 'Hyper Beam'];
        this.pkmn3.stats = [90, 100, 90, 125, 125, 90];
        this.pkmn4.name = 'Slowbro';
        this.pkmn4.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png';
        this.pkmn4.types = [this.types.water, this.types.psychic];
        this.pkmn4.moveset = ['Amnesia', 'Surf', 'Psychic', 'Reflect'];
        this.pkmn4.stats = [65, 75, 110, 80, 80, 30];
        this.pkmn5.name = 'Chansey';
        this.pkmn5.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png';
        this.pkmn5.types = [this.types.normal, this.types.none];
        this.pkmn5.moveset = ['Thunderbolt', 'Ice Beam', 'Counter', 'Softboiled'];
        this.pkmn5.stats = [250, 5, 5, 105, 105, 50];
        this.pkmn6.name = 'Gengar';
        this.pkmn6.sprite_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
        this.pkmn6.types = [this.types.ghost, this.types.poison];
        this.pkmn6.moveset = ['Thunderbolt', 'Mega Drain', 'Confuse Ray', 'Explosion'];
        this.pkmn6.stats = [60, 65, 60, 130, 130, 110];
        this.favTeam = new Array();
        this.favTeam.push(this.pkmn1);
        this.favTeam.push(this.pkmn2);
        this.favTeam.push(this.pkmn3);
        this.favTeam.push(this.pkmn4);
        this.favTeam.push(this.pkmn5);
        this.favTeam.push(this.pkmn6);
    }
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
        this.fight = 'assets/img/types/fight.png';
        this.flying = 'assets/img/types/flying.png';
        this.psychic = 'assets/img/types/psychic.png';
        this.ghost = 'assets/img/types/ghost.png';
        this.dragon = 'assets/img/types/dragon.png';
        this.physical = 'assets/img/types/physical.png';
        this.special = 'assets/img/types/special.png';
        this.status = 'assets/img/types/status.png';
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

module.exports = "/* Layout */\r\n.main-content {\r\n  margin-top: 50px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.row {\r\n  width:100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n.stats {\r\n  width:100%;\r\n}\r\n/* Card styling */\r\n.card {\r\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\r\n          box-shadow: 0px 2px 8px #BBBBBB;\r\n  margin: 18px 0px;\r\n}\r\n.card-content {\r\n  padding-bottom: 0px;\r\n}\r\n.card-stats {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n/* Removes bullets and the padding that would normally be for the bullets */\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n/* Native image sizes */\r\n.type {\r\n  width: 48px;\r\n  height: 16px;\r\n}\r\n.sprite {\r\n  width: 96px;\r\n  height: 96px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n/* Improve readability. Default is orange on white background. */\r\nth {\r\n  color: #111111;\r\n}\r\n/* Squeeze more space out of our tables */\r\ntable {\r\n  font-size: 12px;\r\n}\r\ntd input {\r\n  width: 100px;\r\n}\r\n.form-group {\r\n  margin-top: 0px;\r\n}\r\n.poke-search {\r\n  margin-top: 0px;\r\n  margin-left: 0px;\r\n}\r\n.pkmn-table {\r\n  width: 100%;\r\n  max-height: 600px;\r\n}\r\n.material-icons.md-18 { font-size: 18px; }\r\n.ta-center { text-align: center; }\r\n.no-padding {\r\n  padding: 0px;\r\n}"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n      <!-- Loop through and print every Pokemon in favTeam -->\r\n      <div class=\"col-lg-2 col-sm-4 col-xs-6\" *ngFor=\"let pkmn of favTeam; let i = index\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" data-background-color=\"orange\" \r\n            (click)=\"selectPokemon(pkmn)\" role=\"button\">\r\n            <img src=\"{{ favTeam[i].sprite_url }}\" alt=\"\" />\r\n          </div>\r\n          <div class=\"card-content ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\r\n            <img src=\"{{ favTeam[i].types[0] }}\" alt=\"\" class=\"type\" />\r\n            <img src=\"{{ favTeam[i].types[1] }}\" alt=\"\" class=\"type\" />\r\n            <h4 class=\"title\">{{ favTeam[i].name }}</h4>\r\n          </div>\r\n          <div class=\"card-footer ta-center\">\r\n            <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\r\n              {{ collapse }}\r\n            </i>\r\n            <div class=\"stats\" *ngIf=\"expandOrCollapse\">\r\n              <ul>\r\n                <li *ngFor=\"let atk of favTeam[i].moveset\">{{ atk }}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-7 col-md-12\">\r\n        <div class=\"card card-stats container-fluid\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"purple\">\r\n            <div class=\"ct-chart\" id=\"pokemonStatChart\"></div>\r\n          </div>\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            Critical Rate <br/>\r\n            {{ selectedPkmn.stats[5] * 100 / 512 | number:'2.1-2'}} %\r\n          </div>\r\n\r\n          <div class=\"card-content ta-center row\">\r\n            <div class=\"no-padding col-lg-3 col-md-3\">\r\n              <img src=\"{{ selectedPkmn.types[0] }}\" alt=\"normal\" class=\"type\" />\r\n              <img src=\"{{ selectedPkmn.types[1] }}\" alt=\"none\" class=\"type\" />\r\n              <h4 class=\"title\">{{ selectedPkmn.name }}</h4>\r\n              <small><a href=\"https://www.smogon.com/dex/rb/pokemon/{{selectedPkmn.name}}\">Smogon Analysis</a></small>\r\n            </div>\r\n            <img class=\"sprite col-lg-3 col-md-3\" src=\"{{ selectedPkmn.sprite_url }}\" alt=\"\" />\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Class</th>\r\n                    <th>Pow</th>\r\n                    <th>Acc</th>\r\n                    <th>PP</th>\r\n                    <th>Effect</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[0]\" list=\"canLearn\" name=\"move\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.electric }}\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.special }}\" class=\"type\">\r\n                    </td>\r\n                    <td>95</td>\r\n                    <td>100%</td>\r\n                    <td>16</td>\r\n                    <td>10% paralysis chance.</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[1]\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.ice }}\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.special }}\" class=\"type\">\r\n                    </td>\r\n                    <td>95</td>\r\n                    <td>100%</td>\r\n                    <td>16</td>\r\n                    <td>10% freeze chance.</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[2]\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.fight }}\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.physical }}\" class=\"type\">\r\n                    </td>\r\n                    <td>--</td>\r\n                    <td>100%</td>\r\n                    <td>32</td>\r\n                    <td>If hit by normal or fighting type attack, returns double damage.</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"text\" [(value)]=\"selectedPkmn.moveset[3]\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.normal }}\" class=\"type\">\r\n                    </td>\r\n                    <td>\r\n                      <img src=\"{{ types.status }}\" class=\"type\">\r\n                    </td>\r\n                    <td>--</td>\r\n                    <td>--</td>\r\n                    <td>16</td>\r\n                    <td>Heals self by 50% of max HP.</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-5 col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <form class=\"row poke-search\" role=\"search\">\r\n              <div class=\"form-group col-sm-12 col-xl-12\">\r\n                <input [(ngModel)]=\"searchInput\" name=\"searchInput\" type=\"text\" class=\"form-control\"\r\n                  placeholder=\"Search Pokemon\" [(value)]=\"selectedPkmn.name\">\r\n                <span class=\"material-input\"></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <div class=\"table-responsive pkmn-table\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-warning\">\r\n                  <tr>\r\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnTableColNames; let i = index\">\r\n                      {{ col | titlecase }}<br/>\r\n                      <i class=\"material-icons md-18\" role=\"button\" \r\n                        (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\r\n                      </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <!-- translation: foreach (Pokemon in favTeam.sort(sortBy, ascending)) { filterBy(searchInput) } -->\r\n                  <tr *ngFor=\"let pkmn of ((favTeam | pkmnSort: sortBy:ascending) | pkmnFilter: searchInput); let i = index\">\r\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name }}</td>\r\n                    <td class=\"ta-center\">\r\n                      <img src=\"{{ pkmn.types[0] }}\" class=\"type\">\r\n                      <img src=\"{{ pkmn.types[1] }}\" class=\"type\">\r\n                    </td>\r\n                    <td class=\"ta-center\" *ngFor=\"let stat of pkmn.stats\">{{ stat }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeambuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartist__);
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
    function TeambuilderComponent() {
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_3_app_services_type_service__["a" /* TypeService */]();
        /* Assign my favTeam using teamService */
        this.teamService = new __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__["a" /* TeamService */]();
        this.favTeam = this.teamService.favTeam;
        /* My default selected Pokemon */
        this.selectedPkmn = this.favTeam[0];
        this.moveService = new __WEBPACK_IMPORTED_MODULE_1_app_services_move_service__["a" /* MoveService */]();
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
        /* Pokemon Stat Chart initialization - rename Emails to Pokemon */
        var dataPokemonStatChart = {
            labels: [
                this.selectedPkmn.stats[0] + '\nHP',
                this.selectedPkmn.stats[1] + '\nAtk',
                this.selectedPkmn.stats[2] + '\nDef',
                this.selectedPkmn.stats[3] + '\nSatk',
                this.selectedPkmn.stats[4] + '\nSdef',
                this.selectedPkmn.stats[5] + '\nSpe'
            ],
            series: [this.selectedPkmn.stats]
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
        var pokemonStatChart = new __WEBPACK_IMPORTED_MODULE_4_chartist__["Bar"]('#pokemonStatChart', dataPokemonStatChart, optionsPokemonStatChart, responsiveOptions);
        // start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(pokemonStatChart);
    };
    TeambuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-teambuilder',
            template: __webpack_require__("./src/app/teambuilder/teambuilder.component.html"),
            styles: [__webpack_require__("./src/app/teambuilder/teambuilder.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__["a" /* TeamService */]]
        }),
        __metadata("design:paramtypes", [])
    ], TeambuilderComponent);
    return TeambuilderComponent;
}());

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