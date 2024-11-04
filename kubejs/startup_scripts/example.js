// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//StartupEvents.registry('block', event => {
//    event.create('example_block')
//    .displayName('Mammoth Wool')
//    .material('wool')
//    .hardness(0.8)
//    .resistance(1.5)
//    .unbreakable()
//    .tagBlock('minecraft:mineable/shovel')
//    .tagBlock('minecraft:wool')
//    .requiresTool(false)
//})
//example_block.png
console.info('NoahTesta')

setArmorSetProtection('minecraft', 'netherite', 3, 8, 6, 3)
setArmorSetToughness('minecraft', 'netherite', 5)
//console.info('NoahTest2')

function setArmorSetProtection(namespace, material, helmet, chestplate, leggings, boots) {
    var prefix = namespace + ':' + material + '_'
    setArmorProtection(prefix + 'helmet', helmet)
    setArmorProtection(prefix + 'chestplate', chestplate)
    setArmorProtection(prefix + 'leggings', leggings)
    setArmorProtection(prefix + 'boots', boots)
}

function setArmorProtection(fullItemName, value) {
    ItemEvents.modification(event => {
        event.modify(fullItemName, item => {
            item.armorProtection = value
        })
    })
}

function setArmorSetToughness(namespace, material, value) { // value is set per piece, so the set toughness is really value * 4
    var prefix = namespace + ':' + material + '_'
    setArmorToughness(prefix + 'helmet', value)
    setArmorToughness(prefix + 'chestplate', value)
    setArmorToughness(prefix + 'leggings', value)
    setArmorToughness(prefix + 'boots', value)
}

function setArmorToughness(fullItemName, value) {
    ItemEvents.modification(event => {
        event.modify(fullItemName, item => {
            item.armorToughness = value
        })
    })
}