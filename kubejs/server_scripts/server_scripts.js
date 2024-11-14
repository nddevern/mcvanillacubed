// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    event.remove({ output: 'melting:melter' })
    event.shaped(
        Item.of('melting:melter', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:nether_wart',
            C: 'minecraft:glowstone_dust'
        }
    );
    event.shaped(
        Item.of('melting:melter', 1),
        [
            'AAA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:nether_wart',
            C: 'minecraft:glowstone_dust'
        }
    );

    event.remove({ output: 'beersteel:steel_ingot' })
    event.custom({
        type: 'melting:melting',
        category: 'blocks',
        cookingtime: 200,
        experience: 0.3,
        ingredient: { item: 'beersteel:crude_steel' },
        result: 'beersteel:steel_ingot'
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
