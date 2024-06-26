let str ="kocak"



split = str.split("")
rev = split.reverse()
joins = rev.join("")

console.log(joins == str ? `${str} adalah Palindrome`: `${str} bukan Palindrome`);


