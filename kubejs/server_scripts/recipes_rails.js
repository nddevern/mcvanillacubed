
ServerEvents.recipes(event => {
    // Rails
    event.remove({ output: 'minecraft:rail' });
    event.remove({ output: 'minecraft:powered_rail' });

    createStandardRailRecipe(event, 'minecraft:rail', '#c:iron_ingots', 'minecraft:stick', 32);
    createStandardRailRecipe(event, 'minecraft:rail', 'paradise_lost:olvite', 'minecraft:stick', 32);

    createRailRecipe(event, 'minecraft:powered_rail', 'minecraft:copper_ingot', 'minecraft:stick', 'minecraft:redstone', 8);
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