function donate(){
   var quantity = prompt ('How many Virgins would you like to donate?');
   var quant = Number(quantity)
   var answer
   var donationQuantity  

   if(quant <= 99 ){
       answer = prompt ('That is not enough! Try again!');

    }

    else if(quant >= 101 ){
        answer = alert ('Thank you for your generous donation');

    }

    while (quant <= 99 ){
        quant = prompt ("That is not enough! Try again!");
    }    
return answer;
}