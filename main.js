var typed =new Typed('.typing',{
    strings:["Diseñador web","Desarrollador web","Diseñador gráfico"],
    typeSpeed:100,
    BackSpeed:9000,
    loop:true
})



///aside

const nav =document.querySelector(".nav"),
      navList= nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allsection=document.querySelectorAll(".section"),
      totalSection=allsection.length;
      for(let i =0 ;i < totalNavList;i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for (let i = 0; i < totalSection; i++) {
                allsection[i].classList.remove("back-section");
                
            }
            for(let j = 0 ;j < totalNavList ;j++){
                if (navList[j].querySelector("a").classList.contains("active")) {
                    allsection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);

            //esto de aca cuando estes en responsi	y este abierto el menu lateral y machuques en algunas de esos apartado automaticamente se cerrara el menu lateral
            if (window.innerWidth<1200  ) {
                asideSectionTogglerBtn();
            }

        })
      }
     
      function showSection(element){
        for (let i = 0; i < totalSection; i++) {
            allsection[i].classList.remove("active");
            
        }
        const target =element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
      }

      const navtogglerBtn=document.querySelector(".nav-toggler"),
            aside=document.querySelector(".aside");
            navtogglerBtn.addEventListener("click",()=>{
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navtogglerBtn.classList.toggle("open");

                //este for es para q cuando estes en responsi y abras el menu lateral hace que las section no rompa la barrera y q respete el recuadro (si quieres elimina este for y te daras cuenta)
                for (let i = 0; i < totalSection; i++) {
                    allsection[i].classList.toggle("open");
                    
                }
            }

            
  

      

            const x={foo:1};
            const y={foo:2};


            
         

       