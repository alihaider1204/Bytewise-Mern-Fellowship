// Event Listeneres


document.querySelector(".btn-2").addEventListener("click",function(){
    alert("I love JS")
},true)


// Mouseover

const newbgcolor= document.querySelector('.box-3')
function changebgcolor()
{
    newbgcolor.style.backgroundColor = 'Blue';
}

newbgcolor.addEventListener("mouseover",changebgcolor)