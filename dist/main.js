/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CRUD/Create.js":
/*!****************************!*\
  !*** ./src/CRUD/Create.js ***!
  \****************************/
/***/ ((module) => {

eval("\r\n// create a o\r\nclass todo {\r\n    constructor(id, title, description, checked = false) {\r\n        this.id = id\r\n        this.title = title,\r\n        this.description = description,\r\n        this.checked = checked\r\n    }\r\n}\r\n\r\n\r\nfunction add(createBool , contentTask ,newTask) {\r\n    \r\n    try {\r\n        //createBool == true => for add new task\r\n        //createBool == false => for update task\r\n        //select input in modal\r\n        let title = document.getElementById('title')\r\n        let desc = document.getElementById('desc')\r\n        var result = getFields(JSON.parse(localStorage.getItem('tasks')))\r\n    \r\n        if (createBool) {\r\n            console.log('add mode')\r\n            document.getElementById('add').innerText = 'save'\r\n            //get max id and add + 1 to new id in order to create uniq id\r\n            if (title.value !== '') {\r\n    \r\n                //invoke method save form task class\r\n                let newTodo = new todo(Math.max(...result) + 1, title.value, desc.value)\r\n                newTask.save(newTodo)\r\n    \r\n                let newRow = contentTask.insertRow(contentTask.length)\r\n                // newRow.setAttribute(\"id\", await tasks[i].id);\r\n                let td0 = newRow.insertCell(0);\r\n                let td1 = newRow.insertCell(1);\r\n                let td2 = newRow.insertCell(2);\r\n    \r\n                td0.innerHTML = `<input type=\"checkbox\" id=${JSON.parse(localStorage.getItem('tasks')).length}>`\r\n                td1.innerHTML = `\r\n                                <h4>${title.value}</h4>\r\n                                <p>${desc.value}</p>\r\n                            `\r\n                td2.innerHTML = `\r\n                            <div class=\"content-cell\">\r\n                                <button data-edit>Edit</button>\r\n                                <button data-del id=${Math.max(...result) + 1}>Delete</button>\r\n                            </div>\r\n            \r\n                            `\r\n                title.value = ''\r\n                desc.value = ''\r\n            }\r\n        } else {\r\n            console.log('update mode' , createBool)\r\n            newData = {\r\n                title: title.value,\r\n                description: desc.value\r\n            }\r\n    \r\n            newTask.update(newData , idObj)\r\n            let elm = document.querySelector('tbody').children[elmIndex].children[1]\r\n            elm.children[0].innerHTML=title.value\r\n            elm.children[1].innerHTML=desc.value\r\n            console.log(idObj , elmIndex , elm.children[0] , elm.children[1])\r\n    \r\n        }\r\n    } catch (error) {\r\n        console.log(error.message)  \r\n    }\r\n    \r\n}\r\nfunction getFields(input) {\r\n    var output = [];\r\n    for (var i = 0; i < input.length; ++i)\r\n        output.push(input[i].id);\r\n    return output;\r\n}\r\nmodule.exports=add\n\n//# sourceURL=webpack:///./src/CRUD/Create.js?");

/***/ }),

/***/ "./src/CRUD/Delete.js":
/*!****************************!*\
  !*** ./src/CRUD/Delete.js ***!
  \****************************/
/***/ ((module) => {

eval("function delet(elm, id , newTask) {\r\n\r\n    //get data from local storage\r\n    let data = JSON.parse(localStorage.getItem('tasks'))\r\n    console.log(id, data.findIndex((elm) => elm.id === id))\r\n\r\n    console.log(elm.parentElement.parentElement.parentElement)\r\n    //delete from local storage\r\n    let arr = newTask.del(data, id)\r\n    console.log('arrr', arr)\r\n    localStorage.setItem('tasks', JSON.stringify(arr))\r\n    //update table\r\n    elm.parentElement.parentElement.parentElement.remove()\r\n}\r\n\r\nmodule.exports = delet\n\n//# sourceURL=webpack:///./src/CRUD/Delete.js?");

/***/ }),

/***/ "./src/CRUD/Read.js":
/*!**************************!*\
  !*** ./src/CRUD/Read.js ***!
  \**************************/
