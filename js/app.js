
const buttons = document.querySelectorAll(".get button");

for (let button of buttons) {
    button.addEventListener('click', function (event) {

        const title = event.target.parentNode.childNodes[1].innerText
        const container = document.getElementById('list_container')
        const list = document.getElementById('order_list')
        let number = document.getElementById("order_list").children
        if (number.length === 5) {
            alert("Limit cross")
            return number.length;

        }
        console.log(number.length)
        const newLi = document.createElement('li')
        newLi.innerText = title
        list.appendChild(newLi)
        event.target.setAttribute("disabled", true);
        event.target.style.backgroundColor = "black";
    })
}
document.getElementById('player_calculate').addEventListener('click', function () {

    let number = document.getElementById("order_list").children
    const totalPlayer = number.length
    // console.log(totalPlayer)
    const perPlayerCost = getInputValuebyId("player_field")
    if (isNaN(perPlayerCost)) {
        alert("Provide a number")
        return;
    }
    if (perPlayerCost < 0) {
        alert("Provide a positive number")
        return;
    }

    // console.log(perPlayerCost)
    const playerCost = perPlayerCost * totalPlayer

    const CurrenttotalPlayerCost = getElementValueById("total_playerCost")

    // const newtotal = CurrenttotalPlayerCost + playerCost

    setElementValueById("total_playerCost", playerCost)
    // setElementValueById("total_playerCost", newtotal)

})

document.getElementById("subtotal").addEventListener("click", function () {
    const CurrenttotalPlayerCost = getElementValueById("total_playerCost")
    CurrenttotalPlayerCost.innerText = "";
    const managerCost = getInputValuebyId("manager_field")
    if (isNaN(managerCost)) {
        alert("Provide a number")
        return;
    }
    if (managerCost < 0) {
        alert("Provide a positive number")
        return;
    }
    const coachCost = getInputValuebyId('coach_field')
    if (isNaN(coachCost)) {
        alert("Provide a number")
        return;
    }
    if (coachCost < 0) {
        alert("Provide a positive number")
        return;
    }
    const currentTotal = CurrenttotalPlayerCost + managerCost + coachCost
    const CurrentSubTotalField = getElementValueById("total_field")
    const subtotalValue = currentTotal + CurrentSubTotalField
    setElementValueById("total_field", subtotalValue)
    // CurrenttotalPlayerCost = ""

})