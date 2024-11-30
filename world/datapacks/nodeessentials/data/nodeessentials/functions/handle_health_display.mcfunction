# run once per tick

execute if score NODEESSENTIALS_ONE_MIN_TIMER nodeessentials.time_played matches 1 run scoreboard players reset * nodeessentials.display_health
execute as @a run scoreboard players operation @s nodeessentials.display_health = @s nodeessentials.actual_health