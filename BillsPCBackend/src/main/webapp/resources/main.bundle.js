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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__view_users_view_users_component__ = __webpack_require__("./src/app/view-users/view-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_convert_service__ = __webpack_require__("./src/app/services/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_feature_service__ = __webpack_require__("./src/app/services/feature.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_view_user_service__ = __webpack_require__("./src/app/services/view-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Pipes


// Components










// Services









// Custom Modules

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
                __WEBPACK_IMPORTED_MODULE_8__pipe_filter_pipe__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_9_app_pipe_sort_pipe__["a" /* Sort */],
                __WEBPACK_IMPORTED_MODULE_19__view_users_view_users_component__["a" /* ViewUsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__services_pokemon_service__["a" /* PokemonService */],
                __WEBPACK_IMPORTED_MODULE_20__services_move_service__["a" /* MoveService */],
                __WEBPACK_IMPORTED_MODULE_22__services_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_23__services_type_service__["a" /* TypeService */],
                __WEBPACK_IMPORTED_MODULE_25__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_24__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_26__services_convert_service__["a" /* ConvertService */],
                __WEBPACK_IMPORTED_MODULE_27__services_feature_service__["a" /* FeatureService */],
                __WEBPACK_IMPORTED_MODULE_28__services_view_user_service__["a" /* ViewUserService */]
            ],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_users_view_users_component__ = __webpack_require__("./src/app/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'view-user', component: __WEBPACK_IMPORTED_MODULE_13__view_users_view_users_component__["a" /* ViewUsersComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'teambuilder', component: __WEBPACK_IMPORTED_MODULE_6__teambuilder_teambuilder_component__["a" /* TeambuilderComponent */] },
    { path: 'pokemonbox', component: __WEBPACK_IMPORTED_MODULE_7__pokemonbox_pokemonbox_component__["a" /* PokemonBoxComponent */] },
    { path: 'corecoverage', component: __WEBPACK_IMPORTED_MODULE_8__corecoverage_corecoverage_component__["a" /* CoreCoverageComponent */] },
    { path: 'defensivecoverage', component: __WEBPACK_IMPORTED_MODULE_9__defensivecoverage_defensivecoverage_component__["a" /* DefensiveCoverageComponent */] },
    { path: 'offensivecoverage', component: __WEBPACK_IMPORTED_MODULE_10__offensivecoverage_offensivecoverage_component__["a" /* OffensiveCoverageComponent */] },
    { path: 'offensevsdefense', component: __WEBPACK_IMPORTED_MODULE_11__offensevsdefense_offensevsdefense_component__["a" /* OffenseVsDefenseComponent */] },
    { path: 'featured', component: __WEBPACK_IMPORTED_MODULE_12__featured_featured_component__["a" /* FeaturedComponent */] },
    { path: 'view-users', component: __WEBPACK_IMPORTED_MODULE_13__view_users_view_users_component__["a" /* ViewUsersComponent */] },
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

module.exports = "<footer>\n  <div class=\"container-fluid\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a href=\"mailto:email@example.com\">\n            Contact\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.revature.com\">\n            Revature\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/revatureclass/1802java-nick-project2-theelitefour\">\n            Github\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.veryobservantindeed.com\">\n            Observant, aren't you?\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <p class=\"copyright pull-right\">\n      &copy; {{test | date: 'yyyy'}}\n      <a href=\"#\">The Elite Four</a>\n    </p>\n  </div>\n</footer>"

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

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul *ngIf=\"trainer == null; then ifLoggedOut; else elseLogin\" class=\"nav navbar-nav navbar-right\"></ul>\n      <ng-template #ifLoggedOut>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLink='login'>\n              <i class=\"material-icons\">account_circle</i>\n              Login\n            </a>\n          </li>\n          <li>\n            <a routerLink='register'>\n              <i class=\"material-icons\">person</i>\n              Register\n            </a>\n          </li>\n        </ul>\n      </ng-template>\n      <ng-template #elseLogin>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a>\n              <!-- Profile icon changes depending on role: trainer, pro, admin -->\n              <!-- <i class=\"material-icons\" *ngIf=\"\">face</i>\n              <i class=\"material-icons\" *ngIf=\"\">whatshot</i>\n              <i class=\"material-icons\" *ngIf=\"\">supervisor_account</i> -->\n              Hello {{trainer.name}}\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"view-user\">\n              <i class =\"material-icons\">exit_to_app</i>\n              View Users\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">\n              <i class=\"material-icons\">exit_to_app</i>\n              Logout\n            </a>\n          </li>\n        </ul>\n      </ng-template>\n      <!--\n      <form class=\"navbar-form navbar-right\" role=\"search\">\n        <div class=\"form-group form-black is-empty\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n          <i class=\"material-icons\">search</i>\n          <div class=\"ripple-container\"></div>\n        </button>\n      </form>\n      -->\n    </div>\n  </div>\n</nav>"

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
    { path: 'featured', title: 'Featured Teams', icon: 'trending_up', class: '' }
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

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.container-fluid {\n  padding-left: 0px;\n}\n.row {\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.stats {\n  width: 100%;\n}\n/* Card styling */\n.card {\n  -webkit-box-shadow: 0px 2px 8px #BBBBBB;\n          box-shadow: 0px 2px 8px #BBBBBB;\n  margin: 18px 0px;\n}\n.card-content {\n  padding-bottom: 0px;\n  padding-left: 4px;\n  padding-right: 4px;\n  min-height: 110px;\n}\n.card-stats {\n  padding-left: 0px;\n  padding-right: 0px;\n  max-height: 230px;\n}\n.card-footer {\n  min-height: 110px;\n}\n/* Removes bullets and the padding that would normally be for the bullets */\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n  padding: 0px;\n  margin: 0px;\n}\n.badge {\n  margin: 5px;\n  background-color: rgb(255, 70, 60);\n}\n/* Squeeze more space out of our tables */\ntable {\n  font-size: 12px;\n}\ntd input {\n  width: 100px;\n}\n.type-col {\n  width: 70px;\n}\n.stat-col {\n  width: 42px;\n}\n.form-group {\n  margin-top: 0px;\n}\n.material-icons.md-18 {\n  font-size: 18px;\n}\n.ta-left {\n  text-align: left;\n}\n.ta-center {\n  text-align: center;\n}\n.ta-right {\n  text-align: right;\n}\n.va-center {\n  vertical-align: center;\n}\n.no-padding {\n  padding: 0px;\n}\n.no-pad-top {\n  padding-top: 0px!important;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card card-plain\">\n      <div class=\"card-header row\" data-background-color=\"red\">\n        <div class=\"col-lg-10 col-xs-9\">\n          <h4 class=\"title\">Core Coverage shows you which teammates make good partners for your Pokemon</h4>\n          <p class=\"category\">Adjust the number of resistances you prefer on an ideal partner using the controls on the right.</p>\n        </div>\n        <div class=\"col-lg-2 col-xs-3 ta-right\">\n          <i class=\"material-icons\" role=\"button\" (click)=\"subThresh()\">\n            indeterminate_check_box\n          </i>\n          <span class=\"h3\">{{ threshold }}</span>\n          <i class=\"material-icons\" role=\"button\" (click)=\"addThresh()\">\n            add_box\n          </i>\n        </div>\n      </div>\n      <br/>\n      <div class=\"row\">\n        <!-- Loop through and print every Pokemon in favTeam -->\n        <div class=\"col-lg-4 col-xs-6\" *ngFor=\"let pkmn of favTeam; let i = index\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectPokemon(pkmn)\" role=\"button\">\n              <img src=\"{{ favTeam[i].sprite }}\" />\n            </div>\n            <div class=\"card-content ta-center row va-center\">\n              <span class=\"badge col-xs-3 col-xl-3\" *ngFor=\"let partner of partners[i]\">\n                {{ partner | titlecase }}\n              </span>\n            </div>\n            <div class=\"card-footer ta-left row\">\n              <div class=\"col-xl-5 col-xs-5\">\n                <h4 class=\"title\">{{ favTeam[i].name | titlecase }}</h4>\n                <img class=\"type\" src=\"{{ types.img[types.name.indexOf(favTeam[i].types[0])] }}\" />\n                <img class=\"type\" src=\"{{ types.name.indexOf(favTeam[i].types[1]) >= 0 ? types.img[types.name.indexOf(favTeam[i].types[1])] : types.img[15] }}\" />\n              </div>\n              <div class=\"col-xl-7 col-xs-7\">\n                is weak to\n                <br/>\n                <img *ngFor=\"let typeID of weaknesses[i]\" [src]=\"types.img[typeID]\" class=\"type\" />\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/corecoverage/corecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
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
    function CoreCoverageComponent(pokemonService, teamService) {
        this.pokemonService = pokemonService;
        this.teamService = teamService;
        // The number of resistances we would like on an ideal partner
        this.threshold = 0;
        // two-way data binding wouldn't work so here's the hard way
        this.thresholdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_3_app_services_type_service__["a" /* TypeService */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CoreCoverageComponent.prototype, "threshold", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], CoreCoverageComponent.prototype, "thresholdChange", void 0);
    CoreCoverageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-corecoverage',
            template: __webpack_require__("./src/app/corecoverage/corecoverage.component.html"),
            styles: [__webpack_require__("./src/app/corecoverage/corecoverage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3_app_services_type_service__["a" /* TypeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_team_service__["a" /* TeamService */]) === "function" && _b || Object])
    ], CoreCoverageComponent);
    return CoreCoverageComponent;
    var _a, _b;
}());

//# sourceMappingURL=corecoverage.component.js.map

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.row {\n  width: 100%;\n}\n.card {\n  margin-bottom: 0px;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n  padding: 0px;\n  margin: 0px;\n}\n/* Squeeze more space out of our tables */\n.card-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.card-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.card-footer {\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\ntable {\n  font-size: 14px;\n}\n.pkmn-table {\n  width: 100%;\n}\n.pls-land {\n  vertical-align: bottom;\n}\n/* Highlights */\n.bg-red {\n  background-color: rgb(245, 70, 60);\n}\n.bg-red:hover {\n  background-color: rgb(255, 90, 70);\n}\n.bg-pink {\n  background-color: rgb(240, 100, 90);\n}\n.bg-pink:hover {\n  background-color: rgb(240, 120, 110);\n}\n.bg-lime {\n  background-color: rgb(140, 210, 140);\n}\n.bg-lime:hover {\n  background-color: rgb(150, 220, 150);\n}\n.bg-green {\n  background-color: rgb(90, 190, 90);\n}\n.bg-green:hover {\n  background-color: rgb(110, 200, 110);\n}\n/* Readability */\nthead {\n  color: #333333;\n}\ntd {\n  color: #000000;\n  font-weight: bold;\n}\n.material-icons.md-18 {\n  font-size: 18px;\n}\n.ta-center {\n  text-align: center;\n}\na i {\n  display: inline;\n}\n.nav-link {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.nav {\n  margin: 0px\n}"

/***/ }),

/***/ "./src/app/defensivecoverage/defensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Defensive Coverage displays the resistances your team has and needs</h4>\n            <p class=\"category\">The higher the type is on the list, the more important it is to cover!</p>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center pls-land\">\n                      <img src=\"{{ types.none }}\" class=\"type\">\n                      <br/> Type\n                      <br/>\n                    </th>\n                    <th class=\"ta-center\" *ngFor=\"let pkmn of pokemonCol; let i = index\">\n                      <img src=\"{{ pkmn.sprite }}\" class=\"sprite\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\n                      <br/>{{ pkmn.name | titlecase }}\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <!-- translation: foreach (Pokemon in favTeam.sort(sortBy, ascending)) } -->\n                  <tr *ngFor=\"let type of types.img; let i = index\" class=\"{{ rowColor[i] }}\">\n                    <td class=\"ta-center\">\n                      <img src=\"{{ type }}\" class=\"type\">\n                    </td>\n                    <td *ngFor=\"let effective of myTable\" class=\"ta-center\">\n                      {{ effective[i] | percent }}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

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
    function DefensiveCoverageComponent(teamService) {
        this.teamService = teamService;
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */]();
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
                    sum += 2;
                }
                else if (this.myTable[x][y] < 1.0) {
                    sum += 0;
                }
            }
            sum /= numPkmn;
            if (sum === 0) {
            }
            else if (sum > 1.2) {
                this.rowColor[y] = 'bg-red';
            }
            else if (sum > 1) {
                this.rowColor[y] = 'bg-pink';
            }
            else if (sum < 0.8) {
                this.rowColor[y] = 'bg-green';
            }
            else if (sum < 1) {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_team_service__["a" /* TeamService */]) === "function" && _a || Object])
    ], DefensiveCoverageComponent);
    return DefensiveCoverageComponent;
    var _a;
}());

