// normal object
const person = {
    name: 'mansi',
    age: 18,
    city: 'kop',
}
console.log("Name:", person.name, "Age:", person.age, "City:", person.city)
console.log("Name:", person.name)
console.log("Age:", person.age)
console.log("City:", person.city)

//Array of objects
const student = [
    {
        name: 'mansi',
        age: 18,
        city: 'kop',
    },
    {
        name: 'sia',
        age: 10,
        city: 'ich',
    },
    {
        name: 'riya',
        age: 22,
        city: 'jsp',
    },
]
console.log("Name:", student[1].name)
console.log("Age of Riya:", student[2].age)
console.log("city of riya", student[1].city)
console.log(student.length)


//nested object
const employee = {
    name: 'mansi kadam',
    dept: {
        name: 'co',
        location: 'jsp'
    },
    collage: {
        name: 'SITP',
        location: 'address'
    }

};
console.log("location of employee:", employee.dept.location)
console.log("location of Collage:", employee.collage.name)



const key = 'name';
const value = 'sanu'

const obj = {
    [key]: value
}
console.log("Value", obj)


const girl = 'id';
const her_id = 1234;

const info = {
    [girl]: her_id
}
console.log("Her Id", info)

const icecream = {
    type:
    {
        name: 'strawbeery',
        type1: 'shake',
        type2: 'juice'

    },
    types:
    {
        name2: 'mango',
        type3: 'juice',
        type4: 'shake'

    }

}


console.log("shakes:", icecream.type, icecream.types)

//task 1
const commety = { manager: "John", hr: "Doe", age: 50, employee: "blue" };
console.log("commety members:", commety.manager)

//task 2
const ABCD = {
    firstName: "Mansi",
    lastName: "Kadam",
    age: 17,
    eyeColor: "black"
};
console.log('personal info:', ABCD.firstName)


//task
const collage = 
{
    teacher: 
    [   HOD = 'Co',
        Mentor = 'Co1',
        Classteacher= 'TY-A'
    ],

}
console.log("teachers info:",collage.teacher[0])
