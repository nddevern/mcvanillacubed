
BlockEvents.modification(event => {
    event.modify('minecraft:soul_torch',          block => { block.lightEmission = 15 })
    event.modify('minecraft:soul_wall_torch',     block => { block.lightEmission = 15 })
    event.modify('minecraft:soul_lantern',        block => { block.lightEmission = 15 })
    event.modify('minecraft:soul_campfire',       block => { block.lightEmission = 15 })
    event.modify('minecraft:wall_torch',          block => { block.lightEmission = 12 })
    event.modify('minecraft:torch',               block => { block.lightEmission = 12 })
    event.modify('minecraft:lantern',             block => { block.lightEmission = 12 })
    event.modify('minecraft:campfire',            block => { block.lightEmission = 12 })
    event.modify('extendedcopper:copper_lantern', block => { block.lightEmission = 12 })
});