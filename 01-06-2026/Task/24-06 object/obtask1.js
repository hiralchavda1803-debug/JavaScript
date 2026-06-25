// Task 1: Student Information System
var student = 
{
    rollNo : 7,
    name : "Hiral",
    course : 'Full Stack',
    marks : 100,
}

// 1. Display all student details.
console.log(student);


// 2. Update the marks.
student.marks = 80;
console.log(student);


// 3. Add a new property `grade`.
student.grade = 'A';
console.log(student);


// 4. Delete the `course` property.
delete student.course;
console.log(student);
