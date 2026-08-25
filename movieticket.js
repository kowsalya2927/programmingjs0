var age = Number(prompt("Enter the age"))
var tickets = Number(prompt("Enter thr tickets"))
var price
var discount = 0
if(age < 13)
{
    price = 120
}
else if(age > 60)
{
    price = 200
}
else
    price = 150
var total = price * tickets
    console.log("Total:" + total)
if(tickets >= 5)
    discount = total * 0.10
    console.log("Discount:" + discount)
var finalamount = total - discount
    console.log("FinalAmount:" + finalamount)