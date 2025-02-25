
    
        function playSound(e) {
            const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // detiene la funcion
        audio.currentTime = 0; 
        audio.play();
        key.classList.add('playing');
        }
    

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

       const keys = this.document.querySelectorAll('.key');
       keys.forEach(key => key.addEventListener('transitionend', removeTransition));

       window.addEventListener('keydown', playSound);

    
     
