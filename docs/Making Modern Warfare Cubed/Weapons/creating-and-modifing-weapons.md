---
pagination_next: null
pagination_prev: null
description: How to create a new gun for Modern Warfare Cubed
---

# Creating and Modifying Weapons 

Before we begin, you should make sure you understand the basics of [Builders](https://www.baeldung.com/intellij-idea-java-builders) in Java, but all you need to know is that Builders are a "pattern" to help make complex objects,
and only need one semicolon and the end. 

## Making a new weapon

Each type of weapon uses its own builder:

* Guns use Weapon.Builder() and should be placed in a file that [implements](https://www.w3schools.com/java/ref_keyword_implements.asp) GunFactory 
* Melee weapons use ItemMelee.Builder() and should be placed in a file that implements MeleeFactory
* Grenades use ItemGrenade.Builder() and should be placed in a file that implements GrenadeFactory 

For the sake of brevity, I will only be going over how to make Guns, but many overlap between builders. 

## Creating a new gun
I will be using [AK47 factory](https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/items/guns/AK47Factory.java) as an example

### .withName("ak47")
The "ID" that will be used by Minecraft internally Ex: mwc:ak47

### .withFireRate(0.6f)
The max rate of fire (full auto or otherwise)

### .withRecoil(4f)
The "basic" amount of recoil the gun will have when firing. You should still use a RecoilParam() for more complex recoil.

### .withZoom(0.9f)
The amount to zoom in-out when ADSing

### .withConfigGroup(GunConfigurationGroup.RIFLES)
The Gun Configuration group this gun should use. Options are:  NONE, HANDGUN, LONG_GUN, RIFLE, SHOTGUN, CARBINE, ASSAULT_RIFLE, BATTLE_RIFLE, SNIPER_RIFLE, MACHINE_GUN, SUBMACHINE_GUN,

### .hasFlashPedals()
If the gun should show the "flash" images when it is firing
