let password = require("../src/password_checker.js");

describe("password is okay ", function(){
         it("It checks to see if the password is not empty", function(){
            expect(password.passwordIsOkay('')).toBe(false);
         })
         it("It checks if the size of the password is greater than 8",function(){
            expect(password.passwordIsOkay('abdh')).toBe(false);
         })
         
         it("It checks if the password has an upper case letter", function(){
             expect(password.passwordIsOkay('ahahahahahhah')).toBe(false);
         })

         it("It checks if the password has a lower case letter", function(){
             expect(password.passwordIsOkay('Al@akddnd2f')).toBe(true);
         })
 })

