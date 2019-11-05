function XO(str) {
   var countx = 0, counto = 0;
   var len = str.length;
   
   for (let i = 0; i <= len; i++)
   {
      if(str.charAt(i) === 'x' || str.charAt(i) === 'X')
      {
          countx++;
      }
      if (str.charAt(i) === 'o' || str.charAt(i) === 'O')
      {
          counto++;
      }
   }
   
   if (countx === counto)
      return true;
   return false;
}
