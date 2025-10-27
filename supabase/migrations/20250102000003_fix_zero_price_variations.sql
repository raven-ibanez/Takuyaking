-- Fix Zero Price Variations
-- Some variations may have been created with price 0 (or very low prices)
-- This migration ensures all variations have their proper prices

-- Update Yasaiyaki variations (if price is 0 or too low)
UPDATE variations 
SET price = 50 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Yasaiyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 90 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Yasaiyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 250 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Yasaiyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Hamyaki variations
UPDATE variations 
SET price = 55 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Hamyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 100 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Hamyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 310 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Hamyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Baconchiziyaki variations
UPDATE variations 
SET price = 55 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Baconchiziyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 100 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Baconchiziyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 320 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Baconchiziyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Cheezyaki variations
UPDATE variations 
SET price = 60 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Cheezyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 115 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Cheezyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 330 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Cheezyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Kaniyaki variations
UPDATE variations 
SET price = 65 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Kaniyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 120 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Kaniyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 370 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Kaniyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Octochiziyaki variations (ensure these match the corrected prices)
UPDATE variations 
SET price = 70 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Octochiziyaki') 
  AND name = '4 PCS' AND price = 0;

UPDATE variations 
SET price = 200 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Octochiziyaki') 
  AND name = '8 PCS' AND price = 0;

UPDATE variations 
SET price = 245 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Octochiziyaki') 
  AND name = '12 PCS' AND price = 0;

UPDATE variations 
SET price = 455 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Octochiziyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update Ebiyaki variations
UPDATE variations 
SET price = 70 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Ebiyaki') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 130 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Ebiyaki') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 385 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Ebiyaki') 
  AND name = '25 PCS' AND price = 0;

-- Update OctoKani variations
UPDATE variations 
SET price = 75 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'OctoKani') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 140 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'OctoKani') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 400 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'OctoKani') 
  AND name = '25 PCS' AND price = 0;

-- Update HamBacon variations
UPDATE variations 
SET price = 75 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'HamBacon') 
  AND name = '3 PCS' AND price = 0;

UPDATE variations 
SET price = 130 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'HamBacon') 
  AND name = '7 PCS' AND price = 0;

UPDATE variations 
SET price = 405 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'HamBacon') 
  AND name = '25 PCS' AND price = 0;

-- Update Giant Takoyaki variations
UPDATE variations 
SET price = 109 
WHERE menu_item_id = (SELECT id FROM menu_items WHERE name = 'Giant Takoyaki') 
  AND name IN ('Seafood', 'All Meat') AND price = 0;

