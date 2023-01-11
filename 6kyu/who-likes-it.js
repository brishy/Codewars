on
1
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
2
​
3
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
4
​
5
// PREP
6
// P: array
7
// R: string 
8
// E: []                                -->  "no one likes this"
9
// ["Peter"]                         -->  "Peter likes this"
10
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
11
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
12
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
13
​
14
​
15
​
16
​
17
​
18
function likes(names) {
19
 switch (names.length) {
20
    case 0:
21
      return 'no one likes this';
22
    case 1:
23
      return names[0] + ' likes this';
24
    case 2:
25
      return names[0] + ' and ' + names[1] + ' like this';
26
    case 3:
27
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
28
    default:
29
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
30
  }
31
} 
 Corr
