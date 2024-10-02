// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards (name,string){
    const newArray = []
for (let key = 0; key < name.length; key++){
    newArray.push( `Thank you, ${name[key]}, for the wonderful ${string} gift!`)
}
    return newArray
}
console.log(writeCards(names,"surprise"));

function countDown(){
    let number = 10
    while (number >= 0){
        console.log(number);
        number --
    }
    
}
countDown();