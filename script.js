const personas=[];
var recuperar=()=>{
 if(encendido===true){  
    const usuarios=new XMLHttpRequest()
    var url="https://randomuser.me/api/"
    const metodo="GET";
  
    
    usuarios.open(metodo,url)
    usuarios.send()
    console.log(usuarios)
    usuarios.onreadystatechange=function(){
      
      if(this.readyState===4&&this.status===200){
         
         console.log(usuarios)
         var usuario=JSON.parse(usuarios.responseText)
         console.log(usuario)
          
         titulo=usuario.results;
         console.log(titulo)
         for(let i=0;i<titulo.length;i++){
            nombre=titulo[i].name;
            lugar=titulo[i].location;
            registro=titulo[i].registered
            imagen=titulo[i].picture; 
            var user={
              "nombre":nombre,
              "lugar":lugar,
              "registro":registro,
              "imagen":imagen

            }
          
           console.log(imagen)
            console.log(imagen.large)//ALEGRIA PURA VER QUE SE PUDO CAPTURAR EL LINK DE LA IMAGEN

            document.querySelector("#img").innerHTML=`<img class="img" src="" alt="" srcset="${imagen.large}">`
            document.querySelector("#nombre").innerHTML=`<p>Nombre: ${nombre.first} apellido: ${nombre.last} </p>`
            document.querySelector("#lugar").innerHTML=`<p>Ciudad: ${lugar.city} </p>`
            document.querySelector("#registro").innerHTML=`<p>Registrado: ${registro.date} <br> Edad: ${registro.age} </p>`
           
            
            imagen=JSON.stringify(imagen)
            console.log(imagen)
            user=JSON.stringify(user)
           
            personas.push(user);
            console.log(personas)
            //personas=JSON.stringify(personas)
            
           
            
           
            
         }
       
         
      }

}
 }
 

}
//FIN ARROW principal
let encendido=true;
var id;
let cont=0;
var encender=()=>{
   encendido=true;
  
   console.log("PLAY")
   id = setInterval(() => {
      recuperar()// RE VAGO JAJA NI EL BOTON QUIERE APRETAR
      
      if(encendido===true){
         cont=cont+1;  
         console.log("Iteracion: "+cont)
        
         document.querySelector("#iteracion").innerHTML=`<strong><p style="width:30px;height:30px;border-radius:5px;background:White;text-align:center;padding:5px;font-weight:bold;font-size:25px !important;color:blue !important">${cont}</p></strong>`
      }
  }, 5000); 

}

var detener=()=>{
  encendido=false;
  if(encendido===false){
     url="";
     clearInterval(id) 
     
     localStorage.setItem("personas",personas) 
     
     console.log("STOP")
     console.log(url)
    let persona=localStorage.getItem("personas")
      
        console.log(persona)
       
     
    
     
  }   
}

