const html = require('html-template-tag');


module.exports = (characters) => {
  html`<!--Character Display -->
        <div id = "picBook" class = "picBook" data-source = null>
            <div id = "party_main_card" class = "flex">
            ${characters.map((character)=>

              `<div class = "flexDown active">

                <img src = "${character.headshot}}">
                <h1>${character.name}}</h1>
              </div >
       </div>`)}`};
