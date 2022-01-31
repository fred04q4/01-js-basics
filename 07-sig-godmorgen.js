let besked;
let dag = new Date( "january 31, 22 19:18 ");
let hour = dag.getHours();

    
if (hour > 5 && hour < 10){
        besked= "Godmorgen";
      }else if (hour > 10 && hour < 18){
      besked= "Goddag";}
      else if (hour > 10 && hour < 18) {
      besked= "Godaften";}
      else{
        besked= "Godnat";}
      
      console.log(besked);
      