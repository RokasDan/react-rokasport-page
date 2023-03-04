import '../PageStyle.css';

import 'prismjs';

import nottcraft from "../../Pictures/Nottcraft.png";
import image1 from "../../Pictures/blackmap.png";
import image2 from "../../Pictures/blackmap2.png";
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";


const Nottcraft = () => {
  // Page for Nottcraft project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Nottcraft' date='2023-03-06'/>

      <div className="pictureWrapper1">
        <img className="projectIcon" src={nottcraft}/>
      </div>

      <h3 className="pageHeader1">
        Intro
      </h3>

      <p className='paragraph1'>
        The main purpose of this project is to teach young school students about the Ordinance
        Survey coordinate navigation system, one of the main map navigation systems in the
        UK, using the Minecraft Education Edition game. To achieve this, our team at Nottingham
        University created a
        Minecraft Education Edition modification which recreates a 1:1 replica of Nottingham city in
        the UK. The modification implements a system that allows players to teleport around the
        replica of
        Nottingham using Ordinance Survey Easting and Northing coordinates.
      </p>

      <p className='paragraph1'>
        To make the project engaging for students we developed an interactive game within the
        modification. Using Ordinance Survey coordinates, students can teleport around the
        city replica to find recognizable landmarks. After locating these landmarks, students must
        find treasure caches filled with crafting materials. With these materials, they can craft a
        tool that, when used at the correct location, will reveal a fully decorated Nottingham
        building as a reward.
      </p>

      <h3 className="pageHeader1">
        Nottcraft Level
      </h3>

      <p className='paragraph1'>
        To replicate Nottingham city in Minecraft, we needed a dataset that could generate a 2D
        top-down image of the city. We chose to use the LiDAR dataset provided by the Ordinance
        Survey team, which provided top-down height values of Nottingham's features at one-meter
        intervals. This dataset allowed us to generate black and white images of Nottingham,
        including features such as roads, rivers, forests, and caves, with one pixel equaling one
        block in Minecraft.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image1}/>
        <img className='imageWrap2' src={image2}/>
      </div>

      <p className='paragraph1'>
        To procedurally generate the level, we used the WorldPainter map generator, feeding it our
        prepared 2D images of the LiDAR dataset. This allowed us to generate a Minecraft level that
        closely resembles the real-life Nottingham city. While the buildings themselves may not have
        the exact features and colors of their real-life counterparts, they closely resemble them in
        shape and position in the Minecraft world. As a result, users can easily navigate Nottcraft
        as if they were exploring Nottingham in real life.
      </p>

      <VideoComponent
        src="https://drive.google.com/file/d/1RzsfE4OrmwSYFjsLe95rbRDlRKVgw2dL/preview"/>
      <p className='paragraph1'></p>

      <h3 className="pageHeader1">
        OS Teleportation
      </h3>
      <p className='paragraph1'>
        To enable students to navigate Nottcraft with real-life OS coordinates, we developed custom
        scripts for the modification. However, importing external data into the Education Edition of
        the game was not possible, as it lacks compilers like Forge or Fabric used in the Java
        Edition. To overcome this limitation, we leveraged the Education Edition's "Code Builder"
        feature, which allowed us to interact with the Minecraft world through a pseudo version of
        Python and JavaScript coding languages. Although Code Builder is a limited programming
        environment with pre-made methods, we were able to create an OS Teleportation system that
        enables players to teleport using real-life OS coordinates with a few hard-coded variables
        in the script.
      </p>

      <pre>
        <code className='language-python'>
          Easting = 456883
Northing = 339495

#######################################################
#######################################################
#######################################################

Easting4fig = 54
Northing4fig = 38

#######################################################
#######################################################
#######################################################

Easting6fig = 542
Northing6fig = 383

#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################
#######################################################

compas = 0;


def LionSave():
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)

    Px = X * -1
    Pz = Z * -1
    Py = Y * -1

    player.teleport(pos(Px, Py, Pz))
    player.teleport(pos(9345, -15, 8085))

def OSTell6Fig():
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)

    Px = X * -1
    Pz = Z * -1
    Py = Y * -1

    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500

    PlayerX = MinX + X
    PlayerZ = MaxZ - Z

    #Fetching the 4 fig OS
    TargetNorth = Northing6fig
    TargetEast = Easting6fig

    #Rounding up the 4 figure OS
    TargetNorth = TargetNorth * 100
    TargetEast = TargetEast * 100

    # Adding the SK number and
    #pointing the OS coordinates to the middle of the square.
    targetX = 400000 + TargetEast + 0
    targetZ = 300000 + TargetNorth + 0

    if targetX &lt; 447900 or targetX > 463500 or targetZ > 348000 or targetZ &lt; 332400:
        player.say("These coordinates are out of Nottcraft scope!")
    else:
        tellX = targetX - MinX
        tellZ = MaxZ - targetZ

        player.teleport(pos(Px, Py, Pz))
        player.teleport(pos(tellX, 120, tellZ))




