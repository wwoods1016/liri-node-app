# LIRI, a CLI Node App

**Created by**: `Will Woods`

**Created on**: `April 15, 2019`

<img src="https://user-images.githubusercontent.com/46382684/56158063-0deb5780-5f8f-11e9-8407-c594fde07e89.png" style="border:5px ridge">

- - -

## ABOUT
LIRI stands for Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user can enter the following commands followed by their search terms to return information on upcoming concerts, Spotify listings and movie data. 

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - -

## HOW TO
### **Video Guide**

[Watch the YouTube Demo here](https://youtu.be/S4sWFJKJFs4)

### **Step by Step instructions**

1. Open the terminal (or Git Bash if you are a Windows user).
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
    ```bash
        node liri.js concert-this <name of artist or band>
    ```
    
    Output: The system will display a list of the next 10 events and locations where the artist or band will perform. The system will also log all the results in the log.txt file. 

    NOTE: If the artist or band you are searching for uses a name that contains more than one word (ie: Moon Taxi, Aaron Neville, etc.), you must surround the full name in quotation marks. Here's an example search for concerts by Moon Taxi

    ```bash
        node liri.js concert-this "Moon Taxi"
    ```
    
    <img src="https://user-images.githubusercontent.com/46382684/56159940-ec409f00-5f93-11e9-8f4e-9d1663d75fb0.PNG" style="border:5px ridge">
    
    
    **Example 2**: Run the `spotify-this-song` command
    
    ```bash
        node liri.js spotify-this-song <name of song>
    ```
    
    Output: The system will display a list of the different versions of the song that are currently on Spotify. The system will also log all the results in the log.txt file. 

    <img src="https://user-images.githubusercontent.com/46382684/56160166-7557d600-5f94-11e9-9147-9f1a7afd5c1f.PNG" style="border:5px ridge">

    **Example 3**: Run the `movie-this` command
    
    ```bash
        node liri.js movie-this <name of movie>
    ```
    
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. 

    <img src="https://user-images.githubusercontent.com/46382684/56160249-bc45cb80-5f94-11e9-9bbe-23a9bd2dbce6.PNG" style="border:5px ridge">

    **Example 4**: Run the `do-what-it-says` command
        
    ```bash
        node liri.js do-what-it-says
     ```
        
    Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. In this particular case, I have it set to enter the command for performing a Spotify search.