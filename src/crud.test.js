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

    const data ={
        id:100,
        title: 'for test',
        describe:'for description' , 
        checked: false
    }

    let result = add(createBool , contentTask ,newTask , data)
    console.log(result)
    expect(result).toEqual(`<tr><td><input type="checkbox" id="1"></td><td>
    <h4>for test</h4>
    <p>for description</p>
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


