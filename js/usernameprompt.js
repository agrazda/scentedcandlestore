function addUserName(){
    var name = prompt ("What is your name?");
    var userGreeting;

    if(name !== ''){
        userGreeting = 'Thank you for joining us ' + name + '!';
    }

    else{
      userGreeting = 'Thank you for joining us!'
    }

    while (name === null){
        name = prompt ("What is your name?")
        userGreeting = 'Thank you for joining us ' + name + '!';
    }








    return '<h2>' + userGreeting + '</h2>';    
}
