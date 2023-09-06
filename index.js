const yesBtn = document.querySelector('#yesBtn');
const modal=document.querySelector('#modal');
const btnCerrar=document.querySelector('#btn_cerrar');
const hrf1=document.querySelector('a1');
const ha3=document.querySelector('slide3');

yesBtn.addEventListener('click',function () {
    modal.showModal();
    
});

btnCerrar.addEventListener('click',()=>{
    modal.close();
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

function mostrar(hmmmmmm){
    document.getElementById("prueba1").src=hmmmmmm;
    
}

function ocultar(){
    
   
}