var mydata = document.querySelector('h2').innerText;
document.querySelector('h2').innerHTML = "";


for (const i in mydata) {

    document.querySelector('h2').innerHTML += `<span>${mydata[i]}</span>`;

}


var index = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;

document.querySelector('#text1').innerHTML = count1;
document.querySelector('#text2').innerHTML = count2;
document.querySelector('#text3').innerHTML = count3;

document.body.onkeypress = function (event) {
    console.log(event.key);
    if (event.key == mydata[index]) 
    {
        if (event.key == " ") 
        {
            count3++;
        }
        document.querySelectorAll('span')[index].style.color = "lime";
        count1++;
    }

    else {
        document.querySelectorAll('span')[index].style.color = "red";
        count2++;
    }

    document.querySelector('#text1').innerHTML = count1;
    document.querySelector('#text2').innerHTML = count2;
    document.querySelector('#text3').innerHTML = count3;

    index++;
}

