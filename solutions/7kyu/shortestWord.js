function findShort(s){
    s = s.split(' ');
    
    var short = s[0];
    
    for (let i = 0; i < s.length ; i++)
      {
          if (short.length > s[i].length)
          {
              short = s[i];
          }
      }
      return short.length;
    }