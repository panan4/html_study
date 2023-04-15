
//1. 모든 서브 숨기기
//2. gnb 자식 li에 마우스를 올리면 자식 sub보이기(node처리)
//3. gnb 자식 li에서 나가면 자식 sub 숨기기

const tab = document.querySelectorAll('.menu')
const sub = document.querySelectorAll('.menu .sub')
const bg1 = document.querySelector('.bg')
console.log(tab, sub)

/* tab.forEach((target,index)=>{
    for(let i of sub){
        i.style.display = "none"
        
    }    
    target.addEventListener('mouseover', ()=>{
        target.lastElementChild.style.display = "block"
    })
    target.addEventListener('mouseout', ()=>{
        target.lastElementChild.style.display = "none"
    })
}) */ 

/* for(let i of sub){
    i.style.display = "none"
}
for(let target of tab){
    target.addEventListener('mouseover', ()=>{
        target.lastElementChild.style.display = "block"
    })
    target.addEventListener('mouseout', ()=>{
        target.lastElementChild.style.display = "none"
    })
} */
/* for(let i of sub){
    i.lastElementChild.style.height = '0px'
    i.style.height = "0px"
    i.style.overflow = 'hidden'
    i.style.transition = "all .7s"
}
for(let target of tab){
    target.addEventListener('mouseover', ()=>{
        target.lastElementChild.style.height = "200px"
    })
    target.addEventListener('mouseout', ()=>{
        target.lastElementChild.style.height = "0px"
    })
} */
bg1.style.height = '0'
bg1.style.transition = 'all .7s'
for(let i of sub){
    i.lastElementChild.style.height = '0px'
    i.style.height = "0px"
    i.style.overflow = 'hidden'
    i.style.transition = "all .7s"
}
for(let i of tab){
    i.addEventListener('mouseover', ()=>{
        for(let i of sub){
        i.style.height = "200px"
        }
        bg1.style.height = '200px'
    })
}
for(let i of tab){
    i.addEventListener('mouseout', ()=>{
        for(let i of sub){
        i.style.height = "0"
        }
        bg1.style.height = '0'
    })
}