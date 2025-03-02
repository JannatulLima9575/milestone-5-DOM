document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault()
    //   console.log('login')
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber)
    const pinNumber = document.getElementById('pin-number').value;
    console.log(accountNumber, pinNumber)
    if(accountNumber.length === 11){
      if(pinNumber === '1234'){
          window.location.href="main.html";
      }
      else{
        alert('wrong pin')
      }
    }
    else{
        alert('wrong account number')
    }
    })