

content = ["So to start, i'm a first year IT student at RMIT. I enjoy solving puzzles and problems. Whether it be a rubiks cube or a complex math problem, i'm always willing to give it a go. Even if failure is more than likely (six hours to solve my first rubiks cube).", "Hello"];
x = 0

function Next(){
document.getElementById("About").innerHTML = content[x];
x += 1

}

function Back(){
document.getElementById("About").innerHTML = content[x];
x -= 1
if(x == -1){
  x = 1;
}

}
