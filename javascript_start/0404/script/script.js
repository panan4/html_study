//배열,객체
//배열,속성 +

//배열 : 2개이상의 값 저장소
//객체 : 2개 이상의 속성:값 저장소

//배열vs객체 : 값에 대한 속성의 유무 차이,
//객체는 값의 의미있는 속성명이 함께 지정되기 때문에
//의미있는 정으로 대상을 쉽게 구분가능하다.

let num = new Array(5,4,3)
console.log(num)

num[4]=1
console.log(num)

let num2 = [1,2,3,4,5,6,7,8,9]
console.log(num2)
num2[20]='last'
console.log(num2)
//----------------------------------------------------
console.log('--객체')
let study = {
    subject :['html','css','js','jq','sass','git','ps','il'],
    name : '홍길동',
    age : 20,
    area : '인천',
    goals:'풀스택',
    birthday:'1990-04-05'
}
console.log(study)
console.log(study.subject)
console.log(study.subject[2])
console.log(study.age)
//html,css,js,jq,sass,git,ps,il
console.log(`내일 ${study.name}은 ${++study.age}살이 됩니다! 생일축하해주세요!`)
//홍길동의 시험점수는 html,css 70점입니다.
console.log(`${study.name}의 시험점수는 ${study.subject[0]}+${study.subject[1]} 70점, ${study.subject[2]} 60점 입니다.`)