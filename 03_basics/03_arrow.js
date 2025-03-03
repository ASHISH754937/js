const user={
    username: "Ashish",
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`)
    }
}
user.welcomeMessage()
user.username="Manish"
user.welcomeMessage()


// function chai(){
//     let username ="Ashish"
//     console.log(this.username)
// }
// chai()



const chai = function (){
    let username ="Ashish"
    console.log(this.username)
}
chai()



const addTwo = (num1,num2)=>{
    return num1 + num2
}
//   or
//const addTwo = (num1,num2)=> num1 + num2
console.log(addTwo(3,4))