/***/ ((module) => {

eval("//get tbody \r\n\r\n\r\nasync function fillTable(toDoTask , contentTask) {\r\n    for (let i = 0; i < toDoTask.length; i++) {\r\n        let newRow = contentTask.insertRow(contentTask.length)\r\n        let td0 = newRow.insertCell(0);\r\n        let td1 = newRow.insertCell(1);\r\n        let td2 = newRow.insertCell(2);\r\n\r\n        td0.innerHTML = `<input type=\"checkbox\" id=${i + 1} ${toDoTask[i].checked ? 'checked' : ''}>`\r\n        td1.innerHTML = `\r\n                            <h4>${toDoTask[i].title}</h4>\r\n                            <p>${toDoTask[i].description}</p>\r\n                        `\r\n\r\n        td2.innerHTML = `\r\n                        <div class=\"content-cell\">\r\n                            <button data-edit>Edit</button>\r\n                            <button data-del id=${toDoTask[i].id}>Delete</button>\r\n                        </div>\r\n        \r\n                        `\r\n                        // console.log(newRow)\r\n    }\r\n}\r\nmodule.exports = fillTable\n\n//# sourceURL=webpack:///./src/CRUD/Read.js?");

/***/ }),

/***/ "./src/CRUD/Update.js":
/*!****************************!*\
  !*** ./src/CRUD/Update.js ***!
  \****************************/
/***/ ((module) => {

eval("function Update(e , i ) {\r\n    //btn save in modal will work as update\r\n    createBool = false\r\n\r\n\r\n\r\n    console.log(e.parentElement.parentElement.parentElement.children[0].firstChild.id, e.parentElement.parentElement.parentElement,e, i)\r\n\r\n    //get element from parent\r\n    idObj = e.parentElement.parentElement.parentElement.children[0].firstChild.id\r\n\r\n    elmIndex = i\r\n\r\n    let rowTable = e.parentElement.parentElement.parentElement.childNodes[1]\r\n\r\n    console.log(idObj , elmIndex)\r\n    //open the modal\r\n    \r\n\r\n    //get data from local storage\r\n    let result = JSON.parse(localStorage.getItem('tasks'))\r\n    let objTask = result.filter((elm) => elm.id === Number(idObj))\r\n\r\n    //select input\r\n    let title = document.getElementById('title')\r\n    let desc = document.getElementById('desc')\r\n\r\n    //fill the input\r\n    title.value = objTask[0].title\r\n    desc.value = objTask[0].description\r\n\r\n    console.log('update mode')\r\n    document.getElementById('add').innerText = 'Update'\r\n}\r\n\r\nmodule.exports=Update\n\n//# sourceURL=webpack:///./src/CRUD/Update.js?");

/***/ }),

/***/ "./src/ClassTask.js":
/*!**************************!*\
  !*** ./src/ClassTask.js ***!
  \**************************/
