//출금하기 버튼 클릭
//얼마 출금하시겠습니까?
//3자리 간격 콤마 ?00,000원 출력되었습니다.

const btn = document.querySelector('.order')
const result = document.querySelector('#result')
const result2 = document.querySelector('#result2')

let a1 = 10000000;
console.log(btn, result2, result, a1)



/* function c1(){
    let b1 = window.prompt('얼마를 출금하시겠습니까?')
    console.log(b1)
    b1 = Number(b1)
    result.innerHTML = `${b1.toLocaleString('ko-kr')}원을 출금하셨습니다.`
    let total = a1 - b1
    result2.innerHTML = `현재남은 잔액은 ${total.toLocaleString('ko-kr')}원 입니다.`
} */



function c1(){
    let b1 = window.prompt('얼마를 출금하시겠습니까?')
    console.log(b1)
    b1 = Number(b1)
    if(a1 > b1){ 
    result.innerHTML = `${b1.toLocaleString('ko-kr')}원을 출금하셨습니다.`
    let total = a1 - b1
    result2.innerHTML = `현재남은 잔액은 ${total.toLocaleString('ko-kr')}원 입니다.`
    }
    else { 
    result.innerHTML = '잔액부족'
    result2.innerHTML = `현재잔액은 ${a1.toLocaleString('ko-kr')}원 입니다.`
    }
}



btn.addEventListener ('click', c1)

