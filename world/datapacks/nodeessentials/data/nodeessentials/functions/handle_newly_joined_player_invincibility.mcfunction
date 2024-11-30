# run once per tick





# run once per player per tick

#scoreboard objectives add nodeessentials.logged_out minecraft.custom:minecraft.leave_game
#scoreboard objectives add nodeessentials.newly_logged_in dummy

# Detect if a player logged out and if so, set newly_logged_in to true and summon marker with tag NewlyLoggedInDetector and player's playerId and set player to spectator
execute at @s unless score @s nodeessentials.logged_out matches 0 run scoreboard players set @s nodeessentials.newly_logged_in 1
execute at @s unless score @s nodeessentials.logged_out matches 0 run gamemode spectator @s
execute at @s unless score @s nodeessentials.logged_out matches 0 run summon marker ~ ~ ~ {Tags:["NewlyLoggedInDetector"]}
execute at @s unless score @s nodeessentials.logged_out matches 0 run scoreboard players operation @e[type=marker,tag=NewlyLoggedInDetector,limit=1,sort=nearest] nodeessentials.player_id = @s nodeessentials.player_id
execute at @s unless score @s nodeessentials.logged_out matches 0 run scoreboard players set @s nodeessentials.logged_out 0

# Detect if player moves more than 0.1 blocks away from the marker and if so set them to survival, kill the marker, and reset newly_logged_in
execute at @s if score @s nodeessentials.newly_logged_in matches 1 at @e[type=marker,tag=NewlyLoggedInDetector,distance=0.1..] if score @s nodeessentials.player_id = @e[type=marker,tag=NewlyLoggedInDetector,limit=1,sort=nearest] nodeessentials.player_id run scoreboard players reset @s nodeessentials.newly_logged_in
execute unless score @s nodeessentials.newly_logged_in matches 1 run gamemode survival @s
execute unless score @s nodeessentials.newly_logged_in matches 1 at @e[type=marker,tag=NewlyLoggedInDetector] if score @s nodeessentials.player_id = @e[type=marker,tag=NewlyLoggedInDetector,limit=1,sort=nearest] nodeessentials.player_id run tp @s ~ ~ ~
execute unless score @s nodeessentials.newly_logged_in matches 1 at @e[type=marker,tag=NewlyLoggedInDetector] if score @s nodeessentials.player_id = @e[type=marker,tag=NewlyLoggedInDetector,limit=1,sort=nearest] nodeessentials.player_id run kill @e[type=marker,tag=NewlyLoggedInDetector,limit=1,sort=nearest]