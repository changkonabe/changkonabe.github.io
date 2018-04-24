$(document).ready(function() {
    
    const TOPICS = ["Intro to Java.", "Git.", "Generics.",
                    "Linked Lists.", "Asymptotic Analysis.", "Hashing",
                    "Trees.", "Graphs.", "Sorting."];
    const SITENAME = "https://changkonabe.github.io/"
    
    for (let i = 0; i < TOPICS.length; i++) {
        addTopic(TOPICS[i]);
    }

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

