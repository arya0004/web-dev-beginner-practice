function sum(num1,num2)
{return num1+num2;
};
console.log(sum(2,4));


const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilogram`);
};
checkWeight(25);


class Person {
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName= lastName;

    }
    greeting(){
        return `hi, i am ${this.firstName}  ${this.lastName}.`;
    }
}
