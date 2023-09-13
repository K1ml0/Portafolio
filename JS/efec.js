const icono = document.getElementById('i_1');
const icono_2 = document.getElementById('icon_2');
const icono_3 = document.getElementById('icon_3');
const icono_4 = document.getElementById('icon_4');

const cir_1 = document.getElementById('circulo1');
const cir_2 = document.getElementById('circulo2');
const cir_3 = document.getElementById('circulo3');
const cir_4 = document.getElementById('circulo4');
const cir_5 = document.getElementById('circulo5');
const cir_6 = document.getElementById('circulo6');
const cir_7 = document.getElementById('circulo7');
const cir_8 = document.getElementById('circulo8');

const lin1 = document.getElementById('linea1');
const lin2 = document.getElementById('linea2');
const lin3 = document.getElementById('linea3');
const dist =130;
const X = icono.offsetLeft
const Y  = icono.offsetTop
let x = new Boolean(true);

function str(){
    if(x == true){
        efecto();
  
      
     }
     else if (x == false){
        onmousemove = ()=>{}
        finaalizar();
        x = true;
     } 

}
function efecto(){
        obs();
        inicio(icono, icono_2, icono_3, icono_4, "white", "white", "1px solid rgb(0, 183, 255)", "1px solid white");
        setTimeout(function invertir(){
            inicio(icono_4, icono_3, icono_2, icono, "white", "rgb(0, 183, 255)", "1px solid white", "1px solid rgb(0, 183, 255)")
        }, 3000);

        setTimeout(function invertir1(){
            obs();
            inicio(icono, icono_2, icono_3, icono_4, "white", "white", "1px solid rgb(0, 183, 255)", "1px solid white");
        }, 6000);
        setTimeout(function invertir2(){
            inicio(icono_4, icono_3, icono_2, icono, "white", "rgb(0, 183, 255)", "1px solid white", "1px solid rgb(0, 183, 255)")
                  setTimeout(function finalizado1(){
                cir_1.style.width="0px"
                cir_1.style.height="0px"
                cir_2.style.width="0px"
                cir_2.style.height="0px"
                cir_3.style.width="0px"
                cir_3.style.height="0px"
                cir_4.style.width="0px"
                cir_4.style.height="0px"
                cir_5.style.width="0px"
                cir_5.style.height="0px"
                cir_6.style.width="0px"
                cir_6.style.height="0px"
                cir_7.style.width="0px"
                cir_7.style.height="0px"
                cir_8.style.width="0px"
                cir_8.style.height="0px"
            }, 2000);
        
        }, 9000);

     

 
    

 

        
     
}

