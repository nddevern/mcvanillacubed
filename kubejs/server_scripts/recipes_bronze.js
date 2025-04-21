
ServerEvents.recipes(event => {
    // Bronze
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:raw_copper',   'bronze:tin_ingot'])
    event.shapeless(Item.of('bronze:bronze_blend'), ['3x minecraft:copper_ingot', 'bronze:raw_tin'])
});