//# sourceMappingURL=defensivecoverage.component.js.map

/***/ }),

/***/ "./src/app/featured/featured.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n  \n      <div class=\"card card-plain\">\n        <div class=\"card-header\" data-background-color=\"red\">\n          <h4 class=\"title\">Featured Teams by our ace trainers</h4>\n          <p class=\"category\">Ace trainers are carefully chosen by our experts to ensure the highest quality teams</p>\n        </div>\n  \n        <div class=\"card-content\">\n          <div class=\"row\" *ngFor=\"let featTeam of featTeamArray\">\n            <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of featTeam; let i = index\">\n  \n              <div class=\"card\" [style.background-color]=\"(selected === i) ? 'rgb(255, 200, 200)' : 'rgb(255, 255, 255)'\">\n                <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectTeamPokemon(i, pkmn)\">\n                  <img [src]=\"favTeam[i].sprite\" alt=\"\" />\n                </div>\n      \n                <div class=\"card-content ta-center\" (click)=\"selectTeamPokemon(i, pkmn)\" role=\"button\">\n                  <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[0])]\" class=\"type\" />\n                  <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[1])]\" class=\"type\" />\n                  <h4 class=\"title\">\n                    {{ favTeam[i].name | titlecase}}\n                  </h4>\n                </div>\n      \n                <div class=\"card-footer ta-center\">\n                  <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\n                    {{ collapse }}\n                  </i>\n                  <div class=\"stats\" *ngIf=\"expandOrCollapse\">\n                    <ul>\n                      <li *ngFor=\"let atk of favTeam[i].moveset\">\n                        {{ atk }}\n                      </li>\n                    </ul>\n                  </div>\n                  \n                </div>\n              </div>\n              \n            </div>\n          </div>\n        </div>\n  \n        <div class=\"card-footer\">\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feature_service__ = __webpack_require__("./src/app/services/feature.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-featured',
            template: __webpack_require__("./src/app/featured/featured.component.html"),
            styles: [__webpack_require__("./src/app/featured/featured.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_feature_service__["a" /* FeatureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_feature_service__["a" /* FeatureService */]) === "function" && _a || Object])
    ], FeaturedComponent);
    return FeaturedComponent;
    var _a;
}());

