-- Update Octochiziyaki variations to show total prices (not additional prices)
-- Variations should show total price for each size:
-- 4 PCS: ₱70 total
-- 8 PCS: ₱200 total  
-- 12 PCS: ₱245 total
-- 25 PCS: ₱455 total

-- First, delete existing variations for Octochiziyaki
DELETE FROM variations WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Octochiziyaki');

-- Insert the correct variations for Octochiziyaki (total prices)
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '4 PCS', 70),
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '8 PCS', 200),
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '12 PCS', 245),
  ((SELECT id FROM menu_items WHERE name = 'Octochiziyaki'), '25 PCS', 455)
ON CONFLICT DO NOTHING;
