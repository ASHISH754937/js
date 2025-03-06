const arr=[1,2,3,4,5]
for(const num of arr)
{
    console.log(num);
}


//map

const map = new Map()
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('Fr',"France")
console.log(map);


for(const [Key,Value]of map){
    console.log(Key,':-',Value);
}