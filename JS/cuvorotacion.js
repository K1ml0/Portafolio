
const cuvo = document.getElementById('cuvo');
const targhtml = document.getElementById('targetahtml');
const targacss = document.getElementById('targetacss'); 
const targetajavas = document.getElementById('targeta_javas'); 
const targetajava = document.getElementById('targeta_java'); 

const barra1_html = document.getElementById('barra_L_1');
const barraD_html = document.getElementById('barra_D_2');

const barraL_css = document.getElementById('barra_L_3');
const barraD_css = document.getElementById('barra_D_3');

const barraL_javas= document.getElementById('barra_L_4');
const barraD_javas = document.getElementById('barra_D_4');

const barraL_java = document.getElementById('barra_L_5');
const barraD_java = document.getElementById('barra_D_5');






const barra_html_E = document.getElementById('barra_E_6');
const barra_html_C = document.getElementById('barra_C_6');

const barra_css_E = document.getElementById('barra_E_7');
const barra_css_C = document.getElementById('barra_C_7');

const barra_javas_E = document.getElementById('barra_E_8');
const barra_javas_C = document.getElementById('barra_C_8');

const barra_java_E = document.getElementById('barra_E_9');
const barra_java_C = document.getElementById('barra_C_9');


const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

const cuvo0 = document.getElementById('cuvo0');
const cuvo2 = document.getElementById('cuvo2');
const cuvo3 = document.getElementById('cuvo3');
const cuvo4 = document.getElementById('cuvo4');
const cuvo5 = document.getElementById('cuvo5');
const cuvo6 = document.getElementById('cuvo6');
const cuvo7 = document.getElementById('cuvo7');
const cuvo8 = document.getElementById('cuvo8');
const cuvo9 = document.getElementById('cuvo9');

const cuvo10 = document.getElementById('cuvo10');
const cuvo11 = document.getElementById('cuvo11');
const cuvo12 = document.getElementById('cuvo12');
const cuvo13 = document.getElementById('cuvo13');
const cuvo14 = document.getElementById('cuvo14');
const cuvo15 = document.getElementById('cuvo15');
const cuvo16 = document.getElementById('cuvo16');
const cuvo17 = document.getElementById('cuvo17');
const cuvo18 = document.getElementById('cuvo18');

const fila1 = document.getElementById('fila1');
const fila2 = document.getElementById('fila2');
const fila3 = document.getElementById('fila3');

const portada = document.getElementById('portada');
const hoja1 = document.getElementById('hoja1');
const portada_atras = document.getElementById('portada_atras');








function mouse(variable){
    onmousemove = (e)=>{
        variable.style.transition="0s";
        const positionX=window.innerWidth/2
        const positionY=window.innerHeight/2
        variable.style.transform=`rotateY(${(e.clientX/positionX-1)*180}deg) rotateX(${(e.clientY/positionY-1)*180}deg)`;
       
     }
}
 function rot_botones(variable, boton, translate, rotate, rotatey, rotatex, rotatez, tiempo, color){
    variable.style.transition=tiempo;
    variable.style.transform=`translate(${translate}px) rotate(${rotate}deg) rotateY(${rotatey}deg) rotateX(${rotatex}deg) rotateZ(${rotatez}deg)`;  
    boton.style.color=color; 
}




function bt1(){ 
  
    validacion(bt1);
    
}
function bt2(){
    validacion(bt2);
}
function bt3(){
    validacion(bt3);
}
function bt4(){
    validacion(bt4);
}
 let x1 = new Boolean(true);
 let x2 = new Boolean(true);

