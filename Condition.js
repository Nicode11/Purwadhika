let age = 15

if (age>=17){
console.log("You Are LEGAL")

} else {
console.log("you Are BABY !")

}

// chain if else

let grade ="A"


if (grade =="A") {
console.log("EXCELLENT")
} else if (grade =="B"){

    console.log("GREAT")
}else if(grade =="C"){
    console.log("Not So Good")
} else {
    console.log("INVALID")
}

// switch
switch (grade) {
    case "A":
        console.log("Excellent");
        break;

        case "B":
            console.log("Great");

        break;

        case "C":
            console.log("Not So Good");

            break;


    default:
        console.log("INVALID");
        break;
}

let car = "BMW"

if (car=="BMW" || car =="Toyota"){
console.log("Great Car");

} else {

    console.log("MISKIN");
}

//turnary operation = if else versi singkat
const str="PHP"

console.log(str=="Javascript"? "Javascript": "not Javascript");

console.log(str=="Javascript" ? "Javascript": str=="PHP"? "PHP":"not Javascript")



