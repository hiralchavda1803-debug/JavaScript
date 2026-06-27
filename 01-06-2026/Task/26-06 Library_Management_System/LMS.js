var library = [
    // {BookID : 1,BookName : "Math",Author : "Me",Category : "Math",Quantity : 5},
    // {BookID : 2,BookName : "Science",Author : "Me",Category : "Sci",Quantity : 6}
];

document.querySelector('.add').onclick = function()
{
    var book = 
    {
        BookID: Number(prompt("Enter the BookID:")),
        BookName: prompt(("Enter the BookName:")),
        Author: prompt(("Enter the Author:")),
        Category: prompt(("Enter the Category:")),
        Quantity: prompt(("Enter the Quantity:"))

    }
library.push(book);
console.log(library);
};


document.querySelector('.display').onclick = function()
{
    for (const element of library) 
    {
        document.body.innerHTML += `<h2>${element.BookID}</h2> 
        <h2>${element.BookName}</h2> 
        <h2>${element.Author}</h2> 
        h2>${element.Category}</h2> 
        <h2>${element.Quantity}</h2>`;
    }
}

document.querySelector('.issue').onclick = function () 
{
    var issue = prompt("Enter the book Name : ");
    var bool = false
    for (const element of library) 
    {
        if (element.BookName === issue) 
        {
            if(element.Quantity > 0)
            {
                element.Quantity--;
            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  
            <h2>Book Name :  ${element.BookName}</h2> 
            <h2> Book Author Name : ${element.AuthorName}</h2> 
            <h2> Book Category : ${element.Category}</h2>  
            <h2> Book Quantity :${element.Quantity}</h2> `;
                bool = true;
            }
            else
            {
                alert("Out of stock...");
            }
            break;
        }
    }
    
    if(!bool)
    {
        alert("Book is not available...");
    }
}

document.querySelector('.return').onclick = function () 
{
    var rtn = prompt("Enter the book Name : ");
    var bool = false    
    for (const element of library) 
    {
        if (element.BookName === rtn) 
        {
            element.Quantity++;

            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  
            <h2>Book Name :  ${element.BookName}</h2> 
            <h2> Book Author Name : ${element.AuthorName}</h2> 
            <h2> Book Category : ${element.Category}</h2>  
            <h2> Book Quantity :${element.Quantity}</h2> `;
            bool = true;

        }

    }
    if(!bool)
    {
        alert("Book is not available...");
    }
}

document.querySelector('.delet').onclick = function ()
{
   var delet = prompt("Enter the book name you went to delet : ");
    var bool = false    
   
    for (let i = 0; i < books.length; i++) 
    {
        if (books[i].BookName === delet)
        {
           books.splice(i,1);
            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  
            <h2>Book Name :  ${element.BookName}</h2> 
            <h2> Book Author Name : ${element.AuthorName}</h2> 
            <h2> Book Category : ${element.Category}</h2>  
            <h2> Book Quantity :${element.Quantity}</h2> `;
            bool = true;
        }

    }
   if(!bool)
    {
        alert("Book is not available...");
    }
}

document.querySelector('.status').onclick = function()
{
    var status = prompt("Enter Book Name : ");
    var bool = false    

    for (const element of library) 
    {
        if(element.BookName === status)
        {
           alert("Book is Available..!");
           bool = true;
            
        }
        else
        {
            alert("Out of stock...");
        }
        break;
    }
 if(!bool)
    {
        alert("Book is not available...");
    }
}

document.querySelector('.total').onclick = function () 
{

     alert("Total Books : " + library.length);

}