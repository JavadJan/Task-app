import funy from "./funy"   
import tasks from './tasks.json'
import suny from './suny'
import fillTable from "./fillTable"
import Update from './Update'
console.log(funy() , suny())

// create a o
class todo {
    constructor(id, title, description, checked = false) {
        this.id = id
        this.title = title,
            this.description = description,
            this.checked = checked
    }
}

//get instance from todo
let newTodo = new todo()

// get data from local storage 
if (!localStorage.tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    var toDoTask = JSON.parse(localStorage.getItem('tasks'))
}
else {
    var toDoTask = JSON.parse(localStorage.getItem('tasks'))
}



//select modal 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnAdd = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// create flag for update or create
let createBool = true

//id of object 
let idObj

//index of tbody
let elmIndex

let check

//with load the page the task list will fill with array task
let contentTask = document.getElementById('content-task')
fillTable(toDoTask , contentTask)
// console.log(fillTable(toDoTask , contentTask))

class task {
    constructor() {
        this.todo = null
    }

    //update
    update(data, id) {

        let result = JSON.parse(localStorage.getItem('tasks'))
        let objTask = result.filter((elm) => elm.id === Number(id))

        let newObj = {
            id: objTask[0].id,
            title: data.title,
            description: data.description,
            checked: objTask[0].checked
        }
        result.splice(result.findIndex((obj) => obj.id === objTask[0].id), 1, newObj)

        localStorage.setItem('tasks', JSON.stringify(result))
        objTask = {}
    }
    //create
    save(data) {
        let todoList = JSON.parse(localStorage.getItem('tasks'))
        todoList.push(data)
        console.log(todoList[3])

        localStorage.setItem('tasks', JSON.stringify(todoList))
    }

    //del
    del(arr, index) {
        //update local storage
        arr.splice(arr.findIndex((elm) => elm.id === index), 1)
        return arr;
    }

    //get
    get() {
        fillTable()
    }
}

//get the edit button that opens the modal
var edit = document.querySelectorAll('[data-edit]')

edit.forEach((e,i) => {
    e.addEventListener('click', 
    async function () {
        modal.style.display = 'block'
        Update(e ,i)

    })
})



//=========================>listen to check input
check = document.querySelectorAll('input[type=checkbox]')
check.forEach((e) => {
    e.addEventListener('change', async function () {
        console.log(e.checked, e.id, e)
        let result = JSON.parse(localStorage.getItem('tasks'))
        let objTask = result.filter((elm) => elm.id === Number(e.id))

        console.log('get object which we want to update', objTask)
        let newObj = {
            id: objTask[0].id,
            title: objTask[0].title,
            description: objTask[0].description,
            checked: e.checked
        }
        result.splice(result.findIndex((obj) => obj.id === objTask[0].id), 1, newObj)

        console.log('checking the tasks is ready to update or not', result)
        localStorage.setItem('tasks', JSON.stringify(result))
        objTask = {}
    })
});


//get instance from tasks
let newTask = new task()
let add = document.getElementById('add')
add.addEventListener('click' , async function () {
    // function add() {
        //createBool == true => for add new task
        //createBool == false => for update task
    
        //select input in modal
        let title = document.getElementById('title')
        let desc = document.getElementById('desc')
    
        if (createBool) {
            console.log('add mode')
            document.getElementById('add').textContent = 'save'
    
    
            //get max id and add + 1 to new id in order to create uniq id
            var result = getFields(JSON.parse(localStorage.getItem('tasks')))
            if (title.value !== '') {
    
                //invoke method save form task class
                newTodo = new todo(Math.max(...result) + 1, title.value, desc.value)
                newTask.save(newTodo)
    
                let newRow = contentTask.insertRow(contentTask.length)
                // newRow.setAttribute("id", await tasks[i].id);
                let td0 = newRow.insertCell(0);
                let td1 = newRow.insertCell(1);
                let td2 = newRow.insertCell(2);
    
                td0.innerHTML = `<input type="checkbox" id=${JSON.parse(localStorage.getItem('tasks')).length}>`
                td1.innerHTML = `
                                <h4>${title.value}</h4>
                                <p>${desc.value}</p>
                            `
                td2.innerHTML = `
                            <div class="content-cell">
                                <button data-edit>Edit</button>
                                <button data-del id=${Math.max(...result) + 1}>Delete</button>
                            </div>
            
                            `
                title.value = ''
                desc.value = ''
            }
        } else {
    
            newData = {
                title: title.value,
                description: desc.value
            }
    
            newTask.update(newData , idObj)
            let elm = document.querySelector('tbody').children[elmIndex].children[1]
            elm.children[0].innerHTML=title.value
            elm.children[1].innerHTML=desc.value
            console.log(idObj , elmIndex , elm.children[0] , elm.children[1])
    
        }
    // }
})




// delete button
let del = document.querySelectorAll('[data-del]')
console.log(del)
del.forEach((e) => {
    e.addEventListener('click', async function () {

        delet(e, Number(e.id))
    })
})

function delet(elm, id) {

    //get data from local storage
    let data = JSON.parse(localStorage.getItem('tasks'))
    console.log(id, data.findIndex((elm) => elm.id === id))

    //delete from local storage
    let arr = newTask.del(data, id)
    console.log('arrr', arr)
    localStorage.setItem('tasks', JSON.stringify(arr))
    //update table
    elm.parentElement.parentElement.parentElement.remove()
}

//-------------------------------- open modal 
// Get the modal


// When the user clicks the button, open the modal 
btnAdd.onclick = function () {
    modal.style.display = "block";

    //work as add button
    createBool = true
    console.log(createBool, 'add mode')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    location.reload();

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// get an array of id 
function getFields(input) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i].id);
    return output;
}

// module.exports = newTask.del;
// module.exports = getFields;
