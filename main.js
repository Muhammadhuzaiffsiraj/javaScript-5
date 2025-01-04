let items = ['Apple', 'banana']

function add(str) {

   if (!items.includes(str)) {
      items.push(str);
   }
}
add()

function remove(str) {
   let array = items.indexOf(str);
   if (array !== -1) {
      items.splice(array, 1);
   }
}
remove();

function lastChar(str) {
   if (str.length === 0) {
      return null;
   }
   return str[str.length - 1];
}

function reverse(str) {
   return str.split('').reverse().join('');
}

console.log(items);
console.log(lastChar('Apple'));
console.log(lastChar('Banana'));
console.log(reverse(reverse('APPLE')));
console.log(reverse('APPLE'));
console.log(reverse(reverse('Banana')));
console.log(reverse('Banana'));
console.log(lastChar('Apple')); 
console.log(lastChar('Banana')); 
console.log(reverse(reverse('APPLE')));  
console.log(reverse('APPLE')); 
console.log(reverse(reverse('Banana')));  
console.log(reverse('Banana'));
