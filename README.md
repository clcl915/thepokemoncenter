# The Pokemon Center 

Live Link [here](https://clcl915.github.io/thepokemoncenter/)

made with react + pokeapi + d3

<p align="center">
<img src="public/thepokemoncenter-demo.gif">
</p>

I remember being so addicted to playing Pokemon since I got a Nintendo DS. I even remember playing Pokemon online on online emulators. I got the chance to play it again after years with my Nintendo Switch and I got reminded on how fun it is. But I got frustrated with how I had to individually search for Pokemon on the official website to find out their abilities and weakness. I wished there was just one site that showed a comprehensive overall without having to click back and forth. 

Because there are so many generations and so many Pokemon, I would also wondered how do they create so many new Pokemon? How can they be so creative and come up with such interesting creatures?

Eventually I noticed that some Pokemon started to look similar in shape, color, and size. For example, the starter Pokemon had a good chance of having a bird-like shape. Some of the blob Pokemon started to look similar too. So I wondered, how often do Pokemon shapes get repeated? Do we have a lot of bird-like or dog-like shapes?

So ... I decided to visualize all 896 Pokemon shapes!

### The Process

When researching on which dataset I should use, I eventually decided to use the Poke API. It's an extensive API with data on everything you can name: berries, pokemon spawn locations, pokemon color, shape, etc. Using this API would be a lot easier with React so the tools for this project was React, PokeAPI, and D3(for visualizations).

I spent a good number of hours on just extracting the data I needed. Originally I had 2 visualization ideas. 

1. A pokemon shape analysis
    I wanted to visual the various Pokemon shapes. There was a day where I noticed that there were so many dog-like or bird-like Pokemon. I remember a lot of blob shaped Pokemon as well. So, I wanted to visual the most commonly used and least commonly used Pokemon shapes. 

2. A type-color outlier visualization. 
    
    I wanted to visual which Pokemon in each type category wasn't the conventional color. For example, I wanted to visualize which fire-type Pokemon wasn't red. 


Due to the time constraits, I was only able to finish the first one. But when I have some more free time on my hands, I would love to finish the second one. 

This project consists of two pages: Pokemon PC and Insights. 

The Pokemon PC was inspired by the PC in actual Pokemon games where players can store their Pokemon that's not in their party of 6. In the PC, you can find out more information about each Pokemon. In this project, I wanted to visual the Pokemon in a grid format instead of individual lists of pages. When you hover over each Pokemon in the grid, basic information will pop up showing the Pokemon sprite, id number, name and type. As you scroll down to every 15th Pokemon, the site will continue to fetch and load the next 30 Pokemon from PokeAPI. 

The Insights page holds my Pokemon shape analysis. The left side is my analysis and the right side is my visualization. I first extracted data from the PokeAPI to get the count number of Pokemon of each type. Pokemon categorized the shapes into 14 different categories. I then took the type name and count number and sorted them from highest occurrence to lowest occurrence. This results in Upright:189, Quadruped:167, Humanoid: 136, Wings:80, Arms:47, Ball:41, Armor:40, Fish:39, Blob:38, Squiggle:37, Legs:23, Tentacles:23, Bug-Wings:20, and Heads:16. Instead of using each Pokemon's image to visualize this, I used a black general shape to represent them. This decision removes the different fancy colors and sizes to show a really nice clean visualization of all the shapes. As you scroll down, I highlight each type by making all other types a lower opacity. The visualization shifts upwards as well making the highlighted type in the middle of the screen. This visualization proved a lot of my assumptions wrong. My initial assmumptions was that there were a lot of dog and bird like shaped Pokemon. But in actuality, the most common shape is the Upright shape (2 legs and a tail). Dog-like or 4 legged Pokemon came in a close second. Bird-like or wingged Pokemon came in 4th. 

If I had more time, I would love to work on the type-color outliers visualization. I spent a good number of hours extracting that data. I had to extract Pokemon data from types and extract Pokemon data from colors into 2 different arrays. Then I looped through each Pokemon in each individual type and find it's color in the color array. I had a spent a lot of time handling this data and it was a shame that I ran out of time to visualize it, but hopefully when I have more time I can continue to work on this! 