/*
  # Add Takoyaki Menu Items with Size Variations

  1. New Category
    - Add 'takoyaki' category for Japanese octopus balls

  2. New Menu Items
    - Yasaiyaki (Vegetable Takoyaki)
    - Hamyaki (Ham Takoyaki)
    - Baconchiziyaki (Bacon Cheese Takoyaki)
    - Cheezyaki (Cheese Takoyaki)
    - Kaniyaki (Crab Takoyaki)
    - Octochiziyaki (Octopus Cheese Takoyaki)
    - Ebiyaki (Shrimp Takoyaki)
    - OctoKani (Octopus Crab Takoyaki)
    - HamBacon (Ham Bacon Takoyaki)
    - Giant Takoyaki (Special Large Size)

  3. Features
    - Each item has size variations (3 PCS, 7 PCS, 25 PCS)
    - Giant Takoyaki has special variations (Seafood, All Meat)
    - Detailed ingredient descriptions
    - Appropriate pricing for each size
    - High-quality takoyaki images
*/

-- Add takoyaki category
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('takoyaki', 'Takoyaki', '🐙', 5, true)
ON CONFLICT (id) DO NOTHING;

-- Insert Takoyaki Menu Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Yasaiyaki', 'Traditional vegetable takoyaki with cabbage, pickled ginger, and onion leeks', 50, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Hamyaki', 'Savory takoyaki with cabbage, pickled ginger, onion leeks, and bite-sized ham', 55, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Baconchiziyaki', 'Rich takoyaki with cabbage, pickled ginger, onion leeks, bacon bits, and cheese cubes', 55, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Cheezyaki', 'Cheesy takoyaki with cabbage, pickled ginger, onion leeks, cheese cubes, topped with slice cheese', 60, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Kaniyaki', 'Seafood takoyaki with cabbage, pickled ginger, onion leeks, crabmeat, and corn kernels', 65, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Octochiziyaki', 'Premium takoyaki with cabbage, pickled ginger, onion leeks, octobits, and cheese cubes', 70, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Ebiyaki', 'Shrimp takoyaki with cabbage, pickled ginger, onion leeks, shrimp inside, topped with crispy dried shrimp', 70, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('OctoKani', 'Deluxe takoyaki with cabbage, pickled ginger, onion leeks, octobits, and crabmeat', 75, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('HamBacon', 'Ultimate takoyaki with cabbage, pickled ginger, onion leeks, bite-sized ham, bacon bits, and cheese cubes', 75, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Giant Takoyaki', 'Extra large takoyaki ball - perfect for sharing or as a main dish', 109, 'takoyaki', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT DO NOTHING;

-- Add size variations for Yasaiyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Yasaiyaki'), '3 PCS', 50),
  ((SELECT id FROM menu_items WHERE name = 'Yasaiyaki'), '7 PCS', 90),
  ((SELECT id FROM menu_items WHERE name = 'Yasaiyaki'), '25 PCS', 250)
ON CONFLICT DO NOTHING;

-- Add size variations for Hamyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Hamyaki'), '3 PCS', 55),
  ((SELECT id FROM menu_items WHERE name = 'Hamyaki'), '7 PCS', 100),
  ((SELECT id FROM menu_items WHERE name = 'Hamyaki'), '25 PCS', 310)
ON CONFLICT DO NOTHING;

-- Add size variations for Baconchiziyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Baconchiziyaki'), '3 PCS', 55),
  ((SELECT id FROM menu_items WHERE name = 'Baconchiziyaki'), '7 PCS', 100),
  ((SELECT id FROM menu_items WHERE name = 'Baconchiziyaki'), '25 PCS', 320)
ON CONFLICT DO NOTHING;

-- Add size variations for Cheezyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '3 PCS', 60),
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '7 PCS', 115),
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '25 PCS', 330)
ON CONFLICT DO NOTHING;

-- Add size variations for Kaniyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Kaniyaki'), '3 PCS', 65),
  ((SELECT id FROM menu_items WHERE name = 'Kaniyaki'), '7 PCS', 120),
  ((SELECT id FROM menu_items WHERE name = 'Kaniyaki'), '25 PCS', 370)
ON CONFLICT DO NOTHING;

-- Add size variations for Octochiziyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '3 PCS', 70),
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '7 PCS', 130),
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '25 PCS', 390)
ON CONFLICT DO NOTHING;

-- Add size variations for Ebiyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Ebiyaki'), '3 PCS', 70),
  ((SELECT id FROM menu_items WHERE name = 'Ebiyaki'), '7 PCS', 130),
  ((SELECT id FROM menu_items WHERE name = 'Ebiyaki'), '25 PCS', 385)
ON CONFLICT DO NOTHING;

-- Add size variations for OctoKani
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'OctoKani'), '3 PCS', 75),
  ((SELECT id FROM menu_items WHERE name = 'OctoKani'), '7 PCS', 140),
  ((SELECT id FROM menu_items WHERE name = 'OctoKani'), '25 PCS', 400)
ON CONFLICT DO NOTHING;

-- Add size variations for HamBacon
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'HamBacon'), '3 PCS', 75),
  ((SELECT id FROM menu_items WHERE name = 'HamBacon'), '7 PCS', 130),
  ((SELECT id FROM menu_items WHERE name = 'HamBacon'), '25 PCS', 405)
ON CONFLICT DO NOTHING;

-- Add special variations for Giant Takoyaki
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Giant Takoyaki'), 'Seafood', 109),
  ((SELECT id FROM menu_items WHERE name = 'Giant Takoyaki'), 'All Meat', 109)
ON CONFLICT DO NOTHING;
