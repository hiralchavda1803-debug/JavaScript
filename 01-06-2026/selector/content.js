// How To Access Element Content

// 1.innerHTML
// 2.innerText
// 3.textContent

// 1.innerHTML
console.log(document.getElementById('div').innerHTML);

// 2.innerText
console.log(document.getElementById('div').innerText);

// 3.textContent
console.log(document.getElementById('div').textContent);


// How to Change Element HTML Content:
document.querySelector('h1').innerHTML = "New Content";
document.querySelector('h1').innerText = "New Content";
document.querySelector('h1').textContent = "New Content";

document.querySelector('div').innerText = "Hello World";


