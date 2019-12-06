var car=document.getElementById("carro"),
    rightArrow=document.querySelector(".arrowright"),
    slogan=document.querySelector("#slog"),
    login=document.querySelector("#log"),
    sign=document.querySelector("#sign"),
    modelo=document.querySelector("#modelo"),
    leftArrow=document.querySelector(".arrowleft");

login.addEventListener("click",function(){
    alert("Esto no funciona.")
});

sign.addEventListener("click",function(){
    alert("Esto tampoco funciona.")
});


// Aqui podria usar un toggle con Jquery...pero pues no.
rightArrow.addEventListener("click",function(){
    this.style.opacity="0";
    car.setAttribute("src","http://pngimg.com/uploads/tesla_car/tesla_car_PNG16.png");
    car.style.width="1145px";
    car.style.height="497px";
    car.style.position="absolute";
    car.style.left="125px";
    car.style.top="257px";
    leftArrow.style.opacity="100%";
    modelo.textContent="Tesla X"
    slog.textContent="Blanco, Grande y Poderoso" //No pun intended hahaha
});

leftArrow.addEventListener("click",function(){
    this.style.opacity="0"
    car.setAttribute("src","https://www.stickpng.com/assets/images/580b585b2edbce24c47b2ccb.png");
    car.style.width="704px";
    car.style.height="329px";
    car.style.position="absolute";
    car.style.left="391px";
    car.style.top="399px";
    rightArrow.style.opacity="100%";
    modelo.textContent="Tesla S"
    slog.textContent="Veloz, aerodinámico y potente"
});
