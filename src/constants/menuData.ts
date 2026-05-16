export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  image: string;
}

export const menuData: Record<string, MenuItem[]> = {
  "Coffee": [
    { 
      name: "Espresso", 
      price: "₱90", 
      desc: "Classic hot double shot.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Americano", 
      price: "₱100 / ₱105", 
      desc: "Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Cafe Latte", 
      price: "₱155 / ₱160", 
      desc: "Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Cafe Cappuccino", 
      price: "₱155", 
      desc: "Hot classic cappuccino.",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Cafe Macchiato", 
      price: "₱110", 
      desc: "Hot espresso marked with foam.",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Cortado", 
      price: "₱110 / ₱115", 
      desc: "Equal parts espresso and steamed milk. Hot or Iced.",
      image: "https://images.unsplash.com/photo-1534706936160-d5ee67737049?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Piccolo", 
      price: "₱115 / ₱160", 
      desc: "Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop"
    }
  ],
  "Specialty": [
    { 
      name: "White Series (+1)", 
      price: "₱165 / ₱170", 
      desc: "Espresso + Milk + 1 choice of sauce or syrup. Hot or Iced.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "White Series (+2)", 
      price: "₱180 / ₱185", 
      desc: "Espresso + Milk + 2 choices of sauce or syrup. Hot or Iced.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Pour Over Coffee", 
      price: "₱345", 
      desc: "A slow, mindful brew crafted to highlight the unique flavors of specialty coffee.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Customized Experience", 
      price: "₱345", 
      desc: "Your coffee, your way. We customize every detail to match your taste.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
    }
  ],
  "Non-Coffee": [
    { 
      name: "Matcha Latte", 
      price: "₱160 / ₱165", 
      desc: "Premium matcha. Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Dirty Matcha", 
      price: "₱165 / ₱170", 
      desc: "Matcha with a shot of espresso. Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4586c566?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Chocolate Drink", 
      price: "₱155 / ₱160", 
      desc: "Rich and creamy chocolate. Available Hot or Iced.",
      image: "https://images.unsplash.com/photo-1544787210-2213d84ad96b?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Raspberry Juice", 
      price: "₱60", 
      desc: "Refreshing iced raspberry juice.",
      image: "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=800&auto=format&fit=crop"
    }
  ],
  "Food & Snacks": [
    { 
      name: "Chicken Wrap", 
      price: "₱195", 
      desc: "Juicy chicken, fresh lettuce, tomato, cucumber, and signature sauce.",
      image: "https://images.unsplash.com/photo-1662116765994-1e007077696e?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Tuna Wrap", 
      price: "₱165", 
      desc: "Creamy tuna, crisp lettuce, cucumber, and onion with special dressing.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Cheesy Herb Mushroom", 
      price: "₱185", 
      desc: "Toasted sourdough with creamy cheese, herbs, scrambled egg, and mushrooms.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Clubhouse Sandwich", 
      price: "₱285", 
      desc: "Chicken, bacon, egg, lettuce, tomato, and mayo. Served in 4 triangles.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Group Nachos", 
      price: "₱235", 
      desc: "Crispy nachos loaded with seasoned meat, cheese, salsa, and sour cream.",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Classic Pancake", 
      price: "₱145", 
      desc: "Fluffy pancakes served with butter and maple syrup.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop"
    }
  ],
  "Pasta": [
    { 
      name: "Chicken Pesto Pasta", 
      price: "₱225", 
      desc: "Fettuccine in creamy pesto sauce with grilled chicken and parmesan.",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Fettuccine In Red", 
      price: "₱225", 
      desc: "Fettuccine in rich and savory tomato-based sauce.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Tuna Aglio Olio", 
      price: "₱225", 
      desc: "Tuna flakes sautéed in garlic, olive oil, and chili for a light pasta.",
      image: "https://images.unsplash.com/photo-1547592110-8039972295fb?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Carbonara", 
      price: "₱225", 
      desc: "Creamy parmesan sauce with bacon and fettuccine.",
      image: "https://images.unsplash.com/photo-1612452224650-c3ad971630fb?q=80&w=800&auto=format&fit=crop"
    }
  ]
};

export type MenuCategory = keyof typeof menuData;
