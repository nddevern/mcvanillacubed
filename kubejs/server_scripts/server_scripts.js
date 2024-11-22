// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    event.remove({ output: 'hauntfurnace:haunt_furnace' });
    event.remove({ output: 'hauntfurnace:powered_haunt_furnace' });
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:blackstone',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:soul_campfire'
        }
    );
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'AAA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:blackstone',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:soul_campfire'
        }
    );

    event.remove({ output: 'beersteel:steel_ingot' });
    event.custom({
        type: 'hauntfurnace:haunting',
        cookingtime: 200,
        ingredient: { item: 'beersteel:crude_steel' },
        result: 'beersteel:steel_ingot',
        experience: 0.3
    });
});




const obsidianBlocks = [
    'minecraft:obsidian'
];

const deepslateBlocks = [
    'minecraft:deepslate',
    'minecraft:chiseled_deepslate',
    'minecraft:polished_deepslate',
    'minecraft:deepslate_bricks'
];

ServerEvents.tags('block', event => {

    obsidianBlocks.forEach((x) => event.remove('minecraft:needs_diamond_tool', x));
    obsidianBlocks.forEach((x) => event.add('minecraft:needs_iron_tool', x));

    deepslateBlocks.forEach((x) => event.remove('minecraft:needs_stone_tool', x));
    deepslateBlocks.forEach((x) => event.remove('minecraft:needs_iron_tool', x));
    deepslateBlocks.forEach((x) => event.add('minecraft:needs_diamond_tool', x));

});