/***/ ((module) => {

eval("\r\n\r\n//class task\r\nclass task {\r\n    constructor() {\r\n        this.todo = null\r\n    }\r\n\r\n    //update\r\n    update(data, id) {\r\n\r\n        let result = JSON.parse(localStorage.getItem('tasks'))\r\n        let objTask = result.filter((elm) => elm.id === Number(id))\r\n\r\n        let newObj = {\r\n            id: objTask[0].id,\r\n            title: data.title,\r\n            description: data.description,\r\n            checked: objTask[0].checked\r\n        }\r\n        result.splice(result.findIndex((obj) => obj.id === objTask[0].id), 1, newObj)\r\n\r\n        localStorage.setItem('tasks', JSON.stringify(result))\r\n        objTask = {}\r\n    }\r\n\r\n\r\n    //create\r\n    save(data) {\r\n        let todoList = JSON.parse(localStorage.getItem('tasks'))\r\n        todoList.push(data)\r\n        console.log(todoList[3])\r\n\r\n        localStorage.setItem('tasks', JSON.stringify(todoList))\r\n    }\r\n\r\n    //del\r\n    del(arr, index) {\r\n        //update local storage\r\n        arr.splice(arr.findIndex((elm) => elm.id === index), 1)\r\n        return arr;\r\n    }\r\n\r\n    //get\r\n    get() {\r\n        fillTable()\r\n    }\r\n}\r\nmodule.exports = task\n\n//# sourceURL=webpack:///./src/ClassTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.json */ \"./src/tasks.json\");\n/* harmony import */ var _CRUD_Read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CRUD/Read */ \"./src/CRUD/Read.js\");\n/* harmony import */ var _CRUD_Read__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CRUD_Read__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CRUD_Update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CRUD/Update */ \"./src/CRUD/Update.js\");\n/* harmony import */ var _CRUD_Update__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CRUD_Update__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CRUD_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CRUD/Delete */ \"./src/CRUD/Delete.js\");\n/* harmony import */ var _CRUD_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CRUD_Delete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CRUD_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CRUD/Create */ \"./src/CRUD/Create.js\");\n/* harmony import */ var _CRUD_Create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CRUD_Create__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ClassTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClassTask */ \"./src/ClassTask.js\");\n/* harmony import */ var _ClassTask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ClassTask__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// get data from local storage \r\nif (!localStorage.tasks) {\r\n    localStorage.setItem('tasks', JSON.stringify(_tasks_json__WEBPACK_IMPORTED_MODULE_0__))\r\n    var toDoTask = JSON.parse(localStorage.getItem('tasks'))\r\n}\r\nelse {\r\n    var toDoTask = JSON.parse(localStorage.getItem('tasks'))\r\n}\r\n\r\n\r\n\r\n//select modal \r\nvar modal = document.getElementById(\"myModal\");\r\n\r\n// Get the button that opens the modal\r\nvar btnAdd = document.getElementById(\"myBtn\");\r\n\r\n// Get the <span> element that closes the modal\r\nvar span = document.getElementsByClassName(\"close\")[0];\r\n\r\n// create flag for update or create\r\nlet createBool = true\r\n\r\n//id of object \r\nlet idObj\r\n\r\n//index of tbody\r\nlet elmIndex\r\n\r\nlet check\r\n\r\n//get instance from tasks\r\nlet newTask = new (_ClassTask__WEBPACK_IMPORTED_MODULE_5___default())()\r\n\r\n//with load the page the task list will fill with array task\r\nlet contentTask = document.getElementById('content-task')\r\n_CRUD_Read__WEBPACK_IMPORTED_MODULE_1___default()(toDoTask, contentTask)\r\n\r\n\r\n//get the edit button that opens the modal\r\nvar edit = document.querySelectorAll('[data-edit]')\r\n\r\nedit.forEach((e, i) => {\r\n    e.addEventListener('click',\r\n        async function () {\r\n            modal.style.display = 'block'\r\n            createBool = false\r\n            _CRUD_Update__WEBPACK_IMPORTED_MODULE_2___default()(e, i)\r\n        })\r\n})\r\n\r\n\r\n\r\n//=========================>listen to check task\r\ncheck = document.querySelectorAll('input[type=checkbox]')\r\ncheck.forEach((e) => {\r\n    e.addEventListener('change', async function () {\r\n        console.log(e.checked, e.id, e)\r\n        let result = JSON.parse(localStorage.getItem('tasks'))\r\n        let objTask = result.filter((elm) => elm.id === Number(e.id))\r\n\r\n        console.log('get object which we want to update', objTask)\r\n        let newObj = {\r\n            id: objTask[0].id,\r\n            title: objTask[0].title,\r\n            description: objTask[0].description,\r\n            checked: e.checked\r\n        }\r\n        result.splice(result.findIndex((obj) => obj.id === objTask[0].id), 1, newObj)\r\n\r\n        console.log('checking the tasks is ready to update or not', result)\r\n        localStorage.setItem('tasks', JSON.stringify(result))\r\n        objTask = {}\r\n    })\r\n});\r\n\r\n\r\n\r\n\r\n//add function to false = update and true = create\r\nlet addd = document.getElementById('add')\r\naddd.addEventListener('click', async function () {\r\n    _CRUD_Create__WEBPACK_IMPORTED_MODULE_4___default()(createBool, contentTask ,newTask)\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n// delete button\r\nlet del = document.querySelectorAll('[data-del]')\r\nconsole.log(del)\r\ndel.forEach((e) => {\r\n    e.addEventListener('click', async function () {\r\n        _CRUD_Delete__WEBPACK_IMPORTED_MODULE_3___default()(e, Number(e.id), newTask)\r\n    })\r\n})\r\n\r\n\r\n\r\n// Get the modal\r\n// When the user clicks the button, open the modal \r\nbtnAdd.onclick = function () {\r\n    modal.style.display = \"block\";\r\n\r\n    //work as add button\r\n    createBool = true\r\n    console.log(createBool, 'add mode')\r\n}\r\n\r\n// When the user clicks on <span> (x), close the modal\r\nspan.onclick = function () {\r\n    modal.style.display = \"none\";\r\n    location.reload();\r\n\r\n}\r\n\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function (event) {\r\n    if (event.target == modal) {\r\n        modal.style.display = \"none\";\r\n    }\r\n}\r\n\r\n\r\n// get an array of id \r\nfunction getFields(input) {\r\n    var output = [];\r\n    for (var i = 0; i < input.length; ++i)\r\n        output.push(input[i].id);\r\n    return output;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tasks.json":
/*!************************!*\
  !*** ./src/tasks.json ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"title\":\"Paint the wall\",\"description\":\"Please paint all the walls in white color\",\"checked\":false},{\"id\":2,\"title\":\"Clean the site\",\"description\":\"Please make sure you cleaned the construction site before leaving\",\"checked\":false},{\"id\":3,\"title\":\"Clean the Kitchen\",\"description\":\"Please make sure you cleaned the construction site before leaving\",\"checked\":false}]');\n\n//# sourceURL=webpack:///./src/tasks.json?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;