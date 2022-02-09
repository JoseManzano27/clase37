class Form{

  constructor(){
    this.button=createButton("Entrar");
    this.input=createInput("name");
    this.greeting=createElement("h3");
  }
   hide(){
     this.button.hide();
     this.input.hide();
     this.greeting.hide();
   }
  
      display(){
        var title=createElement("h2");
        title.html("Run Fasting");
        title.position(300,100);
        this.input.position(300,250);
        this.button.position(300,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hola:  " + player.name);
            this.greeting.position(300,300);
        });
        
      }

}