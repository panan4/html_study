//변수선언
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
let money1 = 10000
let money2 = 1000
let total = money1 + money2
//객체.toLocalString('ko-kr')숫자를 -> 문자열로 변경해주는 법
let totla_replace = total.toLocaleString('ko-kr')
//콘솔
console.log(total)
console.log(answer_btn, answer_input)
//선언
answer_btn.addEventListener(`click`, function(){
    answer_input.value = `정답은 ${totla_replace}원 입니다.`
})