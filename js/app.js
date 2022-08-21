const buttons = document.querySelectorAll(".get button");

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.setAttribute("disabled", true);
        const title = event.target.parentNode.childNodes[1].innerText
        // console.log(title)
        const container = document.getElementById('list_container')
        // console.log(container)
        const newOl = document.createElement('ol')
        const newLi = document.createElement('li')
        newLi.innerText = title
        newOl.appendChild(newLi)
        container.appendChild(newOl)
        console.log(newOl)
    })
}