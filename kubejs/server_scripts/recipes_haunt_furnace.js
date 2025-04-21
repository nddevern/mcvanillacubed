
ServerEvents.recipes(event => {
    event.remove({ output: 'hauntfurnace:haunt_furnace' });
    event.remove({ output: 'hauntfurnace:powered_haunt_furnace' });
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'BBB',
            'BPB',
            'BSB'
        ],
        {
            B: 'minecraft:blackstone',
            P: 'minecraft:blaze_powder',
            S: 'minecraft:soul_soil'
        }
    );
    event.shaped(
        Item.of('hauntfurnace:haunt_furnace', 1),
        [
            'BBB',
            'BPB',
            'BSB'
        ],
        {
            B: 'minecraft:blackstone',
            P: 'minecraft:blaze_powder',
            S: 'minecraft:soul_sand'
        }
    );
});