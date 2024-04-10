---
pagination_next: null
pagination_prev: null
description: Documentation on adding custom skins to Modern Warfare Cubed
keywords:
  - skins
  - custom
  - mwc
  - modern
  - warfare
  - cubed
---

# Custom Skins

Custom skins in Modern Warfare Cubed allow you to personalise any weapon in the mod to your liking.
They are pretty easy to add so let's get into it!

:::warning

Make sure that your custom skins are `.png` files otherwise they won't work!

:::

:::tip

If you want to avoid your custom skins from being stretched out, try to keep them in a 1:1 ratio.

:::

## Adding Custom Skins

Adding custom skins for playing in singleplayer is really easy, firstly [find the config folder](https://docs.mjrlegends.com/General%20Minecraft/config/) of your Minecraft.

Once that's done simply go in the `mwc` folder, then you should see the `skins` folder.

Now you simply put any custom skins in the `skins` folder, reboot your game, and the new skins should be there.

### Multiplayer

After having done all that, you need to do an extra step if you are playing on a server.

Go back in the `mwc` folder, there you should see a `skins.json` file, open it, by default it should look like that:

```json
{
  "skins": [
    "oldiepinkcamo"
  ]
}
```

Just add the names of you custom skins you added to your clients in it, for example:

```json
{
  "skins": [
    "oldiepinkcamo",
    "goldskin"
  ]
}
```

:::warning

Make sure to add a `,` after each name except the last one!

:::
