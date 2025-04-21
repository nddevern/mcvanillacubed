//priority: 0

// This script needs to run before tool_tiers.js

ItemEvents.toolTierRegistry(event => { // https://minecraft.wiki/w/Tiers
    event.add('refined_diamond', tier => {
        tier.uses = 1561
        tier.speed = 8.0
        tier.attackDamageBonus = 3.0
        tier.level = 3
        tier.enchantmentValue = 10
        tier.repairIngredient = 'kubejs:refined_diamond'
    })
});

ItemEvents.armorTierRegistry(event => { // https://minecraft.wiki/w/Armor_materials
    event.add('refined_diamond', tier => {
        tier.durabilityMultiplier = 33 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [3, 8, 6, 3] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
        tier.enchantmentValue = 10
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
        tier.repairIngredient = 'kubejs:refined_diamond'
        tier.toughness = 2.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })
});

StartupEvents.registry('block', event => {
    event.create('refined_diamond_block')
        .soundType('amethyst')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .displayName('Block of Refined Diamond')
});

StartupEvents.registry('item', e => {
    e.create('refined_diamond');
    e.create('refined_diamond_hoe', 'hoe').tier('refined_diamond');
    e.create('refined_diamond_pickaxe', 'pickaxe').tier('refined_diamond');
    e.create('refined_diamond_axe', 'axe').tier('refined_diamond');
    e.create('refined_diamond_shovel', 'shovel').tier('refined_diamond');
    //e.create('refined_diamond_knife', 'knife');
    //e.create('refined_diamond_hammer', 'hammer');
    e.create('refined_diamond_sword', 'sword').tier('refined_diamond');
    e.create('refined_diamond_helmet', 'helmet').tier('refined_diamond');
    e.create('refined_diamond_chestplate', 'chestplate').tier('refined_diamond');
    e.create('refined_diamond_leggings', 'leggings').tier('refined_diamond');
    e.create('refined_diamond_boots', 'boots').tier('refined_diamond');
});