let slide = document.querySelectorAll(".slide")
let arr = Array.from(slide)

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

function mainfunc(){

    let active = document.querySelector(".active")
    let currentIndex = arr.indexOf(active)
    
    let prev;
    let next;
    

    if(currentIndex == 0){
        prev = arr[arr.length-1]
    }else{
        prev = arr[currentIndex-1]
    }

    
    if(currentIndex == arr.length-1){
        next = arr[0]
    }else{
        next = arr[currentIndex+1]
    }

     return [prev,next]
    
}

     
function koijabe(){

    let active = document.querySelector(".active")
    let currentIndex = arr.indexOf(active)

    
    let [prev,next] = mainfunc()

    arr.map((slide,index)=>{

        if(currentIndex == index){
            slide.style.transform ="translateX(0%)"
        }else if(slide == prev){
            prev.style.transform = "translateX(-100%)"
        }else if(slide == next){
            next.style.transform = "translateX(100%)"
        }

        slide.addEventListener("transitionend", function(){
            active.classList.remove("smooth")
        })
    })

    
}

koijabe()


    next.addEventListener("click",function(){

        let active = document.querySelector(".active")
        let currentIndex = arr.indexOf(active)
    
        let [prev,next] = mainfunc()

        active.classList.add("smooth")
        next.classList.add("smooth")

        active.classList.remove("active")
        active.style.transform = "translate(-100%)"

        next.classList.add("active")
        next.style.transform = "translate(0%)"

        koijabe()

    })
    prev.addEventListener("click",function(){

        let active = document.querySelector(".active")
        let currentIndex = arr.indexOf(active)
    
        let [prev,next] = mainfunc()

        active.classList.add("smooth")
        prev.classList.add("smooth")

        active.classList.remove("active")
        active.style.transform = "translate(-100%)"

        prev.classList.add("active")
        prev.style.transform = "translate(0%)"

        koijabe()

    })