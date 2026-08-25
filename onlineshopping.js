var price = Number(prompt("Enter the price"))
var discount
if(price<1000)
{
    discount = 0
}
else if(price<3000)
{
    discount = 10
}
else if(price<5000)
{
    discount = 20
}
else
{
    discount = 30
}
var discountamount = price * discount/100
var finalamount = price - discountamount
   console.log("FinalAmount:" + finalamount)