---
pagination_next: null
pagination_prev: null
description: Import assets into Modern Warfare Cubed
tags:
  - Assets
sidebar_class_name: assets
sidebar_position: 2
---

# Importing Assets

If you have an asset, you need to import it into Modern Warfare Cubed to use it.

:::note

This assumes that you have [set up the development environment](setting-up-the-development-environment)

:::

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

## Importing a Model

Importing a model is tricky since a lot of things use different systems, so will we are trying to make it streamlined into one system, enjoy having different categories

But let start by the basic which works for every model, just place the model you want to import in an appropriate place under `java.com.paneedah.mwc.models`.

Once done, open that model and add a Javadoc to the class; this will allow you to give credit to the artist and dev:

```java
/**
 * Made with Blockbench X.X.X
 *
 * @author Designer: The artist who made the model
 * @author Developer: The person who imported and cleaned up the model
 */
public class SomeModel extends Somebase {
```

Now remove the following lines:

```java
// Made with Blockbench X.X.X
// Exported for Minecraft version 1.12
// Paste this class into your mod and generate all required imports
```

Once this is done, you will probably see errors. 
To fix them simply hover the mouse over the part that is error and apply the appropriate fix, most of the time it will be a little text to click.

Now it is time for some specific what do you want to import exactly:
- [Equipment Model](#importing-an-equipment-model)

### Importing an Equipment Model

Let's start by replacing:

```java
public class SomeModel extends ModelBase {
```

With:

```java
public class SomeModel extends ModelBiped implements IModernModel {
```

Next let's remove entirely the following:

```java
@Override
public void render(Entity entity, float f, float f1, float f2, float f3, float f4, float f5) {
	backpack.render(f5);
	head.render(f5);
	body.render(f5);
	rightarm.render(f5);
	leftarm.render(f5);
	rightleg.render(f5);
	leftleg.render(f5);
}
	
public void setRotationAngle(ModelRenderer modelRenderer, float x, float y, float z) {
	modelRenderer.rotateAngleX = x;
	modelRenderer.rotateAngleY = y;
	modelRenderer.rotateAngleZ = z;
}
```

Next at the bottom of the now only method, add the following:

```java
hideBiped(this, bodyPart);
```

Replace `bodyPart` with the actual body part that your model is a child of.

One rule that works for every model is that you should only have what you need/use. 
But it is especially true for biped models, as you are virtually never going to need all body parts, you should remove any body part that you are not adding a child to.

For example, if you do attach to the head, you should remove all of this:
```java
private final ModelRenderer body;
```

```java
private final ModelRenderer rightarm;
private final ModelRenderer leftarm;
private final ModelRenderer rightleg;
private final ModelRenderer leftleg;
```

```java
body = new ModelRenderer(this);
body.setRotationPoint(0.0F, 0.0F, 0.0F);
body.cubeList.add(new ModelBox(body, 0, 16, -4.0F, 0.0F, -2.0F, 8, 12, 4, 0.0F, false));
```

```java
rightarm = new ModelRenderer(this);
rightarm.setRotationPoint(-5.0F, 2.0F, 0.0F);
rightarm.cubeList.add(new ModelBox(rightarm, 16, 32, -3.0F, -2.0F, -2.0F, 4, 12, 4, 0.0F, false));

leftarm = new ModelRenderer(this);
leftarm.setRotationPoint(5.0F, 2.0F, 0.0F);
leftarm.cubeList.add(new ModelBox(leftarm, 32, 0, -1.0F, -2.0F, -2.0F, 4, 12, 4, 0.0F, false));

rightleg = new ModelRenderer(this);
rightleg.setRotationPoint(-2.0F, 12.0F, 0.0F);
rightleg.cubeList.add(new ModelBox(rightleg, 0, 32, -2.0F, 0.0F, -2.0F, 4, 12, 4, 0.0F, false));

leftleg = new ModelRenderer(this);
leftleg.setRotationPoint(2.0F, 12.0F, 0.0F);
leftleg.cubeList.add(new ModelBox(leftleg, 24, 16, -2.0F, 0.0F, -2.0F, 4, 12, 4, 0.0F, false));
```

Now [cleanup the model](#cleaning-up-the-model)

### Cleaning Up the Model

Now that you imported the model you need to clean it up, this section will apply for every model and comes after model-specific cleaning instructions.

First, add a blank line after the class declaration:

```java title="Before"
public class SomeModel extends SomeBase {
	private final ModelRenderer someModelRenderer;
}
```

```java title="After"
public class SomeModel extends SomeBase {

	private final ModelRenderer someModelRenderer;
}
```

Now let's do the most straightforward aspect.

When you export a model, Blockbench will consistently insert the following lines:

```java
textureWidth = 64;
textureHeight = 32;
```

The actual figures will vary for each model depending on the size of the textures. The numbers I chose are not random, though.

These values are the default settings. Therefore, if your model is using one of these, you can confidently remove them as they are unnecessary.

The same applies for:
```java
exampleModelRenderer.setRotationPoint(0.0F, 0.0F, 0.0F);
```

Next, every whole number with a forced float configuration like `1.0F` should be replaced with `1` for clarity and simplicity sake.
You can easily achieve this by using IntelliJ replace in file feature.
Just press `ctrl + r` to activate it now just put the number you aim to replace in the first box for example `2.0F`, and the number you want instead for example `2`.
Press `Replace All` and your done with that number.

## Importing a Texture

Texture is the easiest thing to import, just go into `resources.assets.mwc.textures` find the appropriate folder and just place the texture you want to import.

Textures should be named using `snake_case`, for example, the equipment inventory texture is named `equipment_inventory`.
