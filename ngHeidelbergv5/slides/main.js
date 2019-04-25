(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-present-container></ngx-present-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");
/* harmony import */ var _thecodecampus_ngx_present_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @thecodecampus/ngx-present-theme */ "./node_modules/@thecodecampus/ngx-present-theme/fesm5/thecodecampus-ngx-present-theme.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_slides__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.slides */ "./src/app/app.slides.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ].concat(_app_slides__WEBPACK_IMPORTED_MODULE_8__["slides"]),
            entryComponents: _app_slides__WEBPACK_IMPORTED_MODULE_8__["slides"].slice(),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_4__["NgxPresentModule"].withSlides(_app_slides__WEBPACK_IMPORTED_MODULE_8__["slides"]),
                _thecodecampus_ngx_present_theme__WEBPACK_IMPORTED_MODULE_5__["TccNgxPresentThemeModule"],
                // use hash navigation because browsers are blocking via file protocol
                // due security reasons
                // see https://github.com/angular/angular/issues/13948
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["routes"], { useHash: true }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");

var routes = _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_0__["ngxPresentRoutes"].concat([
    { path: '**', redirectTo: 'slide' }
]);


/***/ }),

/***/ "./src/app/app.slides.ts":
/*!*******************************!*\
  !*** ./src/app/app.slides.ts ***!
  \*******************************/
/*! exports provided: slides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slides", function() { return slides; });
/* harmony import */ var _slides_intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides/intro */ "./src/app/slides/intro.ts");
/* harmony import */ var _slides_outro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides/outro */ "./src/app/slides/outro.ts");
/* harmony import */ var _slides_bazel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides/bazel */ "./src/app/slides/bazel.ts");
/* harmony import */ var _slides_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/typescript */ "./src/app/slides/typescript.ts");
/* harmony import */ var _slides_ivy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/ivy */ "./src/app/slides/ivy.ts");
/* harmony import */ var _slides_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/elements */ "./src/app/slides/elements.ts");
/* harmony import */ var _slides_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides/angular */ "./src/app/slides/angular.ts");







var slides = [
    _slides_intro__WEBPACK_IMPORTED_MODULE_0__["intro"],
    _slides_typescript__WEBPACK_IMPORTED_MODULE_3__["typeScriptSlides"],
    _slides_angular__WEBPACK_IMPORTED_MODULE_6__["angularSlides"],
    _slides_bazel__WEBPACK_IMPORTED_MODULE_2__["bazelSlides"],
    _slides_elements__WEBPACK_IMPORTED_MODULE_5__["elementsSlides"],
    _slides_ivy__WEBPACK_IMPORTED_MODULE_4__["ivySlides"],
    _slides_outro__WEBPACK_IMPORTED_MODULE_1__["outro"],
];


/***/ }),

/***/ "./src/app/slides/angular.ts":
/*!***********************************!*\
  !*** ./src/app/slides/angular.ts ***!
  \***********************************/
/*! exports provided: TitleSlide, NgUpdateSlide, RouterGuardsOldSlide, RouterGuardsProblemSlide, RouterGuardsUrlTreeSlide, Angular8Slide, AngularCLI8Slide, DontFixHtmlSlide, angularSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUpdateSlide", function() { return NgUpdateSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGuardsOldSlide", function() { return RouterGuardsOldSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGuardsProblemSlide", function() { return RouterGuardsProblemSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGuardsUrlTreeSlide", function() { return RouterGuardsUrlTreeSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular8Slide", function() { return Angular8Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCLI8Slide", function() { return AngularCLI8Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DontFixHtmlSlide", function() { return DontFixHtmlSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angularSlides", function() { return angularSlides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");



var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__["TableOfContentEntry"])({
            linkName: 'Angular'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title headline=\"Angular\">\n    </tcc-master-section-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var NgUpdateSlide = /** @class */ (function () {
    function NgUpdateSlide() {
        this.ngUpdateOutput = "\nWe analyzed your package.json, there are some packages to update:\n\nName                Version              Command to update\n-------------------------------------------------------------\n@angular/cli        6.1.2 -> 7.2.1       ng update @angular/cli\n@angular/core       6.1.2 -> 7.2.1       ng update @angular/core\nrxjs                6.2.2 -> 6.3.1       ng update rxjs\n  ";
    }
    NgUpdateSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: "\n  <tcc-master-regular headline=\"ng update\">\n    <div>\n      <pre markdown>\n        * Introduced with Angular CLI 6.0\n        * Helps to stay up to date\n        * Migrates code automatically\n        * <code>ng update</code> analyzes and prints commands\n      </pre>\n      <tcc-code language=\"plain\" [code]=\"ngUpdateOutput\"></tcc-code>\n    </div>\n  </tcc-master-regular>\n" })
    ], NgUpdateSlide);
    return NgUpdateSlide;
}());

