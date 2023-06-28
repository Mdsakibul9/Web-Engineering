
var a;
var text;
a=prompt("What is Your number");
a=parseInt(a);


    if(a>=80 && a<=100){
        text="You have got A+";
    }
    else if( a>=75 && a<80){
        text="You have got A";
    }    
    else if( a>=70 && a<75){
        text="You have got A-";
    }    
    else if( a>=65 && a<70){
        text="You have got B+";
    }    
    else if( a>=60 && a<65){
        text="You have got B";
    }   
    else if( a>=55 && a<60){
        text="You have got B-";
    }    
    else if( a>=50 && a<55){
        text="You have got C";
    } 
    else if( a>=33 && a<50){
        text="You have got D";
    } 
    else if( a>=0 && a<33){
        text="You have got F";
    }    
    else if( a<0 || a>100){
        text=" Invalid input";
    }


console.log(text);
document.write(text);
