// Script to update Octochiziyaki variations
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const envPath = join(__dirname, '..', '.env');
let envVars = {};
try {
  const envContent = readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
} catch (error) {
  console.log('No .env file found, using process.env');
}

const supabaseUrl = envVars.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = envVars.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function updateOctochiziyakiVariations() {
  try {
    console.log('Updating Octochiziyaki variations...');
    
    // First, get the menu item ID
    const { data: menuItem, error: itemError } = await supabase
      .from('menu_items')
      .select('id')
      .eq('name', 'Octochiziyaki')
      .single();
    
    if (itemError) {
      console.error('Error finding Octochiziyaki:', itemError);
      return;
    }
    
    console.log('Found Octochiziyaki with ID:', menuItem.id);
    
    // Delete existing variations
    const { error: deleteError } = await supabase
      .from('variations')
      .delete()
      .eq('menu_item_id', menuItem.id);
    
    if (deleteError) {
      console.error('Error deleting existing variations:', deleteError);
      return;
    }
    
    console.log('Deleted existing variations');
    
    // Insert new variations
    const newVariations = [
      { menu_item_id: menuItem.id, name: '4 PCS', price: 70 },
      { menu_item_id: menuItem.id, name: '8 PCS', price: 130 },
      { menu_item_id: menuItem.id, name: '12 PCS', price: 175 },
      { menu_item_id: menuItem.id, name: '25 PCS', price: 385 }
    ];
    
    const { error: insertError } = await supabase
      .from('variations')
      .insert(newVariations);
    
    if (insertError) {
      console.error('Error inserting new variations:', insertError);
      return;
    }
    
    console.log('Successfully updated Octochiziyaki variations!');
    console.log('New variations:');
    newVariations.forEach(v => {
      console.log(`- ${v.name}: ₱${70 + v.price} (base ₱70 + variation ₱${v.price})`);
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the update
updateOctochiziyakiVariations();