var RouterGuardsOldSlide = /** @class */ (function () {
    function RouterGuardsOldSlide() {
        this.code = "\n@Injectable()\nexport class AuthorizationGuard implements CanActivate {\n  constructor(private authService: AuthService, private router: Router) {}\n\n  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {\n    return this.authService.userHasRole(route.data.userRole)\n      .pipe(\n        tap((x) => {\n          if (!x) { this.router.navigate('login'); }\n        }),\n      );\n  }\n}\n  ";
    }
    RouterGuardsOldSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Router Guards until Angular 7.1\">\n      <div>\n        <pre markdown>\n          * Returns <code>Observable&amp;lt;boolean&amp;gt; | Promise&amp;lt;boolean&amp;gt; | boolean</code>\n          * Error handling: navigation via <code>Router#navigate</code> in guard\n        </pre>\n        <tcc-code language=\"typescript\" [code]=\"code\"></tcc-code>\n      </div>\n    </tcc-master-regular>\n  "
        })
    ], RouterGuardsOldSlide);
    return RouterGuardsOldSlide;
}());

var RouterGuardsProblemSlide = /** @class */ (function () {
    function RouterGuardsProblemSlide() {
        this.code = "\nconst routes = [{\n  path: 'admin',\n  component: AdminComponent,\n  canActivate: [\n    AuthenticationGuard,\n    AuthorizationGuard,\n    RandomGuard,\n  ],\n  data: { role: 'ADMIN' }\n}];\n  ";
    }
    RouterGuardsProblemSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Router Guards\">\n      <pre markdown>\n        * Guards cloud be async\n        * What happens if more than one returns false\n        * Depends on timing\n      </pre>\n      <tcc-code language=\"typescript\" [code]=\"code\"></tcc-code>\n    </tcc-master-regular>\n  "
        })
    ], RouterGuardsProblemSlide);
    return RouterGuardsProblemSlide;
}());

var RouterGuardsUrlTreeSlide = /** @class */ (function () {
    function RouterGuardsUrlTreeSlide() {
        this.code = "\n@Injectable()\nclass AuthorizationGuard implements CanActivate {\n  constructor(private authService: AuthService,\n              private router: Router) {}\n\n  canActivate(route: ActivatedRouteSnapshot) {\n    const urlTree = this.router.parseUrl('login');\n    return this.authService.hasRole(route.data.role)\n      .pipe(\n        map((x) => {\n          if (!x) { return urlTree; }\n          else { return true; }\n        }),\n      );\n  }\n}\n  ";
    }
    RouterGuardsUrlTreeSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Router Guards\">\n      <div>\n        <pre markdown>\n          * New in Angular 7.1\n          * Guards can return <code>UrlTree</code> instead of <code>boolean</code>\n          * Guards are prioritized (position in array)\n        </pre>\n      </div>\n      <tcc-code language=\"typescript\" [code]=\"code\"></tcc-code>\n    </tcc-master-regular>\n  "
        })
    ], RouterGuardsUrlTreeSlide);
    return RouterGuardsUrlTreeSlide;
}());

var Angular8Slide = /** @class */ (function () {
    function Angular8Slide() {
    }
    Angular8Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Angular 8\">\n      <pre markdown>\n        * Aktuell Beta 11\n        * Release Candidate scheduled for April\n        * Ivy Renderer Preview\n        * Improved Bazel Support\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], Angular8Slide);
    return Angular8Slide;
}());

var AngularCLI8Slide = /** @class */ (function () {
    function AngularCLI8Slide() {
    }
    AngularCLI8Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Angular 8\">\n      <pre markdown>\n        * Only TypeScript 3.3\n        * All PNGs run through pngcrush during build\n        * JSON-Schema-Support for Service-Worker-Configuration\n        * <code>AbstractControl#markAllAsTouched()</code>\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], AngularCLI8Slide);
    return AngularCLI8Slide;
}());

var DontFixHtmlSlide = /** @class */ (function () {
    function DontFixHtmlSlide() {
        this.code1 = "\n<table>\n  <tr></tr>\n</table>\n  ";
        this.code2 = "\n<table>\n  <tbody>\n    <tr></tr>\n  </tbody>\n</table>  \n  ";
    }
    DontFixHtmlSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Won't fix broken HTML\">\n      <pre markdown>\n        * <code>&amp;lt;!doctype html&amp;gt;</code> in index.html\n        * <code>tr</code> only valid inside of <code>thead</code>, <code>tbody</code> oder <code>tfoot</code>\n        * Till now: auto correction\n        * Breaking Change in Angular 8: no auto correction anymore\n      </pre>\n      <div>\n        <tcc-code language=\"typescript\" [code]=\"code1\" headline=\"invalid html\"></tcc-code>\n        <tcc-code language=\"typescript\" [code]=\"code2\" headline=\"auto fixed html\"></tcc-code>\n      </div>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], DontFixHtmlSlide);
    return DontFixHtmlSlide;
}());

var angularSlides = [
    TitleSlide,
    NgUpdateSlide,
    RouterGuardsOldSlide,
    RouterGuardsProblemSlide,
    RouterGuardsUrlTreeSlide,
    Angular8Slide,
    AngularCLI8Slide,
    DontFixHtmlSlide,
];


/***/ }),