function inicio(var1, var2, var3, var4, color1, color2, border1, border2){

    setTimeout(function transladar_2(){
        var1.style.transform=`translateY(${dist}px)`; 
        var1.style.transition="1.8s";
        var1.style.color=color1;
        var1.style.border=border1;
    }, 0);
   
      setTimeout(function transladar_2(){
        var a = Boolean(true);
          if(dist <= 130){
            
              var  act = 0;
              var1.style.transform=`translateY(${act}px)`; 
              var1.style.transition="1.3s";
              var1.style.color=color2;
              var1.style.border=border2;
             
              
          }
      }, 1000);
  
      /*twiter */
      setTimeout(function traslado(){
            var2.style.transform=`translateY(${dist}px)`; 
            var2.style.transition="1.8s";
            var2.style.color=color1;
            var2.style.border=border1;
      },100);
  
      setTimeout(function transladar_2(){
          if(dist <= 130){
              var  act = 0;
              var2.style.transform=`translateY(${act}px)`; 
              var2.style.transition="1.3s";
              var2.style.color=color2;
              var2.style.border=border2;
          }
      }, 1300);
      /*instagram*/
      setTimeout(function transladar_2(){
          var3.style.transform=`translateY(${dist}px)`; 
          var3.style.transition="1.8s";
          var2.style.color=color1;
          var3.style.border=border1;
  
      }, 200);
  
      setTimeout(function transladar_2(){
          if(dist <= 130){
              var  act = 0;
              var3.style.transform=`translateY(${act}px)`; 
              var3.style.transition="1.3s";
              var3.style.color=color2;
              var3.style.border=border2;
          }
      }, 1500);
          /*whats app*/
          setTimeout(function transladar_2(){
            var4.style.transform=`translateY(${dist}px)`; 
            var4.style.transition="1.8s";
            var4.style.color=color1;
            var4.style.border=border1;
      
          }, 300);
      
          setTimeout(function transladar_2(){
              if(dist <= 130){
                  var  act = 0;
                  var4.style.transform=`translateY(${act}px)`; 
                  var4.style.transition="1.3s";
                  var4.style.color=color2;
                  var4.style.border=border2;
              }
          }, 1700);
}
function obs(){
    var timporeg =3100
    var esp = 20;
    var fin = 1140;

    /*circulo1*/
    setTimeout(function circ1(){
        
        var inicio= 0;
        cir_1.style.width="30px",
        cir_1.style.height="30px",
        setTimeout(function traslado(){
            cir_1.style.transform=`translate(${fin}px)`; 
            cir_1.style.transition="1.2s";
            cir_1.style.background="rgb(0, 183, 255)"


            setTimeout(function caja(){
                cir_1.style.background="white"
                cir_2.style.background="white"
                cir_3.style.background="white"
                cir_4.style.background="white"
                cir_5.style.background="white"
                cir_6.style.background="white"
                cir_7.style.background="white"
                cir_8.style.background="white"
                lin1.style.background="white";
                lin2.style.background="white";
                lin3.style.background="white";
            }, 990);
        },esp);
        setTimeout(function traslado(){
            cir_1.style.transform=`translate(${inicio}px)`;
             

        },timporeg);
    },100);

    /*circulo2 */
    setTimeout(function circ2(){
        var inicio =0;
        cir_2.style.width="30px",
        cir_2.style.height="30px",
        setTimeout(function traslado(){
            cir_2.style.transform=`translate(${fin}px)`; 
            cir_2.style.transition="1.2s";
            cir_2.style.background="rgb(0, 183, 255)"
            
        },esp);
        setTimeout(function traslado(){
            cir_2.style.transform=`translate(${inicio}px)`; 
            cir_2.style.transition="1.2s";
            cir_2.style.background="white"
        },timporeg);
        
    }, 200);
     /*circulo3 */
     setTimeout(function circ3(){
        var inicio =0;
        cir_3.style.width="30px",
        cir_3.style.height="30px",
        setTimeout(function traslado(){
            cir_3.style.transform=`translate(${fin}px)`; 
            cir_3.style.transition="1.2s";
            cir_3.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_3.style.transform=`translate(${inicio}px)`; 
            cir_3.style.transition="1.2s";
            cir_3.style.background="white"
        },timporeg);
        
    }, 300);
      /*circulo4 */
      setTimeout(function circ4(){
        var inicio =0;
        cir_4.style.width="30px",
        cir_4.style.height="30px",
        setTimeout(function traslado(){
            cir_4.style.transform=`translate(${fin}px)`; 
            cir_4.style.transition="1.2s";
            cir_4.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_4.style.transform=`translate(${inicio}px)`; 
            cir_4.style.transition="1.2s";
            cir_4.style.background="white"
        },timporeg);
        
    }, 400);
    /*circulo5 */
    setTimeout(function circ5(){
        var inicio =0;
        cir_5.style.width="30px",
        cir_5.style.height="30px",
        setTimeout(function traslado(){
            cir_5.style.transform=`translate(${fin}px)`; 
            cir_5.style.transition="1.2s";
            cir_5.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_5.style.transform=`translate(${inicio}px)`; 
            cir_5.style.transition="1.2s";
            cir_5.style.background="white"
        },timporeg);
        
    }, 500);
    /*circulo6 */
    setTimeout(function circ6(){
        var inicio =0;
        cir_6.style.width="30px",
        cir_6.style.height="30px",
        setTimeout(function traslado(){
            cir_6.style.transform=`translate(${fin}px)`; 
            cir_6.style.transition="1.2s";
            cir_6.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_6.style.transform=`translate(${inicio}px)`; 
            cir_6.style.transition="1.2s";
            cir_6.style.background="white"
        },timporeg);
        
    }, 600);
    /*circulo7 */
    setTimeout(function circ7(){
        var inicio =0;
        cir_7.style.width="30px",
        cir_7.style.height="30px",
        setTimeout(function traslado(){
            cir_7.style.transform=`translate(${fin}px)`; 
            cir_7.style.transition="1.2s";
            cir_7.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_7.style.transform=`translate(${inicio}px)`; 
            cir_7.style.transition="1.2s";
            cir_7.style.background="white"
        },timporeg);
        
    }, 700);
    /*circulo8 */
    setTimeout(function circ8(){
        var inicio =0;
        cir_8.style.width="30px",
        cir_8.style.height="30px",
        setTimeout(function traslado(){
            cir_8.style.transform=`translate(${fin}px)`; 
            cir_8.style.transition="1.2s";
            cir_8.style.background="rgb(0, 183, 255)"
        },esp);
        setTimeout(function traslado(){
            cir_8.style.transform=`translate(${inicio}px)`; 
            cir_8.style.transition="1.2s";
        
            setTimeout(function caja(){
                cir_1.style.background="rgb(0, 183, 255)"
                cir_2.style.background="rgb(0, 183, 255)"
                cir_3.style.background="rgb(0, 183, 255)"
                cir_4.style.background="rgb(0, 183, 255)"
                cir_5.style.background="rgb(0, 183, 255)"
                cir_6.style.background="rgb(0, 183, 255)"
                cir_7.style.background="rgb(0, 183, 255) "
                cir_8.style.background="rgb(0, 183, 255)"
                lin1.style.background="rgb(0, 183, 255)";
                lin2.style.background="rgb(0, 183, 255)";
                lin3.style.background="rgb(0, 183, 255)";
            }, 50);
      
          
        },timporeg);
        
    }, 800);

}

