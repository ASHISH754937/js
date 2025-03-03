const userEmail="ashih@gmail.com"
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}


//falsy values
//false,0,-0,BigInt , 0n , "" , null,  undefined, NaN

//truthy values
//"0", 'false',  " ",  [], {}, function(){}




//NUllish coalescing Operatio (??): null undefined

let val1
//val1=5??10
//val1=null ?? 10
val1=undefined ?? 10
console.log(val1)