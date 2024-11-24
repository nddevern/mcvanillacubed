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

setItemProperty(
    getPrefix('beersteel', 'steel') + 'sword',
    (x, y) => x.attackDamage = 8.0
);

//             namespace             armor            prot  durability
configureArmor('minecraft',          'golden',          9,  385);
configureArmor('progression_reborn', 'copper',          11, 400);
configureArmor('minecraft',          'chainmail',       13, 825);
configureArmor('minecraft',          'iron',            15, 450);
configureArmor('progression_reborn', 'rose',            16, 1100);
configureArmor('bronze',             'bronze',          20, 825);
configureArmor('minecraft',          'diamond',         20, 1000);
configureArmor('beersteel',          'steel',           30, 1400);
configureArmor('x',                  'refined_diamond', 36, 1815); // TODO
configureArmor('minecraft',          'netherite',       40, 2035);

function configureArmor(namespace, material, prot, durability) {
    // The ratios hardcoded here are based on the vanilla game's average distributions
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
        getArmorValues([20, 29, 27, 24], durability),
        (x, y) => x.maxDamage = y
    );
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