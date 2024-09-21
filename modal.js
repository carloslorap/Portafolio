document.addEventListener('DOMContentLoaded',function (){
    let imagenes=[
        {img:'/imagenes/19.jpeg'},
        {img:'/imagenes/20.jpeg'},
        {img:'/imagenes/21.jpeg'},
        {img:'/imagenes/22.jpeg'},
        {img:'/imagenes/23.jpeg'},
        {img:'/imagenes/24.jpeg'},
        // {img:'/imagenes/tarjet.jpeg'},
        // {img:'/imagenes/school.jpeg'},
        // {img:'/imagenes/chiquyGumies.jpeg'},
        // {img:'/imagenes/blogr.jpg'},
        // {img:'/imagenes/gamestart.jpeg'},
        // {img:'/imagenes/react-1.jpeg'},
        // {img:'/imagenes/react-2.jpeg'},
        // {img:'/imagenes/MusicApp.jpeg'},
    ]

    let infos=[
        {text:{
            text_info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title_App:"Createx App",
            title_user:"Usuario:",
            title_pass:"Contraseña:",
            user_account:"carlos@gmail.com",
            pass_account:"carlos123"
        }},
        {text:{
            text_info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title_App:"Sistema de CRM y ERP",
            title_user:"Usuario:",
            title_pass:"Contraseña:",
            user_account:"carlos@gmail.com",
            pass_account:"carlos123"
        }},
        {text:{
            text_info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title_App:"FillPlanet App",
            title_user:"Usuario:",
            title_pass:"Contraseña:",
            user_account:"carlos@gmail.com",
            pass_account:"carlos123"
        }},
        {text:{
            text_info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title_App:"Digitic App",
            title_user:"Usuario:",
            title_pass:"Contraseña:",
            user_account:"carlos@gmail.com",
            pass_account:"carlos123"
        }},

        
    ]

    let contador=0
    const contenedor =document.querySelector('.slideshow')
    const overlay =document.querySelector('.overlay')
    const galeria_imagenes=document.querySelectorAll('.portfolio img')
    const img_slideshow=document.querySelector('.slideshow img')
    const overlay1 = document.querySelector('.overlay1')
    const array_infoicon=document.querySelectorAll('.portfolio .bx-info-circle')
    const btn_cerrar_info = document.querySelector('.btn_cerrar_info')
    const text_info = document.querySelector('.text-info')
    const title_App = document.querySelector('.title_App')
    const user_account = document.querySelector('.user_account')
    const pass_account = document.querySelector('.pass_account')
    const title_user = document.querySelector('.title_user')
    const title_pass = document.querySelector('.title_pass')

    Array.from(array_infoicon).forEach(info=>{
        info.addEventListener('click',(event)=>{
            const info_seleccionada=+event.target.dataset.infoMostrar
            text_info.innerHTML=infos[info_seleccionada].text.text_info
            title_App.innerHTML=infos[info_seleccionada].text.title_App
            user_account.innerHTML=infos[info_seleccionada].text.user_account
            pass_account.innerHTML=infos[info_seleccionada].text.pass_account
            title_user.innerHTML=infos[info_seleccionada].text.title_user
            title_pass.innerHTML=infos[info_seleccionada].text.title_pass
        
            console.log(info_seleccionada);
            overlay1.style.opacity=1
            overlay1.style.visibility='visible'
          
            
        })
    }) 

    btn_cerrar_info.addEventListener('click',()=>{
        overlay1.style.opacity=0
        overlay1.style.visibility='hidden'
    })
    

   


    contenedor.addEventListener('click',function(event){
        let atras=contenedor.querySelector('.atras'),
            adelante=contenedor.querySelector('.adelante'),
            img=contenedor.querySelector('img'),
            tgt=event.target
        if (tgt==atras) {
            if (contador>0) {
                img.src =imagenes[contador - 1].img
                contador--
            }else{
                img.src =imagenes[imagenes.length - 1].img
                contador =imagenes.length - 1
            }
        
        }else if(tgt==adelante){
            if (contador< imagenes.length - 1) {
                img.src=imagenes[contador + 1].img
                contador++;
            }else{
                img.src=imagenes[0].img
                contador=0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click',event =>{
            const imagen_seleccionada=+event.target.dataset.imgMostrar
            console.log(imagen_seleccionada);
            img_slideshow.src=imagenes[imagen_seleccionada].img
            contador=imagen_seleccionada
            overlay.style.opacity=1
            overlay.style.visibility='visible'

        })
    })
    document.querySelector('.btn_cerrar').addEventListener('click',()=>{
        overlay.style.opacity=0
            overlay.style.visibility='hidden'
    })





})