def OSTell4Fig():
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)

    Px = X * -1
    Pz = Z * -1
    Py = Y * -1

    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500

    PlayerX = MinX + X
    PlayerZ = MaxZ - Z

    #Fetching the 4 fig OS
    TargetNorth = Northing4fig
    TargetEast = Easting4fig

    #Rounding up the 4 figure OS
    TargetNorth = TargetNorth * 1000
    TargetEast = TargetEast * 1000

    # Adding the SK number and
    #pointing the OS coordinates to the middle of the square.
    targetX = 400000 + TargetEast + 0 + 0
    targetZ = 300000 + TargetNorth + 0 + 0

    if targetX &lt; 447900 or targetX > 463500 or targetZ > 348000 or targetZ &lt; 332400:
        player.say("These coordinates are out of Nottcraft scope!")
    else:
        tellX = targetX - MinX
        tellZ = MaxZ - targetZ

        player.teleport(pos(Px, Py, Pz))
        player.teleport(pos(tellX, 120, tellZ))

def OSTell():
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)

    Px = X * -1
    Pz = Z * -1
    Py = Y * -1

    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500

    PlayerX = MinX + X
    PlayerZ = MaxZ - Z




    targetX = Easting
    targetZ = Northing

    if targetX &lt; 447900 or targetX > 463500 or targetZ > 348000 or targetZ &lt; 332400:
        player.say("These coordinates are out of Nottcraft scope!")
    else:
        tellX = targetX - MinX
        tellZ = MaxZ - targetZ

        player.teleport(pos(Px, Py, Pz))
        player.teleport(pos(tellX, 120, tellZ))


def OSping():
    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)
    PlayerX = MinX + X
    PlayerZ = MaxZ - Z
    player.say("The Easting is " + PlayerX + " The Northing is " + PlayerZ)

def OSping6():
    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)
    PlayerX = MinX + X
    PlayerZ = MaxZ - Z

    stringX = str(PlayerX)
    stringZ = str(PlayerZ)
    player.say("The Easting is " + stringX[1:4] + " The Northing is " + stringZ[1:4])

def OSping4():
    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)
    PlayerX = MinX + X
    PlayerZ = MaxZ - Z

    stringX = str(PlayerX)
    stringZ = str(PlayerZ)
    player.say("The Easting is " + stringX[1:3] + " The Northing is " + stringZ[1:3])


player.on_chat("Get12Fig", OSping)
player.on_chat("Get6Fig", OSping6)
player.on_chat("Get4Fig", OSping4)
player.on_chat("Move12Fig", OSTell)
player.on_chat("Move6Fig", OSTell6Fig)
player.on_chat("Move4Fig", OSTell4Fig)
player.on_chat("LeftLion", LionSave)



while compas == 1:
    MinZ = 332400
    MaxZ = 348000

    MinX = 447900
    MaxX = 463500
    my_position = player.position()
    X = my_position.get_value(Axis.X)
    Z = my_position.get_value(Axis.Z)
    Y = my_position.get_value(Axis.Y)
    PlayerX = MinX + X
    PlayerZ = MaxZ - Z
    player.say("Easting - " + PlayerX + " Northing - " + PlayerZ)
        </code>
      </pre>
      <p className='paragraph1'></p>

      <h3 className="pageHeader1">
        Custom Blocks And Tools
      </h3>

      <p className='paragraph1'>
        In conclusion, working on the Nottcraft project has been an exciting and fulfilling
        experience. Combining Minecraft with geography education was a unique challenge that
        required creativity and perseverance to overcome the limitations of Minecraft Education
        Edition. My favorite part of the project was generating a 1:1 replica of Nottingham and
        exploring it in-game. Even now, I still enjoy turning on the project and walking around it,
        comparing it to the real city of Nottingham. If you're interested in trying out Nottcraft
        for yourself, please visit our project on <a className="inLineLink" href="https://github.com/RokasDan">[GitHub]</a> and give it a try.
      </p>

      <h3 className="pageHeader1">
        Closing notes
      </h3>

      <p className='paragraph1'>
        In conclusion, working on the Nottcraft project has been an exciting and fulfilling
        experience. Combining Minecraft with geography education was a unique challenge that
        required creativity and perseverance to overcome the limitations of Minecraft Education
        Edition. My favorite part of the project was generating a 1:1 replica of Nottingham and
        exploring it in-game. Even now, I still enjoy turning on the project and walking around it,
        comparing it to the real city of Nottingham. If you're interested in trying out Nottcraft
        for yourself, please visit our project on <a className="inLineLink" href="https://github.com/RokasDan">[GitHub]</a> and give it a try.
      </p>

    </div>
  );
}
export default Nottcraft;
