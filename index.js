let count=0;
let count2=0;

document.getElementById("new-game").addEventListener("click",newGame)

function newGame(){
    count = 0
    count2 =0
    document.getElementById("home-score").textContent=count;
    document.getElementById("guest-score").textContent=count2;
    document.getElementById("home-count").style.borderColor="white";
    document.getElementById("guest-count").style.borderColor="white";
}

function highlight()
{
    let countHome = count;
    let countGuest = count2;
    if(countHome>countGuest)
    {
        document.getElementById("home-count").style.borderColor="#F94F6D";
        document.getElementById("guest-count").style.borderColor="white";
    }
    else if(countHome<countGuest)
    {
        document.getElementById("guest-count").style.borderColor="#F94F6D";
        document.getElementById("home-count").style.borderColor="white";
    }
    else
    {
        document.getElementById("home-count").style.borderColor="#F94F6D";
        document.getElementById("guest-count").style.borderColor="#F94F6D";
    }

}
function homeaddone()
{
    count = count+1;
    document.getElementById("home-score").textContent=count;
}
function homeaddtwo()
{
    count = count+2;
    document.getElementById("home-score").textContent=count;
}
function homeaddthree()
{
    count = count+3;
    document.getElementById("home-score").textContent=count;
}
function guestaddone()
{
    count2 = count2+1;
    document.getElementById("guest-score").textContent=count2;
}
function guestaddtwo()
{
    count2 = count2+2;
    document.getElementById("guest-score").textContent=count2;
}
function guestaddthree()
{
    count2 = count2+3;
    document.getElementById("guest-score").textContent=count2;
}