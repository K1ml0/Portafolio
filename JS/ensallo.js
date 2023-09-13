const cuvo = document.getElementById('cuvo2')

onmousemove = (e)=>{
    let positionX=window.innerWidth/2
    let positionY=window.innerHeight/2
    cuvo.style.transform=`rotateY(${(e.clientX/positionX-1)*180}deg) rotateX(${(e.clientY/positionY-1)*180}deg)rotateZ(${(e.clientY/positionY-1)*180}deg)`;
    
    
  
 }

