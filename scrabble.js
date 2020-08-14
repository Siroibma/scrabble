/*
File: /~alora1/public_html/assignments/8/scrabble.js (91.46) COMP 4610 GUI Programming I
Assignment 8: Scrabble
Ambioris Lora, UMass Lowell Computer Science, alora1@cs.uml.edu
Copyright (c) 2020 by Ambioris Lora. All rights reserved. May be
freely
copied or excerpted for educational purposes with credit to the
author.
*/
/*for keeping track of board spots */
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;

var stringHold = "       ";
var random = 0;
var totalPieces = 70;
var totaltiles = "";
var totalInhand = 0;

tileHandCount = 7;

/*Hide the start button in order from reginerating a bunch of pieces */
$("#onStart").click(function() {
    $("#onStart").hide();
});

/*JSON object that we were given from the PDF */
var unParseletters = {
    "pieces": [{
        "letter": "A",
        "value": 1,
        "amount": 9
    }, {
        "letter": "B",
        "value": 3,
        "amount": 2
    }, {
        "letter": "C",
        "value": 3,
        "amount": 2
    }, {
        "letter": "D",
        "value": 2,
        "amount": 4
    }, {
        "letter": "E",
        "value": 1,
        "amount": 12
    }, {
        "letter": "F",
        "value": 4,
        "amount": 2
    }, {
        "letter": "G",
        "value": 2,
        "amount": 3
    }, {
        "letter": "H",
        "value": 4,
        "amount": 2
    }, {
        "letter": "I",
        "value": 1,
        "amount": 9
    }, {
        "letter": "J",
        "value": 8,
        "amount": 1
    }, {
        "letter": "K",
        "value": 5,
        "amount": 1
    }, {
        "letter": "L",
        "value": 1,
        "amount": 4
    }, {
        "letter": "M",
        "value": 3,
        "amount": 2
    }, {
        "letter": "N",
        "value": 1,
        "amount": 6
    }, {
        "letter": "O",
        "value": 1,
        "amount": 8
    }, {
        "letter": "P",
        "value": 3,
        "amount": 2
    }, {
        "letter": "Q",
        "value": 10,
        "amount": 1
    }, {
        "letter": "R",
        "value": 1,
        "amount": 6
    }, {
        "letter": "S",
        "value": 1,
        "amount": 4
    }, {
        "letter": "T",
        "value": 1,
        "amount": 6
    }, {
        "letter": "U",
        "value": 1,
        "amount": 4
    }, {
        "letter": "V",
        "value": 4,
        "amount": 2
    }, {
        "letter": "W",
        "value": 4,
        "amount": 2
    }, {
        "letter": "X",
        "value": 8,
        "amount": 1
    }, {
        "letter": "Y",
        "value": 4,
        "amount": 2
    }, {
        "letter": "Z",
        "value": 10,
        "amount": 1
    }, {
        "letter": "_",
        "value": 0,
        "amount": 2
    }],
    "creator": "Ramon Meza"
}

//Here we Stringify then parse the info in order to use it for our game
var letters = JSON.parse(JSON.stringify(unParseletters));



//This function simply removes the letters on the board
function deleteLettersBoard() {
    $("#row > img").remove();
}

//This refreshes the page when we click the button to start over
function refreshPage() {
    location.reload();
}

// This code was used from this page https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
// and it serves the purpose of replace a character in a string. I use this to keep a live update of what letter is placed.
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

