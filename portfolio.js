
var num = 0;
var tekst = "Portfolio van Randalph van Velden";
var myArray = tekst.split("");

var loopTimer;
    function frameLooper(){
        if(myArray.length > 0){
            document.getElementById("mytext").innerHTML+=myArray.shift(); 
        }
        else{
            clearTimeout(loopTimer);
            return false;
        }
        loopTimer=setTimeout("frameLooper()",200);
        }
frameLooper(); 


function Project(img,name,date,code,website) {
    this.img = img;
    this.name = name;
    this.date = date;
    this.code = code;
    this.website = website;
}
var projects = [];
projects.push(new Project("cv.png","CV","07-12-2018","nvt","nvt"));
projects.push(new Project("leerplan.png","Leerplan","04-12-2018","nvt","nvt"));

function next(){
    var slider=document.getElementById("slider");
    num++;
    if(num>(projects.length-1)){
        num=0;
    }
    slider.src=projects[num].img;
    document.getElementById("inslider").innerHTML=projects[num].name;
    document.getElementById("inslider2").innerHTML=projects[num].date;
    document.getElementById("inslider3").innerHTML="code:" + " " + projects[num].code;
    document.getElementById("inslider4").innerHTML="website:" + " " + projects[num].website;
    let percentage = (num+1 /projects.length)*10;
    setPercentage(percentage);
}

function prev(){
    var slider=document.getElementById("slider");
    num--;
    if(num<0){
        num=projects.length-1;
    }
    slider.src=projects[num].img;
    document.getElementById("inslider").innerHTML=projects[num].name;
    document.getElementById("inslider2").innerHTML=projects[num].date;
    document.getElementById("inslider3").innerHTML="code:" + " " + projects[num].code;
    document.getElementById("inslider4").innerHTML="website:" + " " + projects[num].website;
    let percentage = (num + 1 /projects.length)*10;
    setPercentage(percentage);
}

       /* progressie balk */
function setPercentage (value) {
    var elem=document.getElementById("myBar");
    elem.setAttribute("value",(value));
}
       
var interval = setInterval(next,5000);
