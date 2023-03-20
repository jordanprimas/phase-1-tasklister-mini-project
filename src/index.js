document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault() 
    handleToDO(event.target["new-task-description"].value)
  })
})

function handleToDO(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = todo
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(event) {
  event.target.parentNode.remove()
}