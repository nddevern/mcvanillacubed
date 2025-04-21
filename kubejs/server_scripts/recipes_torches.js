
ServerEvents.recipes(event => {
    // Torches, Soul Torches, and Soul Compfire
    event.remove({ output: 'minecraft:torch' });
    event.shaped(Item.of('minecraft:torch', 8), ['C','S'], { C: 'minecraft:coal',     S: 'minecraft:stick' });
    event.shaped(Item.of('minecraft:torch', 8), ['C','S'], { C: 'minecraft:charcoal', S: 'minecraft:stick' });
    event.remove({ output: 'minecraft:soul_torch' });
    event.shapeless(Item.of('3x minecraft:soul_torch'), ['2x minecraft:torch', 'minecraft:nether_star']).keepIngredient('minecraft:nether_star');
    event.remove({ output: 'minecraft:soul_lantern', input: 'minecraft:lantern' })
    event.remove({ output: 'minecraft:soul_campfire' })
    event.shaped(
        Item.of('minecraft:soul_campfire', 1),
        [
            ' S ',
            'SNS',
            'LLL'
        ],
        {
            S: 'minecraft:stick',
            N: 'minecraft:nether_star',
            L: '#minecraft:logs'
        }
    ).keepIngredient('minecraft:nether_star');
});