// toggle de la parte de los colores su contenedor para q cuando des un click se visualize el cuadro (start)

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler') ;
styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open'); //el open es un codigo q lo creaste en el css no en el html
})

//(end)

// esta parte es cuando el usuario haga un scroll osea baje ,el contenedor se cerrara automaticamente(start)
window.addEventListener('scroll',()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
//(end)

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyle.forEach((style)=>{
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled','true');
        }
    })
}

    const dayNight= document.querySelector('.day-night');
    const laravel = document.querySelector('.fa6-brands--laravel')
    const mysql = document.querySelector('.simple-icons--mysql')
    const nextjs = document.querySelectorAll('.file-icons--nextjs') 
    dayNight.addEventListener('click',()=>{
        dayNight.querySelector('i').classList.toggle('fa-sun'); 
        dayNight.querySelector('i').classList.toggle('fa-moon'); 
        laravel.classList.toggle('icon-dark')
        mysql.classList.toggle('icon-dark')
        
        // Iterar sobre todos los elementos nextjs
        nextjs.forEach(icon => icon.classList.toggle('icon-dark'));
        document.body.classList.toggle('dark');
    })
    window.addEventListener('load',()=>{
        if (document.body.classList.contains('dark')) {
            dayNight.querySelector('i').classList.add('fa-sun'); 
        }else{
            dayNight.querySelector('i').classList.add('fa-moon'); 
        }
    })

    