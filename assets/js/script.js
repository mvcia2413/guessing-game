// start here

//putting div tag into a variable
var text = document.getElementsByClassName(".word-blanks")
console.log(text)

//start game by clicking button
var startButton = document.querySelector("#start-button")
startButton.addEventListener("click", function() {
    startGame()
    }
)

function StartGame() {
    document.addEventListener("keydown", function(event) {
    var key = event.key;
    if (key=="A" || key == "P" || key == "I") {

    }
    }
    )
}