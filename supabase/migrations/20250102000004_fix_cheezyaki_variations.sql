-- Fix Cheezyaki variations to match the correct prices
-- The variations should show total prices for each size:
-- 3 PCS: ₱60 total
-- 7 PCS: ₱115 total
-- 25 PCS: ₱330 total

-- First, delete existing variations for Cheezyaki
DELETE FROM variations WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Cheezyaki');

-- Insert the correct variations for Cheezyaki (total prices)
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '3 PCS', 60),
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '7 PCS', 115),
  ((SELECT id FROM menu_items WHERE name = 'Cheezyaki'), '25 PCS', 330)
ON CONFLICT DO NOTHING;

