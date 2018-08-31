# My Array Methods!
---

To show how these work:

* var a = [1,2,3];
* var b = [2,3,4];
* var c = ["p","a","t",["r","i","c",["k",{name:"patrick"},"m",["n","o","p"]]]];

## Hope you enjoy these methods I'm making

* 1. Array.prototype.mirrorConcat:
  - takes in a newArr which is then reversed in order and put into the beggining of the original array

  a.mirrorConcat(b) = [4,3,2,1,2,3];

* 2. Array.prototype.reverseConcat:
  - takes in a newArr which is then put as is directly into the beggining of an array;

  a.reverseConcat(b) = [2,3,4,1,2,3];

* 2 Array.prototype.flattenAll
  - takes array of arrays and flattens them to one array, good news is that unlike Array.prototype.flat, ther is no need to pass in any arguments specifying the depth hence why I called it "flatten all"
  c.flattenAll = ["p","a","t","r","i","c","k",{name:"patrick"},"m","n","o","p"]



  * more methods coming soon!



