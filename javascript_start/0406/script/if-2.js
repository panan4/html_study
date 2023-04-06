//1.사용자 아이디 확인
let userId = 'admin'

if(userId == 'admin'){
    console.log(`환영하옵니다 ${userId}님.`)
}

//2. 사용자 숫자를 입력 -> 짝수 -> 당신이 좋아하는 숫자는 짝수입니다.
let user_num = 6

if(user_num%2 == 0){
    console.log('당신이 좋아하는 숫자는 짝수입니다.')
}

//3. 나이 입력 -> 10살 이상이면 탑승가능한 놀이기구이다.

let user_age = 11

if(user_age >= 10){
    console.log('놀이기구 탑승가능.')
}

//4. 24시간 기준으로 현재시간 입력 - > 12시 이후면 오후 ?시입니다.

let time = 14

if(time >= 12){
    console.log(`오후 ${time}시입니다.`)
}

//------------------------------------------------------------------
let print = window.confirm('인쇄할까요?')
console.log(print)

if(print){
    window.print()
}