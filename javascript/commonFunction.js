function get(id) {
    const element = document.getElementById(id);
    return element;
}

function validate(amount, money) {
    if (isNaN(amount)) return "For a successful donation please input a valid amount.";
    else if (amount < 0) return "Donate amount can not be negative, Try again.";
    else if (amount === 0) return "Donation amount can not be zero";
    else if (amount > money) return "You don't have this amount in your account, Please recharge and try again";
    else return 1;
}


function makeHistoryContent(donatedAmount, head) {
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white border rounded-2xl p-4 mb-3";
    historyItem.innerHTML = `
        <h1 class = "text-xl font-bold pb-3">${donatedAmount} Tk Donated for "${head.innerText}" Campaign.</h1>
        <p>Date: ${new Date()}</p> 
        `
    return historyItem;
}
