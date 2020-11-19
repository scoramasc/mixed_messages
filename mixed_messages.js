let mealArray = ['breakfast', 'lunch', 'dinner'];
let vegetableArray = ['carrot', 'bean', 'pea', 'cole', 'onion', 'garlic'];
let meatArray = ['beef', 'lamb', 'chicken', 'pork'];
let fruitArray = ['apple', 'orange', 'water melon', 'lemon', 'strawberry'];
let personArray = ['grandma', 'grandpa', 'uncle', 'aunt'];

let story = `When selecting your next ${mealArray[Math.floor(Math.random()*3)]}, you must check that you have ${vegetableArray[Math.floor(Math.random()*6)]}, ${meatArray[Math.floor(Math.random()*4)]} and ${fruitArray[Math.floor(Math.random()*5)]} in your kitchen.\nYou also have to invite your ${personArray[Math.floor(Math.random()*4)]} to help you prepare the food.`;

console.log(story);
