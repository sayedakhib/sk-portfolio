const projects=document.querySelectorAll(".project-container .pbox")
let counter=0

function left(){
    if(counter==0){
        counter=projects.length/3-1
    }else{
        counter--
        scroll()
    }
}

function right(){
    counter++
    scroll()
}

function scroll(){
    projects.forEach(function(item){
        item.style.transform=`translateX(-${counter*350}px)`
    })
}