# run once per tick
# scoreboard objectives add nodeessentials.join_invincibility_state dummy
# scoreboard objectives add nodeessentials.join_invincibility_timer dummy

# when player joins: set them to spectator and summon the marker
execute as @a unless score @s nodeessentials.logged_out matches 0 run gamemode spectator @s
execute as @a unless score @s nodeessentials.logged_out matches 0 at @s run summon marker ~ ~ ~ {Tags:["NewlyLoggedInDetector"]}
execute as @a unless score @s nodeessentials.logged_out matches 0 run scoreboard players set @s nodeessentials.join_invincibility_state 1
execute as @a unless score @s nodeessentials.logged_out matches 0 run scoreboard players set @s nodeessentials.join_invincibility_timer 6000
execute as @a run scoreboard players set @s nodeessentials.logged_out 0

# state 1: waiting for marker's score to be set. set first marker in the world found and set state to 2 when found
execute as @a if score @s nodeessentials.join_invincibility_state matches 1 at @e[type=marker,tag=NewlyLoggedInDetector] unless score @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id matches 0.. run scoreboard players operation @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id = @s nodeessentials.player_id
execute as @a if score @s nodeessentials.join_invincibility_state matches 1 at @e[type=marker,tag=NewlyLoggedInDetector] if score @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id = @s nodeessentials.player_id run scoreboard players set @s nodeessentials.join_invincibility_state 2

# state 2: waiting for player to move out of range or timer to run out
execute as @a if score @s nodeessentials.join_invincibility_state matches 2 at @s at @e[type=marker,tag=NewlyLoggedInDetector,distance=0.1..] if score @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id = @s nodeessentials.player_id run scoreboard players set @s nodeessentials.join_invincibility_state 3
execute as @a if score @s nodeessentials.join_invincibility_state matches 2 run scoreboard players remove @s nodeessentials.join_invincibility_timer 1
execute as @a if score @s nodeessentials.join_invincibility_timer matches ..0 run scoreboard players set @s nodeessentials.join_invincibility_state 3

# state 3: end the invincibility
execute as @a if score @s nodeessentials.join_invincibility_state matches 3 at @s at @e[type=marker,tag=NewlyLoggedInDetector] if score @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id = @s nodeessentials.player_id run tp @s ~ ~ ~
execute as @a if score @s nodeessentials.join_invincibility_state matches 3 at @s at @e[type=marker,tag=NewlyLoggedInDetector] if score @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1] nodeessentials.player_id = @s nodeessentials.player_id run kill @e[type=marker,tag=NewlyLoggedInDetector,sort=nearest,limit=1]
execute as @a if score @s nodeessentials.join_invincibility_state matches 3 run gamemode survival @s
execute as @a if score @s nodeessentials.join_invincibility_state matches 3 run scoreboard players reset @s nodeessentials.join_invincibility_timer
execute as @a if score @s nodeessentials.join_invincibility_state matches 3 run scoreboard players reset @s nodeessentials.join_invincibility_state
