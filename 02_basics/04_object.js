//const tinderUser = new Object()

const tinderUser ={}

tinderUser.id="123ad"
tinderUser.name="Ashish"
tinderUser.isLoggedIn=false

console.log(tinderUser)


const regularUser ={
    email: "ashish@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ashish",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

console.log(obj3)


//object de-structure
const course ={
    coursename:"js in hindi",
    price: "655",
    courseInstrctir:"Ashish"
}
const {courseInstrctir:instructo}=course
console.log(instructo)