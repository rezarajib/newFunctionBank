document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = getDepositFieldById('withdraw-field');
    const withdrawText = getDepositInnerById('withdraw-Element');
    const newTotalWithdraw = withdrawField + withdrawText;
    setElemnetId('withdraw-Element',newTotalWithdraw);

    const balanceTotal = getDepositInnerById('currentBalanceElement');
     const newWithDrawBalanceTotal = balanceTotal - newTotalWithdraw ;
     setElemnetId('currentBalanceElement',newWithDrawBalanceTotal);
})
// document.getElementById('withdraw-btn').addEventListener('click',function(){
//     const withdrawValue = getDepositFieldById('withdraw-field');
//     const withdrawInner = getDepositInnerById('withdraw-Element');
//     const withdraw = withdrawInner + withdrawValue;
//     setElemnetId("withdraw-Element", withdraw);

//     const previousBalanceTotal = getDepositInnerById('currentBalanceElement');
//     console.log(previousBalanceTotal);
//     const newBalanceTotal = previousBalanceTotal - withdrawValue;
//     setElemnetId('currentBalanceElement',newBalanceTotal);

    
// })