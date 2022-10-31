//get tbody 


async function fillTable(toDoTask , contentTask) {
    for (let i = 0; i < toDoTask.length; i++) {
        let newRow = contentTask.insertRow(contentTask.length)
        let td0 = newRow.insertCell(0);
        let td1 = newRow.insertCell(1);
        let td2 = newRow.insertCell(2);

        td0.innerHTML = `<input type="checkbox" id=${i + 1} ${toDoTask[i].checked ? 'checked' : ''}>`
        td1.innerHTML = `
                            <h4>${toDoTask[i].title}</h4>
                            <p>${toDoTask[i].description}</p>
                        `

        td2.innerHTML = `
                        <div class="content-cell">
                            <button data-edit>Edit</button>
                            <button data-del id=${toDoTask[i].id}>Delete</button>
                        </div>
        
                        `
                        // console.log(newRow)
    }
}
module.exports = fillTable