//# sourceMappingURL=featured.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-bottom: 1px solid #42A948; /* green */\n}\n  \n.ng-invalid:not(form)  {\n  border-bottom: 1px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-4\">\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Login</h4>\n            <p class=\"category\">To access your saved pokemon and teams</p>\n          </div>\n          <div class=\"card-content\">\n            <!-- Display warning here if username is taken or some other error -->\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\n\n            <div *ngIf=\"!submitted\">\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"username\">Username</label>\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"password\">Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\">\n                    </div>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!loginForm.form.valid\">Login</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n            <!-- Invisible before submit -->\n            <div *ngIf=\"submitted && valid === undefined\">\n              <div class=\"h3\">\n                Just a moment...\n              </div>\n            </div>\n            <div *ngIf=\"submitted && valid === true\">\n              <div class=\"h3\">\n                You have successfully Logged In!\n              </div>\n            </div>\n            <div *ngIf=\"submitted && valid === false\">\n              <div class=\"h3\">\n                Invalid login credentials\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n      </div>\n    </div>\n  </div>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/move.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Move; });
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

//# sourceMappingURL=move.js.map

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

module.exports = "\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.ta-center {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header\" data-background-color=\"red\">\n        <h4 class=\"title\">Missing type coverage</h4>\n        <p class=\"category\">Your team <strong>lacks</strong> super-effective attacks against these Type combinations</p>\n      </div>\n\n      <div class=\"card-content row\">\n        <div *ngFor=\"let type of uncoveredTypes\" class=\"col-xs-2 col-xl-2\">\n          <div>\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\n          </div>\n        </div>\n        <div class=\"ta-center\" *ngIf=\"uncoveredTypes.length === 0\">\n          <h3>Congratulations! You have full type coverage!</h3>\n        </div>\n      </div>\n      <div class=\"card-content\"></div>\n    </div>\n    <div class=\"card\">\n\n      <div class=\"card-header\" data-background-color=\"red\">\n        <h4 class=\"title\">Types covered</h4>\n        <p class=\"category\">Your team has super-effective attacks against these Type combinations!</p>\n      </div>\n\n      <div class=\"card-content row\">\n        <div *ngFor=\"let type of coveredTypes\" class=\"col-xs-2 col-xl-2\">\n          <div>\n            <img [src]=\"types.img[types.name.indexOf(type[1])]\" class=\"type\" />\n            <img [src]=\"types.img[types.name.indexOf(type[0])]\" class=\"type\" />\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/offensivecoverage/offensivecoverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffensiveCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
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
        // the above methods are being replaced by the below method
        // which calls both Observables and waits for them to finish
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-offensivecoverage',
            template: __webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.html"),
            styles: [__webpack_require__("./src/app/offensivecoverage/offensivecoverage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */]) === "function" && _d || Object])
    ], OffensiveCoverageComponent);
    return OffensiveCoverageComponent;
    var _a, _b, _c, _d;
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
/* unused harmony export Pokemon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeAPI; });
// Used before I had db access
var Pokemon = (function () {
    // A missingno for our placeholder!
    function Pokemon() {
        this.id = 0;
        this.setId = -1;
        this.trainerId = -1;
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

// Used to read pokeAPIjson
var PokeAPI = (function () {
    function PokeAPI() {
        this.id = 0;
        this.setId = -1;
        this.trainerId = -1;
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

//# sourceMappingURL=pokemon.js.map

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.row {\n  width: 100%;\n}\n.card {\n  height: 500px;\n  margin-bottom: 0px;\n}\n.table-responsive {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n}\n/* Squeeze more space out of our tables */\n.card-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.card-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  min-height: 80px;\n  position: relative;\n}\n.card-footer {\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  min-height: 400px;\n}\ntable {\n  font-size: 12px;\n}\ntbody {\n  min-height: 400px;\n}\nth {\n  height: 39px;\n}\ntd input {\n  width: 100px;\n}\n.type-col {\n  width: 70px;\n}\n.form-group {\n  margin-top: 0px;\n}\n.poke-search {\n  margin-top: 0px;\n  margin-left: 0px;\n  position: absolute;\n  bottom: 0;\n}\n.pkmn-table {\n  width: 100%;\n}\n/* Readability */\nthead {\n  color: #333333;\n}\n.material-icons.md-18 { font-size: 18px; }\n.ta-center { text-align: center; }\n.ta-right { text-align: right; }\na i {\n  display: inline;\n}\n.nav-link {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.nav {\n  margin: 0px\n}"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <!--\n          <div class=\"card-header\" data-background-color=\"purple\">\n            <ul class=\"nav nav-pills ta-center\">\n              <li>\n                <a role=\"button\" (click)=\"newTeam()\">\n                  <i class=\"material-icons\">create_new_folder</i> New Team\n                </a>\n              </li>\n              <li>\n                <a role=\"button\" (click)=\"saveTeam(newTeamName)\">\n                  <i class=\"material-icons\">save</i> Save Team\n                </a>\n              </li>\n              <li>\n                <a role=\"button\" (click)=\"setFavoriteTeam(newTeamName)\">\n                  <i class=\"material-icons\">{{ favoriteIcon }}</i> Favorite\n                </a>\n              </li>\n            </ul>\n          </div>\n          -->\n\n          <div class=\"card-content\">\n            <form class=\"row poke-search\" role=\"search\">\n              <div class=\"form-group col-sm-7 col-xl-7\">\n                <h4>My Team</h4>\n                <!-- <input [(ngModel)]=\"newTeamName\" name=\"newTeamName\" type=\"text\" class=\"form-control\" placeholder=\"Team Name\" [(value)]=\"Untitled\">\n                <span class=\"material-input\"></span> -->\n              </div>\n              <div class=\"col-sm-4 col-xl-4 ta-right\">\n                <button class=\"btn btn-primary btn-sm save-button\" (click)=\"saveTeam()\">\n                  <i class=\"material-icons\">save</i>\n                  Save Team\n                </button>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\n                      {{ col | titlecase }}\n                    </th>\n                  </tr>\n                </thead>\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"favTeam\">\n                  <tr *ngFor=\"let pkmn of favTeam; let i = index\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"updateTeam(pkmn, i)\">\n                    <td class=\"ta-center\" (click)=\"selectPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\n                    <td class=\"ta-center type-col\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(pkmn.types[1])] }}\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center\" *ngFor=\"let move of pkmn.moveset\">{{ move }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <!--\n          <div class=\"card-header\" data-background-color=\"purple\">\n            <ul class=\"nav nav-pills\">\n              <li class=\"active\">\n                <a data-toggle=\"pill\" href=\"#pokeBox\">\n                  <i class=\"material-icons\">line_weight</i> Pokemon\n                </a>\n              </li>\n              <li>\n                <a data-toggle=\"pill\" href=\"#teamBox\">\n                  <i class=\"material-icons\">view_module</i> Teams\n                </a>\n              </li>\n            </ul>\n          </div>\n          -->\n          <div class=\"card-content\">\n            <form class=\"row form-group label-floating is-empty poke-search\" role=\"search\">\n              <div class=\"col-sm-11 col-xl-11\">\n                <label class=\"control-label\" for=\"searchBox\">Search Box</label>\n                <input type=\"text\" class=\"form-control\" id=\"searchBox\" name=\"searchBox\" [(ngModel)]=\"searchBox\">\n                <span class=\"material-input\"></span>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer tab-content\">\n\n            <div class=\"table-responsive pkmn-table tab-pane fade in active\" id=\"pokeBox\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-warning\">\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnBoxColNames; let i = index\">\n                      {{ col | titlecase }}\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody dnd-sortable-container [dropZones]=\"['pkmn-zone']\" [sortableData]=\"myBox\">\n                  <!-- translation: foreach (Pokemon in myBox.sort(sortBy, ascending)) { filterBy(searchBox) } -->\n                  <tr *ngFor=\"let boxpkmn of ((myBox | pkmnSort: sortBy:ascending) | pkmnFilter: searchBox); let i = index\" dnd-sortable [sortableIndex]=\"i\"\n                    (onDropSuccess)=\"updateBox(boxpkmn, i)\">\n                    <td class=\"ta-center\" (click)=\"selectPokemon(boxpkmn)\" role=\"button\">{{ boxpkmn.name | titlecase }}</td>\n                    <td class=\"ta-center type-col\">\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[0])] }}\" class=\"type\">\n                      <img src=\"{{ types.img[types.name.indexOf(boxpkmn.types[1])] }}\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center\" *ngFor=\"let move of boxpkmn.moveset\">{{ move }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div class=\"table-responsive pkmn-table tab-pane fade\" id=\"teamBox\">\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pokemonbox/pokemonbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_convert_service__ = __webpack_require__("./src/app/services/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_update_service__ = __webpack_require__("./src/app/services/update.service.ts");
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
    function PokemonBoxComponent(updateService, convertService, loginService, pokemonService, moveService, teamService, types) {
        this.updateService = updateService;
        this.convertService = convertService;
        this.loginService = loginService;
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        this.teamService = teamService;
        this.types = types;
        // Assigns the value of types to their respective image
        this.types = new __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */]();
        // Assign my favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
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
        myTrainer = JSON.parse(localStorage.getItem('trainer'));
        // if user is logged in
        if (myTrainer) {
            // Get my team
            myTeams = JSON.parse(localStorage.getItem('teams'));
            // Convert our team into a format our back-end can receive
            if (myTeams[0]) {
                this.favTeam = this.convertService.teamToPokeTeam(myTeams[0], myTrainer.trainerId, this.pokedex, this.movedex);
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
        // Get my team
        this.myBox = new Array();
        var mySets = JSON.parse(localStorage.getItem('sets'));
        var myTrainer = JSON.parse(localStorage.getItem('trainer'));
        // if user is logged in
        if (myTrainer && mySets) {
            // Convert our team into a format our back-end can receive
            for (var _i = 0, mySets_1 = mySets; _i < mySets_1.length; _i++) {
                var set = mySets_1[_i];
                this.myBox.push(this.convertService.setToPokeapi(set, myTrainer.trainerId, this.pokedex, this.movedex));
            }
        }
        else {
            if (localStorage.getItem('myPkmnBox')) {
                this.myBox = JSON.parse(localStorage.getItem('myPkmnBox'));
            }
            else {
                this.myBox.push(this.teamService.pkmn5);
            }
            // give myself a pokemon because for some reason ng2-dnd does not work with empty arrays
        }
    };
    /**
     * Adds the curTeam to myTeams and sets the team name to newTeamName
     * @param newTeamName saves as 'Untitled' if newTeamName is empty
     */
    PokemonBoxComponent.prototype.saveTeam = function (newTeamName) {
        // if our team isn't over the legal limit
        if (this.favTeam.length <= 6) {
            var myTeam = [];
            var myTrainer = JSON.parse(localStorage.getItem('trainer'));
            // User must be logged in to save team
            if (myTrainer) {
                // We need the old team ID of the ONLY (SINGULAR) team we are saving
                var oldTeam = JSON.parse(localStorage.getItem('teams'));
                // Convert our team into a format our back-end can receive
                myTeam[0] = this.convertService.pokeTeamToSetTeam(this.favTeam, newTeamName, oldTeam[0].teamId);
                // Save our team to localstorage
                this.loginService.changeTeam(myTeam);
                // Send http request to save set and team if the user is logged in
                this.updateService.saveTeam(myTeam[0]).subscribe();
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
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
            _this.loadBox();
            // Assign my favTeam using localStorage or from session if one exists
            _this.loadTeam();
        });
        if (this.favTeam === this.favTeam) {
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
            styles: [__webpack_require__("./src/app/pokemonbox/pokemonbox.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */],
                __WEBPACK_IMPORTED_MODULE_6__services_convert_service__["a" /* ConvertService */], __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__services_update_service__["a" /* UpdateService */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_update_service__["a" /* UpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_update_service__["a" /* UpdateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_convert_service__["a" /* ConvertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_pokemon_service__["a" /* PokemonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_move_service__["a" /* MoveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_team_service__["a" /* TeamService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_type_service__["a" /* TypeService */]) === "function" && _g || Object])
    ], PokemonBoxComponent);
    return PokemonBoxComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=pokemonbox.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-bottom: 1px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-bottom: 1px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Register</h4>\n            <p class=\"category\">To start saving your teams and Pokemon</p>\n          </div>\n          <div class=\"card-content\">\n            <!-- Display warning here if username is taken or some other error -->\n            <div *ngIf=\"false\" id=\"notification\" class=\"alert alert-danger\"></div>\n\n            <div *ngIf=\"!submitted\">\n              <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"username\">Username</label>\n                      <input required type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n                        [(ngModel)]=\"username\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"email\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"password\">Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n                      [(ngModel)]=\"password\" (ngModelChange)=\"matchPassword()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group form-black label-floating is-empty\">\n                      <label class=\"control-label\" for=\"cpassword\">Confirm Password</label>\n                      <input required type=\"password\" class=\"form-control\" id=\"cpassword\" name=\"cpassword\"\n                      [(ngModel)]=\"cpassword\" (ngModelChange)=\"matchPassword()\">\n                    </div>\n                  </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!registerForm.form.valid\" \n                  [disabled]=\"!passwordMatch\">\n                  Register\n                </button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n            <!-- Invisible before submit -->\n            <div *ngIf=\"submitted\">\n              <div *ngIf=\"valid\">\n                <div class=\"h3\">\n                  You have successfully registered!\n                </div>\n                <div class=\"h4\">\n                  No email confirmation necessary\n                </div>\n              </div>\n              <div *ngIf=\"!valid\">\n                <div class=\"h3\">\n                    Registration Failed\n                  </div>\n                  <div class=\"h4\">\n                    Username is already in use\n                  </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a href=\"#bill\">\n              <img class=\"img\" src=\"assets/img/faces/Bill.png\" />\n            </a>\n          </div>\n\n          <div class=\"content\">\n            <h6 class=\"category text-gray\">Masaki Sonezaki</h6>\n            <h4 class=\"card-title\">Bill, Head Engineer</h4>\n            <p class=\"card-content\">\n              The father of the modern Pokemon storage system. Bill's PC provides instant access to your Pokemon from any device. Expert\n              analytics and statistics are provided by our leading Professors.\n            </p>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/services/convert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set__ = __webpack_require__("./src/app/set.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon__ = __webpack_require__("./src/app/pokemon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team__ = __webpack_require__("./src/app/team.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConvertService = (function () {
    // pokedex: Array<PokeAPI>;
    // movedex: Array<Move>;
    function ConvertService(pokemonService, moveService) {
        this.pokemonService = pokemonService;
        this.moveService = moveService;
        // Observable.forkJoin(
        //   this.pokemonService.getJson(),
        //   this.moveService.getJson()
        // ).subscribe(
        //   ([pokeAPIArray, moveArray]) => {
        //     this.pokedex = pokeAPIArray;
        //     this.movedex = moveArray;
        //   }
        // );
    }
    ConvertService.prototype.pokeapiToSet = function (pkmn) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        if (pkmn.setId) {
            result.setId = pkmn.setId;
        }
        else {
            result.setId = -1;
        }
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
        var myTeam = new __WEBPACK_IMPORTED_MODULE_5__team__["a" /* Team */]();
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
        myTeam.trainer = { 'trainerId': pkmnArray[0].trainerId };
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[0].setId;
        result.pokemonId = pkmnArray[0].id;
        result.nickname = pkmnArray[0].name;
        result.atk1 = pkmnArray[0].attackIds[0];
        result.atk2 = pkmnArray[0].attackIds[1];
        result.atk3 = pkmnArray[0].attackIds[2];
        result.atk4 = pkmnArray[0].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[0].trainerId };
        myTeam.set1 = result;
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[1].setId;
        result.pokemonId = pkmnArray[1].id;
        result.nickname = pkmnArray[1].name;
        result.atk1 = pkmnArray[1].attackIds[0];
        result.atk2 = pkmnArray[1].attackIds[1];
        result.atk3 = pkmnArray[1].attackIds[2];
        result.atk4 = pkmnArray[1].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[1].trainerId };
        myTeam.set2 = result;
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[2].setId;
        result.pokemonId = pkmnArray[2].id;
        result.nickname = pkmnArray[2].name;
        result.atk1 = pkmnArray[2].attackIds[0];
        result.atk2 = pkmnArray[2].attackIds[1];
        result.atk3 = pkmnArray[2].attackIds[2];
        result.atk4 = pkmnArray[2].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[2].trainerId };
        myTeam.set3 = result;
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[3].setId;
        result.pokemonId = pkmnArray[3].id;
        result.nickname = pkmnArray[3].name;
        result.atk1 = pkmnArray[3].attackIds[0];
        result.atk2 = pkmnArray[3].attackIds[1];
        result.atk3 = pkmnArray[3].attackIds[2];
        result.atk4 = pkmnArray[3].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[3].trainerId };
        myTeam.set4 = result;
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[4].setId;
        result.pokemonId = pkmnArray[4].id;
        result.nickname = pkmnArray[4].name;
        result.atk1 = pkmnArray[4].attackIds[0];
        result.atk2 = pkmnArray[4].attackIds[1];
        result.atk3 = pkmnArray[4].attackIds[2];
        result.atk4 = pkmnArray[4].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[4].trainerId };
        myTeam.set5 = result;
        result = new __WEBPACK_IMPORTED_MODULE_1__set__["a" /* Set */]();
        result.setId = pkmnArray[5].setId;
        result.pokemonId = pkmnArray[5].id;
        result.nickname = pkmnArray[5].name;
        result.atk1 = pkmnArray[5].attackIds[0];
        result.atk2 = pkmnArray[5].attackIds[1];
        result.atk3 = pkmnArray[5].attackIds[2];
        result.atk4 = pkmnArray[5].attackIds[3];
        result.trainer = { 'trainerId': pkmnArray[5].trainerId };
        myTeam.set6 = result;
        return myTeam;
    };
    ConvertService.prototype.setToPokeapi = function (set, trainerID, pokedex, movedex) {
        var result = new __WEBPACK_IMPORTED_MODULE_2__pokemon__["a" /* PokeAPI */]();
        var pkmn = pokedex[set.pokemonId - 1]; // Minus 1 because we're zero-indexed and the pokedex is not
        result.attackIds = [];
        result.attackIds[0] = set.atk1;
        result.attackIds[1] = set.atk2;
        result.attackIds[2] = set.atk3;
        result.attackIds[3] = set.atk4;
        result.id = set.pokemonId;
        result.setId = set.setId;
        result.moves = pkmn.moves;
        result.moveset = [];
        result.moveset[0] = movedex[set.atk1].name;
        result.moveset[1] = movedex[set.atk2].name;
        result.moveset[2] = movedex[set.atk3].name;
        result.moveset[3] = movedex[set.atk4].name;
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
    ConvertService.prototype.teamToPokeTeam = function (myTeam, trainerID, pokedex, movedex) {
        var result;
        var resultArray = [];
        // Find my pokemon in the pokedex using (id - 1) because we're zero-indexed and the pokedex is not
        result = Object.assign(pokedex[myTeam.set1.pokemonId - 1]);
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
        result.moveset[0] = movedex[myTeam.set1.atk1].name;
        result.moveset[1] = movedex[myTeam.set1.atk2].name;
        result.moveset[2] = movedex[myTeam.set1.atk3].name;
        result.moveset[3] = movedex[myTeam.set1.atk4].name;
        resultArray.push(result);
        // Pokemon 2
        result = Object.assign(pokedex[myTeam.set2.pokemonId - 1]);
        result.id = myTeam.set2.pokemonId;
        result.setId = myTeam.set2.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set2.atk1;
        result.attackIds[1] = myTeam.set2.atk2;
        result.attackIds[2] = myTeam.set2.atk3;
        result.attackIds[3] = myTeam.set2.atk4;
        result.moveset = [];
        result.moveset[0] = movedex[myTeam.set2.atk1].name;
        result.moveset[1] = movedex[myTeam.set2.atk2].name;
        result.moveset[2] = movedex[myTeam.set2.atk3].name;
        result.moveset[3] = movedex[myTeam.set2.atk4].name;
        resultArray.push(result);
        // Pokemon 3
        result = Object.assign(pokedex[myTeam.set3.pokemonId - 1]);
        result.id = myTeam.set3.pokemonId;
        result.setId = myTeam.set3.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set3.atk1;
        result.attackIds[1] = myTeam.set3.atk2;
        result.attackIds[2] = myTeam.set3.atk3;
        result.attackIds[3] = myTeam.set3.atk4;
        result.moveset = [];
        result.moveset[0] = movedex[myTeam.set3.atk1].name;
        result.moveset[1] = movedex[myTeam.set3.atk2].name;
        result.moveset[2] = movedex[myTeam.set3.atk3].name;
        result.moveset[3] = movedex[myTeam.set3.atk4].name;
        resultArray.push(result);
        // Pokemon 4
        result = Object.assign(pokedex[myTeam.set4.pokemonId - 1]);
        result.id = myTeam.set4.pokemonId;
        result.setId = myTeam.set4.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set4.atk1;
        result.attackIds[1] = myTeam.set4.atk2;
        result.attackIds[2] = myTeam.set4.atk3;
        result.attackIds[3] = myTeam.set4.atk4;
        result.moveset = [];
        result.moveset[0] = movedex[myTeam.set4.atk1].name;
        result.moveset[1] = movedex[myTeam.set4.atk2].name;
        result.moveset[2] = movedex[myTeam.set4.atk3].name;
        result.moveset[3] = movedex[myTeam.set4.atk4].name;
        resultArray.push(result);
        // Pokemon 5
        result = Object.assign(pokedex[myTeam.set5.pokemonId - 1]);
        result.id = myTeam.set5.pokemonId;
        result.setId = myTeam.set5.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set5.atk1;
        result.attackIds[1] = myTeam.set5.atk2;
        result.attackIds[2] = myTeam.set5.atk3;
        result.attackIds[3] = myTeam.set5.atk4;
        result.moveset = [];
        result.moveset[0] = movedex[myTeam.set5.atk1].name;
        result.moveset[1] = movedex[myTeam.set5.atk2].name;
        result.moveset[2] = movedex[myTeam.set5.atk3].name;
        result.moveset[3] = movedex[myTeam.set5.atk4].name;
        resultArray.push(result);
        // Pokemon 6
        result = Object.assign(pokedex[myTeam.set6.pokemonId - 1]);
        result.id = myTeam.set6.pokemonId;
        result.setId = myTeam.set6.setId;
        result.trainerId = trainerID;
        result.attackIds = [];
        result.attackIds[0] = myTeam.set6.atk1;
        result.attackIds[1] = myTeam.set6.atk2;
        result.attackIds[2] = myTeam.set6.atk3;
        result.attackIds[3] = myTeam.set6.atk4;
        result.moveset = [];
        result.moveset[0] = movedex[myTeam.set6.atk1].name;
        result.moveset[1] = movedex[myTeam.set6.atk2].name;
        result.moveset[2] = movedex[myTeam.set6.atk3].name;
        result.moveset[3] = movedex[myTeam.set6.atk4].name;
        resultArray.push(result);
        return resultArray;
    };
    ConvertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pokemon_service__["a" /* PokemonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__move_service__["a" /* MoveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__move_service__["a" /* MoveService */]) === "function" && _b || Object])
    ], ConvertService);
    return ConvertService;
    var _a, _b;
}());

