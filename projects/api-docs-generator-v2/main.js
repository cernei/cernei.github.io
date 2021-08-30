(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/veaceslavcernei/work/utils/api-generator/src/main.ts */"zUnb");


/***/ }),

/***/ "9SnN":
/*!**********************************!*\
  !*** ./src/app/data-examples.ts ***!
  \**********************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = {
    testInput: `{ // @SomeName
  "status": "success", // general status @required
  "message": "The operation has been successfully completed.", // response message
  "dateCreated": "2008-10-12",
  "data": { // data object
    "items": [ // items
      { //5
        "id": 629261, // tender id
        "name": "International Consultant - GIS and Climate Modelling Specialist", // fancy name
        "nested": {
          "first": "first",
        },
        "nestedArray": [
          [ // 12
            { //13
              "test": 1
            }
          ]
        ],
        "empty": []
      },
    ],
    "total": 515876 // counter
  }
}
`
};


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    static getComments(input) {
        const arr = input.split('\n');
        const comments = [];
        arr.forEach((item, index) => {
            const found = item.match(/\/\/[^\/]+/);
            if (found) {
                comments[index] = found[0].substring(2).trim();
            }
        });
        return comments;
    }
    static parseAnnotations(str) {
        const attr = {};
        if (str && str.length) {
            str = str.replace(/@[A-Za-z0-9]+/g, (match) => {
                match = match.replace('@', '');
                if (['nullable', 'required'].includes(match)) {
                    attr[match] = true;
                }
                else {
                    attr.$ref = match;
                }
                return '';
            });
            if (str.length) {
                attr.description = str.trim();
            }
        }
        return attr;
    }
    static walk(input) {
        const comment = this.comments[this.lineIndex];
        const annotations = this.parseAnnotations(comment);
        if (Array.isArray(input)) {
            let item;
            if (input.length) {
                this.lineIndex += 1;
                item = this.walk(input[0]);
                this.lineIndex += 1;
            }
            else {
                item = this.walk(2);
            }
            return Object.assign(Object.assign({ type: 'array' }, annotations), { items: item });
        }
        else if (input && typeof input === 'object') {
            const props = {};
            Object.keys(input).forEach((propertyName, index) => {
                this.lineIndex += 1;
                const propertyValue = this.walk(input[propertyName]);
                // const existingSchemaName = this.checkIfSchemaExists(propertyValue);
                // if (existingSchemaName) {
                //   props[propertyName] = {
                //     $ref: '#/components/schemas/' + existingSchemaName
                //   };
                // } else {
                //   props[propertyName] = propertyValue;
                // }
                props[propertyName] = propertyValue;
            });
            this.lineIndex += 1;
            return Object.assign(Object.assign({ type: 'object' }, annotations), { properties: props });
        }
        else if (Number.isInteger(input)) {
            return Object.assign(Object.assign({ type: 'integer' }, annotations), { example: input });
        }
        else if (typeof input === 'boolean') {
            return Object.assign(Object.assign({ type: 'boolean' }, annotations), { example: input });
        }
        else {
            return Object.assign(Object.assign({ type: 'string' }, annotations), { example: input });
        }
    }
    static normalize(value) {
        return value;
    }
}
DataService.lineIndex = 0;
DataService.comments = [];
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _data_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-examples */ "9SnN");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ace-editor */ "QZHh");







