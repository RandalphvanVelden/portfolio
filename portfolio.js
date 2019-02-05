
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


function Project(img,name,date,code) {
    this.img = img;
    this.name = name;
    this.date = date;
    this.code = code;
}
var projects = [];
projects.push(new Project("cv.png","CV","07-12-2018","nvt"));
projects.push(new Project("leerplan.png","Leerplan","04-12-2018","nvt"));
projects.push(new Project("portfolio.png","portfolio","19-12-2018","<a href='https://github.com/RandalphvanVelden/portfolio'>github</a>"));
projects.push(new Project("calculator.png","calculator","20-12-2018","<a href='https://github.com/RandalphvanVelden/playground'>github</a>"));
projects.push(new Project("meubelwebsite.png","meubel webshop","07-01-2019","<a href='https://github.com/RandalphvanVelden/meubel-website'>github</a>"));
projects.push(new Project("groentefruit.png","groente en fruit webshop","21-01-2019","<a href='https://github.com/RandalphvanVelden/playground/tree/master/webshopvld'>github</a>"));


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