/***/ "./src/app/slides/bazel.ts":
/*!*********************************!*\
  !*** ./src/app/slides/bazel.ts ***!
  \*********************************/
/*! exports provided: TitleSlide, AboutBazelSlide, CLIvsBazelSlide, BazelOverviewSlide, BazelAndCLISlide, BazelSlideImageSlide, BazelDemoSlide, BazelInDepthSlide, bazelSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBazelSlide", function() { return AboutBazelSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIvsBazelSlide", function() { return CLIvsBazelSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazelOverviewSlide", function() { return BazelOverviewSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazelAndCLISlide", function() { return BazelAndCLISlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazelSlideImageSlide", function() { return BazelSlideImageSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazelDemoSlide", function() { return BazelDemoSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazelInDepthSlide", function() { return BazelInDepthSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bazelSlides", function() { return bazelSlides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");



var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__["TableOfContentEntry"])({
            linkName: 'Bazel'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title headline=\"Bazel\">\n    </tcc-master-section-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var AboutBazelSlide = /** @class */ (function () {
    function AboutBazelSlide() {
    }
    AboutBazelSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Bazel\">\n      <pre markdown>\n        * <a href=\"https://bazel.build/\" target=\"_blank\">Bazel</a>\n          * Fast, scalable, multi-language and extensible build system\n          * Developed by Google\n          * Internally used heavily for a long time (called Blaze)\n          * So far little known / used outside of Google\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], AboutBazelSlide);
    return AboutBazelSlide;
}());

var CLIvsBazelSlide = /** @class */ (function () {
    function CLIvsBazelSlide() {
    }
    CLIvsBazelSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"CLI vs Bazel\">\n      <pre markdown>\n        * Google's Angular projects are build with Bazel\n          * Nearly no usage of Angular CLI by Google\n        * Why? CLI not usable for large projects\n          * Too slow / no incremental builds\n          * Hard to extend\n        * Currently two Build-Tools to maintain\n        * Experiment: Migrate CLI to Bazel (<a href=\"https://g.co/ng/abc\" target=\"_blank\">ABC Project</a>)\n          * Affects internal subsystem only\n          * Same high level commands\n          * Nearly no points of contact for end users\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], CLIvsBazelSlide);
    return CLIvsBazelSlide;
}());

var BazelOverviewSlide = /** @class */ (function () {
    function BazelOverviewSlide() {
    }
    BazelOverviewSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Bazel\">\n      <pre markdown>\n        * Bazel is fast\n          * runs tasks in parallel\n          * caches results\n          * builds incremental\n          * executes and caches remotely\n        * Bazel is extendable\n          * Plugins are like unix pipes\n        * Bazel is versatile\n          * One build tool for all kinds of projects\n          * Build your backend\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], BazelOverviewSlide);
    return BazelOverviewSlide;
}());

var BazelAndCLISlide = /** @class */ (function () {
    function BazelAndCLISlide() {
    }
    BazelAndCLISlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Angular CLI with Bazel\">\n      <pre markdown>\n        * Currently an Angular Labs project\n          * Not ready for production\n          * Preview in Angular 7\n          * Highly improved Preview in Angular 8\n          * Optional in Angular 9\n        * Usage should remain the same\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], BazelAndCLISlide);
    return BazelAndCLISlide;
}());

var BazelSlideImageSlide = /** @class */ (function () {
    function BazelSlideImageSlide() {
    }
    BazelSlideImageSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Performance\">\n      <div>\n        <pre markdown>\n          * Slide from Presentation in January\n        </pre>\n        <img src=\"assets/images/bazel-performance.png\" style=\"max-width: 90vw; max-height: 65vh;\" alt=\"Slide with some performance measurements\">\n      </div>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], BazelSlideImageSlide);
    return BazelSlideImageSlide;
}());

var BazelDemoSlide = /** @class */ (function () {
    function BazelDemoSlide() {
    }
    BazelDemoSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Demo\">\n      <pre markdown>\n        * <code>npm install -g @angular/cli@next</code>\n        * <code>npm install -g @angular/bazel@next</code>\n        * <code>ng new bazel-app --collection=@angular/bazel</code>\n        * <code>npm run start</code>\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], BazelDemoSlide);
    return BazelDemoSlide;
}());

var BazelInDepthSlide = /** @class */ (function () {
    function BazelInDepthSlide() {
    }
    BazelInDepthSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Bazel im Detail\">\n      <a href=\"https://docs.google.com/presentation/d/1OwktccLvV3VvWn3i7H2SuZkBeAQ8z-E5RdJODVLf8SA/preview\" target=\"_blank\">Google Bazel Training</a>\n    </tcc-master-regular>\n  "
        })
    ], BazelInDepthSlide);
    return BazelInDepthSlide;
}());

var bazelSlides = [
    TitleSlide,
    AboutBazelSlide,
    CLIvsBazelSlide,
    BazelOverviewSlide,
    BazelAndCLISlide,
    BazelSlideImageSlide,
    BazelDemoSlide,
    BazelInDepthSlide,
];


