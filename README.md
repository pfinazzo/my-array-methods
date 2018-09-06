# My Array Methods!
---

To show how these work:

* var a = [1,2,3];
* var b = [2,3,4];
* var c = ["p","a","t",["r","i","c",["k",{name:"patrick"},"m",["n","o","p"]]]];
## Hope you enjoy these methods I'm making

1. Array.prototype.mirrorConcat:
  - takes in a newArr which is then reversed in order and put into the beggining of the original array

  a.mirrorConcat(b) = [4,3,2,1,2,3];

2. Array.prototype.reverseConcat:
  - takes in a newArr which is then put as is directly into the beggining of an array;

  a.reverseConcat(b) = [2,3,4,1,2,3];

3. Array.prototype.flattenAll:
  - takes array of arrays and flattens them to one array, good news is that unlike Array.prototype.flat, ther is no need to pass in any arguments specifying the depth hence why I called it "flatten all". Uses recursion and a closure to complete this process.


  c.flattenAll = ["p","a","t","r","i","c","k",{name:"patrick"},"m","n","o","p"]

---

* var d = [1,2,3];
* var e = [4,5,6];
* var f = [4,5,6,7,8];
* var g = [1];

---

4. Array.prototype.everyOther
- creates a new array where each element from the same index gets pushed into the new array, if one of the arrays is longer than the other the elements with the higher indexes(from the longer array) will also get pushed in. 

* if equal length arrays
d.everyOther(e) = [1,4,2,5,3,6]
* if arrays are different lengths
d.everyOther(f); = [1,4,2,5,3,6,7,8];
f.everyOther(g); = [4,1,5,6,7,8];

---

  * more methods coming soon!



