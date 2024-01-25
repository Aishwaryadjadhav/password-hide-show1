let btn=document.getElementById("btn")
console.log(btn);

btn.onclick = function(){
    let password=document.getElementById("demo")
    console.log(password);

    if(password.getAttribute("type")==="password"){
        password.setAttribute ("type","text")
    }
    else{
        password.setAttribute ("type","password")
    }
}