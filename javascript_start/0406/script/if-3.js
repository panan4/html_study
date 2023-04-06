/* let num = window.prompt('숫자줘.')

if(num%2==0)
{
    console.log('짝수뇽냥늉녕')
}
else{
    console.log('홀수꾱냥뀽녕')
} */



//admin : 관리자id //id입력을 받고 admin이면 ->관리자 ㅎㅇ/else 관페접근불가

let userId = window.prompt("누구인가?")

if(userId == 'admin'){
    window.alert(`${userId}님 ㅎㅇ`)
}
else{
    window.alert("나가시오")
}