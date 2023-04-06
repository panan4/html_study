const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

let money = 10000
let snack = 2000
let ice = 1000
let total = money - snack - ice
let total_r = total.toLocaleString('ko-kr')
console.log(total, total_r)

answer_btn.addEventListener('click', function(){
    answer_input.value = `정답은 ${total_r}원 입니다.`
})