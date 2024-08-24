const fn=document.getElementById("fn");
const ln=document.getElementById("ln");
const email=document.getElementById("email");
const DOB=document.getElementById("DOB");
const Password=document.getElementById("Password");
const cPassword=document.getElementById("cPassword");
const span=document.getElementById("span");
const dd=document.getElementById("regis");

function clickedsubmit(event) {
    event.preventDefault();
    const pass=Password.value;
    const cpass=cPassword.value;
    const ffn=fn.value;
    if(pass===cpass){
        span.textContent="";
        alert("successfully Registered"+ffn);
        const num=Math.floor(Math.random() * 100);

        const obj= {
            "uniqueNo":num,
            "firstname":fn.value,
            "lastname":ln.value,
            "email":email.value,
            "DOB":DOB.value,
            "Password":Password.value,
        };
        console.log(obj);
        const head=document.createElement("h1");
        head.textContent=obj.uniqueNo;
        dd.appendChild(head);
    }
    else{
        span.textContent="Not Match";
    }
}
