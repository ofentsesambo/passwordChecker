 function passwordIsOkay(password) {

     let lowercheck = /[a-z]/g;
     let uppercheck = /[A-Z]/g;
     let numcheck = /[0-9]/g;
     let specialcheck = /[!@#$%^&*()_+-=]/g;

     if ((password != '') && (password.length >= 8)){

         if ((lowercheck.test(password) == true) && (uppercheck.test(password) == true) && (specialcheck.test(password) == true))
             return true;

         else if ((lowercheck.test(password) == true) && (uppercheck.test(password) == true) && (numcheck.test(password)))
             return true;

         else if ((uppercheck.test(password) == true) && (specialcheck.test(password) == true) && (numcheck.test(password)))
             return true;

         else if ((specialcheck.test(password) == true) && (numcheck.test(password)) && (lowercheck.test(password) == true))
             return true;

         else if ((numcheck.test(password)) && (lowercheck.test(password) == true) && (uppercheck.test(password) == true))
             return true;

         else
             return false;
     } else
         return false

 }

 function passwordIsValid(password) {

     let lowercheck = /[a-z]/g;
     let uppercheck = /[A-Z]/g;
     let numcheck = /[0-9]/g;
     let specialCharCheck = /[{(!@#$%^&*.,\')}]/g;

     try {

         if (password == '') {
             throw Error('Password should exist')
         }

         else if (password.length < 8) {
             throw Error('Password should be longer than 8 characters')
         }


         else if (lowercheck.test(password) == false) {
             throw Error('password should have at least one lower case letter')
         }

         else if (uppercheck.test(password) == false) {
             throw Error('Password should have at least one upper case letter')
         }

         else if (numcheck.test(password) == false) {
             throw Error('Password should have atleast one digit')
         }

         else if (password.match(specialCharCheck) == null){
            throw Error('Password should have at least one special character')
         }  

         else {
             return "Password is valid";
         }

     } 
        catch (error) {
         console.log(error)
     }

 }

 module.exports = {
     passwordIsOkay,
     passwordIsValid

 }

