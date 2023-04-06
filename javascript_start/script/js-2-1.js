const input = document.querySelector('#result')
const inputType = document.querySelector('#result1')
const inputOk = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(input, inputType, inputOk, answer_btn)

answer_btn.addEventListener('click', function(){
    let num_type = Number(input.value)
    inputOk.value = input.value
    inputType.value = typeof(num_type)
})