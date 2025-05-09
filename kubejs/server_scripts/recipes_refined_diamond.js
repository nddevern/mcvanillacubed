
ServerEvents.recipes(event => {
    // Refined Diamond
    event.shapeless(Item.of('kubejs:refined_diamond'), ['2x minecraft:diamond', 'minecraft:nether_star']).keepIngredient('minecraft:nether_star');
    event.shapeless(Item.of('2x minecraft:diamond'), ['kubejs:refined_diamond', 'minecraft:nether_star']).keepIngredient('minecraft:nether_star');

    //   Refined Diamond Block
    event.shapeless(Item.of('9x kubejs:refined_diamond'), ['kubejs:refined_diamond_block'])
    event.shapeless(Item.of('kubejs:refined_diamond_block'), ['9x kubejs:refined_diamond'])

    //   Refined Diamond Armor
    event.shaped(
        Item.of('kubejs:refined_diamond_helmet', 1),
        [
            'RRR',
            'R R'
        ],
        {R: 'kubejs:refined_diamond'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_chestplate', 1),
        [
            'R R',
            'RRR',
            'RRR'
        ],
        {R: 'kubejs:refined_diamond'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_leggings', 1),
        [
            'RRR',
            'R R',
            'R R'
        ],
        {R: 'kubejs:refined_diamond'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_boots', 1),
        [
            'R R',
            'R R'
        ],
        {R: 'kubejs:refined_diamond'}
    );

    //   Refined Diamond Tools
    event.shaped(
        Item.of('kubejs:refined_diamond_hoe', 1),
        [
            'RR',
            ' S',
            ' S'
        ],
        {R: 'kubejs:refined_diamond', S: 'minecraft:stick'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_pickaxe', 1),
        [
            'RRR',
            ' S ',
            ' S '
        ],
        {R: 'kubejs:refined_diamond', S: 'minecraft:stick'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_axe', 1),
        [
            'RR',
            'RS',
            ' S'
        ],
        {R: 'kubejs:refined_diamond', S: 'minecraft:stick'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_shovel', 1),
        [
            'R',
            'S',
            'S'
        ],
        {R: 'kubejs:refined_diamond', S: 'minecraft:stick'}
    );
    event.shaped(
        Item.of('kubejs:refined_diamond_sword', 1),
        [
            'R',
            'R',
            'S'
        ],
        {R: 'kubejs:refined_diamond', S: 'minecraft:stick'}
    );

    // Netherite upgrades
    replceNetheriteUpgrade(event, 'shovel');
    replceNetheriteUpgrade(event, 'pickaxe');
    replceNetheriteUpgrade(event, 'axe');
    replceNetheriteUpgrade(event, 'hoe');
    replceNetheriteUpgrade(event, 'sword');
    replceNetheriteUpgrade(event, 'helmet');
    replceNetheriteUpgrade(event, 'chestplate');
    replceNetheriteUpgrade(event, 'leggings');
    replceNetheriteUpgrade(event, 'boots');
})

function replceNetheriteUpgrade(event, tooltype)
{
    event.replaceInput(
        { output: 'minecraft:netherite_' + tooltype, input: 'minecraft:diamond_' + tooltype },
        'minecraft:diamond_' + tooltype,
        'kubejs:refined_diamond_' + tooltype
    )
}