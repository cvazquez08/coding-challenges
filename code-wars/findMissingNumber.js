let array = [1,2,3,4,6]

function findMissing(a){
let tracker = 0;
let sequence = (a[a.length-1] - a[0]) / a.length;

for(let i = 0; i < a.length - 1; i++){
  tracker = a[i] + sequence;
  if(a[i+1] === tracker){
    // console.log("ok")
  }else {
    console.log("Missing number", tracker);
  }

}

}

findMissing(array)