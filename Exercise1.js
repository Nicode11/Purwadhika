
// let celcius= 60

// let fahrenheit =(9/5*celcius)+32

// console.log(fahrenheit +" Fahrenheit");


// for(let i=0;i<=50;i++)
//     if(i%2 == 0)
//         {console.log(i+" adalah Bilangan Genap")
// }
// else if(i%2 != 0 )
//     {
//     console.log(i+" adalah Bilangan Ganjil");
// } 

// let prima = true

// for(let a=0;a<=50;a++)
//     if(a<=1) {console.log(a+" Bukan Bilangan Prima");}

// else if (a>1 && a%a == 0  && a%1 == 0){
//     console.log(a+" adalah Bilangan Prima");
// }


// let num = 7
// let divider = 0

// for (let i=1; i<= num ; i++){
// if (num%i == 0 ) divider++}

// console.log(divider == 2 ? `${num} is a prime Number` : `${num} is not a prime number`);

for(let i=1; i<=10 ; i++){
let divider = 0
for (let j=1; j<=i ; j++){
    if (i%j == 0 ) divider++
    }

console.log(divider == 2 ? `${i} is a prime Number` : `${i} is not a prime number`);

}






