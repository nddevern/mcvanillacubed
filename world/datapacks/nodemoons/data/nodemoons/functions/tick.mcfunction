# requires nodeessentials with daytime

###########################################
############ EVERY TICK ###################
###########################################

############ HORDE MOON ###################
#If 15 or more mobs are within 20 blocks of a player, kill all mobs 21 or more blocks from that player for which that player is the closest player to that mob
execute as @a at @s store result score @s nodemoons.nearby_horde_mobs if entity @e[tag=nodemoonsHordeMob,distance=..20]
execute as @e[tag=nodemoonsHordeMob] at @s if score @a[sort=nearest,limit=1] nodemoons.nearby_horde_mobs matches 15.. unless entity @a[distance=..20] run tp @s ~ ~-1000 ~

###########################################
execute unless score NODEESSENTIALS_ONE_SECOND_TIMER nodeessentials.time_played matches 5 run return 1

###########################################
############ EVERY SECOND #################
###########################################

############ BLOOD MOON ###################
#despawning
execute in minecraft:overworld as @e[x=0,type=minecraft:zombified_piglin] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:piglin] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=bygonenether:piglin_hunter] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:piglin_brute] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:wither_skeleton] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=bygonenether:wither_skeleton_knight] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:hoglin] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:zoglin] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob
execute in minecraft:overworld as @e[x=0,type=minecraft:magma_cube] unless entity @s[tag=nodemoonsBloodMoonMob] run tag @s add nodemoonsBloodMoonMob

execute as @e[tag=nodemoonsBloodMoonMob] if score NODEESSENTIALS_DAYTIME DayTime matches 1000..13000 at @s unless entity @a[distance=..48] run tp @s ~ ~-1000 ~

# replacing gold gear with rose
execute as @e[type=minecraft:piglin] unless entity @s[tag=nodemoonsReplaceGoldWithRoseGear] run tag @s add nodemoonsReplaceGoldWithRoseGear
execute as @e[type=minecraft:zombified_piglin] unless entity @s[tag=nodemoonsReplaceGoldWithRoseGear] run tag @s add nodemoonsReplaceGoldWithRoseGear
execute as @e[type=bygonenether:piglin_hunter] unless entity @s[tag=nodemoonsReplaceGoldWithRoseGear] run tag @s add nodemoonsReplaceGoldWithRoseGear
execute as @e[type=minecraft:piglin_brute] unless entity @s[tag=nodemoonsReplaceGoldWithRoseGear] run tag @s add nodemoonsReplaceGoldWithRoseGear
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={HandItems:[{id:"minecraft:golden_sword"},{}]}] run item replace entity @s weapon.mainhand with progression_reborn:rose_sword
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={HandItems:[{id:"minecraft:golden_axe"},{}]}] run item replace entity @s weapon.mainhand with progression_reborn:rose_axe
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={ArmorItems:[{id:"minecraft:golden_helmet"}]}] run item replace entity @s armor.head with progression_reborn:rose_helmet
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={ArmorItems:[{id:"minecraft:golden_chestplate"}]}] run item replace entity @s armor.chest with progression_reborn:rose_chestplate
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={ArmorItems:[{id:"minecraft:golden_leggings"}]}] run item replace entity @s armor.legs with progression_reborn:rose_leggings
execute as @e[tag=nodemoonsReplaceGoldWithRoseGear,nbt={ArmorItems:[{id:"minecraft:golden_boots"}]}] run item replace entity @s armor.feet with progression_reborn:rose_boots

############ HORDE MOON ###################

# ID 26 is the "Luck" effect. The entity effect NBT format was changed in 1.20.2 but this pack is on 1.20.1
execute as @e[type=minecraft:zombie,nbt={ActiveEffects:[{Id:26}]}] unless entity @s[tag=nodemoonsHordeIsInitialized] run tag @s add nodemoonsHordeMob
execute as @e[type=minecraft:husk,nbt={ActiveEffects:[{Id:26}]}] unless entity @s[tag=nodemoonsHordeIsInitialized] run tag @s add nodemoonsHordeMob

execute as @e[tag=nodemoonsHordeMob,nbt={IsBaby:1b}] run tp @s ~ ~-1000 ~
execute as @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] run data merge entity @s {Attributes:[{Name:"minecraft:generic.follow_range", Base: 200.0d}]}
execute at @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] run summon minecraft:snowball ~ ~2.3 ~ {Tags:["nodemoons_atk_target"]}
execute as @e[type=minecraft:snowball,tag=nodemoons_atk_target] run data modify entity @s Owner set from entity @a[sort=nearest,limit=1] UUID
execute as @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] run effect give @s speed infinite 1 true
execute as @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] if predicate nodemoons:horde_moon_special_infected_chance run tag @s add nodemoonsHordeIsMiner
execute as @e[tag=nodemoonsHordeIsMiner,tag=!nodemoonsHordeIsInitialized] run item replace entity @s weapon.mainhand with minecraft:iron_pickaxe
execute as @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] unless entity @s[tag=nodemoonsHordeIsMiner] if predicate nodemoons:horde_moon_special_infected_chance run tag @s add nodemoonsHordeIsBuilder
execute as @e[tag=nodemoonsHordeIsBuilder,tag=!nodemoonsHordeIsInitialized] run item replace entity @s weapon.mainhand with minecraft:dirt
execute as @e[tag=nodemoonsHordeMob,tag=!nodemoonsHordeIsInitialized] run tag @s add nodemoonsHordeIsInitialized

# Miner
#execute as @e[tag=nodemoonsHordeIsMiner] run scoreboard players remove @s nodemoons.digger_zombie_cooldown 1
execute at @e[tag=nodemoonsHordeIsMiner] if entity @a[gamemode=survival] run fill ~ ~ ~ ^ ^1.62 ^1 minecraft:air destroy
execute as @e[tag=nodemoonsHordeIsMiner] at @s positioned ~-5 ~-1 ~-5 if entity @e[type=minecraft:player,dy=-100,dx=10,dz=10,gamemode=survival] at @s run setblock ~ ~-1 ~ minecraft:air destroy
#execute as @e[tag=nodemoonsHordeIsMiner,scores={nodemoons.digger_zombie_cooldown=..0}] run scoreboard players set @s nodemoons.digger_zombie_cooldown 5

# Builder
execute as @e[tag=nodemoonsHordeIsBuilder] at @s positioned ~-5 ~2 ~-5 if entity @e[type=minecraft:player,dy=100,dx=10,dz=10,gamemode=survival] at @s run tp @s ~ ~0.5 ~
execute as @e[tag=nodemoonsHordeIsBuilder] at @s positioned ~-5 ~2 ~-5 if entity @e[type=minecraft:player,dy=100,dx=10,dz=10,gamemode=survival] at @s run data modify entity @s Motion set value [0.0d,0.25d,0.0d]
execute as @e[tag=nodemoonsHordeIsBuilder] at @s positioned ~-5 ~2 ~-5 if entity @e[type=minecraft:player,dy=100,dx=10,dz=10,gamemode=survival] at @s run setblock ~ ~ ~ minecraft:dirt
execute as @e[tag=nodemoonsHordeIsBuilder] at @s positioned ~-5 ~ ~-5 if entity @e[type=minecraft:player,dy=0,dx=10,dz=10,gamemode=survival] at @s facing entity @a[sort=nearest,limit=1] eyes run setblock ^ ^-1 ^1 minecraft:dirt
