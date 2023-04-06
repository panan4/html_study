console.log('.')

const order = document.querySelectorAll('.order')
const result = document.querySelector('#result')
console.log(order,result)


//함수 기본 문법
//function 함수명(){실행재사용문법}
let aa = '아이스아메리카노'
let ar = '아이스카페라떼'
let at = '아이스티'
function japangi1(){
    let menu1 = window.confirm(`${aa}주문하시겠습니까?`)
    console.log(menu1)
    menu = ['아이스아메리카노']
    result.innerHTML = `주문하신 ${menu}나왔습니다.`
}

function japangi2(){
    let menu2 = window.confirm(`${ar}주문하시겠습니까?`)
    console.log(menu2)
    menu = ['아이스카페라떼']
    result.innerHTML = `주문하신 ${menu}나왔습니다.`
}

function japangi3(){
    let menu3 = window.confirm(`${at}주문하시겠습니까?`)
    console.log(menu3)
    menu = ['아이스티']
    result.innerHTML = `주문하신 ${menu}나왔습니다.`
}

order[0].addEventListener ('click', japangi1)
order[1].addEventListener ('click', japangi2)
order[2].addEventListener ('click', japangi3)