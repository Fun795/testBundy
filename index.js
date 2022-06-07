let arrayOfNumbers =[
    -1,
    -2,
    -3,
    -1,
    -2,
    -3,
    -4,
    -5,
    -6,
    -300,
    10013123,
    -500,
];

function getSumTwoMin(array){
    if(array.length<2){

        throw 'array must contains two or more numbers';
    }

    let firstMinNumber = Number.MAX_SAFE_INTEGER;
    let secondMinNumber = Number.MAX_SAFE_INTEGER;

    for(const number of array){
        if(number < firstMinNumber){
            secondMinNumber = firstMinNumber
            firstMinNumber = number;

            continue;
        }
        
        if(number < secondMinNumber) {
            secondMinNumber = number; 
        }
    }

    return firstMinNumber + secondMinNumber;
}
let x = getSumTwoMin(arrayOfNumbers);
console.log(x);