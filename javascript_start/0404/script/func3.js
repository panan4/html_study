const result = document.querySelector('#result')

function fun1(a){//1. 매개변수 a 생성
    console.log(a)//3. 값이 대입된 매개변수를 전달 후 출력
}
fun1('야호')//2. a매개변수에 10 값 대입

function fun2(a,b){
    //두 자리 더하기 계산기
    console.log(a+b)
}
fun2(1234,5676)

function japangi(drink,b){
    console.log(`${drink}, ${b}개 출력`)
}
japangi('커피',3)
japangi('사이다',1)
japangi('콜라',2)

function dan99(num){
    result.innerHTML += `${num} X 1 = ${num*1}<br>` 
    result.innerHTML += `${num} X 2 = ${num*2}<br>`
    result.innerHTML += `${num} X 3 = ${num*3}<br>`
    result.innerHTML += `${num} X 4 = ${num*4}<br>`
    result.innerHTML += `${num} X 5 = ${num*5}<br>`
    result.innerHTML += `${num} X 6 = ${num*6}<br>`
    result.innerHTML += `${num} X 7 = ${num*7}<br>`
    result.innerHTML += `${num} X 8 = ${num*8}<br>`
    result.innerHTML += `${num} X 9 = ${num*9}<br>`
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)

const cat = {
    name:'쿠키',
    birthday:'12/25',
    birth:function(){
        return `${cat.name}야 ${cat.birthday}일 생일축하해`
    }
}

console.log(cat)
console.log(cat.birth())