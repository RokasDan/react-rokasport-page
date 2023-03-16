import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import pyfighter from "../../Pictures/Pyfighter.png";
import {CodeBlock} from "../../Components/CodeBlock";
import AudioSimple from "../../Components/AudioSimple";
import {AudioProvider} from "../../Components/AudioState";

import image2 from "../../Pictures/pychar.png";
import image1 from "../../Pictures/pychar2.png";

import image3 from "../../Pictures/pytile.png";
import image4 from "../../Pictures/pyback.png";
import image5 from "../../Pictures/pyback2.png";

const pythonCodeString = `
  ''' Map Class

The class has the capability to generate a map with random platforms and
display it. The idea of storing a map in to matrix is
take from here: https://www.youtube.com/watch?v=HCWI2f7tQnY&t=58s
@author: Rokas Danevicius (unless stated otherwise)
'''

# Importing pygame.
import pygame
import random

# Load The tile paths in to variables
stone = 'graphics/map_tiles/tile1.png'
grass = 'graphics/map_tiles/tile2.png'
plat = 'graphics/map_tiles/plat32px.png'

# Load the images in to the program.
STONE = pygame.image.load(stone)
GRASS = pygame.image.load(grass)
PLATFORM = pygame.image.load(plat)

class Map:
    '''
    This class is used to generate and display the map. The map is
    created with the use of a matrix. At the moment the matrix is hard
    coded in function createGameMap() above the class however this will
    changed to a method which generates the matrix dynamically. When the
    matrix is generated it is passed to a generateMap() method which
    reiterates through the matrix and checks the values of each element
    in it. Depending on the values of each element in the matrix the
    generateMap() method adds the position, tile type and the surface to
    which the tile should be printed on to the pygame.sprite.Group saved
    in map_group variable. Then the map_group is the passed to the Tile
    class writen by Robert Soane. The idea of storing a map in to matrix
    is take from here: https://www.youtube.com/watch?v=HCWI2f7tQnY&t=58s
    '''

    def __init__(self, screen, dims, cell):

        self.screen = screen
        self.dims = dims
        self.cell = cell
        self.total_rows = 20
        self.columns = 25

        self.height_units = dims[1] // cell
        self.width_units = dims[0] // cell

        self.generateMap()

    def randomMatrix(self):
        '''
        The method creates a matrix which contains rows with fixed and
        randomised values.
        '''

        # Create iteration values for different rows containing specific
        # values.
        dirt_row = 1
        bottom_air = 10
        air_row = 3
        random_rows = 4

        # Empty list which will be filled up with rows containing
        # different values.
        tile_matrix = []

        # Creates rows which will represent the air at the top part of
        # the map.
        top_air = [[0 for column in range(self.columns)]
                        for row in range(air_row)]
        tile_matrix.extend(top_air)

        # Creates rows containing random possibilities which will
        # represent platforms in the map.
        platforms = [[random.uniform(0, 1) for column in range(self.columns)]
                        for row in range(random_rows)]
        tile_matrix.extend(platforms)

        # Creates a row to represent an empty portion of the map between
        # the platform and ground layer.
        middle_air = [[0 for column in range(self.columns)]
                                for row in range(dirt_row)]
        tile_matrix.extend(middle_air)

        # Creates a row which represent the first ground layer of the
        # map.
        top_dirt = [[2 for column in range(self.columns)]
                                for row in range(dirt_row)]
        tile_matrix.extend(top_dirt)

        # Creates a row which represents the second layer of the ground
        # in the map.
        bottom_dirt = [[1 for column in range(self.columns)]
                                for row in range(dirt_row)]
        tile_matrix.extend(bottom_dirt)

        # Creates a row which represents the non visible map par of air
        # under the ground.
        bottom_air = [[0 for column in range(self.columns)]
                                for row in range(bottom_air)]
        tile_matrix.extend(bottom_air)

        # Returns the full matrix with all of the rows added together.
        return tile_matrix

    def platformCheck(self, maplist, row, column):
        '''
        The method checks if the place where the game wants to place a
        platform is valid. This method checks if there are any platforms
        that are two close vertically, horizontally and diagonally. If
        the previous platforms are to close the method returns False
        telling the game that a platform cant be placed there.
        '''

        # A list of list containing the locations which will be checked
        # for already existing platforms.
        check = [[row, column], [row, column - 1], [row, column - 2],
                [row, column - 3], [row, column - 4], [row, column + 1],
                [row, column + 2], [row, column + 3], [row, column + 4],
                [row - 1, column], [row - 1, column - 1],
                [row - 1, column - 2], [row - 1, column - 3],
                [row - 1, column - 4], [row - 1, column + 1],
                [row - 1, column + 2], [row - 1, column + 3],
                [row - 1, column + 4], [row - 2, column],
                [row - 2, column - 1], [row - 2, column - 2],
                [row - 2, column - 3], [row - 2, column - 4],
                [row - 2, column + 1], [row - 2, column + 2],
                [row - 2, column + 3], [row - 2, column + 4]]

        # The for loop which iterates through all of the check positions.
        for position in check:

            # Prevents the loop from checking positions in the map
            # matrix which do not exist.
            if position[1] > 24:
                return False

            # Check if the position is valid and there are no other
            # platforms near by. If there is platform the method returns
            # False else it gives True.
            elif maplist[position[0]][position[1]] == 3:
                return False

        return True

    def platformPlace(self, row, column):
        ''' This method checks if the platform about to be placed wont
        extend over the boundaries of the map. Which out the check we
        would get an index error
        if the platform about the be placed would be next to an edge of
        the map'''

        # A list of lists which contains the positions to check if the
        # platform is about to be placed over the maps edge.
        checking = [[row, column + 1], [row, column + 2], [row, column + 3],
                                                            [row, column + 4]]

        # For loop which caries out the check by iterating through the
        # "checking" list of lists If the position with the given check
        # value is bigger then the map length which in this case is 24
        # elements of the map matrix it returns false and the platform
        # is not placed there.

        for position in checking:
            if position[1] > 24:
                return False
        return True


    def readMap(self):
        '''
        This method iterates through the tile matrix provided by
        "randomMatrix()" method. This method ignores all of the values
        in the matrix which are "1" or above "1". By doing so all of the
        values that are not random stay the same and represent the non
        changing tiles of the map. Everything which is bellow the value
        of "1" will be changed to either "0" which is the air tile or
        "3" which is a platform. This is determined by the while loop in
        this method. If the while loop receives an object from the
        matrix containing a value bellow "0.5" it assigns the object a
        value of "0" which represents the air. If the value is between
        "0.5" and "1" the loop give the value of "3" to the object which
        represents a platform.
        '''
        tile_matrix = self.randomMatrix()

        row = 0
        while row < self.total_rows:
            col = 0

            while col < self.columns:

                # If the while loop receives an object
                # from the matrix containing a value
                # bellow "0.5" it assigns
                # the object a value of "0"
                # which represents the air.
                if (tile_matrix[row][col]) <= 0.5:
                    tile_matrix[row][col] = 0

                # If the value is between "0.5" and "1" the loop give
                # the value of "3" to the object which represents a
                # platform.
                if 0.5 < (tile_matrix[row][col]) < 1:

                    # This is where we check if the platform can be
                    # placed.
                    if self.platformCheck(tile_matrix, row, col):
                        if self.platformPlace(row, col):
                            for x in range(random.randint(2, 4)):
                                tile_matrix[row][col + x] = 3
                    # If the platform check are false there will be air
                    # instead of the platform.
                    else:
                        tile_matrix[row][col] = 0

                col += 1

            row += 1
        return tile_matrix


    def generateMap(self):
        '''
        Method which reiterates through the matrix and checks the values
        of each element in it. Depending on the values of each element
        in the  matrix the generateMap() method adds the position, tile
        type and the surface to which the tile should be printed on to
        the pygame.sprite.group saved in map_group variable .
        '''

        map_group = pygame.sprite.Group()
        self.map_matrix = self.readMap()

        for i in range(self.height_units):
            for j in range(self.width_units):
                if self.map_matrix[i][j] == 1:
                    cell = self.cell
                    position = (j * cell, i * cell)

                    # Add individual tile sprite to map group
                    map_group.add(Tile(self.screen, position, 1))
                elif self.map_matrix[i][j] == 2:
                    cell = self.cell
                    position = (j * cell, i * cell)
                    map_group.add(Tile(self.screen, position, 2))

                elif self.map_matrix[i][j] == 3:
                    cell = self.cell
                    position = (j * cell, i * cell)
                    map_group.add(Tile(self.screen, position, 3))

        # Store map_group to self
        self.map_group = map_group

    def display(self):
        # Blit all tiles in map group
        for tile in self.map_group:
            tile.display()


# Roberts Tile class
class Tile(pygame.sprite.Sprite):
    """ Tile

    Implements tile sprite.
    Input:
        - screen to blit on to
        - screen dims
        - tile_type '1' , '2' or '3'.

    found rect.inflate_ip on pygame documentation

    Has a display function to blit to screen
    @author: Robert Soane
    """

    def __init__(self, screen, dims, tile_type):
        # Init for sprite
        pygame.sprite.Sprite.__init__(self)

        self.type = tile_type
        self.screen = screen
        self.dims = dims

        if self.type == 1:
            self.image = STONE
            self.rect = self.image.get_rect()
            self.rect.topleft = [dims[0], dims[1]]

        if self.type == 2:
            self.image = GRASS
            self.rect = self.image.get_rect()
            self.rect.topleft = [dims[0], dims[1]]

        if self.type == 3:
            self.image = PLATFORM
            self.rect = self.image.get_rect()
            # Making platform rect smaller
            new_rect_height = - self.rect.height + 1 * (self.rect.height // 5)
            self.rect.inflate_ip(0, new_rect_height)
            self.rect.topleft = [dims[0], dims[1]]



    def display(self):
        '''
        Display method to blit the map to screen.
        '''
        self.screen.blit(self.image, self.rect)

`;

