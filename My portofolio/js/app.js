document.addEventListener("DOMContentLoaded", function () {
    const introductionText = "Hey! It's Meryem Rouimi AKA mimiiss, this is my Portfolio, unfortunately I'm still working on it  , but it will be ready very soon.";
    const introductionDiv = document.getElementById("introduction");
    
        let index = 0;
        let interval;
    
        function showText() {
            if (introductionText[index] === ',') {
                clearInterval(interval); // Arrêter l'interval actuel
                setTimeout(function () {
                    interval = setInterval(showText, 50); // Reprendre l'animation après la pause
                }, 1000); // Pause d'une seconde (1000 millisecondes)
            }
    
            introductionDiv.textContent += introductionText[index];
            index++;
    
            if (index >= introductionText.length) {
                clearInterval(interval); // Arrêter l'interval à la fin du texte
            }
        }
    
        interval = setInterval(showText, 50); // Commencer l'animation
    });
    