function barras(ariable, valor_ancho, tiempo){
    ariable.style.width=valor_ancho;
    ariable.style.transition=tiempo;
  
}
function html(x){
    if (x == "x1"){
        barras(barraL_css, "10px", "0s")
        barras(barraD_css, "10px", "0s");
        barras(barra_css_E, "10px", "0s")
        barras(barra_css_C, "10px", "0s");
        barras(barra_javas_E, "10px", "9s");
        barras(barra_javas_C, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barraL_javas, "10px", "0s");
        barras(barraD_javas, "10px", "0s");
        barras(barraL_java, "10px", "0s");
        barras(barraD_java, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barra1_html, "150px", "1s");
        barras(barraD_html, "145px", "2s");
        barras(barra_html_E, "120px", "1s");
        barras(barra_html_C, "80px", "2s");

    }else if (x == "x2"){
  
        barras(barraL_css, "10px", "0s")
        barras(barraD_css, "10px", "0s");
        barras(barra_css_E, "10px", "0s")
        barras(barra_css_C, "10px", "0s");
        barras(barra_javas_E, "10px", "0s");
        barras(barra_javas_C, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barraL_javas, "10px", "0s");
        barras(barraD_javas, "10px", "0s");
        barras(barraL_java, "10px", "0s");
        barras(barraD_java, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barra1_html, "150px", "1s");
        barras(barraD_html, "145px", "2s");
        barras(barra_html_E, "120px", "1s");
        barras(barra_html_C, "80px", "2s");

    }
}
function css(x){
    if(x == "x1"){
        barras(barra1_html, "10px", "0s");
        barras(barraD_html, "10px", "0s");
        barras(barra_html_E, "10px", "0s");
        barras(barra_html_C, "10px", "0s");
        barras(barra_javas_E, "10px", "0s");
        barras(barra_javas_C, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barraL_javas, "10px", "0s");
        barras(barraD_javas, "10px", "0s");
        barras(barraL_java, "10px", "0s");
        barras(barraD_java, "10px", "0s");
        barras(barraL_css, "150px", "1s")
        barras(barraD_css, "150px", "2s");

        barras(barra_css_E, "125px", "1s")
        barras(barra_css_C, "90px", "2s");

    }else if(x == "x2"){
        barras(barra1_html, "10px", "0s");
        barras(barraD_html, "10px", "0s");
        barras(barra_html_E, "10px", "0s");
        barras(barra_html_C, "10px", "0s");
        barras(barra_javas_E, "10px", "0s");
        barras(barra_javas_C, "10px", "0s");
        barras(barra_java_E, "10px", "0s");
        barras(barra_java_C, "18px", "0s");
        barras(barraL_javas, "10px", "0s");
        barras(barraD_javas, "10px", "0s");
        barras(barraL_java, "10px", "0s");
        barras(barraD_java, "10px", "0s");
        barras(barraL_css, "150px", "1s")
        barras(barraD_css, "150px", "2s");

        barras(barra_css_E, "125px", "1s")
        barras(barra_css_C, "90px", "2s");

    }


}
function javas (){
    barras(barra_html_E, "10px", "0s");
    barras(barra_html_C, "10px", "0s");
    barras(barra1_html, "10px", "0s");
    barras(barraD_html, "10px", "0s");
    barras(barraL_css, "10px", "0s");
    barras(barraD_css, "10px", "0s");
    barras(barra_css_E, "10px", "0s")
    barras(barra_css_C, "10px", "0s");
    barras(barraL_java, "10px", "0s");
    barras(barraD_java, "10px", "0s");
    barras(barraL_javas, "135px", "1s");
    barras(barraD_javas, "110px", "2s");
    barras(barra_java_E, "10px", "0s");
    barras(barra_java_C, "18px", "0s");

    barras(barra_javas_E, "105px", "1s");
    barras(barra_javas_C, "105px", "2s");

}
function java(){
    barras(barra_html_E, "10px", "0s");
    barras(barra_html_C, "10px", "0s");
    barras(barra1_html, "10px", "0s");
    barras(barraD_html, "10px", "0s");
    barras(barraL_css, "10px", "0s");
    barras(barraD_css, "10px", "0s");
    barras(barra_css_E, "10px", "0s");
    barras(barra_css_C, "10px", "0s");
    barras(barra_javas_E, "10px", "0s");
    barras(barra_javas_C, "10px", "0s");
    barras(barraL_javas, "10px", "0s");
    barras(barraD_javas, "10px", "0s");
    barras(barraL_java, "115px", "1s");
    barras(barraD_java, "105px", "2.3s");

    barras(barra_java_E, "55px", "1s");
    barras(barra_java_C, "68px", "2s");
}


 function validacion(tipo_boton){
    
    
    if (tipo_boton == bt1){
        if(x1 == true){

          
            html("x1")
            rot_botones(targacss, targacss, -500, 0, 0, 0, 0,"", "");
            rot_botones(targhtml, targhtml, 0, 0, 0,0,0,"", "");
            rot_botones(targetajavas, targetajavas, -500, 0, 0,0,0,"", "");
            rot_botones(targetajava, targetajava, -500, 0, 0,0,0,"", "");
            rot_botones(cuvo, b1,0, 0,  0, 0, 0, "2s", "rgb(0, 183, 255)");
            b1.style.boxShadow=`0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)`;
            b2.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b3.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b4.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            x1 = false;
    
         }
         else if (x1 == false){
            html("x2");
            rot_botones(targacss, targacss, -500, 0, 0, 0, 0,"", "");
            rot_botones(targhtml, targhtml, 0, 0, 0,0,0,"", "");
            rot_botones(targetajavas, targetajavas, -500, 0, 0,0,0,"", "");
            rot_botones(targetajava, targetajava, -500, 0, 0,0,0,"", "");
            rot_botones(cuvo, b1, 0, 180, 0, -180, 0, "2s", "rgb(0, 183, 255)");
            b1.style.boxShadow=`0 0 10px  rgb(0, 183, 255), 0 0 40px  rgb(0, 183, 255), 0 0 30px  rgb(0, 183, 255)`;
            b2.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b3.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b4.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
           
            x1 = true;
         } 
    }else if(tipo_boton == bt2){
            if(x2 == true){
                css("x1");
                rot_botones(targhtml, targhtml, -500, 0,0,0,0,"", "");
                rot_botones(targacss, targacss, 0, 0, 0, 0, 0,"", "");
                rot_botones(targetajavas, targetajavas, -500, 0, 0,0,0,"", "");
                rot_botones(targetajava, targetajava, -500, 0, 0,0,0,"", "");
                rot_botones(cuvo, b2, 0, 0, 0, -90, 0, "2s", "rgb(0, 183, 255)");
                b1.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b3.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b4.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b2.style.boxShadow="0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)"
                
                x2 = false;

            }else if(x2 == false){
                css("x2");
                rot_botones(targhtml, targhtml, -500, 0,0,0,0,"", "");
                rot_botones(targacss, targacss, 0, 0, 0, 0, 0,"", "");
                rot_botones(targetajavas, targetajavas, -500, 0, 0,0,0,"", "");
                rot_botones(targetajava, targetajava, -500, 0, 0,0,0,"", "");
                rot_botones(cuvo, b2, 0, 0, 0, 90, 0, "2s", "rgb(0, 183, 255)");
                b1.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b3.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b4.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
                b2.style.boxShadow="0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)"
                x2 = true;

            }
    }else if(tipo_boton == bt3){
            javas();
            rot_botones(targhtml, targhtml, -500, 0,0,0,0,"", "");
            rot_botones(targacss, targacss, -500, 0, 0, 0, 0,"", "");
            rot_botones(targetajava, targetajava, -500, 0, 0,0,0,"", "");
            rot_botones(targetajavas, targetajavas, 0, 0, 0,0,0,"", "");
            rot_botones(cuvo, b3, 0, 0, -90, 0, 0, "2s", "rgb(0, 183, 255)");
            b1.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b2.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b4.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b3.style.boxShadow="0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)"
    
        x=true;
    }else if(tipo_boton == bt4){
            java();
            rot_botones(targhtml, targhtml, -500, 0,0,0,0,"", "");
            rot_botones(targacss, targacss, -500, 0, 0, 0, 0,"", "");
            rot_botones(targetajavas, targetajavas, -500, 0, 0,0,0,"", "");
            rot_botones(targetajava, targetajava, 0,0,0,0,0, "", "");
            rot_botones(cuvo, b4, 0, 0,  90, 0, 0, "2s", "rgb(0 183, 255)");
            b1.style.boxShadow="0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent";
            b2.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b3.style.boxShadow=`0 0 10px transparent, 0 0 40px transparent, 0 0 30px transparent`;
            b4.style.boxShadow="0 0 10px rgb(0, 183, 255), 0 0 40px rgb(0, 183, 255), 0 0 30px rgb(0, 183, 255)"
            x = false;
    }
 }


  



     
 



  


 

   




