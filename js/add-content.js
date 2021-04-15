function welcomeHere(){
    var today= new Date(); 
    var hourNow = today.getHours(); 
    var greeting; 
    if (hourNow > 18) { 
    greeting= 'Dont foget to blow out your candle for the night'; 
    }
    else if (hourNow > 12) { 
    greeting = 'What candle did you light today?'; 
    }
    else if (hourNow >= 0) { 
    greeting = 'Light a Candle this Morning!'; 
    }
    else { 
    greeting = 'Welcome!'; 
    }
    return '<h3>' + greeting + '</h3>' ;   
    }

function addUserName(){
    var name = prompt ("What is your name?")
    var greeting
    if (name !==""){
        greeting = "hello" + name
    } 
    return '<h3>' + message + '</h3>';
}

function donate(){
    var donate = prompt ("Would you like to donate a Virgin?")
    var greeting

    if (name !==""){
        greeting = "hello" + name
    }
    
    return '<h3>' + message + '</h3>';

}