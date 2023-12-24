/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkStorage.js":
/*!*****************************!*\
  !*** ./src/checkStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkStorage() {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [{
      foldername: "General",
      tasks: [{
        taskName: "Task Name, click to edit...",
        taskDate: "Date Here",
        taskNotes: "Task Notes, click to edit...",
        completed: false
      }]
    }];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStorage);

/***/ }),

/***/ "./src/printMain.js":
/*!**************************!*\
  !*** ./src/printMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkStorage */ "./src/checkStorage.js");
/* harmony import */ var _printNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printNav.js */ "./src/printNav.js");
/* harmony import */ var _selectFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectFolder */ "./src/selectFolder.js");
/* harmony import */ var _setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setNewStorage.js */ "./src/setNewStorage.js");




function addSingleTask(folderIndex, taskIndex) {
  var allTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var singleTask = document.createElement("div");
  var taskHeader = document.createElement("div");
  var checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  if (allTasks[folderIndex].tasks[taskIndex].completed) {
    checkBox.checked = true;
  }
  var taskName = document.createElement("p");
  taskName.textContent = allTasks[folderIndex].tasks[taskIndex].taskName;
  taskName.contentEditable = true;
  var deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete Task";
  taskHeader.append(checkBox, taskName, deleteTaskButton);
  var taskInfo = document.createElement("div");
  var taskDate = document.createElement("p");
  taskDate.textContent = allTasks[folderIndex].tasks[taskIndex].taskDate;
  var taskNotes = document.createElement("p");
  taskNotes.textContent = allTasks[folderIndex].tasks[taskIndex].taskNotes;
  taskNotes.contentEditable = true;
  taskInfo.append(taskDate, taskNotes);
  singleTask.append(taskHeader, taskInfo);
  checkBox.addEventListener("click", function () {
    var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (checkBox.checked == true) {
      allNewTasks[folderIndex].tasks[taskIndex].completed = true;
    } else {
      allNewTasks[folderIndex].tasks[taskIndex].completed = false;
    }
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
  });
  taskName.addEventListener("keypress", function (evt) {
    var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
      taskNotes.focus();
    }
  });
  taskNotes.addEventListener("keypress", function (evt) {
    var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    allNewTasks[folderIndex].tasks[taskIndex].taskNotes = evt.target.textContent;
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
    if (evt.key === "Enter") {
      evt.preventDefault();
      evt.target.blur();
    }
  });
  deleteTaskButton.addEventListener("click", function () {
    var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    allNewTasks[folderIndex].tasks.splice(taskIndex, 1);
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
    singleTask.remove();
  });
  taskName.addEventListener("focusout", function (evt) {
    if (evt.target.textContent == "") {
      evt.target.textContent = "New Task";
      var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
      allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
      (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
    }
  });
  taskNotes.addEventListener("focusout", function (evt) {
    if (evt.target.textContent == "") {
      evt.target.textContent = "Notes...";
      var allNewTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
      allNewTasks[folderIndex].tasks[taskIndex].taskName = evt.target.textContent;
      (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allNewTasks);
    }
  });
  return singleTask;
}
function deleteFolder(folderIndex) {
  var allTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  allTasks.splice(folderIndex, 1);
  (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allTasks);
  (0,_printNav_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allTasks);
  (0,_selectFolder__WEBPACK_IMPORTED_MODULE_2__["default"])(folderIndex - 1);
}
function addHeading(folderIndex) {
  var allTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var headingSection = document.createElement("section");
  var folderHeading = document.createElement("h2");
  folderHeading.textContent = allTasks[folderIndex].foldername;
  var folderControls = document.createElement("div");
  var addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task +";
  var deleteFolderButton = document.createElement("button");
  deleteFolderButton.textContent = "Delete Folder";
  deleteFolderButton.addEventListener("click", function () {
    deleteFolder(folderIndex);
  });
  if (folderIndex == 0) {
    folderControls.append(addTaskButton);
  } else {
    folderControls.append(addTaskButton, deleteFolderButton);
  }
  addTaskButton.addEventListener("click", function () {
    var defaultTask = {
      taskName: "New Task",
      taskDate: "New Date",
      taskNotes: "Notes...",
      completed: false
    };
    allTasks[folderIndex].tasks.push(defaultTask);
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allTasks);
    var tasksSection = document.querySelector("main section:nth-child(2)");
    tasksSection.appendChild(addSingleTask(folderIndex, allTasks[folderIndex].tasks.length - 1));
  });
  headingSection.append(folderHeading, folderControls);
  return headingSection;
}
function addTasks(folderIndex) {
  var allTasks = (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var tasksSection = document.createElement("section");
  for (var i = 0; i < allTasks[folderIndex].tasks.length; i++) {
    tasksSection.appendChild(addSingleTask(folderIndex, i));
  }
  return tasksSection;
}
function printMain(folderIndex) {
  var main = document.querySelector("main");
  main.replaceChildren(addHeading(folderIndex), addTasks(folderIndex));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printMain);

/***/ }),

