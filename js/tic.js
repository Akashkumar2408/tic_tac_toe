 let turn;
function X()
{
    
    turn=1
}
 function O()
 {
    turn=0
 }


function turn1() {
    if (turn == 1) {
        document.getElementById("b1").innerHTML = "X";
        turn = 0;
        win();
    }
    else {
        document.getElementById("b1").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn2() {
    if (turn == 1) {
        document.getElementById("b2").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b2").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn3() {
    if (turn == 1) {
        document.getElementById("b3").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b3").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn4() {
    if (turn == 1) {
        document.getElementById("b4").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b4").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn5() {
    if (turn == 1) {
        document.getElementById("b5").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b5").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn6() {
    if (turn == 1) {
        document.getElementById("b6").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b6").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn7() {
    if (turn == 1) {
        document.getElementById("b7").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b7").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn8() {
    if (turn == 1) {
        document.getElementById("b8").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b8").innerHTML = "0";
        win();
        turn = 1;
    }
}
function turn9() {
    if (turn == 1) {
        document.getElementById("b9").innerHTML = "X";
        win();
        turn = 0;
    }
    else {
        document.getElementById("b9").innerHTML = "0";
        win();
        turn = 1;
    }
}

//to reset
function reset() {
    location.reload();
    document.getElementById('b1').innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
    document.getElementById("b5").innerHTML = "";
    document.getElementById("b6").innerHTML = "";
    document.getElementById("b7").innerHTML = "";
    document.getElementById("b8").innerHTML = "";
    document.getElementById("b9").innerHTML = "";

}

//win function
function win()
 {
    let arr = [];
    for (let i = 1; i < 10; i++) {
        try {
            arr.push(document.getElementById(`b${i}`).textContent);
        } catch {
           // console.log('ggg')
        }
    }
    console.log(arr,"ARRAY")
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != null && arr[0] != '') {
        console.log(arr,"COMpare 0 1 2");
        alert(`winner${arr[0]}`);
        
        
    }
    else if (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null && arr[3] != ' ') {
        console.log(arr,"COMpare 3 4 5");
        alert(`winner${arr[3]}`);
    }
    else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null && arr[6] != ' ') {
        console.log(arr,"COMpare 6 7 8");
        console.log("Error");
        alert(`winner${arr[6]}`);
    }
    else if (arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null && arr[0] != ' ') {
      
        alert(`winner${arr[0]}`);
    }
    else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null && arr[1] != ' ') {
        
        alert(`winner${arr[1]}`);
    }
    else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null && arr[2] != ' ') {
       
        alert(`winner${arr[2]}`);
    }
    else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null && arr[0] != ' ') {
        
        alert(`winner${arr[0]}`);
    }
    else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null && arr[2] != ' ') {
        
        
        alert(`winner${arr[2]}`);
    }
    else if(arr[0] != null && arr[0] != ' '&&arr[1] != null && arr[1] != ' '&&arr[2] != null && arr[2] != ' '&&
    arr[3] != null && arr[3] != ' '&&arr[4] != null && arr[4] != ' '&&arr[5] != null && arr[5] != ' '&&
    arr[6] != null && arr[6] != ' '&&arr[7] != null && arr[7] != ' '&&arr[8] != null && arr[8] != ' ')
    {
        alert('draw');
    }

}
