
// This is needed to create custom anvil recipies in server_scripts
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