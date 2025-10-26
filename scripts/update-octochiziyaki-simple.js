// Simple script to update Octochiziyaki variations
const { createClient } = require('@supabase/supabase-js');

// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.log('Please set your Supabase credentials in environment variables or update this script');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateOctochiziyaki() {
  try {
    console.log('Updating Octochiziyaki variations...');
    
    // Get the menu item ID
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
    
    // Insert new variations with total prices
    const newVariations = [
      { menu_item_id: menuItem.id, name: '4 PCS', price: 70 },
      { menu_item_id: menuItem.id, name: '8 PCS', price: 200 },
      { menu_item_id: menuItem.id, name: '12 PCS', price: 245 },
      { menu_item_id: menuItem.id, name: '25 PCS', price: 455 }
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
      console.log(`- ${v.name}: ₱${v.price}`);
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

updateOctochiziyaki();
