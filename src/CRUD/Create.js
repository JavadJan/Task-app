
// create a o
class todo {
    constructor(id, title, description, checked = false) {
        this.id = id
        this.title = title,
        this.description = description,
        this.checked = checked
    }
}


function add(createBool , contentTask ,newTask) {
    
    try {
        //createBool == true => for add new task
        //createBool == false => for update task
        //select input in modal
        let title = document.getElementById('title')
        let desc = document.getElementById('desc')
        var result = getFields(JSON.parse(localStorage.getItem('tasks')))
    
        if (createBool) {
            console.log('add mode')
            document.getElementById('add').innerText = 'save'
            //get max id and add + 1 to new id in order to create uniq id
            if (title.value !== '') {
    
                //invoke method save form task class
                let newTodo = new todo(Math.max(...result) + 1, title.value, desc.value)
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
            console.log('update mode' , createBool)
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
    } catch (error) {
        console.log(error.message)  
    }
    
}
function getFields(input) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i].id);
    return output;
}
module.exports=add