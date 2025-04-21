
ServerEvents.recipes(event => {
    // Repair
    createRepairRecipe(event, "bow", "string", 128)
    createRepairRecipe(event, "crossbow", "tripwire_hook", 128)

    createRepairRecipe(event, "kubejs:refined_diamond_helmet", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_chestplate", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_leggings", "kubejs:refined_diamond", 75)
    createRepairRecipe(event, "kubejs:refined_diamond_boots", "kubejs:refined_diamond", 100)
    createRepairRecipe(event, "kubejs:refined_diamond_hoe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_pickaxe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_axe", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_shovel", "kubejs:refined_diamond", 520)
    createRepairRecipe(event, "kubejs:refined_diamond_sword", "kubejs:refined_diamond", 520)
});

function createRepairRecipe(event, damagedItem, repairMaterial, durabilityToRepair) {
    event.custom({
        "type": "lychee:anvil_crafting",
        "item_in": [
            {
                "item": damagedItem,
                "lychee:tag": {
                    "Damage": 1
                }
            },
            {
                "item": repairMaterial
            }
        ],
        "item_out": {
            "item": damagedItem
        },
        "assembling": [
            {
                "type": "nbt_patch",
                "op": "copy",
                "from": "/item_in/0/tag",
                "path": "/item_out/tag"
            },
            {
                "type": "custom",
                "id": "repair_item",
                "target": "/item_out",
                "durability": durabilityToRepair
            }
        ],
        "contextual": {
            "type": "custom",
            "id": "is_item_damaged",
            "target": "/item_in/0"
        }
    });
}