// level {1/2/3}



//level 2

function fibbo(n){
    if(n == 0)
    return 0;
    var sum = 0;
    var d = 1, c = 1, ans;
    sum = sum + a;
    while(c<= n){
        sum = sum + c;
        var ans = d+c;
        d= c;
        c= ans;
    }
    return sum;
}
var n = 6;
console.log("sum of fibbo :", fibbo(n));

