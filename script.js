function starMagic() {
    const msjNavi = document.getElementById("mensaje");
    const imgNavi = document.getElementById("imgRichi");

    msjNavi.textContent = "🎁 ¡Que recibas mucha alegría y regalos!";
    imgNavi.style.display = "inline"

}

setInterval(() =>{
    const nieve = document.createElement("div");
    nieve.classList.add("copos")
    nieve.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(nieve);
    
    setTimeout(() => nieve.remove(), 4000);
    
}, 200 )
