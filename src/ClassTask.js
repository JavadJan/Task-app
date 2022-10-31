

//class task
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
module.exports = task