//singleton
//object.create

//object literals
const jsuser ={
    name:"Ashish",
    age: 19,
    location: "Koderma",
    email: "ashish@google.com",
    isLoggedIn:false,
    lastLoginDay: ["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])

jsuser.greeting=function()
{
    console.log("hello js user")
}
console.log(jsuser.greeting())


jsuser.greetingTwo=function()
{
    console.log(`hello js user , ${this.name}`)
}
console.log(jsuser.greetingTwo())