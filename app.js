function a(){
    alert("HELLO ...")
}

function msg1(){
    alert("This is iPhone XS")
}

function msg2(){
    alert("This is iPhone 11 PRO MAX")
}

function msg3(){
    alert("This is iPhone 12 PRO MAX")
}

function msg4(){
    alert("This is iPhone 13 PRO MAX ")
}




function btn(){
    var table=document.getElementsByTagName("tr")
    table[0].style.display="none"
    
}


function btn1(){
    var table=document.getElementsByTagName("tr")
    table[2].style.display="none"
    
}


function btn2(){
    var table=document.getElementsByTagName("tr")
    table[3].style.display="none"
    
}


function btn3(){
    var table=document.getElementsByTagName("tr")
    table[4].style.display="none"
    
}


/////////////tom n jerryy////////////



function bulbToggler(id, element){
    if(id==1){
        element.src = "./images/tom.png"
    }else{
        element.src = "./images/jerry.png"

    }
    
}


function inc(){
    for (var i=0; i<10; i++){
        document.write(i)
    }
}

function dec(){
    for (var i=10; i<0; i--){
        document.write(i)
    }
}

//////////////for counter//////////////

var count = 0;
var btn = document.getElementById("btn");
var disp1 = document.getElementById("display");

btn.onclick = function () {
    count++;
    disp1.innerHTML = count;
}
var count1 = -100;
var btn = document.getElementById("btn2");
var disp = document.getElementById("display");

btn.onclick = function () {
    count--;
    disp.innerHTML = count;
}