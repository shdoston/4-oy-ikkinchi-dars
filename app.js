// let myName = prompt("ismingizni kiriting")
// if ( myName.length < 120 ){
//     alert(`siz ${myName.length} yana shuncha ${ 120 - myName.length} shunxha soz kiritishing mumkim `)
// } else {
//     alert (myName + ',sayitimizga hush kelibsiz' )
// }

let number = prompt("raqam kiriting")
if (number%3){
    alert('fizz')
} else if(number%5){
    alert('bazz')
} else if(number){
    alert("fizzbizz")
}