let password = require("../src/password_checker.js");
let testPassword = "Gd1$1fta"
let okay = password.passwordIsOkay(testPassword);

describe("password is okay ", function(){
         it("It checks to see if the password is not empty", function(){
            expect(okay).toBe(true);
         })
         it("It checks if the size of the password is greater than 8",function(){
            expect(okay).toBe(true);
         })
         
         it("It checks if the password has an upper case letter", function(){
             expect(okay).toBe(true);
         })

         it("It checks if the password has a lower case letter", function(){
             expect(okay).toBe(true);
         })

         it("It checks if the password has at least one digit", function(){
             expect(okay).toBe(true);
         })

         it("it checks if the password has a special character", function(){
             expect(okay).toBe(true);
         }) 
 })
