import { tamagotchi } from "./modules/tamagotchi.js";
let intervalID = 0;
let tam = new tamagotchi(prompt("enter name"))
tam.setHappines(5);
tam.setHealth(5);
const img = document.createElement('img');
document.body.append(img);
const KutchipatchiHappy = new URL('../src/img/Kuchipatchi.png', import.meta.url);
const KutchipatchiAngry = new URL('../src/img/KuchipatchiAngry.jpg', import.meta.url);
const KutchipatchiDead = new URL('../src/img/rip.png', import.meta.url);
img.src = KutchipatchiHappy.href;

if(confirm){
    start();
}


        function start(){
            intervalID = setInterval(update, 2200);
            intervalID2 = setInterval(showInfo, 1000)


        document.querySelector(".feed").addEventListener("click", (e) => {
            e.preventDefault();
            if(tam.health < 2){
                document.querySelector(".health").innerHTML = "health : " + tam.health
            }else{
                tam.health--;
                document.querySelector(".health").innerHTML = "health : " + tam.health
            }

        })
        
        
        document.querySelector(".play").addEventListener("click", (e) => {
            e.preventDefault();
            if(tam.happines > 9){
                document.querySelector(".happines").innerHTML = "happines : " + tam.happines    
            }else{
                tam.happines++;
                document.querySelector(".happines").innerHTML = "happines : " + tam.happines
            }
            
        })
        }

        function showInfo(){
            document.querySelector(".name").innerHTML = "name : " + tam.name
            document.querySelector(".health").innerHTML = "health : " + tam.health, 1000
            document.querySelector(".happines").innerHTML = "happines : " + tam.happines, 1000
        }

        function update(){
            let status = tam.getStatus();
            if (status == "ANGRY") { img.src = KutchipatchiAngry.href;}
            if (status == "HAPPY") { img.src = KutchipatchiHappy.href;}
            
            if(tam.happines == 0 || tam.health == 10) { 
            img.src = KutchipatchiDead.href;   
            clearInterval(intervalID);     
            alert("Tama dead")
            if(confirm){
                location.reload();
            }
            }
        }       




    

        





