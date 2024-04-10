---
pagination_prev: null
description: Create a new model for an equipment or refresh an existing one
tags:
  - Assets
sidebar_class_name: assets
sidebar_position: 0
---

# Modeling Equipment

Modeling equipment is a fairly simple process, but there still are rules to respect.

## Creating the Blockbench project

Start by downloading the [equipment template](https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/master/assets/templates/EquipmentTemplate.bbmodel). 
On the right of this page, click on the `...` button it should open a drop-down menu, under `Raw file content` click `Download`.
Once the download is complete, open the file using Blockbench.

Navigate to `File > Project...` in Blockbench.
Modify the file name and model identifier using `PascalCase`, for example, the magazine belt model is named `MagazineBelt`.
Confirm your changes and move on to the next section.

## Modeling

Everything you create must be organized in folders.
For example, the magazine belt consists of several parts arranged in a hierarchical structure:

- `body`
  - `belt`
    - `holders`
      - `magazines`
    - `satchel`

Each folder within a folder is a child, which is necessary for attaching parts to the base player model.
It is important to think of the hierarchy of folders as it will determine how rotations and movement are applied to each part, for example, the holders and satchel where not child of the belt they would move independently

Make sure to name all parts of your model.
Fortunately, you can rename cubes in bulk, simply click on the first cube you want to rename, then hold shift and click on the last cube.
This will select all the cubes between the two selections; you can also select multiple independent cubes using the ctrl key.

Model elements such as folders, cubes, etc. should be named using `camelCase`, for example, the magazine holder inside the magazine belt model is named `magazineHolder`.

:::info

Remember that the player model isn't static like in Blockbench; legs move when animating sneaking makes the body clip into the legs etc...

:::

## Exporting

After completing the modeling and texturing process, it's time to export your equipment model.
Navigate to `File > Export > Export Java Entity`, choose the desired saving folder, and hit save.

Don't forget to also save the project.
To do this, go to `File > Save Project As`, select the appropriate saving folder, and confirm your save.

You are now ready to proceed to the next step of creating equipment, [importing equipment](importing-equipment)!
