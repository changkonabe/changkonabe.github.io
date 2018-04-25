$(document).ready(function() {

    const WPM = 275;
    
    const TOPICS = ["Intro to Java.", "Git.", "Classes.", "Inheritance.",
                    "Interfaces.", "Iterators and Iterables.", "Equality.",
                    "Generics.", "Collections, Abstract Data Types.", "Streams.",
                    "Linked Lists.", "Asymptotic Analysis.", "Hashing.",
                    "Binary Trees.", "Balanced Trees.", "Graphs.", "Graph Algorithms.", "Sorting."];

    const RELEASED = new Set(["Intro to Java."]);
    
    const SITENAME = "https://changkonabe.github.io/";

    if ($("#lesson")[0]) {
        let aboutWordCount = $("#lesson")[0].innerText.split(" ").length;
    
        // jQuery Function Number 1
        $("#read-time").text(Math.ceil((aboutWordCount / WPM)) + " min read");
    }
    
    for (let i = 0; i < TOPICS.length; i++) {
        addTopic(TOPICS[i]);
    }

    // jQuery Function Number 2
    $(".box").hover(
        function() {
            let clicked = $(this)[0].classList.contains("null-box");
            if (!clicked) {
            // jQuery Function Number 3
                $(this).css('cursor', 'pointer');
                $(this).css('color', 'red');
            }
        }, function() {
            let clicked = $(this)[0].classList.contains("null-box");
            if (!clicked) {
                $(this).css('color', 'inherit');
            }
        });
                            
    // jQuery Function Number 4
    $(".box").click(function() {
        let topic = $(this)[0].innerText.trim();
        if (RELEASED.has(topic)) {
            let cleaned = topic.replace(/\s/g, "-").replace(/\./,".html").toLowerCase();
            let redirect = SITENAME + "topics/" + cleaned;
            window.location.href = redirect;
        } else {
            // jQuery Function Number 5
            $(this).addClass("null-box");
            $(this).html("<div id='topic-content'><h1>Coming soon.</h1></div>");
            $(this).css("color", "white");
        }
    });

    // $(".sidebar-item").click(function() {
    //     let jumpId = "#" + $(this).attr("id").slice("jump-".length);
    //     let pos = $(jumpId).position();
    //     window.location = pos;
        
    //     console.log(pos);
    // });
    
    function addTopic(name) {
        // jQuery Function Number 6
        $("#topics-container").append(
            '<div id="topic" class="box"><div id="topic-content"><h1>' + name + '</h1></div></div>'
        );
    }

})

