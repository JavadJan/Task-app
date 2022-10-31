function delet(elm, id , newTask) {

    //get data from local storage
    let data = JSON.parse(localStorage.getItem('tasks'))
    console.log(id, data.findIndex((elm) => elm.id === id))

    console.log(elm.parentElement.parentElement.parentElement)
    //delete from local storage
    let arr = newTask.del(data, id)
    console.log('arrr', arr)
    localStorage.setItem('tasks', JSON.stringify(arr))
    //update table
    elm.parentElement.parentElement.parentElement.remove()
}

module.exports = delet