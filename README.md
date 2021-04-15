# amino-acid-encoder
a fun project that I did that encodes amino acids with numbers
  
  Notes

this program encodes in clumps of 4, so if you have a string like "atgcc", it will be encoded as [27,"c"]
This will not break anything, and the string will still be de/encoded like normal

************************************************************************************************************************

:: to encode: call **encode(atgc-string)**
-only put strings that include the characters _a,t,g,c_
-encode will return an array of integers below 256 if everything goes right. 
-For example inputting the string "atgcatgc" will return **[27,27]**

************************************************************************************************************************

:: To decode: call **decode(num-arr)**
-decode will take the array that encode function does. [27, 27] will become "ATGCATGC"
************************************************************************************************************************
