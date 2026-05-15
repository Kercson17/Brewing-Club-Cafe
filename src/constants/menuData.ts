export const menuData = {
  "Coffee": [
    { name: "Espresso", price: "₱90", desc: "Classic hot double shot." },
    { name: "Americano", price: "₱100 / ₱105", desc: "Available Hot or Iced." },
    { name: "Cafe Latte", price: "₱155 / ₱160", desc: "Available Hot or Iced." },
    { name: "Cafe Cappuccino", price: "₱155", desc: "Hot classic cappuccino." },
    { name: "Cafe Macchiato", price: "₱110", desc: "Hot espresso marked with foam." },
    { name: "Cortado", price: "₱110 / ₱115", desc: "Equal parts espresso and steamed milk. Hot or Iced." },
    { name: "Piccolo", price: "₱115 / ₱160", desc: "Available Hot or Iced." }
  ],
  "Specialty": [
    { name: "White Series (+1)", price: "₱165 / ₱170", desc: "Espresso + Milk + 1 choice of sauce or syrup. Hot or Iced." },
    { name: "White Series (+2)", price: "₱180 / ₱185", desc: "Espresso + Milk + 2 choices of sauce or syrup. Hot or Iced." },
    { name: "Pour Over Coffee", price: "₱345", desc: "A slow, mindful brew crafted to highlight the unique flavors of specialty coffee." },
    { name: "Customized Experience", price: "₱345", desc: "Your coffee, your way. We customize every detail to match your taste." }
  ],
  "Non-Coffee": [
    { name: "Matcha Latte", price: "₱160 / ₱165", desc: "Premium matcha. Available Hot or Iced." },
    { name: "Dirty Matcha", price: "₱165 / ₱170", desc: "Matcha with a shot of espresso. Available Hot or Iced." },
    { name: "Chocolate Drink", price: "₱155 / ₱160", desc: "Rich and creamy chocolate. Available Hot or Iced." },
    { name: "Raspberry Juice", price: "₱60", desc: "Refreshing iced raspberry juice." }
  ],
  "Food & Snacks": [
    { name: "Chicken Wrap", price: "₱195", desc: "Juicy chicken, fresh lettuce, tomato, cucumber, and signature sauce." },
    { name: "Tuna Wrap", price: "₱165", desc: "Creamy tuna, crisp lettuce, cucumber, and onion with special dressing." },
    { name: "Cheesy Herb Mushroom", price: "₱185", desc: "Toasted sourdough with creamy cheese, herbs, scrambled egg, and mushrooms." },
    { name: "Clubhouse Sandwich", price: "₱285", desc: "Chicken, bacon, egg, lettuce, tomato, and mayo. Served in 4 triangles." },
    { name: "Group Nachos", price: "₱235", desc: "Crispy nachos loaded with seasoned meat, cheese, salsa, and sour cream." },
    { name: "Classic Pancake", price: "₱145", desc: "Fluffy pancakes served with butter and maple syrup." }
  ],
  "Pasta": [
    { name: "Chicken Pesto Pasta", price: "₱225", desc: "Fettuccine in creamy pesto sauce with grilled chicken and parmesan." },
    { name: "Fettuccine In Red", price: "₱225", desc: "Fettuccine in rich and savory tomato-based sauce." },
    { name: "Tuna Aglio Olio", price: "₱225", desc: "Tuna flakes sautéed in garlic, olive oil, and chili for a light pasta." },
    { name: "Carbonara", price: "₱225", desc: "Creamy parmesan sauce with bacon and fettuccine." }
  ]
};

export type MenuCategory = keyof typeof menuData;
