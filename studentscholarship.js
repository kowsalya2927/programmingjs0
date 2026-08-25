var marks = Number(prompt("Enter the Marks"))
var result
if(marks>=90)
{
    result = "Distinction"
}
else if(marks>=75)
{
    result = "First Class"
}
else if(marks>=50)
{
    result = "Second Class"
}
else if(marks>=40)
{
    result = "Pass"
}
else{
    result = "Fail"
}
console.log("Marks:" + marks)
console.log("Result:" + result)

if(marks>=90)
{
    console.log("Scholarship:Eligible")
}
else
{
    console.log("Scholarship:Not Eligible")
}