/***/ }),

/***/ "./src/app/slides/elements.ts":
/*!************************************!*\
  !*** ./src/app/slides/elements.ts ***!
  \************************************/
/*! exports provided: TitleSlide, IntroSlide, WebComponentsSlide, PolyfillsSlide, UseCasesSlide, ElementsSlide, Demo1Slide, DynamicComponent1Slide, DynamicComponent2Slide, LazyLoading1Slide, MicroFrontendSlide, BundleSlide, Demo2Slide, elementsSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSlide", function() { return IntroSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponentsSlide", function() { return WebComponentsSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyfillsSlide", function() { return PolyfillsSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseCasesSlide", function() { return UseCasesSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsSlide", function() { return ElementsSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Slide", function() { return Demo1Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent1Slide", function() { return DynamicComponent1Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent2Slide", function() { return DynamicComponent2Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoading1Slide", function() { return LazyLoading1Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroFrontendSlide", function() { return MicroFrontendSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleSlide", function() { return BundleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo2Slide", function() { return Demo2Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsSlides", function() { return elementsSlides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");



var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__["TableOfContentEntry"])({
            linkName: 'Angular Elements'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title headline=\"Angular Elements\">\n    </tcc-master-section-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var IntroSlide = /** @class */ (function () {
    function IntroSlide() {
    }
    IntroSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"What it's all about?\">\n      <pre markdown>\n        * Till today\n          * Angular components are developed as part of Angular apps or libs\n          * Angular components are used in Angular apps\n          * Closed eco system, no open web standard\n        * What if we could\n          * Use Angular components outside of Angular apps\n          * Use components of other frameworks\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], IntroSlide);
    return IntroSlide;
}());

var WebComponentsSlide = /** @class */ (function () {
    function WebComponentsSlide() {
    }
    WebComponentsSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Web Components\">\n      <pre markdown>\n        * WebComponents should enable us to do that\n        * Umbrella for multiple standards\n          * HTML Templates\n          * Custom Elements\n          * Shadow Dom\n        * Develop with or without framework\n        * Use components framework independently\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], WebComponentsSlide);
    return WebComponentsSlide;
}());

var PolyfillsSlide = /** @class */ (function () {
    function PolyfillsSlide() {
    }
    PolyfillsSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Polyfills\">\n      <pre markdown>\n        * For IE and Edge we need a polyfill<br>\n          <a href=\"https://www.webcomponents.org\" target=\"_blank\">@webcomponents/webcomponentsjs</a>\n        * IE supports nearly no ES2015 &rarr; compile to ES5\n        * Next Problem: WebComponents rely on ES2015\n          * Modern Browsers do not allow WebComponents with ES5\n        * Solution 1: Additional polyfill <code>native-shim.js</code>\n        * Solution 2: Differential Loading (<a href=\"https://github.com/manfredsteyer/ngx-build-plus/tree/master/ngx-build-modern\" target=\"_blank\">ngx-build-modern</a>)\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], PolyfillsSlide);
    return PolyfillsSlide;
}());

var UseCasesSlide = /** @class */ (function () {
    function UseCasesSlide() {
    }
    UseCasesSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Use Cases\">\n      <pre markdown>\n        * CMS Integration\n        * Multi-Framework Development\n        * Integration in legacy apps\n          * Upgrade from AngularJS zu Angular<br>\n            (alternative to @angular/upgrade)\n        * Lazy Laoding und Micro-Frontends\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], UseCasesSlide);
    return UseCasesSlide;
}());

var ElementsSlide = /** @class */ (function () {
    function ElementsSlide() {
    }
    ElementsSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Angular Elements\">\n      <pre markdown>\n        * Angular Elements provides function <code>createCustomElement</code>\n          * Packs Angular component as WebComponent\n        * Internally we can use everything Angular provides\n        * Looks like standard WebComponent to the outer world\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], ElementsSlide);
    return ElementsSlide;
}());

var Demo1Slide = /** @class */ (function () {
    function Demo1Slide() {
    }
    Demo1Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Demo\">\n      <h2>Let's try it</h2>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n        * ng new elements-app\n        * ng add @angular/elements\n        * ng g m feature1\n        * ng g c feature1/foobar\n        * Foobar bekommt zwei Inputs, primitiv und Objekt\n        * Foobar gibt beides im UI aus\n        * Feature1Module in constructor\n          * createCustomElement aufrufen\n          * CustomElement registrieren mit customElement.define('selector', ce)\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], Demo1Slide);
    return Demo1Slide;
}());

