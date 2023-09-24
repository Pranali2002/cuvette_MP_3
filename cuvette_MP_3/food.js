const foodinfo = require('./food.json')

// Task 1: List all the food items
function listAllFoodItems(data) {
    return data.map(food => food.foodname);
}
console.log('1] All Food Items:', listAllFoodItems(foodinfo));

// Task 2: List all the food items with category vegetables
function listVegetables(data) {
    return data.filter(food => food.category === 'Vegetable').map(food => food.foodname);
}
console.log('2] Vegetables:', listVegetables(foodinfo));

// Task 3: List all the food items with category fruit
function listFruits(data) {
    return data.filter(food => food.category === 'Fruit').map(food => food.foodname);
}
console.log('3] Fruits:', listFruits(foodinfo));

// Task 4: List all the food items with category protein
function listProteins(data) {
    return data.filter(food => food.category === 'Protein').map(food => food.foodname);
}
console.log('4] Proteins:', listProteins(foodinfo));

// Task 5: List all the food items with category nuts
function listNuts(data) {
    return data.filter(food => food.category === 'Nuts').map(food => food.foodname);
}
console.log('5] Nuts:', listNuts(foodinfo));

// Task 6: List all the food items with category grains
function listGrains(data) {
    return data.filter(food => food.category === 'Grain').map(food => food.foodname);
}
console.log('6] Grains:', listGrains(foodinfo));

// Task 7: List all the food items with category dairy
function listDairy(data) {
    return data.filter(food => food.category === 'Dairy').map(food => food.foodname);
}
console.log('7] Dairy:', listDairy(foodinfo));

// Task 8: List all the food items with calorie above 100
function listHighCalorie(data) {
    return data.filter(food => food.calorie > 100).map(food => food.foodname);
}
console.log('8] High Calorie Foods:', listHighCalorie(foodinfo));

// Task 9: List all the food items with calorie below 100
function listLowCalorie(data) {
    return data.filter(food => food.calorie < 100).map(food => food.foodname);
}
console.log('9] Low Calorie Foods:', listLowCalorie(foodinfo));

// Task 10: List all the food items with highest protein content to lowest
function listHighToLowProtein(data) {
    return data
        .sort((a, b) => b.protiens - a.protiens)
        .map(food => `${food.foodname} (${food.protiens}g)`);
}
console.log('10] High to Low Protein:', listHighToLowProtein(foodinfo));

// Task 11: List all the food items with lowest carb content to highest
function listLowToHighCarb(data) {
    return data
        .sort((a, b) => a.cab - b.cab)
        .map(food => `${food.foodname} (${food.cab}g)`);
}
console.log('11] Low to High Carb:', listLowToHighCarb(foodinfo));