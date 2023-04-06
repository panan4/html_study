let study = ['html','css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device,weather)
//----------------------배열속성 및 메서드()
console.log(Array.isArray(study))
console.log(Array.isArray(device))
console.log(Array.isArray(weather))
console.log(Array.isArray(num))
/* console.log(study.pop())
console.log(study)
console.log(study.pop())
console.log(study) */
console.log(study.shift())
console.log(study)
study.unshift('html5')
console.log(study)
study.pop()
console.log(study)
study.push('gitHub')
console.log(study)
console.log('------------------------------------------------------------------')
study.concat(device)
console.log(study)
console.log(study.concat(device))
console.log(device.concat(study))
console.log('------------------------------------------------------------------')
device.reverse()
console.log(device)
device.sort()
console.log(device)
console.log(weather.slice(0,2))
console.log(weather.slice(0,4))
console.log(weather.slice(0,5))
console.log(weather.slice(2,5))


const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let s1 = 0


btn1.addEventListener('click', function(){
    console.log(++s1)
})

btn2.addEventListener('click', function(){
    console.log(--s1)
})

weather.splice(0,2)
console.log(weather)

let yoil = ['월','화','수','목','금','토','일']
console.log(yoil.join('요일/'))
console.log(yoil.pop())
console.log(yoil)
console.log(yoil.push('일요일'))
console.log(yoil.join('요일/'))

//-----------------------------------------------------------------------------------