const pythonCodeString2 = `
''' Background Class

The Class creates and blits a background which is then capable of
parallax scrolling once camera Class starts updating the x values of
each background object. The idea for the parallax background was take
from here: https://www.youtube.com/watch?v=5q7tmIlXROg

The class also randomises the images of the background.

@author: Rokas Danevicius (unless stated otherwise)
'''


import pygame
import random

# Creating information for each object which will be displayed on the
# background.

# The information is stored in a list of lists.
# as an example [increment, [x_position, y_position]].
# First parameter stores the increment of the scroll.
# The increment will be used to control the speed of the scroll for that
#  particular object.
# x_position is where the object will be blited on x axes.
# y_position is where the object will be blited on y axes.



# Load the images used by the objects also scale the images to fit the
# size of the map.
back1 = pygame.image.load('graphics/background_sprite/back_1.png')
back1 = pygame.transform.scale(back1, (192, 192))

back2 = pygame.image.load('graphics/background_sprite/back_2.png')
back2 = pygame.transform.scale(back2, (192, 192))

back3 = pygame.image.load('graphics/background_sprite/back_3.png')
back3 = pygame.transform.scale(back3, (192, 192))

back4 = pygame.image.load('graphics/background_sprite/back_4.png')
back4 = pygame.transform.scale(back4, (192, 192))

super_back1 = pygame.image.load('graphics/background_sprite/back_super_1.png')
super_back1 = pygame.transform.scale(super_back1, (128 * 2, 128 * 2))

super_back2 = pygame.image.load('graphics/background_sprite/back_super_2.png')
super_back2 = pygame.transform.scale(super_back2, (128 * 2, 128 * 2))


class Background:
    """ Class reiterates through a matrix containing the increment and
    x/y positions of each object and blits an image using those values.
    The idea for the parallax background was take from here:
    https://www.youtube.com/watch?v=5q7tmIlXROg
    """


    def __init__(self, screen):
        # Variable which temporarily stores information about a single
        # object
        # when iteration is happening.
        self.objects = []
        # Gets the surface to which the background will be displayed.
        self.display = screen
        # Variable which gets updated with x scroll value from the
        # Camera class.
        self.move = 0
        self.convertRandom()

    def objectRandom(self):

        background_objects = [[0.25, [0, 0], random.randint(0, 1)],
                              [0.25, [256, 0], random.randint(0, 1)],
                              [0.5, [0, 64], random.randint(0, 3)],
                              [0.5, [192, 64], random.randint(0, 3)],
                              [0.5, [384, 64], random.randint(0, 3)],
                              [0.5, [576, 64], random.randint(0, 3)]]
        return background_objects

    def convertRandom(self):
        '''
        Converting the randomly generated int values in the list of
        lists to loaded images which will be blited.
        '''

        # Create the list of lists with sublists containing a random int
        #  value.
        self.background_objects = self.objectRandom()

        # Checking the random values and assigning an image variable
        # instead of it.
        for image in self.background_objects:
            if image[0] == 0.5 and image[2] == 0:
                image[2] = back1
            if image[0] == 0.5 and image[2] == 1:
                image[2] = back2
            if image[0] == 0.5 and image[2] == 2:
                image[2] = back3
            if image[0] == 0.5 and image[2] == 3:
                image[2] = back4
            if image[0] == 0.25 and image[2] == 0:
                image[2] = super_back1
            if image[0] == 0.25 and image[2] == 1:
                image[2] = super_back2


    def displayQ(self):
        ''' Method which blits the background to the display'''

        # Reiterating through "background_objects" matrix to get all of
        # the values for each individual background object.

        for background_object in self.background_objects:

            # x value of each object gets updated by the camera scroll
            # stored in self.move value when the camera scroll() method
            # is active. The speed of the scrolling gets determined by
            # the increment which is stored in background_object[0]
            self.objects = (background_object[1][0] - self.move * background_object[0],
                            background_object[1][1])

            # Blit the background images to the screen.
            self.display.blit(background_object[2], self.objects)

`;

