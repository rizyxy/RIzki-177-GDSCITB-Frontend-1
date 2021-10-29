var modal = document.getElementById("modal")

let data = '{"movie" : [' +
'{"title":"The Extraction" , "rating":"IMDB Rating : 6.7/10" , "genre":"Drama, Action" , "description":"Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he is enlisted to rescue the kidnapped son of an imprisoned international crime lord"},' +
'{"title":"Special ID" , "rating":"IMDB Rating : 5.6/10" , "genre":"Action, Drama" , "description":"A cop goes undercover in a ruthless underworld organization to stop a gang leader, only to put himself in great danger after being exposed by his former protégé and best friend." },' +
'{"title":"Ip Man 4" , "rating":"IMDB Rating : 7.0/10" , "genre":"Action, Martial Art" , "description":"The Kung Fu master travels to the U.S. where his student has upset the local martial arts community by opening a Wing Chun school." },' +
'{"title":"Squid Game" , "rating":"IMDB Rating : 8.1/10" , "genre":"Thriller, Drama" , "description":"Hundreds of cash-strapped players accept a strange invitation to compete in children games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake." },' +
'{"title":"Avengers : Infinity War" , "rating":"IMDB Rating : 8.4/10" , "genre":"Action, Superheroes" , "description":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." },' +
'{"title":"Avengers : Endgame" , "rating":"IMDB Rating : 8.4/10" , "genre":"Action, Superheroes" , "description":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face" },' +
'{"title":"Guardians of The Galaxy 2" , "rating":"IMDB Rating : 7.6/10" , "genre":"Action, Superheroes" , "description":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord encounter with his father the ambitious celestial being Ego." },' +
'{"title":"Spiderman : Homecoming" , "rating":"IMDB Rating : 7.4/10" , "genre":"Action, Superheroes" , "description":"Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City." }]}';

const obj = JSON.parse(data);

window.onclick = function(event){
    if (event.target == document.getElementById("description")) {
        document.getElementById("description").style.display = "none"
    }
}

function closemodal() {
    document.getElementById("description").style.display = "none"
}

function theExtraction() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[0].title;
    document.getElementById("overview").innerHTML = obj.movie[0].description;
    document.getElementById("rating").innerHTML = obj.movie[0].rating;
    document.getElementById("genre").innerHTML = obj.movie[0].genre;
}

function specialID() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[1].title;
    document.getElementById("overview").innerHTML = obj.movie[1].description;
    document.getElementById("rating").innerHTML = obj.movie[1].rating;
    document.getElementById("genre").innerHTML = obj.movie[1].genre;
}

function ipMan4() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[2].title;
    document.getElementById("overview").innerHTML = obj.movie[2].description;
    document.getElementById("rating").innerHTML = obj.movie[2].rating;
    document.getElementById("genre").innerHTML = obj.movie[2].genre;
}

function squidGame() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[3].title;
    document.getElementById("overview").innerHTML = obj.movie[3].description;
    document.getElementById("rating").innerHTML = obj.movie[3].rating;
    document.getElementById("genre").innerHTML = obj.movie[3].genre;
}

function infinityWar() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[4].title;
    document.getElementById("overview").innerHTML = obj.movie[4].description;
    document.getElementById("rating").innerHTML = obj.movie[4].rating;
    document.getElementById("genre").innerHTML = obj.movie[4].genre;
}

function endgame() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[5].title;
    document.getElementById("overview").innerHTML = obj.movie[5].description;
    document.getElementById("rating").innerHTML = obj.movie[5].rating;
    document.getElementById("genre").innerHTML = obj.movie[5].genre;
}

function guardianGalaxy() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[6].title;
    document.getElementById("overview").innerHTML = obj.movie[6].description;
    document.getElementById("rating").innerHTML = obj.movie[6].rating;
    document.getElementById("genre").innerHTML = obj.movie[6].genre;
}

function spidermanHomecoming() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.movie[7].title;
    document.getElementById("overview").innerHTML = obj.movie[7].description;
    document.getElementById("rating").innerHTML = obj.movie[7].rating;
    document.getElementById("genre").innerHTML = obj.movie[7].genre;
}