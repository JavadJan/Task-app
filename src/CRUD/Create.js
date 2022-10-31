

// newTask => an instance of class Task
//contentTask => select tbody
// newTodo => new data
// createBool => flag to update or create 

function add(createBool , contentTask , newTask , newTodo) {
    
    try {
        //createBool == true => for add new task
        //createBool == false => for update task
        
    
        if (createBool) {
            console.log('add mode')
            document.getElementById('add').innerText = 'save'
            //get max id and add + 1 to new id in order to create uniq id
            if (title.value !== '') {
    
                //invoke method save form task class
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