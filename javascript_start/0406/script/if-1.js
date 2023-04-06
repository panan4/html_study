console.log('.')
console.log(true)
console.log(false)
console.log(typeof false)//boolean?(논리데이터타입이다.)
console.log(typeof true)//boolean?(논리데이터타입이다.)
console.log(true+null)

console.log('------------------비교연산자---------------------')


/* let a = 10
let b = 20
let c = '20'
let d = 0
console.log(a,b,c)
console.log(a==b)
console.log(b===c)
console.log(a!=b)
console.log(b!==c)
console.log(b!=c)
console.log(a>b)
console.log(!b)
 */
console.log('------------------조건식---------------------')

/* 
    if(weather == 'rain'){
        '우산챙기라'
    }
    if(weather != 'sunny'){
        '우산꼭챙기레이'
    }
    if(point >= 60){
        '자격증합격'
    }
    if(point <= 60){
        '탈락'
    }

*/

/* let weather = window.prompt('오늘날씨는 어때?')
if(weather == '비'){
    window.alert('우산챙기기')
} */


let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는true이다.')}/* O */
if(c>10){console.log('C는10보다크다')}/* X */
if(d<c){console.log('d는c보다작다.')}/* X */
if(d<=20){console.log('d가20보다작거나같다')}/* O */
if(b!=true){console.log('b는true와다르다.')}/* O */
