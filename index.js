// Code your solutions in this file
const mesgArray = [];

function writeCards(pplArray,event){
  //for(i=0; i < pplArray.length; i++){
  let i=0;
  while(i < pplArray.length){
    mesgArray.push(`Thank you, ${pplArray[i]}, for the wonderful ${event} gift!`);
    i++;
  }
  return mesgArray;
}

//writeCards(["Charlie", "Samip", "Ali"], "birthday");
//console.log(mesgArray);

function countDown(number){
    //console.log(number);
    for(number; number >= 0; number--){
        console.log(number);
        //debugger;
        //return number;
    }
}

//countDown(4);