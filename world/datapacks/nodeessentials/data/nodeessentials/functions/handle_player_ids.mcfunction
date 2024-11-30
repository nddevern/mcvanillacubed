# run this once per player per tick

# scoreboard objectives add nodeessentials.player_id dummy
# scoreboard players set NODEESSENTIALS_HIGHEST_PLAYER_ID nodeessentials.player_id 1

# Increment the highest player ID constant and give it to me
execute unless score @s nodeessentials.player_id matches 0.. run scoreboard players add NODEESSENTIALS_HIGHEST_PLAYER_ID nodeessentials.player_id 1
execute unless score @s nodeessentials.player_id matches 0.. run scoreboard players operation @s nodeessentials.player_id = NODEESSENTIALS_HIGHEST_PLAYER_ID nodeessentials.player_id