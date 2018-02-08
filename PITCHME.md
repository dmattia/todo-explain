# CS 42 Task List

### For those who forget to attend class

---

## File Structure 

- index.html file that includes js and css |
- css/ contains stylish css |
- images/ images for things like checkboxes |
- js/script.js Where the logic lives |

---?code=sample/js/script.js&lang=js&title=Javascript File

@[1](Each key on keyboard has a value. The enter key has value 13.)
@[3-4](Store the HtmlElements you will be updating based on application state.)
@[6-8](LocalStorage is storage in your users browser. If they have been to the site before, they may have already added tasks.)
@[10-15](Listener for Enter key. calls function `addTaskToList`)
@[6-15](If there is a typed value, add a new li tag to the DOM)
@[28-30](When the task list was clicked...)
@[32](If the clicked thing was the checkbox...)
@[33-49](Toggle the checkmark. Store the task state into the browser)
@[41](If the clicked thing was the delete button...)
@[42-45](Remove the li element the delete button was in. Store task state into the browser)
@[48-55](Calls tag function to create li HtmlElement with two a tags inside it.)
@[79-101](Very commonly implemented function accross languages/frameworks. Creates DOM node)

---

### Questions?

<br>

@fa[github gp-contact](dmattia)
