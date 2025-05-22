//code of the game

const solution = Math.floor(Math.random() * 100) + 1

const guessEl = document.getElementById("guess")

function TippClicked(){
    let guess = guessEl.value * 1

    if(guess < solution){
        alert("📉")
    }
    else if(guess > solution){
        alert("📈")
    }
    if(guess = solution){
        alert("🎉")
    }
}