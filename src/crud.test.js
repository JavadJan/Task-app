const Update = require('./CRUD/Update')
const delet = require('./CRUD/Delete')
const add = require('./CRUD/Create')
const fillTable = require('./CRUD/Read')
const tasks = require('./tasks.json')
const task = require('./ClassTask')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const newTask = new task();

test('should Create', () => {

    const dom = new JSDOM(`<!DOCTYPE html><tbody id="content-task"></tbody>`);
    const contentTask = dom.window.document.getElementById("content-task") 
    const createBool = true


    let result = add(createBool , contentTask ,newTask)
    console.log(result)
    expect(result).toBe(`<tr><td><input type="checkbox" id="1"></td><td>
    <h4>Paint the wall</h4>
    <p>Please paint all the walls in white color</p>
</td><td>
<div class="content-cell">
    <button data-edit="">Edit</button>
    <button data-del="" id="1">Delete</button>
</div>

</td></tr>`)
})

test('should update', () => {

    
    
    console.log(Update)
    // expect(Update( null, 3)).not.toBeTruthy(false)
})

test('should Delete', () => {

    expect().toBe()
    console.log(delet)
})
test('should REad', () => {
    console.log(fillTable)
})


