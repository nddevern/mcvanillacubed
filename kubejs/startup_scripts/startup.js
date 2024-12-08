// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const MiningLevels = Object.freeze({
    HAND: -1,
    WOOD: 0,
    STONE: 1,
    IRON: 2,
    DIAMOND: 3,
    NETHERITE: 4
});

// lolmfv:blackstone_furnace
StartupEvents.registry('block', event => {

});

setItemProperty(
    getPrefix('minecraft', 'diamond') + 'pickaxe',
    (x, y) => x.setTier(tier => {tier.level = MiningLevels.IRON})
);

//                 namespace,            material,         prot, durabilityMultiplier, swordDamage
configureMaterial('minecraft',          'golden',          9,    1.00,                 4.0);
configureMaterial('progression_reborn', 'copper',          11,   0.66,                 5.0);
configureMaterial('minecraft',          'chainmail',       13,   1.00,                 1.0);
configureMaterial('minecraft',          'iron',            15,   0.55,                 5.5);
configureMaterial('progression_reborn', 'rose',            16,   1.00,                 5.5);
configureMaterial('bronze',             'bronze',          20,   1.00,                 6.5);
configureMaterial('minecraft',          'diamond',         20,   1.00,                 5.5);
configureMaterial('beersteel',          'steel',           30,   1.00,                 9.0);
configureMaterial('x',                  'refined_diamond', 36,   1.00,                11.0); // TODO
configureMaterial('minecraft',          'netherite',       40,   1.00,                13.0);

// vvv-- This section is needed to create custom anvil recipies in server_scripts --vvv
LycheeEvents.customAction('repair_item', event => {
    let durability = event.data.durability
    event.action.applyFunc = (recipe, ctx, times) => {
        let material = ctx.getItem(1)
        let tool = ctx.getItem(2)
        let cost = 0
        for (; cost < material.count && tool.damaged; cost++) {
            tool.setDamageValue(tool.damageValue - durability)
        }
        ctx.materialCost = cost
    }
})

LycheeEvents.customCondition('is_item_damaged', event => {
    let target = LycheeReference.fromJson(event.data, 'target')
    event.condition.testFunc = (recipe, ctx, times) => {
        let indexes = recipe.getItemIndexes(target)
        return ctx.getItem(indexes.get(0)).damaged ? times : 0
    }
})
// ^^^------------------------------------------------------------------------------^^^

function configureMaterial(namespace, material, prot, durabilityMultiplier, swordDamage) {
    var prefix = getPrefix(namespace, material);
    var durabilityFunction = (x) => Math.max(Math.round(x.maxDamage *= durabilityMultiplier), 1);

    // ARMOR; The ratios hardcoded here are based on the vanilla game's average distributions
    setArmorSetProperty(
        namespace,
        material,
        getArmorValues([15, 40, 31, 14], prot),
        (x, y) => x.armorProtection = y
    );
    setArmorSetProperty(
        namespace,
        material,
        [0, 0, 0, 0],
        (x, y) => x.armorToughness = y
    );
    setArmorSetProperty(
        namespace,
        material,
        [null, null, null, null],//getArmorValues([20, 29, 27, 24], durability),
        (x, y) => durabilityFunction(x)
    );

    // TOOLS/WEAPONS DURABILITY:
    setItemProperty(prefix + 'hoe', durabilityFunction);
    setItemProperty(prefix + 'pickaxe', durabilityFunction);
    setItemProperty(prefix + 'axe', durabilityFunction);
    setItemProperty(prefix + 'shovel', durabilityFunction);
    setItemProperty(prefix + 'knife', durabilityFunction);
    setItemProperty(getPrefix('farmersdelight', material) + 'knife', durabilityFunction);
    setItemProperty(getPrefix('betterend', material) + 'hammer', durabilityFunction);
    setItemProperty(prefix + 'sword', durabilityFunction);

    // SWORD DAMAGE
    setItemProperty(prefix + 'sword', (x) => x.attackDamage = swordDamage - 1) // Every time I set a sword's attackDamage via script, in game it appears one higher. This accounts for that.
}

// all arrays go like: helm, chest, legs, boots
// ratios are a fraction out of 100
// all 4 values in the array should total to 100
function getArmorValues(ratios, total) {
    var list = [];
    var boots = Math.max(Math.round((ratios[3]/100)*total), 1);
    var legs = Math.max(Math.round((ratios[2]/100)*total), 1);
    var helm = Math.max(Math.round((ratios[0]/100)*total), 1);
    var chest = Math.max(total - boots - legs - helm, 1);
    list.push(helm);
    list.push(chest);
    list.push(legs);
    list.push(boots);
    return list;
}

//lambda example to pass into setArmorSetProperty:
//(x, y) => x.armorProtection = y
function setArmorSetProperty(namespace, material, values, lambda) {
    var prefix = getPrefix(namespace, material);
    setItemProperty(prefix + 'helmet', (x) => lambda(x, values[0]));
    setItemProperty(prefix + 'chestplate', (x) => lambda(x, values[1]));
    setItemProperty(prefix + 'leggings', (x) => lambda(x, values[2]));
    setItemProperty(prefix + 'boots', (x) => lambda(x, values[3]));
}

function setItemProperty(fullItemName, lambda) {
    ItemEvents.modification(event => {
        event.modify(fullItemName, item => {
            lambda(item);
        })
    })
}

function getPrefix(namespace, material) {
    return namespace + ':' + material + '_';
}