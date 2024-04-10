---
pagination_next: null
description: List of hacks related to rendering in Modern Warfare Cubed
tags:
  - Hacks
sidebar_class_name: hacks
---

# Rendering Hacks

:::warning

This list is most likely incomplete.

Hacks are *pretty much* everywhere in the Modern Warfare Cubed codebase.
They might not be currently documented, or we might not even know about them.

:::

Currently Modern Warfare Cubed has a lot of rendering related hacks, which causes issues with performance and compatibility with other mods and sometime even Minecraft itself.

## Forcing Forge Emissive Rendering

:::info

This hack has already been fixed on the [Rendering Rewrite](https://github.com/Cubed-Development/Modern-Warfare-Cubed/tree/Rendering-Rewrite) branch

:::

### Why

On the 24th of November 2018 [tterrag1098] created [PR 5047](https://github.com/MinecraftForge/MinecraftForge/pull/5047) to Minecraft Forge.
It was merged the same day, what does it do? 
> This PR aims to add support for "emissive" rendering on items, a feature which is currently only available on blocks.
> 
> - [tterrag1098]

It's actually a really nice change, and can be used to make items like glowstone and redstone glow in the dark without costing any kind of performance.

The issue is that this simple changes breaks Modern Warfare Cubed rendering of weapons, that's because Modern Warfare Cubed abuses the `#IBakedModel` interface *(Which is technically a hack)*.

For a long time the only fix was to stay on a version of Forge before this change occurred or disable it, which led to a lot of reports of game crashing.

So I Luna Lage (Desoroxxx) in May 2023 decided to look into this and prevent crashes while we actually fix compatibility.

### The hack

**Since May 2023**

The hack in itself is pretty straightforward, if the config option `ForgeModContainer#allowEmissiveItems` is true, set it to false.

This does prevent crashes, but it also removes the ability for anyone to use the emissive rendering on items.

## Who let her cook

### Why

:::warning

The why of this hasn't been yet thoroughly investigated.

Some information are high level view of the issue and may not be accurate.

:::

For a long time opening the creative inventory or crafting stations would make the game freeze, if your hardware is weak it could freeze for seconds.

This is due to two things, slow rendering and capturing, the first one doesn't need explanation, the second does.

Capturing is the process of, well... capturing the final render so that it can be rendered faster the next times, this is pretty slow or badly implemented.
Capturing is somewhat necessary here, as without it the rendering is too slow to be usable.

So I Luna Lage (Desoroxxx) on the 27th of March 2024 decided to temporarily fix this with a hack.

### The hack

**Since 2024-03-27**

The hack is pretty simple, to prevent the game stuttering each time the play see a model, we render each model once the first time a world is rendered.

To do so, when we build an item like a weapon for example, we add it to a "cooking" queue.
Then the first time the world renders we simply go through that "cooking" queue and render every model.

This successfully remove the freezing effects for the player, but a side effect is that the game will freeze for a bit when loading into a world.

### How to properly fix the issue

Properly fixing this issue is harder than it sounds, firstly capturing needs to be removed, then rendering need to be made much faster.
This will allow us to remove this hack, and also make weapons in inventory more accurate, as right now we cannot see attachments on the weapon.

[tterrag1098]: https://github.com/tterrag1098
