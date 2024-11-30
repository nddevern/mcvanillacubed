#scoreboard objectives add nodefood.regen0_ticks dummy
#scoreboard objectives add nodefood.regen1_ticks dummy
#scoreboard objectives add nodefood.regen2_ticks dummy
#scoreboard objectives add nodefood.regen3_ticks dummy
#scoreboard objectives add nodefood.regen_current_level dummy

# normally giving regen every tick doesn't work properly but when you do it for infinite seconds it works great
# so does removing and re-adding the effect every tick, somehow.

# fix if time becomes negative somehow
execute as @s if score @s nodefood.regen0_ticks matches ..0 run scoreboard players reset @s nodefood.regen0_ticks
execute as @s if score @s nodefood.regen1_ticks matches ..0 run scoreboard players reset @s nodefood.regen1_ticks
execute as @s if score @s nodefood.regen2_ticks matches ..0 run scoreboard players reset @s nodefood.regen2_ticks
execute as @s if score @s nodefood.regen3_ticks matches ..0 run scoreboard players reset @s nodefood.regen3_ticks

# set current regen level
scoreboard players reset @s nodefood.regen_current_level
execute as @s if score @s nodefood.regen0_ticks matches 1.. run scoreboard players set @s nodefood.regen_current_level 0
execute as @s if score @s nodefood.regen1_ticks matches 1.. run scoreboard players set @s nodefood.regen_current_level 1
execute as @s if score @s nodefood.regen2_ticks matches 1.. run scoreboard players set @s nodefood.regen_current_level 2
execute as @s if score @s nodefood.regen3_ticks matches 1.. run scoreboard players set @s nodefood.regen_current_level 3

# if the player has non-infinite regen, don't do anything
execute if entity @a[nbt={ActiveEffects:[{Id:10}]}] unless entity @a[nbt={ActiveEffects:[{Id:10, Duration: -1}]}] run scoreboard players reset @s nodefood.regen_current_level

# tick time
execute if score @s nodefood.regen_current_level matches 0 run scoreboard players remove @s nodefood.regen0_ticks 1
execute if score @s nodefood.regen_current_level matches 1 run scoreboard players remove @s nodefood.regen1_ticks 1
execute if score @s nodefood.regen_current_level matches 2 run scoreboard players remove @s nodefood.regen2_ticks 1
execute if score @s nodefood.regen_current_level matches 3 run scoreboard players remove @s nodefood.regen3_ticks 1

# if the player has infinite regeneration, clear it
execute if entity @a[nbt={ActiveEffects:[{Id:10, Duration: -1}]}] run effect clear @s regeneration

# give regen if newly changed or remove it
execute if score @s nodefood.regen_current_level matches 0 run effect give @s regeneration infinite 0 true
execute if score @s nodefood.regen_current_level matches 1 run effect give @s regeneration infinite 1 true
execute if score @s nodefood.regen_current_level matches 2 run effect give @s regeneration infinite 2 true
execute if score @s nodefood.regen_current_level matches 3 run effect give @s regeneration infinite 3 true