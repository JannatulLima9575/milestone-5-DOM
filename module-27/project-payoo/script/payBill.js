document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('pay bill')
  const accountNumber =  document.getElementById('account-number').value;
    // console.log(accountNumber)
    const amount = getInputValueByID('pay-bill-amount');
    // console.log(accountNumber, amount)
    const pinNumber = getInputValueByID('py-bill-pin-number')
    // console.log(pinNumber)
    const mainBalance =getInnerTextByID('main-balance-add')
    
  const selectedBank = document.getElementById('all-bank').value;
  console.log(selectedBank)


    if(accountNumber.length ===11) {
        // console.log('oky');
        if(pinNumber === 1234){
           
           const sum = mainBalance - amount;
           setInnerTextByIDandValue('main-balance-add', sum)

        const container = document.getElementById('transaction-container');
        const div = document.createElement('div');
        const date = new Date();
        div.innerHTML = `
        <h1>bill paid from ${selectedBank}</h1>
        <h3>${amount} </h3>
        <p>account number: ${accountNumber}</p>
         <small> ${date.toISOString()}</small>
        `
        container.appendChild(div);

        }
        else{

        }
    } else {
        console.log('Wrong account number');
        alert('Wrong account number');
    }

})