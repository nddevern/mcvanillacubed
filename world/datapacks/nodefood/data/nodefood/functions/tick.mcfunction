# Disable nodefood
return 1

#execute as @a if score @s nodefood.ate_cake matches 1.. run function nodefood:ate_cake
#
## WATER
#execute as @a[nbt={SelectedItem:{id:"minecraft:potion",tag:{Potion:"minecraft:water"}}}] run scoreboard players set @s nodefood.holds_water 1
#execute as @a[scores={nodefood.drink_potion=1..,nodefood.holds_water=1..}] run effect give @s therm:cooling 150 0 true
#scoreboard players reset * nodefood.drink_potion
#execute as @a[nbt=!{SelectedItem:{id:"minecraft:potion",tag:{Potion:"minecraft:water"}}}] run scoreboard players reset @s nodefood.holds_water
#
## REGEN
#execute as @a run function nodefood:regen_process_tick