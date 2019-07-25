var nam = prompt ("Enter your name");
var fatherNam = prompt ("Enter your father name");
var address = prompt ("Enter your address");
var city = prompt ("Enter your city");
var rollNo = prompt ("Ente your roll no");
var study = prompt ("Enter your course");
var x = "android";
var y = "web";
var z = "shot course"

if(rollNo >= 100){
    alert("You are new student")
}else{
    alert("You are old student")
}
alert("Your name is "+nam+", Your father name is "+fatherNam+", Your Address is "+ address+", Your city is "+
city+", Your roll no is "+rollNo+" and your subject is "+study);
if(study === x || y || z){
    alert("Plz join this class in tomorrow.")
}else{
    alert("You are not student in this academy.")
}

alert("Congratulation for this joining venum I.T center.")