const YAML = __webpack_require__(/*! json2yaml */ "gkHL");
const JSON5 = __webpack_require__(/*! json5 */ "XkjI");
class AppComponent {
    // private inputText: string | undefined;
    constructor(fb) {
        this.fb = fb;
        this.title = 'api-generator';
        this.yamlText = '';
        this.comments = [];
        this.inputTextString = '';
        this.cursorLine = 0;
        this.cursorPosition = 0;
        this.searchResults = [
            { name: 'TestSchema' }
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            inputText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    // selectSchema(name: string): void {
    //   const text = this.form.controls.inputText.value;
    //   const output = [text.slice(0, this.cursorPosition), name, text.slice(this.cursorPosition)].join('');
    //
    //   this.form.controls.inputText.setValue(output);
    // }
    // // getCursorLine(event: KeyboardEvent): number {
    // //   if (event) {
    // //     this.cursorLine = this.form.getRawValue().inputText.substr(0, event.target.selectionStart).split('\n').length - 1;
    // //     this.cursorPosition = event.target.selectionStart;
    // //     return this.cursorLine;
    // //   }
    // // }
    //
    convert() {
        console.log('convert');
        let jsonObject = null;
        try {
            jsonObject = JSON5.parse(this.inputTextString.trim());
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].comments = _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].getComments(this.inputTextString);
            //  console.log(this.comments);
            this.form.controls.inputText.setErrors(null);
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].lineIndex = 0;
            console.log(jsonObject);
            const obj = _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].walk(jsonObject);
            this.yamlText = YAML.stringify(obj);
            this.yamlText = this.yamlText.substring(this.yamlText.indexOf('\n') + 1);
        }
        catch (error) {
            this.form.controls.inputText.setErrors({ incorrect: true });
            console.log('Invalid JSON format', error);
        }
        //
    }
    //
    copy() {
        this.copyMessage(this.yamlText);
    }
    //
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    //
    ngOnInit() {
    }
    insertExample() {
        this.inputTextString = _data_examples__WEBPACK_IMPORTED_MODULE_2__["DATA"].testInput;
        this.convert();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 31, vars: 5, consts: [[1, "container-fluid", "converter-container"], [1, "row"], [1, "col-md-7"], [3, "formGroup"], [1, "form-group"], [1, "col-md-2"], [1, "col-md-6"], [1, "col-md-4", "text-right"], ["type", "button", 1, "btn", "btn-xs", "btn-success", 3, "click"], ["type", "hidden", "formControlName", "inputText"], ["id", "editor", 2, "height", "800px", "font-size", "18px", 3, "text", "mode", "theme", "textChange", "textChanged"], [1, "col-md-5"], [1, "col-md-6", "text-right"], ["type", "button", 1, "btn", "btn-xs", "btn-warning", 3, "click"], [1, "yaml"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "JSON5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.insertExample(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Insert example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ace-editor", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function AppComponent_Template_ace_editor_textChange_16_listener($event) { return ctx.inputTextString = $event; })("textChanged", function AppComponent_Template_ace_editor_textChanged_16_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "YAML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Copy to clipboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.inputTextString)("mode", "json5")("theme", "eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yamlText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__["AceEditorComponent"]], styles: ["textarea.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\ntextarea[_ngcontent-%COMP%]:focus.ng-invalid {\n  border-color: red;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);\n}\n\ninput.ng-invalid[_ngcontent-%COMP%]    + ace-editor[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px red;\n}\n\ncode[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.converter-container[_ngcontent-%COMP%] {\n  margin: 0 50px;\n}\n\n.converter-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.converter-container[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.converter-container[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDhFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUlFLGNBQUE7QUFBRjs7QUFIRTtFQUNFLGFBQUE7QUFLSjs7QUFERTtFQUNFLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxpQkFBQTtBQUdKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhOmZvY3VzLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xufVxuaW5wdXQubmctaW52YWxpZCArIGFjZS1lZGl0b3Ige1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcbn1cblxuY29kZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udmVydGVyLWNvbnRhaW5lciB7XG4gIC5idG4ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgbWFyZ2luOiAwIDUwcHg7XG5cbiAgLmNvcHktYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC5zYXZlLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-ace-editor */ "QZHh");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_ace_editor__WEBPACK_IMPORTED_MODULE_2__["AceEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_ace_editor__WEBPACK_IMPORTED_MODULE_2__["AceEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng2_ace_editor__WEBPACK_IMPORTED_MODULE_2__["AceEditorModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map