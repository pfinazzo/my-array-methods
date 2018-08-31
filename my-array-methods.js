var a = [1,2,3];
var b = [2,3,4];

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
    console.log(this, array);
      array.forEach(function(num) {
          if (typeof(num) === "number"){
              newArr.push(num);
          } else {
              return flatten(num);
          }
      })
      return newArr;
  };
  return flatten();
}

// [1,2,3,[1,2,3,[4,5,6,[7,8,9]]]].flattenAll = [1,2,3,1,2,3,4,5,6,7,8,9];





