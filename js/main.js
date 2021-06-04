

function  userProgress(time){
    var start = 0;
    var time = Math.round(time * 1000 / 100);
    var progressElement = document.getElementById('user-progress'); //елемент прогресс бара
    var intervalId = setInterval(function(){ 
        if (start > 100){
            clearInterval(intervalId)
            userProgressCallBack();
        }
        else {
          progressElement.value = start;   
        }  
        
     start++;
    }, time);
} 

function userProgressCallBack(){
    document.querySelector('.hidden-bl').style.display = 'block';
}

userProgress(10);