var DynamicComponent1Slide = /** @class */ (function () {
    function DynamicComponent1Slide() {
        this.ngComponent = "\nconst popup = document.createElement('popup-component');\n\nconst factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);\nconst popupComponentRef = factory.create(this.injector, [], popup);\n\nthis.applicationRef.attachView(popupComponentRef.hostView);\n\npopupComponentRef.instance.closed.subscribe(() => {\n  document.body.removeChild(popup);\n  this.applicationRef.detachView(popupComponentRef.hostView);\n});\n\npopupComponentRef.instance.message = message;\n\ndocument.body.appendChild(popup);\n  ";
    }
    DynamicComponent1Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Komponente dynamisch erzeugen\">\n      <div>\n        <pre markdown>\n          * Till now usage only in template\n          * WebComponents make dynamic instantiation much easier\n        </pre>\n        <tcc-code language=\"typescript\" [code]=\"ngComponent\"></tcc-code>\n      </div>\n    </tcc-master-regular>\n  "
        })
    ], DynamicComponent1Slide);
    return DynamicComponent1Slide;
}());

var DynamicComponent2Slide = /** @class */ (function () {
    function DynamicComponent2Slide() {
        this.webComponent = "\nconst popupEl: NgElement & WithProperties<PopupComponent> =\n  document.createElement('popup-element') as any;\n\npopupEl.addEventListener('closed', () => document.body.removeChild(popupEl));\n\npopupEl.message = message;\n\ndocument.body.appendChild(popupEl);\n  ";
    }
    DynamicComponent2Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Komponente dynamisch erzeugen\">\n      <div>\n        <pre markdown>\n          * Till now usage only in template\n          * WebComponents make dynamic instantiation much easier\n        </pre>\n        <tcc-code language=\"typescript\" [code]=\"webComponent\"></tcc-code>\n      </div>\n    </tcc-master-regular>\n  "
        })
    ], DynamicComponent2Slide);
    return DynamicComponent2Slide;
}());

var LazyLoading1Slide = /** @class */ (function () {
    function LazyLoading1Slide() {
    }
    LazyLoading1Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Lazy Loading\">\n      <div>\n        <pre markdown>\n          * We all know lazy loading\n          * Angluar CLI produces small separated bundles\n          * Bundles only contain additional code\n          * Depend on context with Angular already running\n        </pre>\n      </div>\n    </tcc-master-regular>\n  "
        })
    ], LazyLoading1Slide);
    return LazyLoading1Slide;
}());

var MicroFrontendSlide = /** @class */ (function () {
    function MicroFrontendSlide() {
    }
    MicroFrontendSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Micro Frontend\">\n      <pre markdown>\n        * Goal\n          * Load a script on demand\n          * In any application\n          * From any source\n        * Problem\n          * Script doesn't know context\n          * Has to contain everything it needs\n          * TreeShaking very important\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], MicroFrontendSlide);
    return MicroFrontendSlide;
}());

var BundleSlide = /** @class */ (function () {
    function BundleSlide() {
    }
    BundleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Export WebComponent\">\n      <pre markdown>\n        * <code>ng build</code> produces 4 files\n          * Too complicated to use in other environment\n        * <a href=\"https://github.com/manfredsteyer/ngx-build-plus\" target=\"_blank\">ngx-build-plus</a> extends Angular CLI\n        * <code>ng build --output-hashing none --single-bundle</code>\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], BundleSlide);
    return BundleSlide;
}());

var Demo2Slide = /** @class */ (function () {
    function Demo2Slide() {
    }
    Demo2Slide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Demo\">\n      <h2>Let's try it!</h2>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n        * Registrierung nach AppModule in ngDoBootstrap verschieben\n        * bootstrap Feld in AppModule Decorator leeren\n        * <code>ng add ngx-build-plus</code>\n        * <code>ng build --output-hashing none --single-bundle</code>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], Demo2Slide);
    return Demo2Slide;
}());

var elementsSlides = [
    TitleSlide,
    IntroSlide,
    WebComponentsSlide,
    UseCasesSlide,
    PolyfillsSlide,
    ElementsSlide,
    Demo1Slide,
    DynamicComponent1Slide,
    DynamicComponent2Slide,
    LazyLoading1Slide,
    MicroFrontendSlide,
    BundleSlide,
    Demo2Slide,
];


/***/ }),

/***/ "./src/app/slides/intro.ts":
/*!*********************************!*\
  !*** ./src/app/slides/intro.ts ***!
  \*********************************/
/*! exports provided: TitleSlide, AboutMeSlide, intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeSlide", function() { return AboutMeSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intro", function() { return intro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-title>\n      <ng-container top>\n        <div class=\"logo\">\n          <img src=\"assets/images/tcc-logo-white.svg\" alt=\"theCodeCampus Logo\" class=\"img-responsive\" style=\"max-height: 4em; margin-bottom: 1em;\">\n        </div>\n        <div class=\"logo\">\n          <img src=\"assets/images/w11k-logo.svg\" alt=\"w11k Logo\" class=\"img-responsive\" style=\"max-height: 3.5em; margin-bottom: 2em;\">\n        </div>\n      </ng-container>\n  \n      <ng-container title>\n        Angular up to Date<br>\n        <small>Bazel, Elements & Ivy and more</small>\n      </ng-container>\n  \n      <ng-container bottom>\n        <div style=\"margin-top: 4em\">\n          <img src=\"assets/images/logos/meetup.svg\" style=\"height: 3.5em; margin-bottom: -0.8em;\">\n          <span style=\"font-size: 3em; color: white; font-style: italic; margin-left: 1em\">#ngHeidelberg</span>\n        </div>\n      </ng-container>\n  \n    </tcc-master-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var AboutMeSlide = /** @class */ (function () {
    function AboutMeSlide() {
    }
    AboutMeSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"About me\">\n      <pre markdown>\n        * Philipp Burgmer\n        * W11K / theCodeCampus\n        * Developer, Trainer\n        * TypeScript, Angular\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], AboutMeSlide);
    return AboutMeSlide;
}());

