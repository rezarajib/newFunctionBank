document.getElementById('depositBtn').addEventListener('click', function() {
    const depositValue = getDepositFieldById('depositField');
    const depositInner = getDepositInnerById('depositTotal');
    const totalDeposit = depositValue + depositInner;
    setElemnetId("depositTotal",totalDeposit);

    const balanceInner = getDepositInnerById("currentBalanceElement");
    const balanceTotal = balanceInner + totalDeposit;

    setElemnetId("currentBalanceElement", balanceTotal);
});