//# sourceMappingURL=convert.service.js.map

/***/ }),

/***/ "./src/app/services/feature.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureService; });
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



var FeatureService = (function () {
    function FeatureService(http) {
        this.http = http;
        this.featTeamSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](JSON.parse(localStorage.getItem('featTeams')));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], FeatureService);
    return FeatureService;
    var _a;
}());

//# sourceMappingURL=feature.service.js.map

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
        this.setSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](JSON.parse(localStorage.getItem('sets')));
        this.currentSet = this.trainerSource.asObservable();
        this.teamSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](JSON.parse(localStorage.getItem('teams')));
        this.currentTeam = this.trainerSource.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('username', username).set('password', password);
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
    }
    MoveService.prototype.getJson = function () {
        return this.http.get('assets/moveAPI.json');
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
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('username', username).set('password', password).set('email', email);
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
    function TeamService(types) {
        this.types = types;
        this.curTeam = new Array();
        // Making my team
        this.pkmn1 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
        this.pkmn2 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
        this.pkmn3 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
        this.pkmn4 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
        this.pkmn5 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
        this.pkmn6 = new __WEBPACK_IMPORTED_MODULE_1__pokemon__["a" /* PokeAPI */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_type_service__["a" /* TypeService */]) === "function" && _a || Object])
    ], TeamService);
    return TeamService;
    var _a;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TypeService);
    return TypeService;
}());

