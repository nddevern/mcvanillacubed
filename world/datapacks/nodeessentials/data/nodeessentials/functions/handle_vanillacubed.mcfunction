#DayTime handling
execute store result score NODEESSENTIALS_DAYTIME DayTime run time query daytime

execute unless score NODEESSENTIALS_ONE_SECOND_TIMER nodeessentials.time_played matches 10 run return 1

execute as @e[type=spider] run effect give @s speed infinite 1 true
execute as @e[type=cave_spider] run effect give @s speed infinite 1 true
execute as @e[type=creeper] at @s run tp @s ~ -10000 ~
execute as @e[type=zombie_horse] at @s run tp @s ~ -10000 ~