const openWindow = document.querySelector(".open");
const closeWindow = document.querySelector(".close");
const ask = document.querySelector(".ask")

var myWindow;

openWindow.addEventListener("click", function(){
    myWindow = window.open("", "myWindow", "width = 400, height=200")
})

closeWindow.addEventListener("click", function(){
    if(myWindow){
        myWindow.close()
    }
});

ask.addEventListener("click", function(){
    if(!myWindow){
        document.querySelector(".demo").innerHTML = "'myWindow' has never been opened!";
    }else{
        if(myWindow.closed){
            document.querySelector(".demo").innerHTML = "'myWindow' has been closed!";
        }else{
            document.querySelector(".demo").innerHTML = "'myWindow' has not been closed!";
            
        }
    }
})