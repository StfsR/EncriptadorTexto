var txtAreas = document.querySelector('.text-area-principal');
console.log(txtAreas.style.width);
txtAreas.addEventListener('input', function(){
    if (window.innerWidth <= 1023) {
        console.log(window.innerWidth);
        if(this.scrollHeight > this.offsetHeight) 
            this.rows += 1; 

        if(this.scrollHeight < this.offsetHeight){
            this.rows -= 1
        }

    }
});
function adjustText() {
    var textAreaMensagem = document.querySelector('.mensagem');
    textAreaMensagem.style.height = "auto";
    textAreaMensagem.style.height = textAreaMensagem.scrollHeight + "px";
}
