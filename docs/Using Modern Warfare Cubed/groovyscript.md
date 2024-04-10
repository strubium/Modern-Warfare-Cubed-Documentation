---
pagination_next: null
pagination_prev: null
description: Documentation on using GroovyScript to modify Modern Warfare Cubed
keywords:
  - groovyscript
  - mwc
  - modern
  - warfare
  - cubed
---

# GroovyScript

:::info

If you want the GroovyScript documentation click [here](https://cleanroommc.com/groovy-script)

:::

Modern Warfare Cubed has direct integration with GroovyScript for modifying recipes, let's look how to use this integration!

But first, WhatScript?

## What is GroovyScript?

> A scripting / tweaking mod that allows you to alter various game mechanics without having to set up a mod.
>
>Most of the time it is used to create new recipes.

That's a pretty good description, in essence it allows you to modify vanilla Minecraft and mods to your liking.

It's a [CraftTweaker] replacement being better in every way.
For example to see your change with [CraftTweaker] you must restart your game which can take minutes on big modpacks, with GroovyScript you just run a command which takes a few seconds.

But also, compared to other scripting mods like [CraftTweaker], GroovyScript uses sandboxed Groovy, meaning that it can safely do nearly everything Java can!
That means you can **create items, listen to events, do custom logic and more!**

Anyway learn more about it and/or download it here:

[![Curse Forge](https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/curseforge_vector.svg)](https://www.curseforge.com/minecraft/mc-mods/groovyscript)
[![Modrinth](https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/modrinth_vector.svg)](https://modrinth.com/mod/groovyscript)

[CraftTweaker]: https://www.curseforge.com/minecraft/mc-mods/crafttweaker

## Accessing The Plugin

To access the Modern Warfare Cubed GroovyScript plugin all you need to do is:

```groovy
mods.mwc.craftingstation
```

Currently, it allows you to do the following:
- Add recipes
- Add recipes with custom refund yield
- Remove recipes with certain output
- Remove recipes with certain output in certain group
- Remove all recipes
- Remove all recipes in certain group

## Removing Recipes

Let's start with the simplest thing you can do.

Sometimes you may want to completely overhaul the crafting experience and want to remove **all** existing recipes.
With GroovyScript it's a piece of cake:

```groovy
mods.mwc.craftingstation.removeAll()
```

But maybe you want to only remove weapons recipes?
We have a second of piece of cake for you in store:

```groovy
mods.mwc.craftingstation.removeAllinGroup("GUN")
```

It takes 1 string parameter, which is the internal name of the recipe group.
Here are all the current groups:
- `GUN`
- `ATTACHMENT_NORMAL`
- `ATTACHMENT_MODIFICATION`
- `BULLET`
- `MAGAZINE`

Removing a lot of recipes is nice, but you might desire to remove one recipe.
Well, guess what? Here is another piece of cake for you:

```groovy
mods.mwc.craftingstation.remove(item('mwc:ak47'))
```

But pay attention, this will delete recipes for that item **in all groups**.
If you want to be more specific you can delete the recipe for that item in a specific group.
Doing this is also simple:

```groovy
mods.mwc.craftingstation.removeinGroup(item('mwc:ak47'), "GUN")
```

## Adding Recipes

To add new recipes you need to use something called a "builder", you'll see it's easy!

First you need to call the recipe builder:

```groovy
mods.mwc.craftingstation.recipeBuilder()
```

Then you will need to define an output, ingredients, yields and a group.
Once you did all that you just register the recipe and done!
Here is an example:

```groovy
mods.mwc.craftingstation.recipeBuilder()
  .output(item('minecraft:iron_ingot'))
  .setGroup("GUN")
  .setYield(0.5)
  .input(item('minecraft:iron_ingot') * 4)
  .setYield(1)
  .input(item('minecraft:coal') * 2)
  .register()
```
It looks complicated, I know. but it really isn't.
Let me walk through it for you one by one:

- `.output(item('minecraft:iron_ingot'))` defines the recipe output, in this case an iron ingot
- `.setGroup("GUN")` defines the group that players will be able to find this recipe in, in this case, Guns. Even if you didn't add this part in your script, it will default to guns, so in this case, this isn't really needed, but I've added it in for tutorial
- `.setYield(0.5)` defines the yields of upcoming ingredients, in this case, 50%, 1 means 100%, and 0 means 0%
- `.input(item('minecraft:iron_ingot') * 4)` time to define ingredients, in this example, it will require 4 iron ingots as one of ingredient with a 50% return yield
- `.setYield(1)` reverts back the yield to 100%, keep in mind that if item has already defined yields like gunmetal or nylon, it will be used instead if recipe has 100% yield
- `.input(item('minecraft:coal') * 2)` add a new ingredient, which is 2 coal with 100% yield rate
- `.register()` finishes recipe builder and actually registers recipe in game **KEEP IN MIND THAT RECIPES WILL NOT WORK WITHOUT THIS!**

### Wrap-up

Here is very short example script that will:
1. Remove all recipes in the `GUN` group
2. Add a recipe that turns 4 nether star (100% Yield) into 1 clay block
3. Add a recipe that turns 4 iron ingots (50% Yield) and one coal (100% Yield) into a nether star.

```groovy
mods.mwc.craftingstation.removeAllinGroup("GUN")

mods.mwc.craftingstation.recipeBuilder()
  .output(item('minecraft:clay'))
  .input(item('minecraft:nether_star') * 4)
  .register()

mods.mwc.craftingstation.recipeBuilder()
  .output(item('minecraft:nether star'))
  .setYield(0.5)
  .input(item('minecraft:iron_ingot') * 4)
  .setYield(1)
  .input(item('minecraft:coal'))
  .register()
```

That's it!

For more advanced usage example such as changing recipes depending on pack's mode like expert mode etc..., check out the [GroovyScript documentation](https://cleanroommc.com/groovy-script).

Have fun!