//# sourceMappingURL=type.service.js.map

/***/ }),

/***/ "./src/app/services/update.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateService; });
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


var UpdateService = (function () {
    function UpdateService(http) {
        this.http = http;
    }
    UpdateService.prototype.saveSet = function (mySet) {
        if (mySet.setId < 0) {
            this.createSet(mySet);
        }
        else {
            this.updateSet(mySet);
        }
    };
    UpdateService.prototype.createSet = function (mySet) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('set', JSON.stringify(mySet));
        return this.http.post('set', body);
    };
    UpdateService.prototype.updateSet = function (mySet) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('set', JSON.stringify(mySet));
        return this.http.put('set', body);
    };
    UpdateService.prototype.saveTeam = function (myTeam) {
        var headers = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        // const body = new HttpParams().set('team', JSON.stringify(myTeam));
        if (myTeam.teamId === -1) {
            return this.http.post('team', JSON.stringify(myTeam), headers);
        }
        else {
            return this.http.put('team', JSON.stringify(myTeam), headers);
        }
    };
    UpdateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UpdateService);
    return UpdateService;
    var _a;
}());

//# sourceMappingURL=update.service.js.map

/***/ }),

/***/ "./src/app/services/view-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserService; });
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


var ViewUserService = (function () {
    function ViewUserService(http) {
        this.http = http;
    }
    ViewUserService.prototype.viewUsers = function () {
        return this.http.get('view-user');
    };
    ViewUserService.prototype.promoteUser = function (username) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('username', username);
        return this.http.post('view-user', body);
    };
    ViewUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ViewUserService);
    return ViewUserService;
    var _a;
}());

