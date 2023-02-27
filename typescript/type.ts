function shiftRound(str: string, shift: number): string {
    let mas = str.split('');
    let str_1 = mas.reduce((a,b)=>{
       if(b.charCodeAt(0)<=122&&b.charCodeAt(0)>=97){
       if(shift==2 && b=="a"){
          b="c";
          a+=b;
       }
       else if(shift==2 && b=="z"){
          b="b";
          a+=b;
       }
       else{
        a+=String.fromCharCode(b.charCodeAt(0)+shift>122?b.charCodeAt(0)+shift-26:b.charCodeAt(0)+shift);  
       }}
       else{
          a+=b;
       }
 
 return a;
    },"");
 return str_1;
 }
 let str3 =  shiftRound("aabx!", 4);
 console.log(str3);
 function unshiftRound(str: string, shift: number): string {
    let mas = str.split('');
    let str_1 = mas.reduce((a,b)=>{
       if(b.charCodeAt(0)<=122&&b.charCodeAt(0)>=97){
       if(shift==2 && b=="c"){
          b="a";
          a+=b;
       }
       else if(shift==2 && b=="b"){
          b="z";
          a+=b;
       }
       else{
         a+=String.fromCharCode(b.charCodeAt(0)-shift<97?b.charCodeAt(0)-shift+26:b.charCodeAt(0)-shift); 
       }}
       else{
          a+=b;
       }
 return a;
    },"");
 return str_1;
 }
 let str2 = unshiftRound("eefb!",4);
 console.log(str2);