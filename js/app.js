function lenthOfList() {

}

const buttons = document.querySelectorAll(".get button");

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.setAttribute("disabled", true);
        const title = event.target.parentNode.childNodes[1].innerText
        // console.log(title)
        const container = document.getElementById('list_container')
        // console.log(container)

        const list = document.getElementById('order_list')
        let number = document.getElementById("order_list").children
        console.log(number.length)
        if (number.length == 5) {
            return number.length;
        }
        // const newOl = document.createElement('ol')
        const newLi = document.createElement('li')
        lenthOfList()
        newLi.innerText = title

        list.appendChild(newLi)

        // container.appendChild(newOl)
        // console.log(newOl)
        // console.log(newLi.parentNode.parentNode.childNodes)

    })
}
document.getElementById('player_calculate').addEventListener('click', function () {

    const totalPlayer = lenthOfList()
    console.log(totalPlayer)
    const perPlayerCost = getInputValuebyId("player_field")
    console.log(perPlayerCost)
    const playerCost = perPlayerCost * totalPlayer
    const CurrenttotalPlayerCost = getElementValueById("total_playerCost")
    const newtotal = CurrenttotalPlayerCost + playerCost
    setElementValueById("total_playerCost", newtotal)


})
document.getElementById("subtotal").addEventListener("click", function () {
    const CurrenttotalPlayerCost = getElementValueById("total_playerCost")
    const managerCost = getInputValuebyId("manager_field")
    const coachCost = getInputValuebyId('coach_field')
    const currentTotal = CurrenttotalPlayerCost + managerCost + coachCost
    const CurrentSubTotalField = getElementValueById("total_field")
    const subtotalValue = currentTotal + CurrentSubTotalField
    setElementValueById("total_field", subtotalValue)
})