$(document).ready(function() {

    const WPM = 275;
    
    const TOPICS = ["Intro to Java.", "Git.", "Classes.", "Inheritance.",
                    "Interfaces.", "Iterators and Iterables.", "Equality.",
                    "Generics.", "Collections, Abstract Data Types.", "Streams.",
                    "Linked Lists.", "Asymptotic Analysis.", "Hashing.",
                    "Binary Trees.", "Balanced Trees.", "Graphs.", "Graph Algorithms.", "Sorting."];
    
    const SITENAME = "https://changkonabe.github.io/";

    let aboutWordCount = $("#about-me")[0].innerText.split(" ").length;
    
    // jQuery Function Number
    $("#about-read-time").text((aboutWordCount / WPM).toFixed(2) + " min read");
    
    for (let i = 0; i < TOPICS.length; i++) {
        addTopic(TOPICS[i]);
    }


    // jQuery Function Number
    $(".box").hover(
        function() {
            $(this).css('cursor', 'pointer');
            $(this).css('color', 'red');
        }, function() {
            $(this).css('color', 'inherit'); 
        });
                            
    // jQuery Function Number
    $(".box").click(function() {
        let topic = $(this)[0].innerText.trim();
        let cleaned = topic.replace(/\s/g, "-").replace(/\./,".html").toLowerCase();
        let redirect = SITENAME + "topics/" + cleaned;
        window.location.href = redirect;
    });
    
    function addTopic(name) {
        // jQuery Function Number
        $("#topics-container").append(
            '<div id="topic" class="box"><div id="topic-content"><h1>' + name + '</h1></div></div>'
        );
    }

})

