let AddToDoButton = document.getElementById('AddToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputField');

AddToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.stylpe.textDecoration ="line-through"; 
})
    
      paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    }) 
})