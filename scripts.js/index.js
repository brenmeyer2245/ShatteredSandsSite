const characterList = ['Androl', 'Anya Varesh','Aragwyn', 'Clock', "D'Neal","D'Harr", 'Jazeel','Jhanos','Juvaan', "Kal",'Turok','Vass']

$(document).ready(function(){

 $('audio').on('click', function() {
        console.dir(this);
        console.log("Check");
        $('#footer-player').slideToggle();
        $('#footer-player').css('display', 'flex');
 });

});


document.getElementById('characterBlock').addEventListener('click', function(){
    const picBook = document.getElementById('picBook');
    console.dir(picBook);
    picBook.classList.toggle('opened');
});


document.getElementsByClassName('header')[0].addEventListener('mousemove', function(){
    this.classList.remove('active');
});


//Filter Button
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', function () {

//get all the episode post Objects and the value from the input box
    const episodes = Array.from(document.getElementsByClassName('episode_card'));
    const queryCharacter = document.getElementById('filterInput').value;

    //clear the input box
    document.getElementById('filterInput').value = "";


    searchEpisodes(episodes, function(episode){
//check if the query is a libraried character and is not an empty string
        if (characterList.includes(queryCharacter) && queryCharacter) {

//For each episode not featuring queried character, add darkened class
            episodes.forEach(episode => {
                if (episode.dataset.characters.indexOf(queryCharacter) < 0) {
                    episode.classList.add('darkened');
                }
            });
        }
    });
});

function searchEpisodes(episodes, query){
    episodes.forEach(episode => {
        query(episode);
    });
}