var intro = [
    TitleSlide,
    AboutMeSlide,
];


/***/ }),

/***/ "./src/app/slides/ivy.ts":
/*!*******************************!*\
  !*** ./src/app/slides/ivy.ts ***!
  \*******************************/
/*! exports provided: TitleSlide, IntroSlide, NonIvyDemoSlide, NonIvyProblemsSlide, IvySlide, CompilerSlide, DemoSlide, DemoCodeSlide, AdvantagesSlide, RendererAsServiceSlide, StatusSlide, ivySlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSlide", function() { return IntroSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonIvyDemoSlide", function() { return NonIvyDemoSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonIvyProblemsSlide", function() { return NonIvyProblemsSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvySlide", function() { return IvySlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerSlide", function() { return CompilerSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSlide", function() { return DemoSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCodeSlide", function() { return DemoCodeSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvantagesSlide", function() { return AdvantagesSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererAsServiceSlide", function() { return RendererAsServiceSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusSlide", function() { return StatusSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ivySlides", function() { return ivySlides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");



var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__["TableOfContentEntry"])({
            linkName: 'Ivy Renderer'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title headline=\"Ivy Renderer\">\n    </tcc-master-section-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var IntroSlide = /** @class */ (function () {
    function IntroSlide() {
    }
    IntroSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"What it's all about?\">\n      <pre markdown>\n        * In Templates we use Angular\n          * Components, directives, interpolation\n          * Micro syntax like ngFor und pipes\n        * Template has to be parsed and translated\n        * We already know that (JIT vs AOT)\n        * But what is the target format?\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], IntroSlide);
    return IntroSlide;
}());

var NonIvyDemoSlide = /** @class */ (function () {
    function NonIvyDemoSlide() {
        this.code1 = "\nconst i1 = require(\"@angular/core\");\nconst i2 = require(\"project/src/app/app.component\");\nvar styles_AppComponent = [i0.styles];\nvar RenderType_AppComponent = i1.\u0275crt({ encapsulation: 0, styles: styles_AppComponent, data: {} });\nexports.RenderType_AppComponent = RenderType_AppComponent;\nfunction View_AppComponent_0(_l) { return i1.\u0275vid(0, [(_l()(), i1.\u0275eld(0, 0, null, null, 1, \"h1\", [], null, null, null, null, null)), (_l()(), i1.\u0275ted(1, null, [\" Welcome to \", \"!\\n\"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); }); }\nexports.View_AppComponent_0 = View_AppComponent_0;\nfunction View_AppComponent_Host_0(_l) { return i1.\u0275vid(0, [(_l()(), i1.\u0275eld(0, 0, null, null, 1, \"app-root\", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.\u0275did(1, 49152, null, 0, i2.AppComponent, [], null, null)], null, null); }\nexports.View_AppComponent_Host_0 = View_AppComponent_Host_0;\nvar AppComponentNgFactory = i1.\u0275ccf(\"app-root\", i2.AppComponent, View_AppComponent_Host_0, {}, {}, []);  \n  ";
        this.code2 = "\n<h1>Welcome to {{ title }}!</h1>\n  ";
    }
    NonIvyDemoSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Non Ivy Target\">\n      <div style=\"width: 90vw\">\n        <tcc-code style=\"max-width: 90vw; overflow-x: scroll\" language=\"html\" [code]=\"code2\" headline=\"app.component.html\"></tcc-code>\n        <tcc-code style=\"max-width: 90vw; overflow-x: scroll\" language=\"typescript\" [code]=\"code1\" headline=\"app.component.ngfactory.js\"></tcc-code>\n        \n      </div>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n        * ng build ausf\u00FChren, ohne prod\n        * in <code>main.js</code> nach app.component.html suchen\n        * Renderer ist ein Objekt, ein Angular Service\n        * ComponentFactory wurde generiert\n        * Metadaten stehen nicht direkt da\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], NonIvyDemoSlide);
    return NonIvyDemoSlide;
}());

var NonIvyProblemsSlide = /** @class */ (function () {
    function NonIvyProblemsSlide() {
    }
    NonIvyProblemsSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Problems\">\n      <pre markdown>\n        * Code should be optimized by TreeShaker later on\n        * Generated Code not ideal\n          * Parts of Angular Core not tree shakable\n        * What cloud / should be shaken away?\n          * Template syntax, Content projection\n          * Dependency injection\n          * Structural directives\n          * Lifecycle hooks, pipes, queries, listeners\n        * Goal: make everything tree shakable\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], NonIvyProblemsSlide);
    return NonIvyProblemsSlide;
}());

