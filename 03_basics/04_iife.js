//immediately invoked function expressions(IIFE)

(function chai()
{
    console.log(`DB connected`)
})();


(  () => {

    console.log(`DB connected two`)
})();



( (name)=>{
    console.log(`DB connected two ${name}`)
})("Ashish")