const pythonCodeString3 = `
'''
The class which creates a camera view for the game which fallows the
player. The idea for the camera was taken from here:
https://www.youtube.com/watch?v=5q7tmIlXROg

@author: Rokas Danevicius (unless stated otherwise)
'''

import pygame

class Camera:
    '''
    The class which creates a camera view for the game which fallows the
    player on the x axes. The class does so by updating the x value of
    each objects drawn of the game_display. The position of the camera
    view is determined by the position of player character position on x
    axes. The class is also able to fallow the player on y axes if one
    wishes to. The idea for the camera was taken from here:
    https://www.youtube.com/watch?v=5q7tmIlXROg
    '''


    def __init__(self, screen, x=0, y=0):

        # x and y values used to update the x or y values of other
        # blited objects.
        self.x = x
        self.y = y

        # List used to save the name of character Class instances.
        self.sprites = pygame.sprite.Group()

        # Map width
        self.map_width = screen.get_width()
        self.map_view = self.map_width // 2

        # Create a variable to follow Players position in the map when
        # camera is not working.
        self.world_x = x

    def addBack(self, background_object):
        ''' Access the variables of background class instance.'''
        self.background_scroll = background_object

    def addMap(self, map_obj):
        ''' Access the variables of Map class instance.'''
        self.map = map_obj

    def addPlayer(self, player):
        self.sprites = pygame.sprite.Group()
        self.sprites.add(player)

        # Locks the camera to the player sprite.
        self.player = player

    def addWeapon(self, weapon):
        self.sprites.add(weapon)

    def add(self, sprite):
        ''' Access the variables of all Character class instance.'''
        self.sprites.add(sprite)
        # self.init_player = self.sprites[0]
        # self.init_position = self.init_player.position[0]

    def scroll(self):
        ''' Method which updates the x values of objects which are
        blited to game_display'''

        # Creates a variable for the visible map width.
        map_width = self.map.dims[0] - self.map_view

        # Creating boarders for the camera view.
        # Stops the camera moving if the camera hits the left side of
        # the level.
        if self.world_x > map_width:
            self.x = 0
            self.world_x = map_width

        # Stops the camera moving if the camera hits the right side of
        # the level.
        elif self.world_x < 0:
            self.x = 0
            self.world_x = 0

        # Camera moves, the values of x values of objects that are not
        # the player get updated.
        else:
            current_offset = (self.player.rect.centerx - self.map_view / 2)
            if self.world_x + current_offset > map_width:
                return
            if self.world_x + current_offset < 0:
                return
            # Moves the background objects. Updates their x value.
            self.background_scroll.move += self.x

            # Moves the Map sprite. Updates its x value.
            for tile in self.map.map_group:
                tile.rect.centerx -= self.x

            # Moves the player and NPC sprites. Updates their x values.
            for sprite in self.sprites:
                sprite.rect.centerx -= self.x

            self.x = (self.player.rect.centerx - self.map_view / 2)

            self.world_x += self.x
`;

