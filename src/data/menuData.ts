import { MenuItem } from '../types';

// Common add-ons available for all menu items
const commonAddOns = [
  { id: 'bonito-flakes', name: 'Bonito Flakes', price: 10, category: 'toppings' },
  { id: 'pork-floss', name: 'Pork Floss', price: 10, category: 'toppings' },
  { id: 'slice-cheese', name: 'Slice Cheese', price: 10, category: 'toppings' },
  { id: 'spicy-mayo', name: 'Spicy Mayo', price: 15, category: 'sauce' },
  { id: 'sesame-dressing', name: 'Sesame Dressing', price: 15, category: 'sauce' },
  { id: 'takoyaki-sauce', name: 'Takoyaki Sauce', price: 15, category: 'sauce' },
  { id: 'cheese-sauce', name: 'Cheese Sauce', price: 15, category: 'sauce' },
  { id: 'mayo', name: 'Mayo', price: 15, category: 'sauce' }
];

// Helper function to create menu items with common add-ons
const createMenuItem = (item: Omit<MenuItem, 'addOns'>): MenuItem => ({
  ...item,
  addOns: commonAddOns
});

export const menuData: MenuItem[] = [
  // Dim Sum
  createMenuItem({
    id: 'har-gow',
    name: 'Har Gow (Shrimp Dumplings)',
    description: 'Delicate translucent dumplings filled with fresh shrimp and bamboo shoots',
    basePrice: 180,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'siu-mai',
    name: 'Siu Mai (Pork & Shrimp Dumplings)',
    description: 'Traditional open-topped dumplings with pork, shrimp, and mushrooms',
    basePrice: 160,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'char-siu-bao',
    name: 'Char Siu Bao (BBQ Pork Buns)',
    description: 'Fluffy steamed buns filled with sweet and savory BBQ pork',
    basePrice: 140,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'xiao-long-bao',
    name: 'Xiao Long Bao (Soup Dumplings)',
    description: 'Delicate dumplings filled with pork and savory broth',
    basePrice: 220,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'cheung-fun',
    name: 'Cheung Fun (Rice Noodle Rolls)',
    description: 'Silky rice noodle rolls with choice of shrimp, beef, or char siu',
    basePrice: 180,
    category: 'dim-sum',
    variations: [
      { id: 'shrimp', name: 'Shrimp', price: 0 },
      { id: 'beef', name: 'Beef', price: 20 },
      { id: 'char-siu', name: 'Char Siu', price: 15 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'turnip-cake',
    name: 'Lo Bak Go (Turnip Cake)',
    description: 'Pan-fried radish cake with Chinese sausage and dried shrimp',
    basePrice: 120,
    category: 'dim-sum',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),

  // Noodles
  createMenuItem({
    id: 'beef-chow-fun',
    name: 'Beef Chow Fun',
    description: 'Stir-fried wide rice noodles with tender beef and bean sprouts',
    basePrice: 280,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'dan-dan-noodles',
    name: 'Dan Dan Noodles',
    description: 'Sichuan noodles with spicy sesame sauce and minced pork',
    basePrice: 250,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'wonton-noodle-soup',
    name: 'Wonton Noodle Soup',
    description: 'Fresh egg noodles in clear broth with pork and shrimp wontons',
    basePrice: 220,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'pad-thai',
    name: 'Pad Thai',
    description: 'Thai stir-fried rice noodles with shrimp, tofu, and peanuts',
    basePrice: 260,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'lo-mein',
    name: 'Chicken Lo Mein',
    description: 'Soft egg noodles tossed with chicken and vegetables',
    basePrice: 240,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),

  // Rice Dishes
  createMenuItem({
    id: 'yang-chow-fried-rice',
    name: 'Yang Chow Fried Rice',
    description: 'Classic fried rice with shrimp, char siu, and eggs',
    basePrice: 280,
    category: 'rice-dishes',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'beef-broccoli-rice',
    name: 'Beef and Broccoli Rice',
    description: 'Tender beef with fresh broccoli in savory sauce over steamed rice',
    basePrice: 320,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'sweet-sour-pork-rice',
    name: 'Sweet and Sour Pork Rice',
    description: 'Crispy pork with pineapple and bell peppers in tangy sauce',
    basePrice: 300,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'mapo-tofu-rice',
    name: 'Mapo Tofu Rice',
    description: 'Silky tofu in spicy Sichuan sauce with ground pork over rice',
    basePrice: 260,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'kung-pao-chicken-rice',
    name: 'Kung Pao Chicken Rice',
    description: 'Diced chicken with peanuts and chili peppers in savory sauce',
    basePrice: 290,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),

  // Beverages
  createMenuItem({
    id: 'jasmine-tea',
    name: 'Jasmine Tea',
    description: 'Fragrant jasmine tea served hot in traditional pot',
    basePrice: 80,
    category: 'beverages',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'oolong-tea',
    name: 'Oolong Tea',
    description: 'Premium oolong tea with complex floral notes',
    basePrice: 100,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'chrysanthemum-tea',
    name: 'Chrysanthemum Tea',
    description: 'Cooling herbal tea with dried chrysanthemum flowers',
    basePrice: 90,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'lychee-juice',
    name: 'Fresh Lychee Juice',
    description: 'Sweet and refreshing lychee juice served chilled',
    basePrice: 120,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'winter-melon-tea',
    name: 'Winter Melon Tea',
    description: 'Traditional Chinese tea with subtle sweet flavor',
    basePrice: 85,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'hot-soy-milk',
    name: 'Hot Soy Milk',
    description: 'Fresh soy milk served hot with optional sugar',
    basePrice: 70,
    category: 'beverages',
    variations: [
      { id: 'plain', name: 'Plain', price: 0 },
      { id: 'sweet', name: 'Sweetened', price: 10 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),

  // Takoyaki
  createMenuItem({
    id: 'yasaiyaki',
    name: 'Yasaiyaki',
    description: 'Traditional vegetable takoyaki with cabbage, pickled ginger, and onion leeks',
    basePrice: 50,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 50 },
      { id: '7-pcs', name: '7 PCS', price: 90 },
      { id: '25-pcs', name: '25 PCS', price: 250 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'hamyaki',
    name: 'Hamyaki',
    description: 'Savory takoyaki with cabbage, pickled ginger, onion leeks, and bite-sized ham',
    basePrice: 55,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 55 },
      { id: '7-pcs', name: '7 PCS', price: 100 },
      { id: '25-pcs', name: '25 PCS', price: 310 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'baconchiziyaki',
    name: 'Baconchiziyaki',
    description: 'Rich takoyaki with cabbage, pickled ginger, onion leeks, bacon bits, and cheese cubes',
    basePrice: 55,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 55 },
      { id: '7-pcs', name: '7 PCS', price: 100 },
      { id: '25-pcs', name: '25 PCS', price: 320 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'cheezyaki',
    name: 'Cheezyaki',
    description: 'Cheesy takoyaki with cabbage, pickled ginger, onion leeks, cheese cubes, topped with slice cheese',
    basePrice: 60,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 60 },
      { id: '7-pcs', name: '7 PCS', price: 115 },
      { id: '25-pcs', name: '25 PCS', price: 330 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'kaniyaki',
    name: 'Kaniyaki',
    description: 'Seafood takoyaki with cabbage, pickled ginger, onion leeks, crabmeat, and corn kernels',
    basePrice: 65,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 65 },
      { id: '7-pcs', name: '7 PCS', price: 120 },
      { id: '25-pcs', name: '25 PCS', price: 370 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'octochiziyaki',
    name: 'Octochiziyaki',
    description: 'Premium takoyaki with cabbage, pickled ginger, onion leeks, octobits, and cheese cubes',
    basePrice: 70,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '4-pcs', name: '4 PCS', price: 70 },
      { id: '8-pcs', name: '8 PCS', price: 200 },
      { id: '12-pcs', name: '12 PCS', price: 245 },
      { id: '25-pcs', name: '25 PCS', price: 455 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'ebiyaki',
    name: 'Ebiyaki',
    description: 'Shrimp takoyaki with cabbage, pickled ginger, onion leeks, shrimp inside, topped with crispy dried shrimp',
    basePrice: 70,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 70 },
      { id: '7-pcs', name: '7 PCS', price: 130 },
      { id: '25-pcs', name: '25 PCS', price: 385 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'octokani',
    name: 'OctoKani',
    description: 'Deluxe takoyaki with cabbage, pickled ginger, onion leeks, octobits, and crabmeat',
    basePrice: 75,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 75 },
      { id: '7-pcs', name: '7 PCS', price: 140 },
      { id: '25-pcs', name: '25 PCS', price: 400 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'hambacon',
    name: 'HamBacon',
    description: 'Ultimate takoyaki with cabbage, pickled ginger, onion leeks, bite-sized ham, bacon bits, and cheese cubes',
    basePrice: 75,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: '3-pcs', name: '3 PCS', price: 75 },
      { id: '7-pcs', name: '7 PCS', price: 130 },
      { id: '25-pcs', name: '25 PCS', price: 405 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  }),
  createMenuItem({
    id: 'giant-takoyaki',
    name: 'Giant Takoyaki',
    description: 'Extra large takoyaki ball - perfect for sharing or as a main dish',
    basePrice: 109,
    category: 'takoyaki',
    popular: true,
    variations: [
      { id: 'seafood', name: 'Seafood', price: 109 },
      { id: 'all-meat', name: 'All Meat', price: 109 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  })
];

export const categories = [
  { id: 'dim-sum', name: 'Dim Sum', icon: '🥟' },
  { id: 'noodles', name: 'Noodles', icon: '🍜' },
  { id: 'rice-dishes', name: 'Rice Dishes', icon: '🍚' },
  { id: 'beverages', name: 'Beverages', icon: '🍵' },
  { id: 'takoyaki', name: 'Takoyaki', icon: '🐙' }
];

export const addOnCategories = [
  { id: 'spice', name: 'Spice Level' },
  { id: 'protein', name: 'Extra Protein' },
  { id: 'sauce', name: 'Sauces' },
  { id: 'toppings', name: 'Toppings' },
  { id: 'extras', name: 'Extras' }
];

// Export common add-ons for reference
export { commonAddOns };