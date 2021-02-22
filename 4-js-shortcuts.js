 const money = 150;

 const active = false;

 if (money > 100) {
     food = 'biryani';
 }
 else{
     food = 'sada bath'
 }
console.log(food);

// // ternary
//  condition (?) true value (:) false value

 let food = money > 100 ? 'biryani' : 'sada bath'
 console.log(food);

 const cssclass = active ? 'active' : 'inactive'
 console.log(cssclass);

// // function shortcut

 const s = active && 'active'
 const y = active || "inactive"
 console.log(y);

// String to number convert 

 const number = +'45'
 console.log(number);


// number to String
const number = '45'+""
 console.log(number);

// default parameter 
 
function add(num1, num2 = 5) {
    return (num1 + num2)
}
 const number = add(45, 10)
 console.log(number);