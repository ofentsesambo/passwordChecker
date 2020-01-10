let password = require("../src/password_checker.js");


describe("password is valid ", function(){

    it("It should throw error when the password is empty", function(){
  
      expect(() => {passwordIsValid("")}).toThrow()
    })

    it("It should throw error when password lenght is less than 8", function(){
      expect(() => {passwordIsValid("ajsnjhs").toThrow()})
    })

    it("It throws an error if the password has no upper case letter", function(){
      expect(() => {passwordIsValid("ahcoeaqed").toThrow()})
    })

    it("It throws an error if the password has no digit", function(){
      expect(() => {passwordIsValid("aAw$e1tvgfd").toThrow()})
    })
    
    it("It throws an error if password has no special characters", function(){
      expect(() => {passwordIsValid("1@Wafdgsa").toThrow()})
    })
 })







































