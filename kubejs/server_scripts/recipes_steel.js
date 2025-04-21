
ServerEvents.recipes(event => {
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
});