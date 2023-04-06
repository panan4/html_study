/* let id = 'admin3'
let pw = '1234'

if (id == 'admin' && pw == '1234') {
    console.log('관리자 로긴 성공 축하')
}
else if (id == 'admin' || pw == '1234') {
    console.log('둘중하난 틀렸어요 유감 ㅠ')
}
else {
    console.log('둘다 틀렸어요 나가')
} */

//1~20사이 숫자를 입력받고 해당숫자가 10보다 작으면 10이하입니다. 아니면이상출력
/* 
let num = window.prompt("1~20사이의 숫자를 입력하시오.")
if (num > 10 && num < 21){
    window.alert(`입력하신 숫자 ${num}은 11이상 이옵니다.`)
}
else if(num > 0 && num <= 10) {
    window.alert(`입력하신 숫자 ${num}은 10이하 이옵니다.`)
}
else {
    window.alert('1~20사이를 넣으라니깐? 왜 말을 안듣지?')
} */


let a = 5
if (a>10){
    console.log('a>10')
}
else if(a==10){
    console.log('a==10')
}
else if(a < 9){
    console.log('a<9')
}
console.log('if종료')

console.log('2단if--------------------------------------------')

let number = 18
if (number > 0 && number < 21) {
    if(number < 11){
        console.log("10이하다")
    }
    else {
        console.log("11이상이다.")
    }
    console.log("1단 if종료 위치")
}
else{
    console.log("error")
}
console.log("if문 종료")