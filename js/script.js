
function makeMultiplier(multiplier){
    return (
        function(x) {
            return multiplier * x;
        }
    );
}

let f = makeMultiplier(2);
console.log(f(4));

console.log(makeMultiplier(2));
console.log(makeMultiplier(2)(2));