// level {1/2/3}
//level 1 

var arr = [1,2,3];
let test = arr.map(no => no + 1);
console.log(test);

var arr = [1, 2, 3];
var total = (accumlator, curr) => accumlator + curr;
console.log(arr.reduce(total));


var test = {name: 'Elie', rank: 'Pro'};
var str = test.toString();
console.log(str);

//level 2

var arr = [1, 3, 4, 6, 7, 8];

for(let i = 0; i<arr.length;i++){
    if(arr[i]%2 == 0){
        arr.slice(i);
    }
    console.log('test:',arr[i]);
}


function vowels(string){
    string.slice('');
          string.filter((val, index, arr) => {
        if( /[aeiou]/.test(val)){
            return val.ToUpperCase();
        }
        return val;
    })
    
} 

function max(arr, low, high){
    var m = arr[low];
    for(var i = low + 1; i<=high;i++){
        if(arr[i]> m){
            m = arr[i];
        }
    }
    return m;
}
var arr =  [1, 3, 4, 6, 7, 8, 2, 5];
var n = arr.length;
console.log("max number :",max(arr,0,n-1));

//level 3

var test = recursive(user);
console.log("recursive:",test);
function recursive(user){
    var test = {}
    for(var i in user){
if(Object.prototype.toString.apply(user[i])==='[object Object]'){
    test[i.ToUpperCase()]= recursive(user[i]);
}
else{
    test[i.ToUpperCase()]= recursive(user[i]);
}
    }
    return test;
}