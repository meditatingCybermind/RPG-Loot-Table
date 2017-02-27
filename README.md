# RPG Loot Table
This is a fairly rudimentary prompt-based generator I put together in about 2 hours, but it gets the job done. It takes a JSON loot table and runs a series of random number generations to figure out what kind of loot each baddie has.

I'll probably touch this up as time goes on, usually shortly before I do a game. None of my real loot tables are on this repository, but you can see an example table in the root directory and run that yourself.

## Setup
This program requires Node.js 6.0 or higher.

In the root directory of this repository:

    npm install

## Usage
Start with this command:

    node LootTable.js exampleTable.json 1.2

Note that your chance for any given loot drop has a hard limit of 75%. This is to prevent infinite loops.

It'll spit out your npcs, the numbers they correspond to, and give you a prompt for what kind of pack you want.

    1: CR 1 someSpellcaster
    2: CR 1 giantFighterGuy
    3: CR 0.5 mook
    Input a pack...
    prompt: pack:

I can then input a string of numbers that correspond to each type of npc. Type `q` in the prompt to quit.

## Example
I'm running it against the `exampleTable.json` loot table and everything is 20% more common:

    $ node LootTable.js exampleTable.json 1.2
    1: CR 1 someSpellcaster
    2: CR 1 giantFighterGuy
    3: CR 0.5 mook
    Input a pack...
    prompt: pack:  3333333111112
    mook has 1 Junk of Worthless,
    mook has 2 Junk of Worthless,
    mook has 2 Junk of Worthless,
    mook has 1 Junk of Worthless, 1 Potion of Rareness,
    someSpellcaster has 5 Potion of Inflict Bad Things,
    someSpellcaster has 2 Potion of Inflict Bad Things,
    someSpellcaster has 2 Potion of Inflict Bad Things,
    someSpellcaster has 1 Potion of Inflict Bad Things,
    giantFighterGuy has 2 Elixir of Swollness,

    Input a pack...
    prompt: pack:

## TODO / Known Issues

 - Add support for more than 9 npcs
 - Add info about how much a given unit's loot is Worthless
 - Move multiplier information into config, and allow support for more modifiers
 - Add tests
 - Remove commas from the last item.
