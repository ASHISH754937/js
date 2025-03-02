function sayMyName()
{
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
}
sayMyName()

function addTwoNum(num1,num2)
{
    console.log(num1+num2)
}
addTwoNum(6,5)

function loginUserMessage(username)
{
    return `${username} just logged in`
}
console.log(loginUserMessage("Ashish"))

function calculateCartPrice(...num)
{
    return num
}
console.log(calculateCartPrice(200,400,600))

const user ={
    username:"Ashish",
    prices:999
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}
handleObject(user)