var IvySlide = /** @class */ (function () {
    function IvySlide() {
    }
    IvySlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Ivy Renderer\">\n      <pre markdown>\n        * Nearly no direct contact with renderer / view engine\n        * After <code>Renderer</code> und <code>Renderer2</code> Ivy is third version\n          * Who noticed the previous change in Angular 4?\n          * Important if you use <code>Renderer</code> as a service\n        * Ivy should cause no breaking changes!\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], IvySlide);
    return IvySlide;
}());

var CompilerSlide = /** @class */ (function () {
    function CompilerSlide() {
    }
    CompilerSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Angular Compiler\">\n      <pre markdown>\n        * Compiler has to be adjusted to produce Ivy code\n        * What happens to already compiled code\n          * Libraries, installed via npm\n        * Compatibility Compiler ngcc: rewrites Code to new API\n          * Currently as npm-postinstall-Skript to just run it once\n          * Changes code in node_modules\n        *  Bazel enables advanced caching\n          * ngcc runs once, output will be cached by bazel\n          * ngcc will be skipped if node_modules haven't changed\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], CompilerSlide);
    return CompilerSlide;
}());

var DemoSlide = /** @class */ (function () {
    function DemoSlide() {
    }
    DemoSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Demo\">\n      <pre markdown>\n        * <code>npm install -g @angular/cli@next</code>\n        * <code>ng new ivy-app --enable-ivy</code>\n        * <code>cd ivy-app</code>\n        * <code>ng build --aot</code>\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n        * Hello World ein mal mit und ein mal ohne Ivy\n        * Jeweils den generierten Code zeigen, <code>ng build</code> ohne prod\n        * Bundle Size vergleichen\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], DemoSlide);
    return DemoSlide;
}());

var DemoCodeSlide = /** @class */ (function () {
    function DemoCodeSlide() {
        this.code = "\nvar AppComponent = /** @class */ (function () {\n  function AppComponent() {\n    this.title = 'Ivy';\n  }\n  AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275defineComponent\"]({ type: AppComponent, selectors: [[\"app-root\"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 2, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {\n      _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275elementStart\"](0, \"h1\");\n      _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275text\"](1);\n      _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275elementEnd\"]();\n    } if (rf & 2) {\n      _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275flushHooksUpTo\"](1);\n      _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275textBinding\"](1, _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"\u0275interpolation1\"](\" Welcome to \", ctx.title, \"!\\n\"));\n    } }, styles: [\"\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */\"] });\n  return AppComponent;\n}());\n  ";
    }
    DemoCodeSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Demo\">\n      <tcc-code style=\"max-width: 90vw; overflow-x: scroll\" language=\"typescript\" [code]=\"code\"></tcc-code>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], DemoCodeSlide);
    return DemoCodeSlide;
}());

var AdvantagesSlide = /** @class */ (function () {
    function AdvantagesSlide() {
    }
    AdvantagesSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Ivy Advantages\">\n      <pre markdown>\n        * Easier debugging with shorter stack traces\n        * Debugging API <code>ng.getComponent($0)</code>\n        * Lazy Loading with standard dynamic imports instead of magic strings\n        * Higher Order Components\n          * Pass components to other components\n          * Already possible but very complicated\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], AdvantagesSlide);
    return AdvantagesSlide;
}());

var RendererAsServiceSlide = /** @class */ (function () {
    function RendererAsServiceSlide() {
    }
    RendererAsServiceSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Renderer als Service\">\n      <pre markdown>\n        * Renderer as Angular Service via DI available\n          * Preferred way to manipulate DOM\n        * Why?\n          * Security, DOM API is like Swiss cheese\n          * Animations\n          * Alternative Renderer\n        * What's gonna happen to NativeScript?\n      </pre>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], RendererAsServiceSlide);
    return RendererAsServiceSlide;
}());

var StatusSlide = /** @class */ (function () {
    function StatusSlide() {
    }
    StatusSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Status\">\n      <pre markdown>\n        * Preview in Angular 8\n        * Plan: Default in Angular 9\n        * ~30 fixme comments\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], StatusSlide);
    return StatusSlide;
}());

var ivySlides = [
    TitleSlide,
    IntroSlide,
    NonIvyDemoSlide,
    NonIvyProblemsSlide,
    IvySlide,
    CompilerSlide,
    DemoSlide,
    DemoCodeSlide,
    AdvantagesSlide,
    RendererAsServiceSlide,
    StatusSlide,
];


/***/ }),

/***/ "./src/app/slides/outro.ts":
/*!*********************************!*\
  !*** ./src/app/slides/outro.ts ***!
  \*********************************/
/*! exports provided: EndSlide, outro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndSlide", function() { return EndSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro", function() { return outro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndSlide = /** @class */ (function () {
    function EndSlide() {
    }
    EndSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title>\n      End\n    </tcc-master-section-title>\n  "
        })
    ], EndSlide);
    return EndSlide;
}());

var outro = [
    EndSlide,
];


/***/ }),

