

let garr=[0,0,0,0,0,0,0,0,0];
let turn = "Player : X";
function clearGame() {
    garr.fill(0,0,10)
    for (let i = 0; i < 9; i++) garr[i]=0;
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerText=' ';
    }
    turn = "Player : X";
    document.getElementById("turn").innerText=turn

}

function winner(c)
{
 
    if(c==='x')
        alert("Player X Won !!!");
    else if(c==='o')
        alert("Player O Won !!!");
    else
    alert("It's a Tie !!! \n nobody wins");

    clearGame();
}

clearGame();

function check() {
     
    if(garr[0]===garr[1] && garr[1]===garr[2] && garr[0]!=0){
        if(garr[0]==='x')
            winner('x')
        else winner('o')
    }
    if(garr[3]===garr[4] && garr[4]===garr[5] && garr[3]!==0){
        if(garr[3]==='x')
            winner('x')
        else winner('o')
    }

    if(garr[6]===garr[7] && garr[7]===garr[8] && garr[6]!==0){
        if(garr[6]==='x')
            winner('x')
        else winner('o')
    }


    if(garr[0]===garr[3] && garr[3]===garr[6] && garr[0]!==0){
        if(garr[0]==='x')
            winner('x')
        else winner('o')
    }

    if(garr[1]===garr[4] && garr[4]===garr[7] && garr[1]!==0){
        if(garr[1]==='x')
            winner('x')
        else winner('o')
    }

    if(garr[2]===garr[5] && garr[5]===garr[8] && garr[2]!==0){
        if(garr[2]==='x')
            winner('x')
        else winner('o')
    }


    if(garr[0]===garr[4] && garr[4]===garr[8] && garr[0]!==0){
        if(garr[0]==='x')
            winner('x')
        else winner('o')
    }

    if(garr[2]===garr[4] && garr[4]===garr[6] && garr[2]!==0){
        if(garr[2]==='x')
            winner('x')
        else winner('o')
    }

    let flag =0;
   
    for (let i = 0; i < 9; i++) {
        if(garr[i]==0)flag=1;
        
    }
    if(flag===0)
    {
            winner(0);
    }
}
function clicked(ind) {
    console.log(ind);
    if(garr[ind-1]===0)
    {
        if(turn=="Player : X")
        {
            garr[ind-1]='x';
            document.getElementById(ind).innerHTML="<b>X</b>"
            turn="Player : O"
        }else{
            garr[ind-1]='o';
            document.getElementById(ind).innerHTML="<b>O</b>"
            turn="Player : X"
        }
        document.getElementById("turn").innerText=turn
    
    

        setTimeout(function(){check()},20);
    }
    
}