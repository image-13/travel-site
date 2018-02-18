const validator = require('validator')

const myEmail = 'abc@123.com'

console.log(validator.isEmail(myEmail))