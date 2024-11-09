function show(){
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email= document.getElementById('e-mail').value;
    var checkin= document.getElementById('check_in_date').value;
    var checkout= document.getElementById('check_out_date').value;
    alert("Your name is:"+" "+ fname+" "+lname+"\nYour E-mail is:"+email+"\nYour Check in: "+checkin+"\nYour Check out date: "+checkout)
}