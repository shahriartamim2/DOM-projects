const x = document.querySelector(".btn");
x.addEventListener('click', myfunc);

function myfunc(){
    const bgcolor = randColor();
    let y = document.querySelector(".cont");
    y.style.backgroundColor = bgcolor;
}

function randColor(){
    let a = Math.floor(0 +(1 - Math.random())*255);
    let b = Math.floor(0 +(1 - Math.random())*255);
    let c = Math.floor(0 +(1 - Math.random())*255);

    return `rgb(${a},${b},${c})`;
}


