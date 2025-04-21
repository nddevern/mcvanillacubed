
ServerEvents.recipes(event => {
    // Rail
    event.remove({ output: 'minecraft:rail' });
    createStandardRailRecipe(event, 'minecraft:rail', '#c:iron_ingots', 'minecraft:stick', 32);
    createStandardRailRecipe(event, 'minecraft:rail', 'paradise_lost:olvite', 'minecraft:stick', 32);

    // Powered Rail
    event.remove({ output: 'minecraft:powered_rail' });
    createRailRecipe(event, 'minecraft:powered_rail', 'minecraft:gold_ingot', 'minecraft:stick', 'minecraft:redstone', 8);

    // Diamond Rail
    event.remove({ output: 'diamondrails:diamond_rail' });
    createRailRecipe(event, 'diamondrails:diamond_rail', 'minecraft:diamond', 'minecraft:smooth_quartz',         'minecraft:redstone_block', 2);
    createRailRecipe(event, 'diamondrails:diamond_rail', 'minecraft:diamond', 'cinderscapes:smooth_rose_quartz', 'minecraft:redstone_block', 2);

    // Enhanced Diamond Rail
    event.remove({ output: 'diamondrails:enhanced_diamond_rail' });
    // Removed for now. Todo in the future - if you ever decide to replace the existing diamond rails with enhanced ones, give uses a crafting recipe to upgrade them for free.

    //Netherite Rail
    event.remove({ output: 'diamondrails:netherite_rail' });
    // Removed for now
});

function createStandardRailRecipe(event, output, inputIngot, inputStick, quantity) {
    createRailRecipe(event, output, inputIngot, inputStick, 'minecraft:air', quantity)
};

function createRailRecipe(event, output, inputIngot, inputStick, inputRedstone, quantity) {
    event.shaped(
        Item.of(output, quantity),
        [
          'I I',
          'ISI',
          'IRI'
        ],
        {
          I: inputIngot,
          S: inputStick,
          R: inputRedstone
        }
      )
};