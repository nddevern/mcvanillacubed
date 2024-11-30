gamerule doInsomnia false
gamerule playersSleepingPercentage 50
gamerule snowAccumulationHeight 4
scoreboard objectives add nodeessentials.display_health dummy "Health"
scoreboard objectives add nodeessentials.actual_health health "Health"
scoreboard objectives add nodeessentials.deaths deathCount "Deaths"
scoreboard objectives add nodeessentials.time_played minecraft.custom:minecraft.play_time "TimePlayed"
# distance traveled: todo?

scoreboard objectives setdisplay sidebar nodeessentials.display_health
scoreboard objectives setdisplay list nodeessentials.deaths

scoreboard objectives add nodeessentials.last_version_played dummy
scoreboard objectives add nodeessentials.last_journal_version dummy

scoreboard objectives add nodeessentials.logged_out minecraft.custom:minecraft.leave_game
scoreboard objectives add nodeessentials.newly_logged_in dummy
scoreboard objectives add nodeessentials.join_invincibility_state dummy
scoreboard objectives add nodeessentials.join_invincibility_timer dummy

scoreboard objectives add nodeessentials.player_id dummy
execute unless score NODEESSENTIALS_HIGHEST_PLAYER_ID nodeessentials.player_id matches 0.. run scoreboard players set NODEESSENTIALS_HIGHEST_PLAYER_ID nodeessentials.player_id 0

# VanillaCubed
gamerule keepInventory false
scoreboard objectives add DayTime dummy
# End VanillaCubed

tellraw @a {"text": "Node-Essentials loaded.", "color": "white"}