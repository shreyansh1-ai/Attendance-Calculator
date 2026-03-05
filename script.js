function calculateAttendance(){

let subject=document.getElementById("subject").value;

let total=parseInt(document.getElementById("total").value);

let present=parseInt(document.getElementById("present").value);

let result=document.getElementById("result");

let progress=document.getElementById("progress-bar");

if(subject==""){
result.innerHTML="Please select a subject";
return;
}

if(total<=0 || present<0 || present>total){
result.innerHTML="Invalid input";
return;
}

let percentage=(present/total)*100;

percentage=percentage.toFixed(2);

let output="Subject: "+subject+"<br>";

output+="Attendance: "+percentage+"%<br><br>";

let status="";

if(percentage<60){

status="<span class='red'>🔴 Critical Attendance</span>";

}

else if(percentage<75){

status="<span class='orange'>🟠 Warning Zone</span>";

}

else{

status="<span class='green'>🟢 Safe Attendance</span>";

}

output+="Status: "+status+"<br><br>";

if(percentage<60){

let x=0;

while(((present+x)/(total+x))*100<60){
x++;
}

output+="Attend next "+x+" classes to reach 60%<br>";

}

if(percentage<75){

let y=0;

while(((present+y)/(total+y))*100<75){
y++;
}

output+="Attend next "+y+" classes to reach 75%<br>";

}

else{

let skip=0;

while((present/(total+skip))*100>=75){
skip++;
}

skip--;

if(skip>0){

output+="You can skip "+skip+" classes and still maintain 75%<br>";

}

else{

output+="Try not to skip any classes<br>";

}

}

let nextAttend=((present+1)/(total+1))*100;

let nextMiss=(present/(total+1))*100;

output+="<br>If you attend next class → "+nextAttend.toFixed(2)+"%";

output+="<br>If you miss next class → "+nextMiss.toFixed(2)+"%";

result.innerHTML=output;

progress.style.width=percentage+"%";

}
