let head = document.querySelector("#pos");
let ham = document.querySelector("#ham");
let nav = document.querySelector("ul");

let pos = ["Web Developer", "Front-end Developer", "Web Enthusiast"];


let a = 1;
    setInterval(
        ()=>{
            head.innerHTML = pos[a];
            a += 1;
            if(a>=3){
                a = 0;
            }
        }
    ,4400)



ham.addEventListener('click', ()=>{
    nav.style.opacity = 1;
    
})



let video = document.querySelector("video");
let lbtn = document.querySelector("#leftbtn");
let rbtn = document.querySelector("#rightbtn");
let ph = document.querySelector("#ph2");
let pis = document.querySelectorAll(".pi");
let v = 0;
let links = ["https://github.com/namanguru123/Ecommerce-website", "https://github.com/namanguru123/Spotify---Clone--Project", "https://github.com/namanguru123/TO-Do-List", "https://github.com/namanguru123/qr-code-generator"]
let headings = ["E-Commerce Website", "Spotify Clone", "To - Do List", "QR Code Generator"];
let videos = ["e-commerce1.mp4", "spotify1.mp4", "To-Do.mp4", "qr.mp4"];
let git = document.querySelector("#github");


lbtn.style.opacity = 0.1;



rbtn.addEventListener('click', ()=>{
    

    if(v< videos.length){
        v += 1;
    }

    git.setAttribute('href', links[v]);
    video.setAttribute('src', videos[v]);
    ph.innerHTML = headings[v];
    pis[v].classList.add("active");
    pis[v-1].classList.remove("active");
        if(v == headings.length -1){
            rbtn.style.opacity = 0.1;
        }
    lbtn.style.opacity = 1;
   
})

lbtn.addEventListener('click', ()=> {

    if(v>0){
        v -= 1;
    }
    git.setAttribute('href', links[v]);
    video.setAttribute('src', videos[v]);
    ph.innerHTML = headings[v];
    pis[v].classList.add("active");
    pis[v+1].classList.remove("active");
    rbtn.style.opacity = 1;
    if(v == 0){
        lbtn.style.opacity = 0.1;
    }
   
})


let home = document.querySelector("#home");
let about = document.querySelector("#about");
let Project = document.querySelector("#project");
let exp = document.querySelector("#experience");
let contact = document.querySelector("#contact");

home.addEventListener('click', (event)=>{
    event.preventDefault;
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    
})


about.addEventListener('click', (event)=>{
    event.preventDefault;
    window.scroll({
        top: 700,
        behavior: "smooth"
    });
    
})

Project.addEventListener('click', (event)=>{
    event.preventDefault;
    window.scroll({
        top: 1250,
        behavior: "smooth"
    });
    
})

exp.addEventListener('click', (event)=>{
    event.preventDefault;
    window.scroll({
        top: 2100,
        behavior: "smooth"
    });
    
})

contact.addEventListener('click', (event)=>{
    event.preventDefault;
    window.scroll({
        top: 2800,
        behavior: "smooth"
    });
    
})


let expc = document.querySelector("#expc");
let offerl = document.getElementById("offer");
let eye = document.querySelector("#eye");

expc.addEventListener('click', ()=>{
    offerl.classList.toggle("imgactive");
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");

})

let close = document.querySelector("#closenav");

close.addEventListener('click', ()=>{
    nav.style.right = "-500px";
})

