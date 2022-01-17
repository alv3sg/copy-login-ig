const imagens = new Array('imagens/01s.jpg', 'imagens/02s.jpg', 'imagens/03s.jpg','imagens/04s.jpg', 'imagens/05s.jpg')
let i = 0
contador()
function contador(){  
    if(i===imagens.length){
        i = 0
    }  
    //document.getElementById('left').opacity = 1
    document.getElementById('fotos').src = `${imagens[i]} ` 
    //document.getElementById('left').opacity = 0   
    setTimeout("slide()", 1000)
}
function slide(){        
        i++
        contador()
}
