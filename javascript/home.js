const donate = get('donation');
const history = get('history');
const myMoney = get('myMoney');

const donationSection = get('donationSection');
const historySection = get('historySection');

const historyContent = get('historyContent');

const noakhaliMoney = get('noakhaliMoney')
const amount1 = get('amount1');
const feniMoney = get('feniMoney');
const amount2 = get('amount2');
const supportMoney = get('supportMoney');
const amount3 = get('amount3');

const btnDonateNow1 = get('btn-donate-now-1');
const btnDonateNow2 = get('btn-donate-now-2');
const btnDonateNow3 = get('btn-donate-now-3');

const head1 = get('head1');
const head2 = get('head2');
const head3 = get('head3');

const blogs = get('blogs');

const modal = get('my_modal_5');

// let storedBalance = localStorage.getItem('balance');
// if (storedBalance) {
//     myMoney.innerText = storedBalance;
// }

// localStorage.setItem('balance', parseFloat(myMoney.innerText));

history.addEventListener('click', function () {
    history.classList.add("bg-[#B4F461]", "font-bold");
    donate.classList.remove("bg-[#B4F461]", "font-bold");

    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");

});

donate.addEventListener('click', function () {
    donate.classList.add("bg-[#B4F461]", "font-bold");
    history.classList.remove("bg-[#B4F461]", "font-bold");

    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
});

let money = parseFloat(myMoney.innerText);

btnDonateNow1.addEventListener('click', function (event) {
    event.preventDefault();
    const donatedAmount = parseFloat(amount1.value);
    let noah = parseFloat(noakhaliMoney.innerText);

    let result = validate(donatedAmount, money)
    if (result === 1) {
        noah += donatedAmount;
        money -= donatedAmount;
        myMoney.innerText = money;
        noakhaliMoney.innerText = noah;

        modal.showModal();

        const he = makeHistoryContent(donatedAmount, head1);
        historyContent.appendChild(he);

        // updateBalance(-donatedAmount)
    }
    else {
        alert(result);
    }
    amount1.value = '';
    amount1.focus();
})

btnDonateNow2.addEventListener('click', function (event) {
    event.preventDefault();
    const donatedAmount = parseFloat(amount2.value);
    let feni = parseFloat(feniMoney.innerText);

    let result = validate(donatedAmount, money)
    if (result === 1) {
        feni += donatedAmount;
        money -= donatedAmount;
        myMoney.innerText = money;
        feniMoney.innerText = feni;

        modal.showModal();

        const he = makeHistoryContent(donatedAmount, head2);
        historyContent.appendChild(he);

        // updateBalance(-donatedAmount)
    }
    else {
        alert(result);
    }
    amount2.value = '';
    amount2.focus();
})

btnDonateNow3.addEventListener('click', function (event) {
    event.preventDefault();
    const donatedAmount = parseFloat(amount3.value);
    let support = parseFloat(supportMoney.innerText);

    let result = validate(donatedAmount, money)
    if (result === 1) {
        support += donatedAmount;
        money -= donatedAmount;
        myMoney.innerText = money;
        supportMoney.innerText = support;

        modal.showModal();

        const he = makeHistoryContent(donatedAmount, head3);
        historyContent.appendChild(he);

        // updateBalance(-donatedAmount)
    }
    else {
        alert(result);
    }
    amount3.value = '';
    amount3.focus();
})

blogs.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "blog.html";
})


