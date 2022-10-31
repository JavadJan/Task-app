const Update = require('./CRUD/Update')
const delet = require('./CRUD/Delete')
const add = require('./CRUD/Create')
const fillTable = require('./CRUD/Read')
const tasks = require('./tasks.json')
// const tt = require('./getData')

// const newTask = new task();

test('should Create', () => {

    let contentTask = `<tbody id="content-task"> </tbody>`
    let createBool = true
    console.log(add)
    expect(add(contentTask,createBool)).not.toBe('ReferenceError')
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


