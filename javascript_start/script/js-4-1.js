//주문하기 버튼을 누를시 총 수량이 1개씩 늘어나고, 총 가격이 단가에 맞춰
//수량과 단가를 비율로 함께 올라가게 제작 아메리카노는 1개당 4700원이다.

const btn = document.querySelector("#order")
const number = document.querySelector("#number")
const all = document.querySelector("#result")
const reset = document.querySelector("#reset")
const price = 4700
let num = 0
let total = 0

console.log('reset')

function sell(n){
    num += n
    number.innerHTML = num
    total = num*price
    all.innerHTML = total.toLocaleString('ko-kr')
}
function remove(n){
    num = 0
    number.innerHTML = num
    total = num*price
    all.innerHTML = total.toLocaleString('ko-kr')
}

btn.addEventListener('click', ()=>{
    if(num <= 9){
        sell(1)
    }
    /* console.log(num) */
    else {
        window.alert("최대구매수량이옵니다. 즈언하~")
    }
})
reset.addEventListener('click', ()=>{
    /* console.log(".") */
    remove(1)
    /* console.log(num) */
})
