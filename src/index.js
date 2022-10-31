import tasks from './tasks.json'
import fillTable from "./CRUD/Read"
import Update from './CRUD/Update'
import delet from './CRUD/Delete'
import add from './CRUD/Create'
import task from './ClassTask'


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

//get instance from tasks
let newTask = new task()

//with load the page the task list will fill with array task
let contentTask = document.getElementById('content-task')
fillTable(toDoTask, contentTask)


//get the edit button that opens the modal
var edit = document.querySelectorAll('[data-edit]')

edit.forEach((e, i) => {
    e.addEventListener('click',
        async function () {
            modal.style.display = 'block'
            createBool = false
            Update(e, i)
        })
})



//=========================>listen to check task
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




//add function to false = update and true = create
let addd = document.getElementById('add')
addd.addEventListener('click', async function () {
    add(createBool, contentTask ,newTask)
})






// delete button
let del = document.querySelectorAll('[data-del]')
console.log(del)
del.forEach((e) => {
    e.addEventListener('click', async function () {
        delet(e, Number(e.id), newTask)
    })
})



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
