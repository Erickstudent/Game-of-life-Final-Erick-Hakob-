var socket = io();

var side = 15;

function setup() {
    // frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}
function drawn(data, matrix) {
    // es masy grecinq bayc chashxatec
    // GrassValueElement.innerText = "Grass:" + data.GrassValue
    // GrasseaterValueElement.innerText = "GrassEater:" + data.GrasseaterValue
    // PredatorValueElement.innerText = "Predator:" + data.PredatorValue
    // EverythingeaterValueElement.innerText = "EverythingEater:" + data.EverythingeaterValue
    // VirusValueElement.innerText = "Virus:" + data.VirusValue
    // HunterValueElement.innerText = "Hunter:" + data.HunterValue 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("#FFA500");
            }
            else if (matrix[y][x] == 6) {
                fill("#A52A2A");
            }

            rect(x * side, y * side, side, side);


        }
    }

}

setInterval(
    function () {
        socket.on('send matrix', drawn)
    }, 1000)

function killerWave(matrix) {
    socket.emit("kill")
}
function Stopforever(matrix) {
    socket.emit("Stop")

   
}
function sendData(matrix){
    socket.emit("data")
}
var matrix = []
    let GrassValueElement = document.getElementById("grassValue")
    let GrasseaterValueElement = document.getElementById("grassEaterValue")
    let PredatorValueElement = document.getElementById("predatorValue")
    let EverythingeaterValueElement = document.getElementById("everythingEaterValue")
    let VirusValueElement = document.getElementById("virusValue")
    let HunterValueElement = document.getElementById("hunterValue")
    



        // socket.on('send matrix', killerWave)
        setInterval(
            function() {
              var randomColor = Math.floor(Math.random() * 16777215).toString(16);
              document.body.style.backgroundColor = "#" + randomColor;
            }, 1000);