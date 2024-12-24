// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    event.remove({ output: 'hauntfurnace:haunt_furnace' });
    event.remove({ output: 'hauntfurnace:powered_haunt_furnace' });
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'BBB',
            'BPB',
            'BSB'
        ],
        {
            B: 'minecraft:blackstone',
            P: 'minecraft:blaze_powder',
            S: 'minecraft:soul_soil'
        }
    );
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'BBB',
            'BPB',
            'BSB'
        ],
        {
            B: 'minecraft:blackstone',
            P: 'minecraft:blaze_powder',
            S: 'minecraft:soul_sand'
        }
    );

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

    // Steel
    event.remove({ output: 'beersteel:steel_ingot' });
    event.custom({
        type: 'hauntfurnace:haunting',
        cookingtime: 200,
        ingredient: { item: 'beersteel:crude_steel' },
        result: 'beersteel:steel_ingot',
        experience: 0.4
    });
    event.shapeless(Item.of('beersteel:steel_ingot'), ['9x beersteel:steel_nugget'])
    event.shapeless(Item.of('9x beersteel:steel_ingot'), ['beersteel:steel_block'])

    // Rose gold
    //   Rose Ingot
    event.remove({ output: 'progression_reborn:rose_ingot' });
    event.custom({
        type: 'hauntfurnace:haunting',
        cookingtime: 100,
        ingredient: { item: 'progression_reborn:raw_rose' },
        result: 'progression_reborn:rose_ingot',
        experience: 0.2
    });
    event.shapeless(Item.of('progression_reborn:rose_ingot'), ['9x progression_reborn:rose_nugget'])
    event.shapeless(Item.of('9x progression_reborn:rose_ingot'), ['progression_reborn:rose_block'])

    //   Rose Block
    event.remove({ output: 'progression_reborn:rose_block' });
    event.custom({
        type: 'hauntfurnace:haunting',
        cookingtime: 900,
        ingredient: { item: 'progression_reborn:raw_rose_block' },
        result: 'progression_reborn:rose_block',
        experience: 1.8
    });
    event.shapeless(Item.of('progression_reborn:rose_block'), ['9x progression_reborn:rose_ingot'])

    //   Rose Nugget
    event.remove({ output: 'progression_reborn:rose_nugget' });
    event.custom({
        type: 'hauntfurnace:haunting',
        cookingtime: 12,
        ingredient: { item: 'progression_reborn:raw_rose_nugget' },
        result: 'progression_reborn:rose_nugget',
        experience: 0.02
    });
    event.shapeless(Item.of('9x progression_reborn:rose_nugget'), ['progression_reborn:rose_ingot'])

    //   Raw Rose
    event.shapeless(Item.of('progression_reborn:raw_rose'), ['3x minecraft:gold_ingot', 'minecraft:copper_ingot'])
    event.shapeless(Item.of('progression_reborn:raw_rose'), ['3x minecraft:raw_gold', 'minecraft:raw_copper'])
    event.shapeless(Item.of('progression_reborn:raw_rose'), ['3x minecraft:gold_ingot', 'minecraft:raw_copper'])
    event.shapeless(Item.of('progression_reborn:raw_rose'), ['3x minecraft:raw_gold', 'minecraft:copper_ingot'])

    //   Rose Armor
    event.replaceOutput(
        { id: 'progression_reborn:rose_helmet' },
        'progression_reborn:rose_helmet',
        Item.of('progression_reborn:rose_helmet', {Damage:0,Enchantments:[{id:"minecraft:fire_protection",lvl:2},{id:"minecraft:blast_protection",lvl:2}]})
    );
    event.replaceOutput(
        { id: 'progression_reborn:rose_chestplate' },
        'progression_reborn:rose_chestplate',
        Item.of('progression_reborn:rose_chestplate', {Damage:0,Enchantments:[{id:"minecraft:fire_protection",lvl:2},{id:"minecraft:blast_protection",lvl:2}]})
    );
    event.replaceOutput(
        { id: 'progression_reborn:rose_leggings' },
        'progression_reborn:rose_leggings',
        Item.of('progression_reborn:rose_leggings', {Damage:0,Enchantments:[{id:"minecraft:fire_protection",lvl:2},{id:"minecraft:blast_protection",lvl:2}]})
    );
    event.replaceOutput(
        { id: 'progression_reborn:rose_boots' },
        'progression_reborn:rose_boots',
        Item.of('progression_reborn:rose_boots', {Damage:0,Enchantments:[{id:"minecraft:fire_protection",lvl:2},{id:"minecraft:blast_protection",lvl:2}]})
    );

    //   Rose Tools
    event.replaceOutput(
        { id: 'progression_reborn:rose_sword' },
        'progression_reborn:rose_sword',
        Item.of('progression_reborn:rose_sword', {Damage:0,Enchantments:[{id:"minecraft:fire_aspect",lvl:1}]})
    );
    event.shaped(
        Item.of('progression_reborn:rose_shovel', 1),
        [
            'R',
            'S',
            'S'
        ],
        {
            R: 'progression_reborn:rose_ingot',
            S: 'minecraft:stick'
        }
    );

    // Refined Diamond
    event.shapeless(Item.of('kubejs:refined_diamond'), ['minecraft:diamond', 'minecraft:nether_star']).keepIngredient('minecraft:nether_star');

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

    // Bronze
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:raw_copper',   'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:raw_tin'])

    // Repair
    createRepairRecipe(event, "bow", "string", 128)
    createRepairRecipe(event, "crossbow", "tripwire_hook", 128)
    createRepairRecipe(event, "kubejs:refined_diamond_helmet", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_chestplate", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_leggings", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_boots", "kubejs:refined_diamond", 100)
    createRepairRecipe(event, "kubejs:refined_diamond_hoe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_pickaxe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_axe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_shovel", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_sword", "kubejs:refined_diamond", 520)


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

function createRepairRecipe(event, damagedItem, repairMaterial, durabilityToRepair) {
    event.custom({
        "type": "lychee:anvil_crafting",
        "item_in": [
            {
                "item": damagedItem,
                "lychee:tag": {
                    "Damage": 1
                }
            },
            {
                "item": repairMaterial
            }
        ],
        "item_out": {
            "item": damagedItem
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
                "durability": durabilityToRepair
            }
        ],
        "contextual": {
            "type": "custom",
            "id": "is_item_damaged",
            "target": "/item_in/0"
        }
    });
}