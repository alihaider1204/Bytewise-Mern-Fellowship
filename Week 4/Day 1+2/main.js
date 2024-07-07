// Print Statement
// console.log('Hello from Ali')

// Variables
// let age = 25
// age = 2
// console.log(age)
// const salary = 2000
// console.log(salary)

// const name = 'Ali Haider'
// const language ="Java Script"
// const channel = 'Code Evaluation'

// const total =0
// const PI = 3.14
// const isPrimarynumber = true
// const isnewuser = false

// let result
// console.log(result)

// const person = {
//     'firstname': 'Ali',
//     lastname : 'Haider',
//     age : 20

// }
// console.log(person.age)
// const oddnumber =[1,2,3,4,5]
// console.log(oddnumber[0])
// let x= 10
// let y=5
// console.log(x+y)
// console.log(++x)
// console.log(--y)
// console.log(x==y)
// const isvalid = x > 8 && 8>y
// console.log(isvalid)

// const is = true
// console.log(!is)

// console.log('Bruce ' + 'Waynes')
// const iseven = 10 % 2 === 0 ? true :false
// console.log(iseven)
// console.log('2' /'3')
// console.log(Number(true))
// console.log(parseInt(true))
// console.log(String(true))
// console.log((500).toString())
// console.log(Boolean(5)) // Nan undefine '' null 0

// var x = 10
// var y ='10'
// console.log(x==y)
// console.log(x===y)
// const color = 'white'
// switch(color)
// {
//     case 'red':
//         console.log("Color is red")
//         break
//     case 'blue':
//         console.log("color is blue")
//         break
//     default:
//     console.log('Not a valid color')
//     break
// }

// for(initliazer;condition;final expression){code to run}
// for(let i =1;i<5;i++)
//     {
//         console.log('Iteration Number ' + i)
//     }

// While.... initiliazer 
//while (condition ){ final expression}
// let i = 1
// while(i<5)
//     {
//         console.log('Iteration Number '+ i )
//         i++
//     }
// let i =6
// do{
//     console.log('Iteration Number' + i)
//     i++
// }while(i<5)

// function greet(user)
// {
//     console.log('Good morning '+ user)
// }
// greet('ali')
// greet('ahmed')

// function add (a,b){
//     return a + b
// }
// const sum = add(5,10)
// console.log(sum)

//DOM manipulation
// const title = document.querySelector('#main-heading')
// title.style.color='red';

// const listitems =document.querySelectorAll('list-items')
// for(i=0;i<listitems.length;i++)
//     {
//         listitems[i].style.fontSize='5rem'
//     }

// Creating items
const ul = document.querySelector('ul')
const li = document.createElement('li')
// Adding elements
ul.append(li)
//Modifyinh the text

// const firstlistitem = document.querySelector('.list-item')
// console.log(firstlistitem.innerHTML) 
// console.log(firstlistitem.innerText)
// console.log(firstlistitem.textContent)
li.innerText= 'X-men';
//Modifying Attributes and classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

li.classList.add('list-items');
li.classList.remove('list-items');
// Remove elements
li.remove();


