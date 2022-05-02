---
layout: post
title:  "PlayStation Vita modding in 2022"
date:   2022-02-14 21:00:00 -0500
tags:   gaming console psvita
---

The year is 2022. Valve has just released their Steam Deck, to great public reception.
Mobile phones are powerful enough to run AAA games, with decent graphics and performance.
The Nintendo Switch system family has sold over 100 million units to consumers worldwide.

Yet I'm still happily carrying a 2012 *(in North America at least)* handheld game console that has been long discontinued officially.
It's been that way since I *think* early 2019. *I dunno, time keeping has been completely elusive for about 2 years, I don't remember anything! What happened?!*

I'll be writing a bit about how modding it was, what mods there are, some homebrew things, and how gaming is on this system.

# The Unofficial Side of Things
As much as I like the official things (games, using it as a media player, etc.), the unofficial, homebrew side of things is just as awesome.

## The Custom Firmware (in 2019)
Now, I will say this right now: it's been a long, *looong* time since I modded this thing. So my memory's definitely not fresh.
Oh and, if you do want to install a CFW on your Vita system, if you have one, follow [this guide](https://vita.hacks.guide/get-started). It's not *exactly* what I followed back then, but it is way more simple than whatever I did back then.

It started by me wondering the possibilities of a modded Vita; it seemed cool, enticing even.
By that point, I had firmware version 3.70, so I had to install something called [h-encore](https://github.com/TheOfficialFloW/h-encore), which actually went pretty well. *Granted, back then I only had a fairly crappy laptop, but I was still able to push h-encore to my Vita.*

Once I had that installed, I technically modded it. I could run "unauthorized" software. However, that was only after I launched the "h-encore" bubble app.
I wanted a bit more convenience, so I wanted to install [Ensō](https://enso.henkaku.xyz/), to have a CFW right from when I started it.
And back then, that process wasn't exactly a cakewalk, like it is now.

I actually remember using something called [Modoru 戻る](https://github.com/TheOfficialFloW/modoru) to downgrade my Vita to 3.65 so that I could then install [Ensō](https://enso.henkaku.xyz/).
*Nowadays, this process is far more simple due to a very convenient tool called [VitaDeploy](https://github.com/SKGleba/VitaDeploy), and I highly recommend you to use that instead, but anyway.*

Regardless, I downgraded my system to firmware 3.65 using Modoru, installed Ensō, and from there I had a modded console every time I booted it up. It's still that way even right now.

So, all things considered, modding it was pretty easy. Granted, I did have experience from modding my Wii U, but anyway. Nowadays, that process is far more simplified, so I'm pretty sure anyone can mod a Vita... *if* they have one.

## Homebrew tools
This'll be a bit of a quick overview at what useful tools there are for a CFW'd Vita. At least, as of writing this.

### VitaShell
![VitaShell screenshot](/blog/media/vitamodding/vitashell.png)
VitaShell is the essential tool. Every modded system should have it. *If you don't have it installed but have your system modded, do you even exist?*

It's a file manager. A feature-rich one, even. It's what you can use to transfer files to and from the system itself, via FTP or USB.
Doesn't sound like much, but a file manager in ***any*** modded system is a must-have, trust me.

### VitaDeploy
![VitaDeploy screenshot](/blog/media/vitamodding/vitadeploy.png)
VitaShell is a bit of a Swiss Army knife; it integrates a lot of tools inside one convenient, easy to use app.

It can be used to install plenty of really useful tools for the Vita, downgrade the firmware *(more conveniently than modoru)*... yeah.
Very useful too.

### Adrenaline
So, this one is a bit more complicated to install, but gives **awesome** results. It's actually a fully-fledge PSP/PS1 emulator.
And I'm not just talking about [PPSSPP](https://www.ppsspp.org/) or [PCSX](https://github.com/grumpycoders/pcsx-redux),
I'm talking actual official emulators from Sony. The Vita (funnily codenamed PSP2 by some people) actually has PSP games from the PlayStation Store. Same thing with PlayStation games.

[Adrenaline](https://github.com/TheOfficialFloW/Adrenaline) uses the official emulator, modifies it and makes it completely usable as a regular PSP.
Now in the convenience of a bubble on your home screen.
[Here's how it looks like when it's working.](/blog/media/vitamodding/adrenaline.mp4)

And, yeah! It's fully fledged as a PS1 emulator, *and* a PSP emulator! There are even ways to [put Adrenaline bubbles on your Vita home screen](https://github.com/ONElua/AdrenalineBubbleManager) to launch them directly for even more convenience.

### Better Homebrew Browser (BHBB)
"The homebrew browser that's actually good."

![BHBB screenshot](/blog/media/vitamodding/bhbb.png)

[Better Homebrew Browser](https://github.com/Ibrahim778/BetterHomebrewBrowser) may not be the most well known homebrew browser, but oh man is it leaps and bounds better and stabler than [Vita HomeBrew Browser](https://github.com/devnoname120/vhbb). As for what it is, really it's just a convenient little app to browse and install homebrew apps from [CBPS](https://github.com/KuromeSan/cbps-db) and [VitaDB](https://vitadb.rinnegatamante.it/) (both awesome places to get homebrew), and even download them in the background.

Oh and, it has a native UI, very similar to the PS Store.

### [Autoplugin](https://github.com/ONElua/AutoPlugin2)/[EasyPlugin](https://github.com/THEN00P/EasyPlugin)
Both are very similar to BHBB, in that they are pretty convenient ways to find and install homebrew. Only for this, it's plugins instead of apps.

### HEXFlow Launcher
![HEXFlow screenshot](/blog/media/vitamodding/hexflow.png)

Admittedly less of a "tool" than other apps, but it definitely can be fun. It's similar to other modded launchers from other consoles 
([Aurora for Xbox 360](http://phoenix.xboxunity.net/images/aurora.07b.profile.disc.panel.png),
[Loadiine GX2 for Wii U](http://static.wiidatabase.de/301962-LoadiineGX2_v1.0_DesignCarousel.png),
[USB Loader GX for Wii](http://nintendo-wii.logic-sunrise.com/images/images_contenu/usbloadergx.png), etc.)
as in, it has a neat "cover flow" feature, and it does launch games.

Now something a bit more useful, [RetroFlow Launcher](https://github.com/jimbob4000/RetroFlow-Launcher) is essentially just HEXFlow,
but with support for [RetroArch](https://docs.libretro.com/guides/install-psv/) and [DaedalusX64](https://github.com/Rinnegatamante/daedalusx64-vitagl)
right out of the box, so you don't have to go through a million hoops to get bubbles on your home screen or have it inside apps.

### PKGj
This is an application of... dubious legality. It's not illegal to say what it is, what it does or how to use it, but it's not *perfectly* legal.

What this does is it fetches a list of sources to download PSVita/PSP/PSX games to the system directly, not having to deal with MaiDump or VPKs.
The problem with that is, those sources are the ones pointing the app where to download the games for free; completely bypassing the PS Store.

If you want that, you set it up yourself, I'm not willing to get blamed for any legal issues. That'll be your problem. Moving on.

## Homebrew apps/games
There's a surprisingly active homebrew community even today! People have made actual homebrew software/games in 2022, nearly 10 years after the console was released!
Quick overview of some of my favorites:

### Moonlight-Vita
This homebrew app is amazing; it's a port of [Moonlight](https://moonlight-stream.org/), the NVIDIA Gamestream client, on the Vita.
What that means is you can stream PC games to your Vita.

Ever wanted to play [Ultrakill](https://store.steampowered.com/app/1229490/ULTRAKILL/) on a tiny handheld device? [Oh, you absolutely can.](/blog/media/vitamodding/ultrakill-vita.jpg)

Now, this does have a few caveats for me; being that it's NVIDIA, predictably it's a mess to get working reliably, for everyone.
Doubly so since I am on Linux: GameStream does not work on Linux.
This is where another PC app called [Sunshine](https://github.com/loki-47-6F-64/sunshine) comes into play;
an open source GameStream server. Now, I actually spent weeks playing around with it to make it work on my Vita, until I realized
that I had to put the encoder to "Software" for the streaming to actually work for more than 30 seconds.
![Sunshine configuration, showcasing "Force a Specific Encoder" set to "Software"](/blog/media/vitamodding/sunshine-setup.png)

### Consolepedia 3D
![Consolepedia 3D demonstration](https://vitadb.rinnegatamante.it/screenshots/e774deca0cadf1c57f369ce9c9828a96a3efed8c1ab5957c0da3093120e7a57a.png)

Neat little app showcasing plenty of "retro"-ish consoles in 3D, not exactly the smallest app, but still pretty fun to check out at times.

### Helltaker port for the Vita
![What the fuck?](/blog/media/vitamodding/holymusic.png)
I have no idea why you'd want to play a game about horny demon girls on the go. Moving on.

### Baldi's Basics Classic port for the Vita
![blkasdis basics in educationjk and learing](/blog/media/vitamodding/baldisbasics.png)
Yeah, someone actually ported the game. It's fully fledged.
It's fully functional.
This is the actual game. It's completely playable. *Not that you'd want to play it or anything...*

### Chocolate Doom
Doom runs on everything. And on the Vita, it runs and controls freaking great.

### vitaQuake ports
Okay, this is where I'm slightly disappointed..

It could just be my distant memory, but I actually remember trying out these ports a while ago, and they ran like garbage.
GPU crashes, horrible performance in the home screen when exiting the app, frequent app crashes...

I'm not throwing shame at all to the developer, [Rinnegatamante](https://rinnegatamante.it); they're a really active homebrew developer for the Vita
and have made plenty of amazing things (seriously, **thank you**), but I have less good memories about these ports.

### GTA: San Andreas port
**Huge respect** to the developers of [this port](https://github.com/TheOfficialFloW/gtasa_vita).
This, for many people, surely is a dream come true.


## Homebrew Conclusion

There's probably way more amazing things that the homebrew community has done: in fact, there is! There are many people that have ported numerous games
([Gato Roboto](https://vitadb.rinnegatamante.it/#/info/779), [C&C: Red Alert](https://vitadb.rinnegatamante.it/#/info/649), [Sonic](https://vitadb.rinnegatamante.it/#/info/607), [uMario](https://vitadb.rinnegatamante.it/#/info/748), [Granny](https://vitadb.rinnegatamante.it/#/info/739), [Crazy Taxi](https://vitadb.rinnegatamante.it/#/info/728), to name a few)
to the Vita system, which is an amazing thing to see honestly. Except for that Nekopara port to the Vita that I saw a while back. What the fuck. No. **NO.**

## Recording the Vita
Maybe you just want to stream your Vita gameplay with your friends, or record gameplay footage to put online.
While the Vita itself doesn't support recording videos, you can certainly make it work with a computer around.

With a [plugin that allows to stream display content through USB](https://github.com/xerpi/vita-udcd-uvc) (very, **very** similar to how a camera works) and by plugging your Vita's headphone output to your computer's line in/mic input, you have pretty much everything you need to go!
How you want to record is up to you; in my case, I use OBS. [Here's a demonstration of how it works.](/blog/media/vitamodding/vitaobs.mp4)

However, this leads me with a problem that I'm really not sure how to solve. If I plug in the Vita's USB port in my computer *and* the headphone cable to my computer's line in, [the audio becomes riddled with buzzy static.](/blog/media/vitamodding/vitastatic.mp4)
Not when I plug it in the charger or plug in normal headphones, though. Yet others have been perfectly capable to record their Vita systems.
So if I had to guess, it's only LCD models (PS Vita 2000) models that have this weird interference. Which also happens to be *my* model.

The only "workaround" I found is to use the Vita's Bluetooth audio output as audio input on my computer and record that way.
The issue now is, it's choppy, has latency and doesn't stay connected for very long before my computer decides to ignore the audio input.
[This has been my best attempt so far.](/blog/media/vitamodding/obsrecording.mp4)

## Vita2SD
Memory cards are expensive. And small in space. SD cards are way more accessible and can be pretty big in comparison.
Therefore, if you use your Vita often or like storing a lot of big games on your system and you're running out of space,
an SD2Vita really would be excellent. I won't go in detail about the installation, since [this guide](https://vita.hacks.guide/yamt) already covers pretty much everything,
but I will say a few things: **don't plug in the SD card in your computer and transfer files directly there**. I can confirm this from experience.
No apps/games would open, h-encore² magically became a Japanese game called "bitter smile", and it just didn't work right.

Now, for my SD card size recommendations,
<div class="datatable-begin"></div>

8 GB   | maybe one or two big games, three at best. and maybe a few smaller games.
16 GB  | a few big games. if you wanna try a few Vita games from time to time.
32 GB  | storage isn't much of a concern; you just download and play games that you want to play.
64 GB  | if you don't know that you can delete games, or just want to keep a lot of them installed.
128 GB | **calm down man thats way too much for a vita jeez**

<div class="datatable-end"></div>

As of right now I have a 32GB SD card in the system and it's working perfectly fine.
I have plenty of space for games I play and it's not *too* slow (although it does feels slower than a memory card).

## Emulation
The Vita would be an excellent choice for emulating retro games, all the way up to Nintendo 64/PS1. And while I already have talked about [PS1/PSP emulation](#adrenaline), there still remains other things, notably [RetroArch](https://docs.libretro.com/guides/install-psv/) and [DaedalusX64](https://github.com/Rinnegatamante/daedalusx64-vitagl), which are, again, supported by [RetroFlow Launcher](https://github.com/jimbob4000/RetroFlow-Launcher).

And, sure, I personally prefer using [Lemuroid](https://f-droid.org/en/packages/com.swordfish.lemuroid/) on my phone, but a Vita would also be a great choice for pocketable, properly playable emulation.
Phones don't have buttons or joysticks, they only have a screen. That's the main point where the Vita would excel at this.


# The More Official Side of Things
Sony obviously tried to make this a handheld game console that could also double as a smart mobile device. Kind of like the [Nokia N-Gage](https://en.wikipedia.org/wiki/N-Gage_(device)), but less stupid. *Except the Vita also failed.*
However, as a mobile device, it would've been awesome back then, I'm sure. But it's not hard to see why it didn't succeed; smartphones did what the Vita did, in a more compact and useful package. The ones who wanted a handheld game console picked the 3DS.
As a game console that can also be a mobile device, though, it's hard to complain.

## Media capabilities
Look, it's not awful; back then I'm sure it would be serviceable, but nowadays, it's a bit rougher to use.

Playing media files from a PC is a bit harder to accomplish nowadays with the use of Qcma (and just how frankly clunky the whole system works), but it is still doable.

### Music player
![Oh wow, look. Music.](/blog/media/vitamodding/musicplayer.png)
I'm sure your smartphone, *if you have one*, would outperform the PS Vita when it comes to this.
As it is right now, it plays MP3 files. It's not *awful*, but I found artworks to just never work, regardless of how I transferred it to the device.
And yes, you can play your music while ingame, although how well that is supported is up to the game itself.

Not bad. Not bad at all, actually.

### Video player
Similar to music player. It works as an MP4 player, but your phone would do a way better job at it,
not to mention that Android and iOS has pretty much every app for every streaming service available. And if that's not the case, then your streaming service is bad.

Oh, and no, you cannot play videos ingame. Not that you should, anyway.

### Photo viewer/Camera
I give up reviewing this thing's media capabilities. It's pointless, just use it as a handheld game console or homebrewy thing. Not as a media player.

## Games.
The main thing most people know a PlayStation Vita for: playing games.

In fact, Call of Duty Black Ops: Declassified serves as a perfect example as to why simpler Japanese/indie games work better on the system.
Here's my list of complaints that I have about the game:
> The main protagonist feels like he's taking drugs every 5 hours, the checkpoint system is awful, it's a first person shooter on a mobile-sized handheld device, the auto aim always shoots above the enemy's head, the tutorial was stupid and didn't really explain 1) in detail 2) everything that would've been nice to know, the grenade system feels very gimmicky, the protagonist survives car explosions/C4 explosions/rocket explosions but not a few bullets, the enemies seem to be powered by Artificial *(note the lack of Intelligence)*, the subtitles are stupidly small and unnoticeable in gameplay action, this feels like a cheap mobile game by some dumb B-grade Ubisoft-like game studio and not a Call of Duty game, this game just makes me want to turn on my Xbox 360 to play actual CoD games, the health system is hard to understand, the touch controls feel rather stupid, you die then you start all over.

Gravity Rush has none of those issues for a reason. The artstyle fits in with the PlayStation feel, and was not designed to require crazy amounts of inputs.

As a miniaturized PlayStation game console, it's amazing. Not only do you get actually good PlayStation titles
(notably Persona, Gravity Rush, LittleBigPlanet, Uncharted, etc.), but you also get decent indie games ported to the system
(VVVVVV, Shovel Knight, Super Meat Boy, etc.). So, why not a mini review of some games I've been playing on this system?

### Mini Reviews
of games I played on the system, even before it was modded. 'Cause why not.

---------------------

**Call of Duty Black Ops Declassified**, troglodyte turd. If you wanna see how bad an FPS game can be, or an example of what not to do, try this game. 2/10

**Downwell**, it's an amazing little game that runs on everything. 8/10

**Duke Nukem 3D: Megaton Edition**, not bad. I'd say, it's not *offensive*, but isn't *great*. *Also, I don't really like the game's mature contents, so...* 7/10

**Entwined**, underrated gem that I see no one talk about. I feel it's perfect for the system, a very simple gameplay mechanic, and a relatively short game overall. 8/10

**Final Fantasy X HD Remaster**, long name, but a good RPG. I've played this one a long time ago and I do remember enjoying it for a few days. 7/10

**Gravity Rush**, awesome game, period. Neat story, great art style, awesome gameplay. If you have a Vita and haven't played this game, ***please play it***.
Actually if you have a PS4/PS5, you can get the remastered version as well. If you're bored, try that game out, it's seriously awesome. 10/10

**Lemmings Touch**, this works better as a mobile phone game. It's still Lemmings, but now feels like a cheap Play Store game that should be throwing 5 ads at you in a row. 4/10

**Level 22**, cool indie game about roaming in an office undetected that I remember enjoying back then. 7/10

**LittleBigPlanet** for the PlayStation Vita, it's LittleBigPlanet on the go. It accomplishes what it sets out to do. 8/10

**Minecraft** for the PlayStation Vita, read line above. 8/10

**MouseCraft**, I have not played this in YEARS, so I'll go off from my memories. Neat little puzzle game about getting a mouse through a level,
I remember it working pretty well on the Vita. 7/10

**Octodad: Dadliest Catch**, cheesegrated graphics on the Vita. That is to be expected, though. Other than that.. uh.. it's Octodad. 6/10

**Papers, Please**, it really only uses the touch screen as an input. This works better as a smartphone game than a Vita title. 6/10

**Persona 4 Golden**, it's Persona. Of course it's excellent. And while the Vita might not be the best platform for the game, it works surprisingly well.
Besides, Persona games aren't crazy active games, half of the game can just be `press cross button, read dialog, cross, read, cross, read, move character, get into encounter, think, attack, use skill, guard`. So it works pretty well, and I can happily spend an hour playing that game. 9/10

**PlayStation All Stars Battle Royale**, stupid name. Other than that, it's a Super Smash Bros. knockoff for PlayStation that is half-good, half-bad. 6/10

**Shovel Knight**, very similar opinion to Downwell and LittleBigPlanet. 8/10

**Super Meat Boy**, tough platforming game that is surprisingly fun and addictive. I like it. 8/10

**Uncharted: Golden Abyss**, cool little spinoff of the Uncharted franchise. This is how you do an action, shooty-type game on the Vita. This does it right.
Certainly better than how *Call of Doodoo Darker Operation Unclassified Whatever The Heck* does it. 8/10

**VVVVVV**, neat indie game that feels like a Commodore 64 game. I liked playing this. Simple and fun gameplay, extensive levels... 8/10

**Welcome Park**, technically not a game but I don't care, it showcases the Vita's features in a cool and neat way.
However, you can get through the entire thing in a short amount of time. It's more of a tech demo than a game, and can get old pretty fast.
Less offensive than *Declassified Dark Phone Call of Work Operation* however. 5/10


# Conclusion
I am very, **very** happy to have my PlayStation Vita. It might be outdated, but it's not old yet for me, not at all.
I'm still trying new games for the Vita and enjoying... *most* of them.
If you have a Vita lying around, do mod it, check out some homebrew, play some games on it, and have fun with it.
It's still awesome today. [This website is a great guide for the mods that you can do to your system](https://vita.hacks.guide/),
and I highly, ***highly*** recommend you check it out if you're interested. 
*By the way, updating up to 3.73 (the latest firmware version) is absolutely safe.*
And, coincidentally, there has been a video by Modern Vintage Gamer about how this system's security was defeated while writing this page!
[Here it is, it's definitely worth watching if you're interested.](https://www.youtube.com/watch?v=7V5jKUO6qJg)

This was a fun time writing my thoughts and reviews on the system.