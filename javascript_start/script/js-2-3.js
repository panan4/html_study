const btn = document.querySelector('#answer_btn')
const a1 = document.querySelector('#result1')
const a2 = document.querySelector('#result2')
const a3 = document.querySelector('#result')

console.log(btn, a1, a2, a3)

btn.addEventListener('click', function(){
    let inmoney = window.prompt('입금하실 금액을 입력해주세요.')
    let b1 = Number(inmoney)
    /* console.log(a1.value) */
    a1.value = `${b1 = b1.toLocaleString('ko-kr')}원`
    /* console.log(b1) */
    a2.value = `${Number(100).toLocaleString('ko-kr')}원`
    /* console.log(a2.value) */
    let total = Number(inmoney)+100
    /* console.log(total) */
    a3.value = `${total = total.toLocaleString('ko-kr')}원 입니다.`
})