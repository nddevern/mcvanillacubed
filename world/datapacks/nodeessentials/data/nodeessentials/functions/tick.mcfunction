# All server announcements should be green.

# handle global timers
#scoreboard players add NODEESSENTIALS_GLOBAL_TIMER nodeessentials.time_played 1
scoreboard players add NODEESSENTIALS_ONE_MIN_TIMER nodeessentials.time_played 1
execute if score NODEESSENTIALS_ONE_MIN_TIMER nodeessentials.time_played matches 1200.. run scoreboard players set NODEESSENTIALS_ONE_MIN_TIMER nodeessentials.time_played 0

scoreboard players add NODEESSENTIALS_ONE_SECOND_TIMER nodeessentials.time_played 1
execute if score NODEESSENTIALS_ONE_SECOND_TIMER nodeessentials.time_played matches 20.. run scoreboard players set NODEESSENTIALS_ONE_SECOND_TIMER nodeessentials.time_played 0

# Giving players PlayerIds - RUN THIS FIRST
execute as @a run function nodeessentials:handle_player_ids

# New players
execute as @a at @s unless score @s nodeessentials.last_version_played matches 0.. run function nodeessentials:handle_new_player

# Newly joined players; only run this once per tick
function nodeessentials:handle_join_invincibility

# handle health display
function nodeessentials:handle_health_display

# Journal
execute as @a run function nodeessentials:handle_journal

# VanillaCubed
function nodeessentials:handle_vanillacubed

execute unless entity @a run gamerule doDaylightCycle false
execute if entity @a run gamerule doDaylightCycle true

# THIS SHOULD RUN LAST
execute as @a run function nodeessentials:handle_changelog