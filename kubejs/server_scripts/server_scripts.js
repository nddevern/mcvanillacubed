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

    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:raw_copper',   'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:raw_tin'])

    event.custom({
        "type": "lychee:anvil_crafting",
        "item_in": [
            {
                "item": "bow",
                "lychee:tag": {
                    "Damage": 1
                }
            },
            {
                "item": "string"
            }
        ],
        "item_out": {
            "item": "bow"
        },
        "assembling": [
            {
                "type": "nbt_patch",
                "op": "copy",
                "from": "/item_in/0/tag",
                "path": "/item_out/tag"
            },
            {
                "type": "custom",
                "id": "repair_item",
                "target": "/item_out",
                "durability": 128
            }
        ],
        "contextual": {
            "type": "custom",
            "id": "is_item_damaged",
            "target": "/item_in/0"
        }
    });

});

const obsidianBlocks = [
    'minecraft:obsidian'
];

const minecraftDeepslateBlocks = [
    'deepslate',
    'chiseled_deepslate',
    'polished_deepslate',
    'deepslate_bricks',
    'deepslate_tiles',
    'reinforced_deepslate',
    'deepslate_coal_ore',
    'deepslate_iron_ore',
    'deepslate_redstone_ore',
    'deepslate_diamond_ore',
    'deepslate_emerald_ore',
    'deepslate_copper_ore',
    'deepslate_lapis_ore',
    'deepslate_gold_ore'
];

var deepslateBlocks = [
    'bronze:deepslate_tin_ore',
    'galosphere:deepslate_silver_ore',
    'life_crystals:deepslate_life_crystal_ore',
    'mythicupgrades:deepslate_topaz_ore',
    'mythicupgrades:deepslate_peridot_ore',
    'mythicupgrades:deepslate_aquamarine_ore',
    'regions_unexplored:deepslate_prismoss',
    'regions_unexplored:deepslate_grass_block',
    'regions_unexplored:deepslate_viridescent_nylium'
];
minecraftDeepslateBlocks.forEach((x) => deepslateBlocks.push('minecraft:' + x))

ServerEvents.tags('block', event => {

    obsidianBlocks.forEach((x) => event.remove('minecraft:needs_diamond_tool', x));
    obsidianBlocks.forEach((x) => event.add('minecraft:needs_iron_tool', x));

    deepslateBlocks.forEach((x) => event.remove('minecraft:needs_stone_tool', x));
    deepslateBlocks.forEach((x) => event.remove('minecraft:needs_iron_tool',  x));
    deepslateBlocks.forEach((x) => event.add('minecraft:needs_diamond_tool',  x));

});
