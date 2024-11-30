# Only message people each version's log if they haven't logged on since that version released AND they are not logging on for the first time.

# scoreboard objectives add nodeessentials.last_version_played dummy

# Vanillacubed: Skip this for now.
execute if score @s nodeessentials.last_version_played matches ..0 run scoreboard players set @s nodeessentials.last_version_played 1

# Update 1: 1-27-2024
execute if score @s nodeessentials.last_version_played matches ..0 run tellraw @s ["",{"text":"\nUpdate 1 2024-01-27:","bold":true,"color":"white"}]
execute if score @s nodeessentials.last_version_played matches ..0 run tellraw @s ["",{"text":" - Nerfed underground house loot tables to have much less ores in them.","bold":false,"color":"gray"}]
execute if score @s nodeessentials.last_version_played matches ..0 run tellraw @s ["",{"text":" - Powered Rails are now crafted with copper ingots. The server's resource pack has been updated to make them appear as such.","bold":false,"color":"gray"}]

## Update 2: 1-29-2024
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":"\nUpdate 2 2024-01-29:","bold":true,"color":"green"}]
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":" - Added this changelog!","bold":false,"color":"gray"}]
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":" - Food regeneration duration now stacks additively. Also stacks with potions where potions always finish before food regeneration resumes.","bold":false,"color":"gray"}]
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":" - Added Survivor's Journal.","bold":false,"color":"gray"}]
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":" - Bread and Baked Potatoes now heal half a heart.","bold":false,"color":"gray"}]
#execute if score @s nodeessentials.last_version_played matches ..1 run tellraw @s ["",{"text":" - PLEASE REMOVE THE MOD \"AppleSkin\" FROM YOUR MODPACK. IF YOU DO NOT KNOW HOW, PLEASE REACH OUT TO ME. IT IS NO LONGER RECOMMENDED DUE TO THE FOOD REWORK.","bold":false,"color":"red"}]
#
## Update 3: 2-3-2024
#execute if score @s nodeessentials.last_version_played matches ..2 run tellraw @s ["",{"text":"\nUpdate 3 2024-02-03:","bold":true,"color":"gold"}]
#execute if score @s nodeessentials.last_version_played matches ..2 run tellraw @s ["",{"text":" - Increase stack sizes of Beetroot Soup, Rabbit Stew, Mushroom Stew, and Suspicious Stew to 16. Increase stack sizes of Ender Pearls and Eggs to 64.","bold":false,"color":"gray"}]
#execute if score @s nodeessentials.last_version_played matches ..2 run tellraw @s ["",{"text":" - Beetroot Soup nerfed from instantly regenerating 3 hearts to quickly regenerating 1.5 hearts.","bold":false,"color":"gray"}]
#
## Update 4: 2-4-2024
#execute if score @s nodeessentials.last_version_played matches ..3 run tellraw @s ["",{"text":"\nUpdate 4 2024-02-04:","bold":true,"color":"cyan"}]
#execute if score @s nodeessentials.last_version_played matches ..3 run tellraw @s ["",{"text":" - Set players to spectator when joining the world until they move. This is to prevent them from taking damage while the server's custom resource pack is loading on their machine.","bold":false,"color":"gray"}]


# In the future, update 5:
#              Added option to change name color using trigger. (TODO)
#              Newly Required mods in MOTD (TODO)
#              Add commands section to end of survivor's journal.

# set last update to most recent version
scoreboard players set @s nodeessentials.last_version_played 1