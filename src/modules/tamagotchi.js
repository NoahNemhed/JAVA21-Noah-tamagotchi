export class tamagotchi {
    health;
    happines;

    constructor(name){
        this.name = name;
        this.health = setInterval(this.getHunger.bind(this), 2000); 
        this.happines = setInterval(this.getHappiness.bind(this), 2000);
    }

    feed(){
        this.health--;
        return this.health;
    }

    play(){
        this.happines++;
        return this.happines;
    }

    setHealth(health){
        this.health = health;
    }

    
    setHappines(happines){
        this.happines = happines;
    }

    getHunger(){
        this.health++;
        if(this.health > 9){
            clearInterval(this.firstTimer);
            clearInterval(this.secondTimer);
        }
        
    }

    getHappiness(){
        this.happines--;
        if(this.happines < 1){
            clearInterval(this.firstTimer);
            clearInterval(this.secondTimer);
        }
    }

    getStatus(){
        if(this.health > 5 || this.happines < 5){
            return "ANGRY"
        }

        if(this.health < 5 || this.happines > 5){
            return "HAPPY"
        }
    }


}

