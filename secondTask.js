let modal= document.getElementById('modal');
let btn = document.getElementById("nav");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => modal.style.display = "block")
span.addEventListener('click', () =>modal.style.display = "none")
window.addEventListener('click',(ev) => {
    if(ev.target == modal){
        modal.style.display = "none"
    }
})

let resultModal= document.getElementById('result__modal');
let resultBtn = document.getElementById("result__button");
let resultSpan = document.getElementsByClassName("result__close")[0];
resultBtn.addEventListener('click', () => resultModal.style.display = "block")
resultSpan.addEventListener('click', () =>resultModal.style.display = "none")
window.addEventListener('click',(ev) => {
    if(ev.target == resultModal){
        resultModal.style.display = "none"
    }
})

const func = (X, Y) => {
    const looseStones = [X]
    let left, right
    while(Y){
        Y--
        let part = looseStones.shift()
        part--
        if( part % 2 !== 0){
        left = Math.floor(part/2)
        right = Math.ceil(part/2)
        }
        else{
        right = Math.floor(part/2)
        left = Math.ceil(part/2);
        }
        (looseStones[looseStones.length-1]<right)? looseStones.push(right, looseStones.pop()):looseStones.push(right)
        looseStones.push(left);
        if(Y > 4e9){
            throw Error('to much beetles')
        }
       }
       return [left,right];
    }
document.getElementById("result__solution").innerText = `
Камней(X)=8, Жучков(Y) = 1 - свободных камней: ${func(8, 1)} 
Камней(X)=8, Жучков(Y) = 2 - свободных камней: ${func(8, 2)} 
Камней(X)=8, Жучков(Y) = 3 - свободных камней: ${func(8, 3)}
Камней(X)=8, Жучков(Y) = 4 - свободных камней: ${func(8, 4)}
`




