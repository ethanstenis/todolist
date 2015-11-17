// FINAL PROJECT - BUILD A FULLY FUNCTIONAL TO-DO LIST


function updateClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = (currentHours < 12) ? 'AM' : 'PM';

  // Convert the hours component to 12-hour format if needed
  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = (currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ':' + currentMinutes;
  // var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  // Update the time display
  document.getElementById('clock').firstChild.nodeValue = currentTimeString;
}

/*
Creating the List:
Grab the text entered into the text box with a button click
Create a new list item and put that text into the list item
Place that list item below the button with a checkbox

Removing the Items:
When the checkbox is clicked, the item is deleted.
*/

function initToDoList() {
        const textBox = document.querySelector('#textBox');
        const list = document.querySelector('#todoList')
        const addButton = document.querySelector('#btnAdd');

        addButton.addEventListener('click', addItem);

        function addItem() {

            const listElement = document.createElement('li');
            listElement.innerText = textBox.value;
            listElement.insertBefore(completeItem(), listElement.firstChild);
            listElement.appendChild(createDeleteLink());

            list.appendChild(listElement);
            textBox.value = '';
            }

            function completeItem() {

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.id = 'toDoItem';
            checkBox.setAttribute('href', '#');
            checkBox.setAttribute('class', 'delete-link');
            checkBox.addEventListener('click', function(){
                this.parentElement.style.textDecoration = 'line-through';
            });
            return checkBox;
            }

            // function crossOutItem() {
                // const completeTask = document.querySelector('li');
                // completeTask.style.textDecoration = 'line-through';
                

                // const completeTask = this.parentNode.parentNode;
                // const completeTaskchild = this.parentNode;
                // completeTaskchild.style.textDecoration = 'line-through';
           // }

            function removeItem() {

                const parent = this.parentNode.parentNode;
                const child = this.parentNode;

                parent.removeChild(child);

            }

            function createDeleteLink() {

                const deleteLink = document.createElement('a');
                deleteLink.innerHTML = 'x';
                deleteLink.setAttribute('href', '#');
                deleteLink.setAttribute('class', 'delete-link');
                deleteLink.addEventListener('click', removeItem);
                return deleteLink;
            }
}

initToDoList() 