//# sourceMappingURL=view-user.service.js.map

/***/ }),

/***/ "./src/app/set.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Set; });
var Set = (function () {
    function Set() {
    }
    return Set;
}());

//# sourceMappingURL=set.js.map

/***/ }),

/***/ "./src/app/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
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

//# sourceMappingURL=team.js.map

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n  margin-top: 50px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n.container-fluid {\n  padding-left: 0px;\n}\n.row {\n  width:100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.stats {\n  width:100%;\n}\n.col-md-12 {\n  max-height: 500px;\n}\n/* Card styling */\n.card {\n  -webkit-box-shadow: 0px 2px 8px #DDDDDD;\n          box-shadow: 0px 2px 8px #DDDDDD;\n  margin: 18px 0px;\n  max-height: 500px;\n}\n.card-content {\n  padding-bottom: 0px;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.card-stats {\n  min-height: 480px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.card-footer {\n  padding-top: 0px;\n  max-height: 520px;\n}\n.card-footer.ta-center {\n  margin-bottom: 0px!important;\n}\n/* Removes bullets and the padding that would normally be for the bullets */\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\n/* Native image sizes */\n.type {\n  width: 48px;\n  height: 16px;\n}\n.sprite {\n  width: 96px;\n  height: 96px;\n  padding: 0px;\n  margin: 0px;\n}\n.badge {\n  margin: 5px;\n  background-color: rgb(255, 70, 60);\n}\n/* Squeeze more space out of our tables */\ntable {\n  font-size: 12px;\n}\ntd input {\n  width: 100px;\n}\n.type-col {\n  width: 70px;\n}\n.stat-col {\n  width: 42px;\n}\n.form-group {\n  margin-top: 0px;\n}\n.poke-search {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n.pkmn-table {\n  width: 100%;\n  min-height: 470px;\n  max-height: 470px;\n  margin-left: 4px;\n}\n.move-table {\n  width: 100%;\n  max-height: 270px;\n}\n.material-icons.md-18 {\n  font-size: 18px;\n}\n.ta-center {\n  text-align: center;\n}\n.save-button {\n  float: right;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n.no-padding {\n  padding: 0px;\n}\n.no-pad-top {\n  padding-top: 0px!important;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.bg-select {\n  background-color: rgb(255, 200, 200);\n}\n.bg-default {\n  background-color: #DDDDDD;\n}"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!-- <div *ngFor=\"let move of movedex\">\n      {{ move.name }}\n    </div> -->\n    <div class=\"row\">\n      <!-- Loop through and print every Pokemon in favTeam -->\n      <div class=\"col-lg-2 col-xs-4\" *ngFor=\"let pkmn of favTeam; let i = index\">\n        <div class=\"card\" [style.background-color]=\"(selected === i) ? 'rgb(255, 200, 200)' : 'rgb(255, 255, 255)'\">\n          <div class=\"card-header btn\" data-background-color=\"orange\" (click)=\"selectTeamPokemon(i, pkmn)\">\n            <img [src]=\"favTeam[i].sprite\" alt=\"\" />\n          </div>\n\n          <div class=\"card-content ta-center\" (click)=\"selectTeamPokemon(i, pkmn)\" role=\"button\">\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[0])]\" class=\"type\" />\n            <img [src]=\"types.img[types.name.indexOf(favTeam[i].types[1])]\" class=\"type\" />\n            <h4 class=\"title\">\n              {{ favTeam[i].name | titlecase}}\n            </h4>\n          </div>\n\n          <div class=\"card-footer ta-center\">\n            <i class=\"material-icons md-18 row\" (click)=\"toggleCollapse()\" role=\"button\">\n              {{ collapse }}\n            </i>\n            <div class=\"stats\" *ngIf=\"expandOrCollapse\">\n              <ul>\n                <li *ngFor=\"let atk of favTeam[i].moveset\">\n                  {{ atk }}\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-7 col-md-12\">\n        <div class=\"card card-stats container-fluid\">\n          <div class=\"card-header card-chart\" data-background-color=\"purple\">\n            <div class=\"ct-chart\" id=\"pokemonStatChart\"></div>\n          </div>\n\n          <div class=\"card-content ta-center row\">\n            <img class=\"sprite col-sm-3 col-xl-3\" [src]=\" (selectedPkmn) ? selectedPkmn.sprite : '' \"\n              [title]=\" (selectedPkmn) ? selectedPkmn.sprite : '' \" />\n            <!-- The errors in the console can be prevented by doing something similar to the above line for every variable -->\n            <div class=\"no-padding col-sm-3 col-xl-3\">\n              <span class=\"badge badge-primary\">\n                Critical Rate\n                <br/> {{ (selectedPkmn) ? (selectedPkmn.stats.spe * 100 / 512 | number:'2.1-2') : '' }} %\n              </span>\n              <br/>\n              <!--[src]=\"(selectedPkmn.types[1] === void(0)) ? types.img[types.name.indexOf(selectedPkmn.types[1])] : types.img[15]\"-->\n              <img class=\"type\"\n              [src]=\" (selectedPkmn) ? types.img[types.name.indexOf(selectedPkmn.types[1])] : '' \" />\n              <img class=\"type\"\n              [src]=\" (selectedPkmn) ? types.img[types.name.indexOf(selectedPkmn.types[0])] : '' \" />\n              <br/>\n              <small>\n                <a [href]=\"(selectedPkmn) ? 'https://www.smogon.com/dex/rb/pokemon/selectedPkmn.name' : '' \">Smogon Analysis</a>\n              </small>\n            </div>\n            <form class=\"row poke-search\" role=\"search\">\n              <div class=\"form-group col-sm-4 col-xl-4\">\n                <input [(ngModel)]=\"searchInput\" name=\"searchInput\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Search Pokemon\" [(value)]=\"(selectedPkmn) ? selectedPkmn.name : sortBy \">\n                <span class=\"material-input\"></span>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"card-footer mt-10\">\n            <div class=\"table-responsive move-table\">\n              <table class=\"table table-hover\">\n                <thead class=\"text-primary\">\n                  <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Class</th>\n                    <th>Pow</th>\n                    <th>Acc</th>\n                    <th>PP</th>\n                    <th>Effect</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"selectedPkmn\">\n                  <tr *ngFor=\"let move of selPkmnMoves; let i = index\">\n                    <td>\n                      <input type=\"text\" [(ngModel)]=\"selPkmnMoves[i].name\" name=\"moveInput{{i}}\" list=\"canLearn\"\n                        (change)=\"setSelPkmnMoves(i, selPkmnMoves[i].name)\">\n                      <datalist id=\"canLearn\">\n                        <option *ngFor=\"let canlearn of selectedPkmn.moves | pkmnSort: 'name':ascending\" value=\"{{canlearn.name}}\">\n                      </datalist>\n                    </td>\n                    <td>\n                      <img [src]=\"types.img[types.name.indexOf(move.type)]\" class=\"type\">\n                    </td>\n                    <td>\n                      <img class=\"type\" [src]=\"move.damageClass !== 'status' ? types.classImg[types.oldClass[types.name.indexOf(move.type)]] : types.classImg[2]\">\n                    </td>\n                    <td>{{ move.power }}</td>\n                    <td>{{ move.accuracy }}</td>\n                    <td>{{ move.pp }}</td>\n                    <td>{{ move.effect }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <button class=\"btn btn-primary btn-sm save-button\" (click)=\"savePokemon()\">\n              <i class=\"material-icons\">save</i>\n              {{ (selected === -1) ? 'Save to Pokemon Box' : 'Save to Team' }}\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-5 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-content no-pad-top\">\n            <div class=\"table-responsive pkmn-table\">\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th class=\"ta-center\" *ngFor=\"let col of pkmnTableColNames; let i = index\">\n                      {{ col | titlecase }}\n                      <br/>\n                      <i class=\"material-icons md-18\" role=\"button\" (click)=\"toggleSort(i)\">{{ colSortIcons[i] }}</i>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <!-- translation: foreach (Pokemon in Pokedex.sort(sortBy, ascending)) { filterBy(searchInput) } -->\n                  <tr class=\"search-row\" *ngFor=\"let pkmn of ((pokedex | pkmnSort: sortBy:ascending) | pkmnFilter: searchInput); let i = index\">\n                    <td class=\"ta-center\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">{{ pkmn.name | titlecase }}</td>\n                    <td class=\"ta-center type-col\" (click)=\"selectNewPokemon(pkmn)\">\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[1])]\" class=\"type\">\n                      <img [src]=\"types.img[types.name.indexOf(pkmn.types[0])]\" class=\"type\">\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.hp }}\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.atk }}\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.def }}\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.satk }}\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.sdef }}\n                    </td>\n                    <td class=\"ta-center stat-col\" (click)=\"selectNewPokemon(pkmn)\" role=\"button\">\n                      {{ pkmn.stats.spe }}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teambuilder/teambuilder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeambuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pokemon__ = __webpack_require__("./src/app/pokemon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__move__ = __webpack_require__("./src/app/move.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_move_service__ = __webpack_require__("./src/app/services/move.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_pokemon_service__ = __webpack_require__("./src/app/services/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_team_service__ = __webpack_require__("./src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_type_service__ = __webpack_require__("./src/app/services/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_convert_service__ = __webpack_require__("./src/app/services/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_update_service__ = __webpack_require__("./src/app/services/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_chartist__);
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
    function TeambuilderComponent(updateService, convertService, loginService, pokemonService, moveService, teamService, types) {
        // Assign my placeholder favTeam using teamService
        // this.favTeam = this.teamService.favTeam;
        // now using loadTeam() instead
        this.updateService = updateService;
        this.convertService = convertService;
        this.loginService = loginService;
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
        if (!this.sets) {
            this.sets = new Array();
        }
        if (!!this.myTeam && !!this.trainer) {
            // Load team, if one exists
            if (this.myTeam[0]) {
                this.favTeam = this.convertService.teamToPokeTeam(this.myTeam[0], this.trainer.trainerId, this.pokedex, this.movedex);
            }
            // Load box, if any
            for (var _i = 0, _a = JSON.parse(localStorage.getItem('sets')); _i < _a.length; _i++) {
                var set = _a[_i];
                this.sets.push(set);
            }
        }
        else {
            // Load from local storage
            this.favTeam = JSON.parse(localStorage.getItem('favTeam'));
        }
        // if null, get an empty team
        if (!this.favTeam) {
            this.favTeam = new Array();
            for (var i = 0; i < 6; i++) {
                this.favTeam.push(new __WEBPACK_IMPORTED_MODULE_2_app_pokemon__["a" /* PokeAPI */]());
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
        if (!pkmn) {
            return false;
        }
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
                myMove = new __WEBPACK_IMPORTED_MODULE_3__move__["a" /* Move */]();
                myMove.name = '';
                this.selPkmnMoves[i] = myMove;
            }
            if (this.selPkmnMoves[i].effectChance) {
                this.selPkmnMoves[i].effect = this.selPkmnMoves[i].effect.replace('$effect_chance', // replace this
                String(this.selPkmnMoves[i].effectChance)); // with this
            }
        }
        while (this.selPkmnMoves.length < 4) {
            this.selPkmnMoves.push(new __WEBPACK_IMPORTED_MODULE_3__move__["a" /* Move */]());
        }
        return true;
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
        myTrainer = JSON.parse(localStorage.getItem('trainer'));
        // wipe our selected Pokemon's old attacks so we can add the new ones back in
        this.selectedPkmn.attackIds = [null, null, null, null];
        this.selectedPkmn.moveset = [null, null, null, null];
        // If our trainer is logged in, assign trainer ID
        if (myTrainer) {
            this.selectedPkmn.trainerId = myTrainer.trainerId;
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
                var m = new __WEBPACK_IMPORTED_MODULE_3__move__["a" /* Move */]();
                m.name = '';
                this.selPkmnMoves[i] = m;
            }
        }
        // Add the Pokemon to our team if they picked a slot to save to
        if (this.selected >= 0) {
            this.favTeam[this.selected] = this.selectedPkmn;
        }
        // Save sets to localstorage
        var mySet = this.convertService.pokeapiToSet(this.selectedPkmn);
        this.sets.push(mySet);
        this.loginService.changeSets(this.sets);
        // Put our favTeam in local storage so even an unregistered user can use our service
        localStorage.setItem('favTeam', JSON.stringify(this.favTeam));
        // Send http request to save set and team if the user is logged in
        if (myTrainer) {
            this.updateService.saveSet(mySet);
            var myTeam = this.convertService.pokeTeamToSetTeam(this.favTeam, this.myTeam.teamName, this.myTeam.teamId);
            this.updateService.saveTeam(myTeam);
        }
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
            myMove = new __WEBPACK_IMPORTED_MODULE_3__move__["a" /* Move */]();
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
        if (!this.selectedPkmn) {
            return false;
        }
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
        var pokemonStatChart = new __WEBPACK_IMPORTED_MODULE_11_chartist__["Bar"]('#pokemonStatChart', dataPokemonStatChart, optionsPokemonStatChart, responsiveOptions);
        // start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(pokemonStatChart);
        return true;
    };
    TeambuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load 151 Pokemon into pokedex and 164 moves into movedex
        // this.getPokeAPIjson();
        // this.getMoveAPIjson();
        // Using a forkJoin to guarantee both dex being loaded before execution
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].forkJoin(this.pokemonService.getJson(), this.moveService.getJson()).subscribe(function (_a) {
            var pokeAPIArray = _a[0], moveArray = _a[1];
            _this.pokedex = pokeAPIArray;
            _this.movedex = moveArray;
            // calling these functions here because this is the only location where
            // we can guarantee our pokedex and movedex have been fully loaded
            // Assign my favTeam using localStorage or from session if one exists
            _this.loadTeam();
            _this.selectPokemon(_this.favTeam[0]);
            _this.loadStatChart();
        });
    };
    TeambuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-teambuilder',
            template: __webpack_require__("./src/app/teambuilder/teambuilder.component.html"),
            styles: [__webpack_require__("./src/app/teambuilder/teambuilder.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_app_services_move_service__["a" /* MoveService */], __WEBPACK_IMPORTED_MODULE_6_app_services_pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_7_app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8_app_services_type_service__["a" /* TypeService */],
                __WEBPACK_IMPORTED_MODULE_9_app_services_convert_service__["a" /* ConvertService */], __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_10__services_update_service__["a" /* UpdateService */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__services_update_service__["a" /* UpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_update_service__["a" /* UpdateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_app_services_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_services_convert_service__["a" /* ConvertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_pokemon_service__["a" /* PokemonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_move_service__["a" /* MoveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_move_service__["a" /* MoveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_team_service__["a" /* TeamService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_app_services_type_service__["a" /* TypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_services_type_service__["a" /* TypeService */]) === "function" && _g || Object])
    ], TeambuilderComponent);
    return TeambuilderComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=teambuilder.component.js.map

