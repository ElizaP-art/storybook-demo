(self.webpackChunkstorybook_demo=self.webpackChunkstorybook_demo||[]).push([[561],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/home-page/home-page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithProp:()=>WithProp,__namedExportsOrder:()=>__namedExportsOrder,default:()=>home_page_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var home_page_componentngResource=__webpack_require__("./src/stories/home-page/home-page.component.scss?ngResource"),home_page_componentngResource_default=__webpack_require__.n(home_page_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HomePageComponent=class HomePageComponent{constructor(){}ngOnInit(){}static#_=this.ctorParameters=()=>[]};HomePageComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-home-page",template:'<div class="home-page-layout">\n  <div class="home-page-container">\n    <div class="application-selection-container">\n\n    </div>\n    <div class="document-selection-container">\n      <div class="document-selection-grid">\n\n        <div class="document-selection-content">\n\n          <div class="document-selection">\n\n\n\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>',styles:[home_page_componentngResource_default()]})],HomePageComponent);const home_page_stories={component:HomePageComponent},Default={},WithProp={render:()=>({})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithProp.parameters={...WithProp.parameters,docs:{...WithProp.parameters?.docs,source:{originalSource:"{\n  render: () => ({})\n}",...WithProp.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithProp"]},"./src/stories/home-page/home-page.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);