function Update(e , i ) {
    //btn save in modal will work as update
    createBool = false


    console.log(e.parentElement.parentElement.parentElement.children[0].firstChild.id, e.parentElement.parentElement.parentElement.children, i)

    //get element from parent
    idObj = e.parentElement.parentElement.parentElement.children[0].firstChild.id

    elmIndex = i

    let rowTable = e.parentElement.parentElement.parentElement.childNodes[1]

    console.log(idObj , elmIndex)
    //open the modal
    

    //get data from local storage
    let result = JSON.parse(localStorage.getItem('tasks'))
    let objTask = result.filter((elm) => elm.id === Number(idObj))

    //select input
    let title = document.getElementById('title')
    let desc = document.getElementById('desc')

    //fill the input
    title.value = objTask[0].title
    desc.value = objTask[0].description

    console.log('update mode')
    document.getElementById('save').textContent = 'Update'
}

module.exports=Update