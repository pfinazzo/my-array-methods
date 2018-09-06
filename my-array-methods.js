var a = [1,2,3,8];
var b = [4,5,6,7];

var c = [1,2,3,4,5,6];
var d = [6,7,8,9]

Array.prototype.mirrorConcat = function(newArr){
  for (var i = 0; i < newArr.length; i++){
    this.unshift(newArr[i]);
  }
  return this;
}
// [1,2,3].mirrorConcat([2,3,4]) = [4,3,2,1,2,3]

Array.prototype.reverseConcat = function(newArr){
  for (var i = newArr.length - 1; i >= 0; i--){
    this.unshift(newArr[i]);
  }
  return this;
}

// [1,2,3].reverseConcat([2,3,4]) = [2,3,4,1,2,3]

Array.prototype.flattenAll = function(){
  var newArr = [];
  var flatten = (array = this) => {
      array.forEach(value => {
          if (!(Array.isArray(value))){
              newArr.push(value);
          } else {
              return flatten(value);
          }
      })
      return newArr;
  };
  return flatten();
}


// ["p","a","t",["r","i","c",["k",{name:"patrick"},"m",["n","o","p"]]]].flattenAll = ["p","a","t","r","i","c","k",{name:"patrick"},"m","n","o","p"]

//[1,2,3].everyOther([4,5,6]) = [1,4,2,5,3,6];

Array.prototype.everyOther = function(arr){
  var largerArray;
  var smallerArray;
  var newArr = [];
  var lengthDifference = arr.length - this.length;
    if (lengthDifference < 0){
      largerArray = this;
      smallerArray = arr;
      lengthDifference *= -1;
    } else if (lengthDifference === 0){
      largerArray = this;
      smallerArray = arr;
    } else {
      largerArray = arr;
      smallerArray = this;
    }
    largerArray.map((element, idx) => {
     smallerArray.map((elem, index) => {
        if (index === idx){
          if (largerArray === arr){
            newArr.push(elem, element)
          } else {
            newArr.push(element, elem);
          }
        }
      })
      if(idx > smallerArray.length - 1){
        newArr.push(largerArray[idx]);
      }
    })
  return newArr;
}
