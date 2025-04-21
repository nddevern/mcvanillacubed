
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