/***/ "./src/printNav.js":
/*!*************************!*\
  !*** ./src/printNav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectFolder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectFolder.js */ "./src/selectFolder.js");
/* harmony import */ var _checkStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkStorage.js */ "./src/checkStorage.js");
/* harmony import */ var _setNewStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setNewStorage.js */ "./src/setNewStorage.js");



function createFolder(folderObject, folderIndex) {
  var folder = document.createElement("div");
  folder.textContent = folderObject.foldername;
  folder.addEventListener("click", function () {
    (0,_selectFolder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(folderIndex);
  });
  if (folderIndex > 0) {
    folder.addEventListener("dblclick", function (evt) {
      evt.target.contentEditable = true;
      evt.target.focus();
      window.getSelection().selectAllChildren(evt.target);
    });
    folder.addEventListener("keypress", function (evt) {
      var tasksHeading = document.querySelector("main section:nth-child(1) h2");
      tasksHeading.textContent = evt.target.textContent;
      var allTasks = (0,_checkStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      allTasks[folderIndex].foldername = evt.target.textContent;
      (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allTasks);
      if (evt.key === "Enter") {
        evt.preventDefault();
        evt.target.blur();
        evt.target.contentEditable = false;
      }
    });
    folder.addEventListener("focusout", function (evt) {
      evt.target.contentEditable = false;
    });
  }
  return folder;
}
function printNav(tasks) {
  var allTasks = tasks;
  var folderSection = document.querySelector("nav section");
  var addFolderButton = document.createElement("button");
  addFolderButton.textContent = "Add Folder +";
  var newFolders = document.createElement("section");
  for (var i = 0; i < allTasks.length; i++) {
    newFolders.appendChild(createFolder(allTasks[i], i));
  }
  addFolderButton.addEventListener("click", function () {
    var allNewTasks = (0,_checkStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var defaultFolder = {
      foldername: "New Folder, double click to edit name...",
      tasks: []
    };
    allNewTasks.push(defaultFolder);
    (0,_setNewStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allNewTasks);
    newFolders.appendChild(createFolder(defaultFolder, allNewTasks.length - 1));
    (0,_selectFolder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allNewTasks.length - 1);
  });
  folderSection.replaceChildren(addFolderButton, newFolders);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printNav);

/***/ }),

/***/ "./src/selectFolder.js":
/*!*****************************!*\
  !*** ./src/selectFolder.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _printMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printMain.js */ "./src/printMain.js");

function selectFolder(folderIndex) {
  var folders = document.querySelectorAll("nav section section div");
  for (var i = 0; i < folders.length; i++) {
    folders[i].classList.remove("folder-selected");
  }
  folders[folderIndex].classList.add("folder-selected");
  (0,_printMain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(folderIndex);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectFolder);

/***/ }),

/***/ "./src/setNewStorage.js":
/*!******************************!*\
  !*** ./src/setNewStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setNewStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNewStorage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `  :root {
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Slab', serif;
  }

  .folder-selected {
    background-color: red;
    color: white;
  }

  body {
    display: grid;
    grid-template: 1fr / auto 1fr;
  }

  main section:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }

  main section:nth-child(2),
  main section:nth-child(2)>div,
  main section:nth-child(2) div div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  main section:nth-child(2) div div:nth-child(1) {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"EAEE;IACE,eAAe;EACjB;;EAEA;;;IAGE,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,iCAAiC;EACnC;;EAEA;IACE,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;;;IAGE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,oCAAoC;EACtC;;EAEA;IACE,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,eAAe;EACjB","sourcesContent":["  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&display=swap');\n\n  :root {\n    font-size: 16px;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Slab', serif;\n  }\n\n  .folder-selected {\n    background-color: red;\n    color: white;\n  }\n\n  body {\n    display: grid;\n    grid-template: 1fr / auto 1fr;\n  }\n\n  main section:nth-child(1) {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  main section:nth-child(2),\n  main section:nth-child(2)>div,\n  main section:nth-child(2) div div:nth-child(2) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  main section:nth-child(2) div div:nth-child(1) {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n  }\n\n  button {\n    border: none;\n    background-color: transparent;\n  }\n\n  button:hover {\n    cursor: pointer;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkStorage.js */ "./src/checkStorage.js");
/* harmony import */ var _printNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printNav.js */ "./src/printNav.js");
/* harmony import */ var _selectFolder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectFolder.js */ "./src/selectFolder.js");




var allTasks = (0,_checkStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_printNav_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allTasks);
(0,_selectFolder_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0);
})();

/******/ })()
;
//# sourceMappingURL=bundlea03c5d96bc360daac03e.js.map