const Pyfighter = () => {
  // Page for PyFighter project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='PyFighter' date='2022-01-02'/>

      <div className="pictureWrapper1">
        <img className="projectIcon" src={pyfighter}/>
      </div>
      <h3 className="pageHeader1">
        Intro
      </h3>
      <p className='paragraph1'>
        Pyfighter is an 8-bit side-scrolling platform game, created as part of my Nottingham
        University MSc program in Python with PyGame. Co-created by me, R. Soane, and S. Mistry,
        Pyfighter draws inspiration from classic titles such as Super Street Fighter, Super Smash
        Bros, and Mario. The game is infinitely customizable, with difficulty levels that increase
        progressively over time, keeping players challenged and engaged. Our efforts were rewarded
        with a 2nd place ranking among 2020 submissions, making Pyfighter a true standout among the
        competition.
      </p>

      <p className='paragraph1'>
        The game features a dynamic random map generation system that creates new levels each time
        you play. Additionally, we've designed our own AI for enemies, which follows and attacks the
        player when they are within view range. We've also created custom sprites and animations,
        with a parallax scrolling effects, as well as diverse weapons that can be used by both
        players and enemies.
      </p>

      <p className='paragraph1'>
        If you wish to try the game for your self please check it out on <a className="inLineLink"
                                                                            href="https://github.com/RokasDan/py-fighter">[GitHub]</a>.
      </p>

      <h3 className="pageHeader1">
        Gameplay
      </h3>
      <p className='paragraph1'>
        The game immerses players in a dynamic city arena filled with randomly
        generated platforms. Initially, players are tasked with defeating a single adversary using
        their WASD keys to jump, walk and a space bar to unleash melee
        attacks. Once the enemy is defeated, players can progress to the next level by pressing
        the E key, where new challenges await. Each level intensifies the action, as enemy numbers
        increase. To help players stay in the game, fallen foes drop weapons
        such as swords and boomerangs that can be wielded for a limited time.
      </p>

      <VideoComponent
        src="https://www.youtube.com/embed/cAWdl9GXIeg?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>
      <h3 className="pageHeader1">
        Random Map Generation
      </h3>

      <p className='paragraph1'>
        During the development of PyFighter, our team had specific objectives and tasks to complete.
        One of my primary tasks was to design a system for randomly generating maps.
      </p>
      <p className='paragraph1'>
        To accomplish
        this, I utilized a matrix - a list of lists - to create a visual
        representation of the game's terrain. The matrix consists of three randomly generated
        values: stone, grass,
        and platform, represented by 1, 2, and 3 respectively. Number 0 represents an empty tile.
      </p>

      <p className="paragraph1">
        Using a combination of my created
        platformCheck() and platformPlace() methods, I was able to ensure that the randomly
        generated
        platform values were appropriately spaced apart within the matrix and that the overall map
        was within the game's set limits. Once the map matrix is
        finalized, it is passed on to Robert Soane's class, which utilizes the data to blit the
        in-game terrain.
      </p>

      <CodeBlock codeString={pythonCodeString} language="python"/>
      <p className="paragraph1">
      </p>
      <h3 className="pageHeader1">
        Camera Movement
      </h3>
      <p className="paragraph1">
        As part of my responsibilities in PyFighter, I also developed the camera movement for the
        game, which tracks the player's character. To achieve this, I created a custom camera class
        that generates a camera view that follows the player along the x-axis. The class updates the
        x-value of all game objects drawn on the game_display accordingly. The camera view's
        position is determined by the player's position along the x-axis. When the player reaches a
        corner of the map, the camera stops following the player to indicate the boundary of the
        game world.
      </p>
      <CodeBlock codeString={pythonCodeString3} language="python"/>
      <p className="paragraph1"></p>

      <h3 className="pageHeader1">
        Parallax Scrolling
      </h3>
      <p className="paragraph1">
        The final class that I contributed to the project is the Background class. This class is
        responsible for drawing the background of our game and creating the parallax scroll effect.
        It functions similarly to the Map class, using a matrix to blit background tiles onto the
        display.
      </p>
      <p className="paragraph1">
        The first object in the background matrix determines the scrolling speed of the background
        sprite, which is used by the Camera class to set the speed of the scroll for the parallax
        effect. The second object specifies the original location of the background sprite, while
        the third object is a randomly generated number that selects which background sprite to
        display.
      </p>
      <CodeBlock codeString={pythonCodeString2} language="python"/>
      <p className="paragraph1">

      </p>
      <h3 className="pageHeader1">
        Game Sprites
      </h3>
      <p className="paragraph1">
        In addition to coding, I also contributed to the game's design by creating sprites for our
        main character's movement and attack animations. These same animations were also used for
        the
        enemy characters, with their colors changed to red and their head changed to represent our
        teachers from Nottingham University. When the sprite sheets where ready
        they were animated in our game by Robert Soane's Sprite sheet class.
      </p>
      <div className="image-container">
        <img className='imageWrap' src={image1}/>
        <img className='imageWrap2' src={image2}/>
      </div>
      <p className="paragraph1">
        Furthermore, I designed the game's overall look by drawing all the map tiles and the
        background tiles used in the game. I aimed for the game to have a Cyberpunk 80's aesthetic,
        as I am personally drawn to this style.
      </p>
      <div className="image-container">
        <img className='imageWrap' src={image3}/>
        <img className='imageWrap4' src={image4}/>
        <img className='imageWrap2' src={image5}/>
      </div>

      <h3 className="pageHeader1">
        Game Music
      </h3>
      <p className="paragraph1">
        Lastly, I had the opportunity to contribute to the game's audio by creating some music
        tracks. One of my tracks is featured as the main fighting music in the game, and is set to
        loop continuously. In addition to my contributions, Robert Soane also created some music
        tracks for the game, which players can choose to set as their preferred fighting music in
        the game's settings. Here are the tracks:
      </p>

      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/Pyfighter.mp3"
                     description="PyFighter fighting theme."/>
        <AudioSimple id="2" to='/' link="/audio/Roberttrack.mp3"
                     description="Robert Soane's prototype fighting theme."/>
      </AudioProvider>

      <h3 className="pageHeader1">
        Closing Notes
      </h3>

      <p className="paragraph1">
        Overall, I really enjoyed working on this project. It was a great experience collaborating
        with a talented team of developers and artists, and I am proud of the contributions I made
        to the game's code, design, and audio. Through working on this project, I learned a lot
        about the importance of teamwork in project development. Effective communication and
        collaboration were essential for us to achieve our goals and bring the game to life.
      </p>

    </div>
  );
}
export default Pyfighter;