/*
	Function Name: $(document).ready(function()

	Purpose: This function does the following things
					1. Handles the droppable spaces and their properties
					2. Calculates The scores of the given letters
					3. Provides a live update of the letters as they are placed
					4. Center the letters inside of the droppables
					5. Keeping track how many tiles are in the players Hand
					6. Erasing the tiles that are placed when new word is clicked
					As soon as the page is ready.

*/
$(document).ready(function() {
    //here we make the 7 spaces droppable
    $("#space1").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(1)").droppable("disable");
            stringHold = setCharAt(stringHold, 0, ui.draggable.attr('id'));
            console.log(stringHold);
            score1 = score1 + parseInt(ui.draggable.attr('alt'));
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space2").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(2)").droppable("disable");
            $("#board > div:eq(2)").droppable("enable");
            stringHold = setCharAt(stringHold, 1, ui.draggable.attr('id'));
            console.log(stringHold);
            score2 = score2 + parseInt(ui.draggable.attr('alt')) * 2;
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space3").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(3)").droppable("disable");
            $("#board > div:eq(3)").droppable("enable");
            stringHold = setCharAt(stringHold, 2, ui.draggable.attr('id'));
            console.log(stringHold);
            score3 = score3 + parseInt(ui.draggable.attr('alt'));
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space4").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(4)").droppable("disable");
            $("#board > div:eq(4)").droppable("enable");
            stringHold = setCharAt(stringHold, 3, ui.draggable.attr('id'));
            console.log(stringHold);
            score4 = score4 + parseInt(ui.draggable.attr('alt'));
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space5").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(5)").droppable("disable");
            $("#board > div:eq(5)").droppable("enable");
            stringHold = setCharAt(stringHold, 4, ui.draggable.attr('id'));
            console.log(stringHold);
            score5 = score5 + parseInt(ui.draggable.attr('alt'));
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space6").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(6)").droppable("disable");
            $("#board > div:eq(6)").droppable("enable");
            stringHold = setCharAt(stringHold, 5, ui.draggable.attr('id'));
            score6 = score6 + parseInt(ui.draggable.attr('alt')) * 2;
            console.log(score6);
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#space7").droppable({
        drop: function(event, ui) {
            $(this).droppable("disable");
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this)
            });
            ui.draggable.draggable({
                disabled: true
            });
            $("#board > div:gt(7)").droppable("disable");
            $("#board > div:eq(7)").droppable("enable");
            stringHold = setCharAt(stringHold, 6, ui.draggable.attr('id'));
            console.log(stringHold);
            score7 = score7 + parseInt(ui.draggable.attr('alt'));
            console.log(score7);
            $("#word").text("Word: " + stringHold);
            $("#score").text("Score: " + (score1 + score2 + score3 + score4 + score5 + score6 + score7));
            totalInhand--;
            $("#nextWord").click(function() {
                ui.draggable.remove();
                stringHold = "       ";
                $("#word").text("Word: " + stringHold);
                $("#board > div").droppable("enable");
            });
        }
    });
    $("#nextWord").click(function() {
        startGame();

    });
});

/*
	Function: startGame
	Purpose: Fill up the hand with a total of 7 Tiles using the javascript Random function

*/
function startGame() {
    if (totalPieces != 0) {
        for (let i = totalInhand; i < 7; i++) {
            random = Math.floor(Math.random() * 27)
            if (letters.pieces[random].amount == 0) {
                while (letters.pieces[random].amount == 0) {
                    random = Math.floor(Math.random() * 27)
                    hold = String.fromCharCode(random);
                    hold = letters.pieces[random].letter;
                }
                createimage(hold, letters.pieces[random].value);
                totalPieces = totalPieces - 1;
                totaltiles = "Tiles Left: " + totalPieces;
                $("#tiles-left").text(totaltiles);
                totalInhand++;
            } else {
                hold = letters.pieces[random].letter;
                letters.pieces[random].amount = letters.pieces[random].amount - 1;
                console.log(letters.pieces[random].amount);
                createimage(hold, letters.pieces[random].value);
                totalPieces = totalPieces - 1;
                totaltiles = "Tiles Left: " + totalPieces;
                $("#tiles-left").text(totaltiles);
                totalInhand++;
            }
        }
    } else {
        window.alert("Last Hand, No more after this");
    }
}


/*
	function: createimage
	Purpose: This function takes a letter and its value and generates an image with a score value that we use to calculate score1

	Variables: Letter, lettervalue, img

*/
function createimage(letter, letterValue) {
    // try to make a string that creates the picture of the tile and then we append to row
    if (letter == "_") {
        var img = document.createElement('img');
        letter = "blank";
        img.src = 'tiles/Scrabble_Tile_' + letter + '.jpg';
        letter = "_";
        img.id = letter;
        img.alt = letterValue;
        document.getElementById('row').appendChild(img);
        $(function() {
            $('#row > img').draggable({
                revert: "invalid",
                snap: true,
                snapMode: "inner"
            });
        });
    } else {
        var img = document.createElement('img');
        img.src = 'tiles/Scrabble_Tile_' + letter + '.jpg';
        img.id = letter;
        img.alt = letterValue;
        document.getElementById('row').appendChild(img);
        $(function() {
            $('#row > img').draggable({
                revert: "invalid",
                snap: true,
                snapMode: "inner"
            });
        });
    }
}
