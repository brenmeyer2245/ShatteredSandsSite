const html = require('html-template-tag');
const episodeStream = require('episodeStream');

module.exports = (page) =>
html`<!DOCTYPE html>
<html>
    <head>
    <title>The Shattered Sands</title>
        <link href = "ShatteredSands.css" rel="stylesheet" type ="text/css">;  <link type = "text/css" rel = "stylesheet" href = "/Users/brenmeyer/Desktop/Web Resources/bootstrap.css"/>
    </head>

    <body>

     <!-- HEADER -->
        <div class = "header center flex active">
            <h1>Welcome to the Shattered Sands</h1>
        </div>

<!--Filter Buttons -->
    <div id = "filter" class = "flex">
        <button id = "filterBtn" type = "submit"> Filter </button>
        <input id = "filterInput" type = "search">
    </div>


    <!-- Content Frame-->
        <div id = "content_frame" class = "flex">


    <!-- Page Left -->
        <div class = "pageLeft">
            <!--Characters-->
          <div class = "menuBlock flexDown">
            <div id = "characterBlock" class = "menuItems">
                <h1>Characters</h1>
            </div>
          </div>
            <!--About-->
            <div class = "menuItems flexDown">
                <h1>About</h1>
            </div>
        </div>
    <!-- Page Right -->
        <div class = "pageRight flexDown">

    <!--Episodes -->
            ${episodes.map(episode =>
            html` <div class = "episode_card center" data-title="ways_of_the_dark">
            <h1 class = "episode_title">${episode.title}</h1>
              <div class = "episode_content flex">
                <div class = "episode_icon">
                    <img class="episodeIcon" src = "${episode.icon}">
               </div>
                <div class = "episode_text flex">
                   <p>Kal and Vass, guided by Tuman Bay enter the Ways. In the darkness, where the Mah Shing See lurks, they meet a long lost friend</p>
                   <p>${episode.cast.split(',').join('<br />')}</p>
                   <audio controls class = "episode-audio">
                        <source src = ${episode.audio}" type = "audio/mp3">
                         Your Browser Does Not Support the audio
                     </audio>
               </div>
            </div>
        </div>
`)}

<!--Character Display -->
        <div id = "picBook" class = "picBook" data-source = null>
            <div id = "party_main_card" class = "flex">


              <div class = "flexDown active">

                <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/aragwyn1.jpg">
                <h1>Aragywn Moonshadow</h1>
              </div >
              <div class = "flexDown">
                <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/DHarr.jpg">
                  <h1>D'Harr</h1>
              </div>
              <div class = "flexDown">
                <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/Jhanos2.jpg">
                  <h1>Jhanos Ventium</h1>
              </div>
              <div class = "flexDown">
                <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/varian_vega.jpg">
                  <h1>Varian Gray</h1>
               </div>
               <div class = "flexDown">
                <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/Kal_as_McQueen.jpg">
                   <h1>Kal E'moore</h1>
              </div>
            </div>




            <img id = "pic1" class = "picLib" src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/jhanos.png">
            <img id = "pic2" class = "picLib"
                 src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/Sharakhai-City-color-final.jpg">
       </div>

</div>
<!-- footer audio player-->
<div id = "footer-player">
                  <img src = "/Users/brenmeyer/Desktop/Programming/Web_Projects/BWS/pics/the_ways.jpg" class = "footer-player"/>;
                <div id = "footer-audio-container">
                  <h1 id = "footer-player-title">The Title of Episode</h1>

                  <audio controls>
                    <source src = "audio/VOS%20-%20Chapter%208%20-%20Ways%20of%20the%20Dark.mp3" data-episode-url = "" type = "audio/mp3"/>
                      Your Browser does not support audio
                    </audio>
                </div>
            </div>
    </div>
    </body>





//////////////////////////////
        <script src = "/Users/brenmeyer/Desktop/Web Resources/jquery-1.11.2.js"></script>
        <script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"> </script>
        <script src = "ShatteredSands.js"></script>
</html>

`
