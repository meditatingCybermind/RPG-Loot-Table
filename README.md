# RPG Loot Table
This is a fairly rudimentary prompt-based generator I put together in about 2 hours, but it gets the job done. It takes a JSON loot table and runs a series of random number generations to figure out what kind of loot each baddie has.

I'll probably touch this up as time goes on, usually shortly before I do a game. None of my real loot tables are on this repository, but you can see an example table in the root directory and run that yourself.

## Setup
This program requires Node.js 6.0 or higher.

In the root directory of this repository:

    npm install

## Usage
Start with this command:

    node app.js exampleTable.json

Note that your chance for any given loot drop has a hard limit of 75%. This is to prevent infinite loops.

It'll spit out your npcs, the numbers they correspond to, and give you a prompt for what kind of pack you want.

    1: CR 1 someSpellcaster
    2: CR 1 giantFighterGuy
    3: CR 0.5 mook
    Input a pack...
    prompt: pack:

I can then input a string of numbers that correspond to each type of npc. Type `q` in the prompt to quit.

## Example
I'm running it against the `exampleTable.json` loot table and everything is 20% more common with the 1.2 command argument:

    node app.js exampleTable.json 1.2
    0: CR 1 someSpellcaster
    1: CR 1 giantFighterGuy
    2: CR 0.5 mook1
    3: CR 0.5 mook2
    4: CR 0.5 mook
    5: CR 0.5 mook3
    6: CR 0.5 mook4
    7: CR 0.5 mook5
    8: CR 0.5 mook6
    9: CR 0.5 mook7
    A: CR 0.5 mook8
    B: CR 0.5 mook9

    IMPORTANT! Letter indexes are CASE SENSITIVE!

    Input a pack, or exit with ~
    prompt: pack: 0011AAAAAA
    someSpellcaster has 3 Potions of Inflict Bad Things, totalling to 60 gold.
    someSpellcaster has 3 Potions of Inflict Bad Things, totalling to 60 gold.
    giantFighterGuy has 1 Elixir of Swollness, totalling to 120 gold.
    mook8 has 7 Junks of Worthless, totalling to 2100 gold.

    mook8 has 5 Junks of Worthless, totalling to 1500 gold.
    mook8 has 13 Junks of Worthless, totalling to 3900 gold.
    mook8 has 1 Junk of Worthless, totalling to 300 gold.
    mook8 has 3 Junks of Worthless, totalling to 900 gold.

## TODO / Known Issues

 - Move multiplier information into config, and allow support for more modifiers
