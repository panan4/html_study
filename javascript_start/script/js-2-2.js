const btn = document.querySelector('#answer_btn')
const a1 = document.querySelector('#result1')
const a2 = document.querySelector('#result2')
const a3 = document.querySelector('#result')

console.log(btn, a1, a2, a3)

btn.addEventListener('click', function(){
    //console.log(typeof (a1.value))
    //console.log(typeof (a2.value))
    //console.log(Number(a1.value))
    //console.log(Number(a2.value))
    let total = Number(a1.value) + Number(a2.value)
    a3.value = `${total = total.toLocaleString('ko-kr')}만원 입니다.`
})