var balanceId = document.getElementById("updateBalance");
function mianBalance(data) {
  balanceId.innerText = data;
}

document
  .getElementById("depositBalanceBtn")
  .addEventListener("click", function () {
    var depoBal = document.getElementById("depositBalace");
    var mainBal = parseInt(balanceId.innerText) + parseInt(depoBal.value);
    mianBalance(mainBal);
    depoBal.value = "";
  });

function withdrawAndFundTransfer(id) {
  var withdrawBal = document.getElementById(id);
  var minusBal = parseInt(balanceId.innerText) - parseInt(withdrawBal.value);
  mianBalance(minusBal);
  withdrawBal.value = "";
}

document
  .getElementById("withdrawMoneyBtn")
  .addEventListener("click", function () {
    withdrawAndFundTransfer("withdrawMoney");
  });
document
  .getElementById("fundTransferBtn")
  .addEventListener("click", function () {
    withdrawAndFundTransfer("fundTransfer");
  });
