/* for (let current = 21; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  } This was a bad piece of code.
  */
 function odd() {
     // If a number is divisable by 2 its even
     // If a number is not divisable by 2 its odd
     // Always use precise equals (==)
    var currentNumber = Number(prompt("Enter a number: "));

    document.getElementById("num").innerHTML = currentNumber;

     if (currentNumber % 2 == 0) {
        var msg = "The number " + currentNumber + " is even.";
        document.getElementById("result").innerHTML = msg;
     }
     else {
         var msg2 = "The number " + currentNumber + " is odd.";
         document.getElementById("result").innerHTML = msg2;   
     } 
 }