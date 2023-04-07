let turn = "X"
let gameover=false
const changeTurn = ()=>{

    return turn === "X"?"O":"X"
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach( e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ": WON"
            gameover=true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }

    })
}

//game logic 
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element)=> {
    let boxText = element.querySelector(".boxtext")
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "turn on for: " + turn;}     
        }
    })
})

reset.addEventListener('click', ()=>{
    let Boxtexts = document.querySelectorAll(".boxtext")
    Array.from(Boxtexts).forEach(Ele => {
        Ele.innerText = ""
    })
    turn = "X"
    gameover=false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "turn on for: " + turn;

})