
ServerEvents.recipes(event => {
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
});