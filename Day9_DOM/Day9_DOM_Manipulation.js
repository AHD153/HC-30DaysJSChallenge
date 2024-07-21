// Task 1: Select an HTML element by its ID and change its text content.
const changeContent = () => {
    const text = document.getElementById('change-content')
    text.innerText = "Content Changed"
}

setTimeout(changeContent, 2000)

// Task 2: Select an HTML element by its class and change its background color.
const changeBackground = () =>{
    let changeBg = document.getElementsByClassName('change-bg')
    changeBg[0].style.backgroundColor = 'red'
}

setTimeout(changeBackground, 3000)

// Task 3: Create a new div element with some text content and append it to the body.
const addDiv = ()=>{
    let div = document.createElement('div')
    div.textContent = "New Div added"
    document.body.appendChild(div)
}
setTimeout(addDiv, 4000)

// Task 4: Create a new li element and add it to an existing ul list.
const addLi = ()=>{
    let li = document.createElement('li')
    li.textContent="List 4 Added"
    document.querySelector('ul').appendChild(li)
}
setTimeout(addLi, 5000)

// Task 5: Select an HTML element and remove it from the DOM.
const removeElement = ()=>{
    document.getElementById('remove').remove()
}
setTimeout(removeElement, 6000)

// Task 6: Remove the last child of a specific HTML element.
const removeLastChild = ()=>{
    document.querySelector('ul').lastElementChild.remove()
}
setTimeout(removeLastChild, 7000)

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
const changeAttribute = ()=>{
    const element = document.querySelector('#change-attribute')
    element.style = "display:contents;"
}
setTimeout(changeAttribute, 8000)

// Task 8: Add and remove a CSS class to/from an HTML element.
const AddandRemove = () =>{
    const element = document.querySelector('.change-bg')
    element.classList.remove('change-bg')
    element.classList.add('change-class')
}
setTimeout(AddandRemove, 9000)

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector('button')
const addOnClickEvent = ()=>{
    document.querySelector('#change-para').textContent = "Changed Paragraph"
}
button.addEventListener('click', addOnClickEvent)

// Task 10: Add a mouseover event listner to an element that changes its border color.
const mouseOverEvent = ()=>{
    document.querySelector('button').style = "border-color: blue"
}
button.addEventListener('mouseover', mouseOverEvent)