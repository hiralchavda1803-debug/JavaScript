//Expression Function 
// 1. Build a modular billing system using functions.
// 2. Check if a number is Perfect using function.

// 1. Build a modular billing system using functions.
  

    let bill = 0;

    var products = [
        {
            p_name: "Book",
            price: 80
        },
        {
            p_name: "Pencil",
            price: 5
        },
        {
            p_name: "Bottle",
            price: 100
        }
    ];

    alert("Products are:\nBook\nPencil\nBottle");

    let productName = function () {
        let Name = prompt("Enter the product Name : ");
        return Name;
    }

    let Quantity = function () {
        let qnt = Number(prompt("Enter the product Quantity : "));
        return qnt;
    }

    let countamount = function () {
        let qnt = Quantity();
        bill = products[0].price * qnt; 
        return bill;
    }

    let discount = function () {
        if (bill >= 5000) {
            return bill * 0.10;
        }
        return 0;
    }

    let tax = function () {
        return bill * 0.18;
    }

    let total = function () {

        let pname = productName();

        let amount = countamount();

        let dis = discount();
        let tx = tax();

        let finalBill = amount - dis + tx;

        alert(
            "Product : " + pname +
            "Amount : " + amount +
            "Discount : " + dis +
            "Tax : " + tx +
            "Final Bill : " + finalBill
        );
    }

    total();



// 2. Check if a number is Perfect using function.

      
        function isPerfect(num) {
            let sum = 0;

            for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                    sum += i;
                }
            }

            return sum === num;
        }

        let n = Number(prompt("Enter a Number"));

        if (isPerfect(n)) {
            alert("Perfect Number")
        } else {
            alert("Not Perfect Number")
        }
