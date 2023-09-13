
const caja = document.getElementById('cel');
const boton = document.getElementById("rotar");
function rot(){
   onmousemove = (e)=>{
      let positionX=window.innerWidth/2
      let positionY=window.innerHeight/2
      caja.style.transform=`rotateY(${(e.clientX/positionX-1)*180}deg) rotateX(${(e.clientY/positionY-1)*180}deg)rotateZ(${(e.clientY/positionY-1)*180}deg)`;
      console.log(a)
   }
} 
function iniciar(){
   rot();
   boton.style.boxShadow=`0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)`;
   boton.style.borderColor="transparent"

}
function finaalizar(){

   caja.style.transform=`rotateY(${0}deg) rotateX(${0}deg)`;   
   boton.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent`;
   boton.style.borderColor="white";

}
let x = new Boolean(true);
function validacion(){
   if(x == true){
      iniciar();
      x = false;
    
   }
   else if (x == false){
      onmousemove = ()=>{}
      finaalizar();
      x = true;
   } 
}
