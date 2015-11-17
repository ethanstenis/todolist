// FINAL PROJECT - BUILD A FULLY FUNCTIONAL TO-DO LIST

'use strict';

function updateClock() {
            var currentTime = new Date();

            var currentHours = currentTime.getHours();
            var currentMinutes = currentTime.getMinutes();
            var currentSeconds = currentTime.getSeconds();

            // Pad the minutes and seconds with leading zeros, if required
            currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
            currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

            // Choose either "AM" or "PM" as appropriate
            var timeOfDay = currentHours < 12 ? 'AM' : 'PM';

            // Convert the hours component to 12-hour format if needed
            currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

            // Convert an hours component of "0" to "12"
            currentHours = currentHours == 0 ? 12 : currentHours;

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
            var textBox = document.querySelector('#textBox');
            var list = document.querySelector('#todoList');
            var addButton = document.querySelector('#btnAdd');

            addButton.addEventListener('click', addItem);

            function addItem() {

                        var listElement = document.createElement('li');
                        listElement.innerText = textBox.value;
                        listElement.insertBefore(completeItem(), listElement.firstChild);
                        listElement.appendChild(createDeleteLink());

                        list.appendChild(listElement);
                        textBox.value = '';
            }

            function completeItem() {

                        var checkBox = document.createElement('input');
                        checkBox.type = 'checkbox';
                        checkBox.id = 'toDoItem';
                        checkBox.setAttribute('href', '#');
                        checkBox.setAttribute('class', 'delete-link');
                        checkBox.addEventListener('click', function () {
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

                        var parent = this.parentNode.parentNode;
                        var child = this.parentNode;

                        parent.removeChild(child);
            }

            function createDeleteLink() {

                        var deleteLink = document.createElement('a');
                        deleteLink.innerHTML = 'x';
                        deleteLink.setAttribute('href', '#');
                        deleteLink.setAttribute('class', 'delete-link');
                        deleteLink.addEventListener('click', removeItem);
                        return deleteLink;
            }
}

initToDoList();
//# sourceMappingURL=data:application/json;base64,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QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDMUMsNEJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRTlCLDhCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRTdCOztBQUVELHFCQUFTLGdCQUFnQixHQUFHOztBQUV4Qiw0QkFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxrQ0FBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDM0Isa0NBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGtDQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNoRCxrQ0FBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqRCwrQkFBTyxVQUFVLENBQUM7YUFDckI7Q0FDWjs7QUFFRCxZQUFZLEVBQUUsQ0FBQSIsImZpbGUiOiJ0by1kby1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRklOQUwgUFJPSkVDVCAtIEJVSUxEIEEgRlVMTFkgRlVOQ1RJT05BTCBUTy1ETyBMSVNUXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XHJcbiAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgdmFyIGN1cnJlbnRIb3VycyA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XHJcbiAgdmFyIGN1cnJlbnRNaW51dGVzID0gY3VycmVudFRpbWUuZ2V0TWludXRlcygpO1xyXG4gIHZhciBjdXJyZW50U2Vjb25kcyA9IGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKTtcclxuXHJcbiAgLy8gUGFkIHRoZSBtaW51dGVzIGFuZCBzZWNvbmRzIHdpdGggbGVhZGluZyB6ZXJvcywgaWYgcmVxdWlyZWRcclxuICBjdXJyZW50TWludXRlcyA9IChjdXJyZW50TWludXRlcyA8IDEwID8gJzAnIDogJycpICsgY3VycmVudE1pbnV0ZXM7XHJcbiAgY3VycmVudFNlY29uZHMgPSAoY3VycmVudFNlY29uZHMgPCAxMCA/ICcwJyA6ICcnKSArIGN1cnJlbnRTZWNvbmRzO1xyXG5cclxuICAvLyBDaG9vc2UgZWl0aGVyIFwiQU1cIiBvciBcIlBNXCIgYXMgYXBwcm9wcmlhdGVcclxuICB2YXIgdGltZU9mRGF5ID0gKGN1cnJlbnRIb3VycyA8IDEyKSA/ICdBTScgOiAnUE0nO1xyXG5cclxuICAvLyBDb252ZXJ0IHRoZSBob3VycyBjb21wb25lbnQgdG8gMTItaG91ciBmb3JtYXQgaWYgbmVlZGVkXHJcbiAgY3VycmVudEhvdXJzID0gKGN1cnJlbnRIb3VycyA+IDEyKSA/IGN1cnJlbnRIb3VycyAtIDEyIDogY3VycmVudEhvdXJzO1xyXG5cclxuICAvLyBDb252ZXJ0IGFuIGhvdXJzIGNvbXBvbmVudCBvZiBcIjBcIiB0byBcIjEyXCJcclxuICBjdXJyZW50SG91cnMgPSAoY3VycmVudEhvdXJzID09IDAgKSA/IDEyIDogY3VycmVudEhvdXJzO1xyXG5cclxuICAvLyBDb21wb3NlIHRoZSBzdHJpbmcgZm9yIGRpc3BsYXlcclxuICB2YXIgY3VycmVudFRpbWVTdHJpbmcgPSBjdXJyZW50SG91cnMgKyAnOicgKyBjdXJyZW50TWludXRlcztcclxuICAvLyB2YXIgY3VycmVudFRpbWVTdHJpbmcgPSBjdXJyZW50SG91cnMgKyBcIjpcIiArIGN1cnJlbnRNaW51dGVzICsgXCI6XCIgKyBjdXJyZW50U2Vjb25kcyArIFwiIFwiICsgdGltZU9mRGF5O1xyXG4gIC8vIFVwZGF0ZSB0aGUgdGltZSBkaXNwbGF5XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb2NrJykuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBjdXJyZW50VGltZVN0cmluZztcclxufVxyXG5cclxuLypcclxuQ3JlYXRpbmcgdGhlIExpc3Q6XHJcbkdyYWIgdGhlIHRleHQgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGJveCB3aXRoIGEgYnV0dG9uIGNsaWNrXHJcbkNyZWF0ZSBhIG5ldyBsaXN0IGl0ZW0gYW5kIHB1dCB0aGF0IHRleHQgaW50byB0aGUgbGlzdCBpdGVtXHJcblBsYWNlIHRoYXQgbGlzdCBpdGVtIGJlbG93IHRoZSBidXR0b24gd2l0aCBhIGNoZWNrYm94XHJcblxyXG5SZW1vdmluZyB0aGUgSXRlbXM6XHJcbldoZW4gdGhlIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRoZSBpdGVtIGlzIGRlbGV0ZWQuXHJcbiovXHJcblxyXG5mdW5jdGlvbiBpbml0VG9Eb0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Qm94Jyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpXHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkFkZCcpO1xyXG5cclxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRJdGVtKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSXRlbSgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dEJveC52YWx1ZTtcclxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbXBsZXRlSXRlbSgpLCBsaXN0RWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlTGluaygpKTtcclxuXHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0ZXh0Qm94LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlSXRlbSgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgIGNoZWNrQm94LmlkID0gJ3RvRG9JdGVtJztcclxuICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcclxuICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGUtbGluaycpO1xyXG4gICAgICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja0JveDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gY3Jvc3NPdXRJdGVtKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29tcGxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGknKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbXBsZXRlVGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29tcGxldGVUYXNrID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjb21wbGV0ZVRhc2tjaGlsZCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbXBsZXRlVGFza2NoaWxkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVEZWxldGVMaW5rKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVMaW5rLmlubmVySFRNTCA9ICd4JztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGUtbGluaycpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUxpbms7XHJcbiAgICAgICAgICAgIH1cclxufVxyXG5cclxuaW5pdFRvRG9MaXN0KCkgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
