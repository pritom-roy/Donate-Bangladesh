const myMoneyElement = get('myMoney');
const home = get('home');
console.log(home);

let storedBalance = localStorage.getItem('balance');
if (storedBalance) {
    myMoneyElement.innerText = storedBalance;
}

home.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})