const ENTER_KEY_CODE = 13

const taskInput = document.getElementById('task')
const taskList = document.getElementById('task-list')

if (localStorage.tasks) {
  taskList.innerHTML = localStorage.tasks
}

taskInput.addEventListener("keydown", event => {
  if (event.keyCode === ENTER_KEY_CODE) {
    event.preventDefault()
    addTaskToList()
  }
})

/* Adds a new task item to the list. */
function addTaskToList() {
  if (taskInput.value) {
    const li = renderTaskTemplate(taskInput.value)

    taskInput.value = ""
    taskList.appendChild(li)
    localStorage.tasks = taskList.innerHTML
  }
}

taskList.addEventListener('click', event => {
  const target = event.target
  const li = target.parentNode

  if (target.classList.contains('check')) {
    event.preventDefault()
    if (li.classList.contains('checked')) {
      li.classList.remove('checked')
    } else {
      li.classList.add('checked')
    }

    localStorage.tasks = taskList.innerHTML
  } else if (target.classList.contains("delete")) {
    event.preventDefault()
    li.parentNode.removeChild(li)
    localStorage.tasks = taskList.innerHTML
  }
})

/* Creates an HTMLElement containing a task with the given text. */
function renderTaskTemplate(task) {
  return tag('li', {}, [
    task,
    tag('a', {class: "delete", href: "#"}, []),
    tag('a', {class: "check", href: "#"}, [])
  ])
}

/* Creates and returns an HTMLElement representing a tag of the given name.
 * attrs is an object, where the key-value pairs represent HTML attributes to
 * set on the tag. contents is an array of strings/HTMLElements (or just
 * a single string/HTMLElement) that will be contained within the tag.
 *
 * Examples:
 * tag('p', {}, 'A simple paragraph') => <p>A simple paragraph</p>
 * tag('a', {href: '/about'}, 'About') => <a href="/about">About</a>
 *
 * tag('ul', {}, tag('li', {}, 'First item')) => <ul><li>First item</li></ul>
 *
 * tag('div', {}, [
 *   tag('h1', {'class': 'headline'}, 'JavaScript'),
 *   ' is awesome, ',
 *   tag('span', {}, 'especially in CS42.')
 * ])
 * => <div>
 *      <h1 class="headline">JavaScript</h1>
 *      is awesome,
 *      <span>especially in CS42.</span>
 *    </div>
 */
function tag(name, attrs, contents) {
  const element = document.createElement(name)
  for (const name in attrs) {
    element.setAttribute(name, attrs[name])
  }

  // If contents is a single string or HTMLElement, make it an array of one
  // element this guarantees that contents is an array below.
  if (!(contents instanceof Array)) {
    contents = [contents]
  }

  contents.forEach(piece => {
    if (piece instanceof HTMLElement) {
      element.appendChild(piece)
    } else {
      // must create a text node for a raw string
      element.appendChild(document.createTextNode(piece))
    }
  })

  return element
}
