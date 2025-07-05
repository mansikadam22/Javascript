//for loop
for(let i=0;i<=5;i++)
{
    console.log("For loop",i)
}

//example
const mansi =  ["mansi","iram","khushabu","sara"]
for(let i= 0;i<=mansi.length;i++)
{
    console.log("For loop",mansi[i])
}

//example
const library = ["books","pen","ragistor"]
for(let n=0; n<=library.length; n++)
{
    console.log("For loop",library[n])
}

//example
for(let o = 1; o<=5; o++ )
{
    let stars = " ";
    for(let p= 1; p<=o; p++)
    {
        stars += '*'
    }
    console.log(stars)
}

//example
let rose = 3;
for(let y = 1; y<= rose; y++ )
{
    let space = '';
    let stars = '';
    //add space
    for(let Q = 1;Q<= rose-y;Q++)
    {
        space+=" "
    }
    //add stars
    for(let k = 1; k<=y;k++)
    {
        stars+= "Stars"
    }
    console.log(space + stars)
}

//example
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            // Add a space after each number
            str += count.toString() + ' ';
            count++;
        } else {
            // Add two spaces for the gap
            str += '  ';
        }
    }

    console.log(str);
}

//example1
let b = 5;
for (let i = 1; i <= b; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}

//example2
let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {     //first 'for loop' for horizontal lines
        for (let j = 1; j <= (num - i); j++) {    //second 'for loop' to add 'spaces' before pattern
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      //third 'for loop' to add * to pattern string
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}




//while loop
let f = 1;
while(f<=8)
{
    console.log("While loop:",f)
    f++;
}


let g = 2;
while(g<=10)
{
    console.log("While loop:",g)
    g++;
}




//do while loop
let m = 1;
do{
    console.log("Do while loop",m)
    m++
}while(m<=10)

let z = 3;
do{
    console.log("Do while loop",z)
    z++
}while(z<=8)




//for ... of loop
const fruit = ["mango","banana","pineapple",]
for(const fru of fruit)
{
    console.log("friut",fru)
}

const flower = ["rose","lili","mogra",]
for(const flow of flower)
{
    console.log("flowers:",flow)
}




//for ... in loop

const person = 
{ name  :"Mansi",age : 17, city : 'jsp'}
for(const key in person)
{
   console.log("info:",key+':',person[key]) 
}




//forEach loop
const fruits = ["mango","banana","pineapple","apple"]
fruits.forEach((frut)=>{
    console.log("Fruits:",frut)
})

