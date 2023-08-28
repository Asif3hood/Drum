var eventAll = document.querySelectorAll(".drum").length;
for ( i=0; i<eventAll; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    
        var buttonInnnerHtml = this.innerHTML; //Which index are coming in this line 
            makeSound(buttonInnnerHtml); //Button method
            makeAnimation(buttonInnnerHtml);

        document.addEventListener("keypress", function (event){ //Keyboard method
            makeSound(event.key); //It's tell us which keyboard button was pressed key is parameter of event function
            makeAnimation(event.key);
            });

        function makeSound(key){

            switch(key){

                case "w":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                break;    
    
                case "a":
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                break;
    
                case "s":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                break;
    
                case "d":
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                break;
                
                case "j":
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                break;
                
                case "k":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                break;
                
                case "l":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                break;
                
                default: ;
            }
            
        }

        function makeAnimation(eventKey){
            var buttonAnimation = document.querySelector("."+ eventKey);
            buttonAnimation.classList.add("pressed");

            setTimeout(function(){
                buttonAnimation.classList.remove("pressed");
            },100);
        }

});

}


 