/***/ }),

/***/ "./src/app/view-users/view-users.component.css":
/***/ (function(module, exports) {

module.exports = "/* Layout */\n.main-content {\n    margin-top: 50px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n  }\n.container-fluid {\n    padding-left: 0px;\n  }\n.row {\n    width:100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n.stats {\n    width:100%;\n  }\n.col-md-12 {\n    max-height: 470px;\n  }\n/* Card styling */\n.card {\n    -webkit-box-shadow: 0px 2px 8px #BBBBBB;\n            box-shadow: 0px 2px 8px #BBBBBB;\n    margin: 18px 0px;\n    max-height: 450px;\n  }\n.card-content {\n    padding-bottom: 0px;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n.card-stats {\n    min-height: 450px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n.card-footer {\n    padding-top: 0px;\n    max-height: 500px;\n  }\n.card-footer.ta-center {\n    margin-bottom: 0px!important;\n  }\n/* Removes bullets and the padding that would normally be for the bullets */\nul {\n    list-style-type: none;\n    padding-left: 0;\n  }\n/* Native image sizes */\n.type {\n    width: 48px;\n    height: 16px;\n  }\n.sprite {\n    width: 96px;\n    height: 96px;\n    padding: 0px;\n    margin: 0px;\n  }\n.badge {\n    margin: 5px;\n    background-color: rgb(255, 70, 60);\n  }\n/* Squeeze more space out of our tables */\ntable {\n    font-size: 12px;\n  }\ntd input {\n    width: 100px;\n  }\n.type-col {\n    width: 70px;\n  }\n.stat-col {\n    width: 42px;\n  }\n.form-group {\n    margin-top: 0px;\n  }\n.poke-search {\n    margin-top: 0px;\n    margin-left: 0px;\n  }\n.pkmn-table {\n    width: 100%;\n    max-height: 450px;\n    margin-left: 4px;\n  }\n.material-icons.md-18 {\n    font-size: 18px;\n    }\n.ta-center {\n    text-align: center;\n    }\n.no-padding {\n    padding: 0px;\n  }\n.no-pad-top {\n    padding-top: 0px!important;\n  }\n.mt-10 {\n    margin-top: 10px;\n  }"

/***/ }),

