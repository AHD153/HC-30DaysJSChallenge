// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector('button')
const p = document.querySelector('p')
const changeContent = () => {
    p.innerText = "Text content Changed"
}
button.addEventListener('click', changeContent)

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.querySelector('img')
const changeVisibility = () => {
    if (image.style.display === "none") {
        image.style.display = "block"
    }
    else {
        image.style.display = "none"
    }
}
image.addEventListener('dblclick', changeVisibility)

// Task 3: Add a mouseover event listener to an element that changes its background color.
const mouseOver = document.querySelector('#mouseover')
const originalBgColor = mouseOver.style.backgroundColor || "inherit"
const changeBg = ()=>{
    mouseOver.style.backgroundColor = "red"
}
mouseOver.addEventListener('mouseover', changeBg)

// Task 4: Add a mouseout event listener to an element that resets its background color.
const resetBg = ()=>{
    mouseOver.style.backgroundColor = originalBgColor
}
mouseOver.addEventListener('mouseout', resetBg)

// Task 5: Add a keydown event listener to an input field that logs the key pressend to the console.
const input = document.querySelector('#input')
const keydownEvent = (event)=>{
    console.log(event.key)
}
input.addEventListener('keydown', keydownEvent)

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
const para = document.querySelector('#view')
const keyupEvent = (event)=>{
    para.innerText = `The key pressed is: ${event.key}`
}
input.addEventListener('keyup',keyupEvent)

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('#myForm')
const preventDefaultEvent = (event)=>{
    event.preventDefault();
    const formData = new FormData(form)
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
}
form.addEventListener('submit', preventDefaultEvent)

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown = document.querySelector('.dropdown')
const selectedValue = document.querySelector('.selected')
const showSelectedValue = ()=>{
    selectedValue.innerText = `You have selected: ${dropdown.value}`
}
dropdown.addEventListener('change', showSelectedValue)

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.querySelector('ul')
const addEventDelegation = (event)=>{
    console.log(event.target.innerText)
}
list.addEventListener('click',addEventDelegation)

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const addChildElement = ()=>{
    const newChild = document.createElement("li")
    newChild.innerText = "New child"
    list.appendChild(newChild)
}
addChildElement()