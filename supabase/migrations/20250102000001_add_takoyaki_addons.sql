/*
  # Add Takoyaki Add-ons to All Menu Items

  1. Add-ons to be added to ALL menu items:
    - Bonito Flakes: ₱10
    - Pork Floss: ₱10
    - Slice Cheese: ₱10
    - Spicy Mayo: ₱15
    - Sesame Dressing: ₱15
    - Takoyaki Sauce: ₱15
    - Cheese Sauce: ₱15
    - Mayo: ₱15

  2. Features
    - These add-ons will be available for all menu items
    - Categorized under 'sauces' and 'toppings' categories
    - No new category needed - using existing add-on system
*/

-- Add takoyaki add-ons to all existing menu items
-- Using WHERE NOT EXISTS to prevent duplicates since there's no unique constraint

-- Bonito Flakes (₱10) - Topping category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Bonito Flakes' as name,
  10 as price,
  'toppings' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Bonito Flakes'
);

-- Pork Floss (₱10) - Topping category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Pork Floss' as name,
  10 as price,
  'toppings' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Pork Floss'
);

-- Slice Cheese (₱10) - Topping category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Slice Cheese' as name,
  10 as price,
  'toppings' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Slice Cheese'
);

-- Spicy Mayo (₱15) - Sauce category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Spicy Mayo' as name,
  15 as price,
  'sauces' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Spicy Mayo'
);

-- Sesame Dressing (₱15) - Sauce category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Sesame Dressing' as name,
  15 as price,
  'sauces' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Sesame Dressing'
);

-- Takoyaki Sauce (₱15) - Sauce category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Takoyaki Sauce' as name,
  15 as price,
  'sauces' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Takoyaki Sauce'
);

-- Cheese Sauce (₱15) - Sauce category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Cheese Sauce' as name,
  15 as price,
  'sauces' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Cheese Sauce'
);

-- Mayo (₱15) - Sauce category
INSERT INTO add_ons (menu_item_id, name, price, category)
SELECT 
  id as menu_item_id,
  'Mayo' as name,
  15 as price,
  'sauces' as category
FROM menu_items
WHERE NOT EXISTS (
  SELECT 1 FROM add_ons 
  WHERE add_ons.menu_item_id = menu_items.id 
  AND add_ons.name = 'Mayo'
);

-- Verify the add-ons were added
-- This query will show how many add-ons were added per menu item
SELECT 
  mi.name as menu_item_name,
  COUNT(ao.id) as addon_count
FROM menu_items mi
LEFT JOIN add_ons ao ON mi.id = ao.menu_item_id
GROUP BY mi.id, mi.name
ORDER BY mi.name;