/***/ "./src/app/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class = \"card-footer mt-10\">\n    <form [formGroup] = \"form\" (ngSubmit) = \"onSubmit()\">\n      <table class = \"table\">\n        <thead class=\"text-primary\">\n            <tr>\n              <th>Username</th>\n              <th>Role</th>\n              <th></th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let user of users; let i = index'>\n            <td>{{ user.name }}</td>\n            <td>{{ user.role }}</td>\n            <td><input type = \"radio\" formControlName = \"promote\" [value] = \"user\" > </td>\n          </tr>\n        </tbody>\n      </table>\n      <p>\n          <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n      </p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-users/view-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_user_service__ = __webpack_require__("./src/app/services/view-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewUsersComponent = (function () {
    function ViewUsersComponent(viewUserService, fb) {
        this.viewUserService = viewUserService;
        this.fb = fb;
        this.control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-view-users',
            template: __webpack_require__("./src/app/view-users/view-users.component.html"),
            styles: [__webpack_require__("./src/app/view-users/view-users.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_view_user_service__["a" /* ViewUserService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_view_user_service__["a" /* ViewUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_view_user_service__["a" /* ViewUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
    ], ViewUsersComponent);
    return ViewUsersComponent;
    var _a, _b;
}());

//# sourceMappingURL=view-users.component.js.map

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