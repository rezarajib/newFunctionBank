function getDepositFieldById(inputFieldValue){
    const depositField = document.getElementById(inputFieldValue);
    const depositFieldValue = depositField.value;
    const depostiFieldStONum = parseFloat(depositFieldValue);
    depositField.value = '';
    return depostiFieldStONum;
}

function getDepositInnerById(elementId){
    const depositText = document.getElementById(elementId);
    const depositFieldInner = depositText.innerText;
    const deppsitTextStONum = parseFloat(depositFieldInner);
    return deppsitTextStONum;
}

 function setElemnetId(elementId,newValue){
     const depositText = document.getElementById(elementId);
     depositText.innerText = newValue;
 }