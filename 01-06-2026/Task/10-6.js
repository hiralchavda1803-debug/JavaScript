var N1 = Number(prompt("Enter the Value of N1"));
var N2 = Number(prompt("Enter the Value of N2"));
var N3 = Number(prompt("Enter the Value of N3"));

document.querySelectorAll('p')[0].innerHTML = "Value of N1 : " + N1;
document.querySelectorAll('p')[1].innerHTML = "Value of N2 : " + N2;
document.querySelectorAll('p')[2].innerHTML = "Value of N3 : " + N3;

if (N1 > N2 && N1 > N3) 
{
    document.querySelector('h1').innerHTML = "N1 is Greater";
}

else if (N2 > N1 && N2 > N3) 
{
    document.querySelector('h1').innerHTML = "N2 is Greater";
}

else if (N3 > N1 && N3 > N2) 
{
    document.querySelector('h1').innerHTML = "N3 is Greater";
}

else if (N1 == N2 && N1 > N3) 
{
    document.querySelector('h1').innerHTML = "N1 and N2 both are same and greater";
}

else if (N1 == N3 && N1 > N2)
{
    document.querySelector('h1').innerHTML= "N1 and N3 both are same and greater";
}

else if (N2 == N3 && N2 > N1) 
{
    document.querySelector('h1').innerHTML = "N2 and N3 both are same and greater";
}

else 
{
    document.querySelector('h1').innerHTML = "All Are Equal";
}