let password = require("../src/password_checker.js");

let valid = password.passwordIsValid('qdu$1')

describe("password is valid ", function(){

    it("It should throw error when the password is empty", function(){
  
      expect(() => {passwordIsValid('').toThrow('Password should exist')})
    })

    it("It should throw error when password lenght is less than 8", function(){
      expect(() => {passwordIsValid("ajsnjhs").toThrow('Password should be longer than 8 characters')})
    })

    it("It throws an error if the password has no upper case letter", function(){
      expect(() => {passwordIsValid("ahcoeaqed").toThrow('Password should have at least one upper case letter')})
    })

    it("It throws an error if the password has no digit", function(){
      expect(() => {passwordIsValid("AHFNDKDNF").toThrow('password should have at least one lower case letter')})
    })
    
    it("It throws an error if password has no special characters", function(){
      expect(() => {passwordIsValid("Q@Wafdgsa").toThrow('password should have atleast one digit')})
    })

    it("It throws an error if password has no special characters", function(){
      expect(() => {passwordIsValid("Q1Wafdgsa").toThrow('Password should have at least one special characthers')})
    })
 })







































