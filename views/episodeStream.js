const html = require("html-template-tag");


module.exports = (episodes) => html`   <!--Episodes -->
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
`)}`;
