let username = document.querySelector('.username');
    let email = document.querySelector('.Email');
    let password = document.querySelector('.password');
    let c_password = document.querySelector('.cpassword');
    

    function showError(input , message ){
          
            // input.style.border = '2px solid red';
            // input.classList.add('Error');
            // let small = document.querySelector('small');
            //     small.style.color = 'red'
            //     small.style.visibility = 'visible'
            //      small.innerHTML = message;


            let form_control = input.parentElement;
            form_control.className = 'form-control error';
            let small = form_control.querySelector('small');
            small.style.color  = 'red';
            small.innerHTML = message;
         
            

   }

    function showSuccess(input){
        let form_control = input.parentElement;
            form_control.className = 'form-control success';


    }


    let checkRequired = (inputArr) => {
        inputArr.forEach( (input) => {
            if (input.value.trim() === '') {
                showError(input , `${firstLetter(input)} is Required`)
            }else {
                showSuccess(input)
            }
        })
  };    

   
  
    let checkLength = (input , min , max ) => {
        let l = input.value.length
            if ( l < min) {
                showError( input , `${firstLetter(input)} can't Be less than ${min}`)                
            } else if( l > max){
                showError( input , `${firstLetter(input)} can't Be greater than ${max}`)   
            }else{
                showSuccess(input)
            }
 }

  

  
    let matchpassword = (input1 , input2) => {
        if (input1.value !== input2.value) {
            showError(input2 , `${firstLetter(input2)} does not Matched`)
        }
}


function validEmail(input){
  let   re = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    if (!re.test(input.value)) {
        showError(input , `${firstLetter(input)} is not Valid`)
    }else {
         showSuccess(input)
    }
}

function firstLetter(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
    }


    document.querySelector('.form').addEventListener('submit' , (e) => {
        e.preventDefault();            
            
            //   if (username.value === '') {
            //       showError( username , 'Username is Required')
            //   }else {
            //       showSuccess(username);
            //   }

            //   if (email.value === '') {
            //       showError( email , 'Email is Required')
            //   }else {
            //       showSuccess(email);
            //   }

            //   if (password.value === '') {
            //       showError( password , 'Password is Required')
            //   }else {
            //       showSuccess(password);
            //   }

            //   if (c_password.value === '') {
            //       showError( c_password , 'Confirm Password is Required')
            //   }else {
            //       showSuccess(c_password);
            //   }


                 
                
            validEmail(email);
            checkRequired([username , email , password , c_password])
                 checkLength(password , 3, 6)
                 checkLength(c_password , 3 , 6)
                
                 
                 checkLength(username , 3 , 6)
                 matchpassword(password , c_password)
                 
                 


    });
