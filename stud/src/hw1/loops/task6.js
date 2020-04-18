function mirror(a) {
   let  b, length, newnumber = "";
   if(a != undefined) {
      b = a.toString();
      length = a.toString().length;
      for (var i = length - 1; i >= 0; i--) {
         newnumber += b[i];
      }
      return newnumber;
   }
   return "Error!";
}