/***/ "./src/app/slides/typescript.ts":
/*!**************************************!*\
  !*** ./src/app/slides/typescript.ts ***!
  \**************************************/
/*! exports provided: TitleSlide, TypescriptSlide, ReadonlyArraySlide, ConstAssertionSlide1, ConstAssertionSlide2, ConfigExampleSlide, typeScriptSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSlide", function() { return TitleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptSlide", function() { return TypescriptSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadonlyArraySlide", function() { return ReadonlyArraySlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstAssertionSlide1", function() { return ConstAssertionSlide1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstAssertionSlide2", function() { return ConstAssertionSlide2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigExampleSlide", function() { return ConfigExampleSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeScriptSlides", function() { return typeScriptSlides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w11k/ngx-present */ "./node_modules/@w11k/ngx-present/fesm5/w11k-ngx-present.js");



var TitleSlide = /** @class */ (function () {
    function TitleSlide() {
    }
    TitleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_w11k_ngx_present__WEBPACK_IMPORTED_MODULE_2__["TableOfContentEntry"])({
            linkName: 'TypeScript'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-section-title headline=\"TypeScript\">\n    </tcc-master-section-title>\n  "
        })
    ], TitleSlide);
    return TitleSlide;
}());

var TypescriptSlide = /** @class */ (function () {
    function TypescriptSlide() {
    }
    TypescriptSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"TypeScript Versions\">\n      <pre markdown>\n        * TypeScript version depends on Angular CLI\n        * Only certain versions are supported \n        * Lags behind a bit most of the time\n        * Currently 3.2 instead of 3.4\n      </pre>\n    </tcc-master-regular>\n  "
        })
    ], TypescriptSlide);
    return TypescriptSlide;
}());

var ReadonlyArraySlide = /** @class */ (function () {
    function ReadonlyArraySlide() {
        this.code = "\n// already possible\nfunction foo(arr: ReadonlyArray<string>) {\n    arr.slice();        // okay\n    arr.push(\"hello!\"); // error!\n}\n\n// new syntax\nfunction bar(arr: readonly string[]) {}\n  ";
    }
    ReadonlyArraySlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"ReadonlyArray\">\n      <tcc-code language=\"typescript\" [code]=\"code\"></tcc-code>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], ReadonlyArraySlide);
    return ReadonlyArraySlide;
}());

var ConstAssertionSlide1 = /** @class */ (function () {
    function ConstAssertionSlide1() {
        this.code1 = "\nlet a1 = 10; // a: number\nconst a2 = 10; // a: 10\nlet b1 = [10, 20]; // b: number[]\nconst b2 = [10, 20]; // b: number[]\n\nlet x = 10 as const; // x: 10\nlet y = [10, 20] as const; // y: readonly [10, 20]\nlet z = { nested: { text: \"hello\" } } as const;\n// z: { readonly nested: { readonly text: \"hello\" }}\n  ";
    }
    ConstAssertionSlide1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Const Assertion\">\n      <tcc-code language=\"typescript\" [code]=\"code1\"></tcc-code>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], ConstAssertionSlide1);
    return ConstAssertionSlide1;
}());

var ConstAssertionSlide2 = /** @class */ (function () {
    function ConstAssertionSlide2() {
        this.code2 = "\nlet arr = [1, 2, 3, 4];\nlet foo = { name: \"foo\", contents: arr } as const;\n\nfoo.name = \"bar\";   // error!\nfoo.contents = [];  // error!\nfoo.contents.push(5); // ...works!\n  ";
    }
    ConstAssertionSlide2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Const Assertion\">\n      <tcc-code language=\"typescript\" [code]=\"code2\"></tcc-code>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], ConstAssertionSlide2);
    return ConstAssertionSlide2;
}());

var ConfigExampleSlide = /** @class */ (function () {
    function ConfigExampleSlide() {
        this.code1 = "\nconst defaultConfig = {\n  foo: { enabled: true as boolean },\n  bar: { flag: 0 as -1 | 0 | 1 },\n} as const;\n\nexport type Config = typeof defaultConfig;\n\n@NgModule({})\nexport class SomeModule {\n  static forRoot(config: Partial<Config>) {\n    // merge config and defaultConfig\n  }\n}\n  ";
    }
    ConfigExampleSlide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <tcc-master-regular headline=\"Use Case\">\n      <div>\n        <tcc-code language=\"typescript\" [code]=\"code1\"></tcc-code>\n      </div>\n    </tcc-master-regular>\n    <tcc-speaker-notes *ngxPresentSpeakerNotes>\n      <pre markdown>\n      </pre>\n    </tcc-speaker-notes>\n  "
        })
    ], ConfigExampleSlide);
    return ConfigExampleSlide;
}());

var typeScriptSlides = [
    TitleSlide,
    TypescriptSlide,
    ReadonlyArraySlide,
    ConstAssertionSlide1,
    ConstAssertionSlide2,
    ConfigExampleSlide,
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/philippburgmer/W11K/Projekte/W11K/theCodeCampus/Repositories/angular-workshop-up-to-date/slides/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map