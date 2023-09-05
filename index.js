const yesBtn = document.querySelector('#yesBtn');
const modal=document.querySelector('#modal');
const btnCerrar=document.querySelector('#btn_cerrar');

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

function mostrar(){
    document.getElementById('ms3').style.display = 'block';
}

function ocultar(){
    document.getElementById('ms3').style.display = 'none';
}