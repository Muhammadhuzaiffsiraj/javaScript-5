let array = ['Apple','banana']

function add(str) {
   array.push(str); 
    
}
add()

function remove(str) {
    array.pop();    
 }
 remove();

 function lastChar(str) {
    return str.charAt(str.length - 1);
}


function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(array);
console.log(lastChar('Apple')); 
console.log(lastChar('Banana')); 
console.log(reverse(reverse('APPLE')));  
console.log(reverse('APPLE')); 
console.log(reverse(reverse('Banana')));  
console.log(reverse('Banana'));