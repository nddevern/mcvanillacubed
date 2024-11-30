#time set day
weather clear
tp @e[type=zombie,distance=..60] ~ -1000 ~
tp @e[type=skeleton,distance=..60] ~ -1000 ~
tp @e[type=spider,distance=..60] ~ -1000 ~
#tp @e[type=creeper,distance=..60] ~ -1000 ~
effect give @s saturation 2 9 true
tellraw @a ["",{"text":"\nA new traveler ","bold":true,"color":"green"},{"selector":"@s","bold":true,"color":"white"},{"text":" has arrived!","bold":true,"color":"green"}]