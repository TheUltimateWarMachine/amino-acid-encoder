decode = (arr) => {
            if(typeof arr[arr.length-1]=="string"){var popped=arr.pop();}
            var namespace = [],count=0;
            for(var i=0;i<arr.length;i++){
                namespace[`${count}`]= (arr[i] & 0xC0) >> 6;
               count++;
               namespace[`${count}`]= (arr[i] & 0x30) >> 4;
               count++;
               namespace[`${count}`]= (arr[i] & 0x0C) >> 2;
               count++;
               namespace[`${count}`]= arr[i] & 0x03;
               count++;
            }
            for(var i=0;i<namespace.length;i++){
                switch(namespace[i]){
                    case 0: namespace[i] = `A`; break;
                    case 1: namespace[i] = `T`; break;
                    case 2: namespace[i] = `G`; break;
                    case 3: namespace[i] = `C`; break;
                    
                }      
                      }
                    popped?namespace.push(popped):null
                      return namespace;
                           }
