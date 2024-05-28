const db = require('../db')
const Cuisine = require('../models/cuisine')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisines = [
        { name: 'Spaghetti Carbonara', origin_country: 'Italian Cuisine', description: 'Boil pasta, cook pancetta until crispy, mix with pasta off heat, and quickly stir in egg and cheese mixture until creamy.', price: 35 },
        { name: 'Chicken Tacos', origin_country: 'Mexican Cuisine', description: 'Grill or sauté seasoned chicken, chop into pieces, warm tortillas, and assemble with toppings.', price: 25 },
        { name: 'Sushi Rolls', origin_country: 'Japanese Cuisine', description: 'Spread rice on nori, add fillings, roll with a bamboo mat, and slice into pieces.', price: 25 },
        { name: 'Chicken Tikka Masala', origin_country: 'Indian Cuisine', description: 'Marinate chicken, grill until charred, cook in a sauce of tomatoes, cream, and spices until thickened.', price: 35 },
    ]

    await Cuisine.insertMany(cuisines)
    console.log("Created some cuisines!")
}
const run = async () => {
    await main()
    db.close()
}

run()