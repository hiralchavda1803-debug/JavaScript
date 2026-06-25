// Task 3: Employee Management
var employee = 
{
    empId : 67890,
    empName : "Hiral",
    department : "IT Department",
    salary : "₹ 80,000",
    showDetails : function()
    {
        console.log(`empId is ${this.empId},empName is ${this.empName},department ${this.department}, salary is ${this.salary}`);
        
    }
};



// 1. Display employee details.
console.log(employee);


// 2. Increase salary by 10%.
employee.salary += employee.salary*10;
console.log(employee);


// 3. Add a property `experience`.
employee.experience = 2;
console.log(employee);


// 4. Delete the `department` property.
delete employee.department;
console.log(employee);


// 5. Create a method `showDetails()` to display employee information.
employee.showDetails();