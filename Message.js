
const YourName = document.getElementById("your-name");
const YourSubject = document.getElementById("your-Subject");
const YourEmail = document.getElementById("Email-address");
const YourControl = document.querySelector(".form-control");
const myMassage = document.querySelector(".massage-alert");
document.getElementById('Mybtn').addEventListener('click', function(e){
    e.stopPropagation();
    if(!YourName.value ==' ' && !YourEmail.value ==' ' && !YourControl.value ==' ' && !YourSubject.value ==' '){
        // myMassage.style.transform = "translateY(0px)";
        document.getElementById('alert1').innerText = "Your Name: " + " " + document.getElementById("your-name").value;
        document.getElementById('alert2').innerText = "Your Subject: " + " " + document.getElementById("your-Subject").value;
        document.getElementById('alert3').innerText = "Your Email: " + " " + document.getElementById("Email-address").value;
        document.getElementById('alert4').innerText = "Your Me: " + " " + document.querySelector(".form-control").value;
        myMassage.style.transform = "translateY(0px)";
        myMassage.style.display = 'block'
    }
    else{ 
        alert("Pls checked input!");
    }

})
const close = document.body;
close.addEventListener("click", () =>{
    myMassage.style.transform = "translateY(-1200px)";
})
