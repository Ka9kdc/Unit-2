//Starter Code begin

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Starter code end

/* Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
*/

//Task 1 - If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function refillTotal (price, refills){
    return price * refills
}

function subscriptionDiscount (sub, price) {
    if (sub == true){ 
        return price * (1-.25) // <--- Since 1 - .25  will alway evaluate to .75 you can just use the .75 in this equation
    } else //<-- you do not actually need this else key word becuase the if block has a return.
    return price
}
//Task 2 - If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

function applyCoupon (patient) {
      patient.grandTotal = refillTotal(patient.pricePerRefill,patient.refills)
    if (patient.coupon == true) { //<-- so both this line and line 43 do not need to be compared to the boolean true becuase the value assigned to the key itself is a boolean
        return subscriptionDiscount (patient.subscription,patient.grandTotal) - 10
    } return subscriptionDiscount (patient.subscription,patient.grandTotal)
}

//Task 3 - At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
// This would technically solve Task 3
// console.log("Timmy => \"Your grand total is $" + applyCoupon(timmy) + "\"")
// console.log("Sarah => \"Your grand total is $" + applyCoupon(sarah) + "\"")
// console.log("Rocky => \"Your grand total is $" + applyCoupon(rocky) + "\"")

//But, this is trying to solve Task 3 by leveraging an array.
timmy.patientName = "Timmy"
sarah.patientName = "Sarah"
rocky.patientName = "Rocky"
let patient = [timmy,sarah,rocky];

// function giveName (pName) {
//     return patient.patientName
// }

for (let i = 0; i <= patient.length-1; i++) {
    patient[i].grandTotal = applyCoupon(patient[i])
    console.log((patient[i].patientName) + " => \"Your grand total is $" + (patient[i].grandTotal)+"\"") //<-- you can use single quotes or backticks to avoid having to use the escape char in these strings.
}

