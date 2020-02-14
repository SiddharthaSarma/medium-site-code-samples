// Exclamation Mark (!)— Logical NOT
!1 // false
!-1 // false
!0 // true
!function() {} // false
!{} // false
!'' // true
!NaN // true
!null // true
!undefined // true


// Double Exclamation Mark (!!) — Double Logical NOT
!!true // true
!!{} // true
!!(new Boolean(false)) // true
!!false // false
!!'' // false
!!Boolean(false) // false

// Double Asterisks (**) — Exponentiation
2 ** 3 === Math.pow(2, 3) // 8
-(2 ** 2) === -Math.pow(2, 2) // -4
10 ** -1 === Math.pow(10, -1) // 0.1

// Tilde(~) — Bitwise NOT
9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
// trick
~9 => -(9 + 1) => -10
~-10 => -(-10 + 1) => 9

// Double Tilde(~~) — Math.floor & Math.trunc
~5.5 => -6
~-6 => 5
~~5.5 === Math.floor(5.5) // true
~~-5.5 === Math.trunc(-5.5) // true

// Double Period(..) With toString
5..toString(2) // '101'
Number(5).toString(2) === 5..toString(2) // true


// IIFE With Operators
(function() {
  // do your work
})();

// magic
const msg = [];

+function(){
   msg.push('Hello');
}()

-function() {
  msg.push('World');
}()

~function(){
  msg.push('!');
}()

~~function() {
  msg.push('My name');
}()

!function() {
  msg.push('is');
}()

!!function() {
  msg.push('Sid');
}()

console.log(msg.join(' ')); // Hello World ! My name is Sid
