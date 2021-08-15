

document.getElementById('deposit-button').addEventListener('click', function () {
   // get the amount deposited
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);

   // update deposit total
   const depositTotal = document.getElementById('deposit-total');
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

   // update account balance 
   const balanceTotal = document.getElementById('balance-total').innerText;
   // const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotal);
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;
   // clear the deposit input field
   depositInput.value = '';
});
