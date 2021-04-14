encode = (s) => {
var arr= [];
s=s.match(/.{1,4}/g);
if(s[s.length-1].length < 4){
    var popped = s.pop()
}
for(var i=0;i<s.length;i++)s[i]=tA(s[i]);
for(var i=0;i<s.length;i++){
    s[i]=s[i].split(``);
    for(var o=0;o<s[i].length;o++){
s[i][o]=parseInt(s[i][o]);
    }
            }
for(var i=0;i<s.length;i++){
arr.push(bit.apply(null,s[i]))
}
if(popped){arr.push(popped);return arr}
else{return arr} 
}
//supporting functions
            tA=(a)=>{
                a=a.toLowerCase();a=a.split(``);
               
                for(var i=0;i<a.length;i++){
                    switch(a[i]){
                        case 'a':a[i]=0;
                        break;
                        case 't':a[i]=1;
                        break;
                        case 'g':a[i]=2;
                        break;
                        case 'c':a[i]=3;
                        break;
                        default: return new window.Error(`bad amino acid`); break;
                    }
                }
                return a.join(``);
            }
            bit = (...numbers)=>{
            var n=numbers.length,c=n-1,sum=0;
                for(var i=0;i<n;i++){
                    sum += numbers[i] << 2*c;
                c--;

            }
            return sum;
            }
//supporting functions
