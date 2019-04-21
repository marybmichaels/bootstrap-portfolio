$(document).ready(function() {
    var projects = [
        {
            name: "Crystal Collector",
            link: "https://marybmichaels.github.io/unit-4-game/",
            date: "January 12, 2019",
            image: "https://images.unsplash.com/photo-1505009258427-29298f4dc5f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",
            description: "A project focused on JavaScript and jQuery.",
            github: "https://github.com/marybmichaels/unit-4-game",
        },
        {
            name: "Trivia Game",
            link: "https://marybmichaels.github.io/TriviaGame/",
            date: "January 24, 2019",
            image: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            description: "Made with HTML, CSS, Javascript, & jQuery.",
            github: "https://github.com/marybmichaels/TriviaGame",
        },
        {
            name: "Giftastic",
            link: "https://marybmichaels.github.io/giftastic/",
            date: "January 31, 2019",
            image: "https://marybmichaels.github.io/assets/giftastic.jpg",
            description: "Uses jQuery & Ajax to access the GIPHY API.",
            github: "https://github.com/marybmichaels/giftastic",
        },
        {
            name: "Train Scheduler",
            link: "https://marybmichaels.github.io/train-scheduler/",
            date: "February 6, 2019",
            image: "https://marybmichaels.github.io/assets/turquoise-train.jpg",
            description: "Utilizing the firebase platform to store data.",
            github: "https://github.com/marybmichaels/train-scheduler",
        },
        {
            name: "Sports Guru",
            link: "https://marybmichaels.github.io/project-1/",
            date: "February 14, 2019",
            image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            description: "Search a sports team for facts & news.",
            github: "https://github.com/marybmichaels/project-1",
        },
        {
            name: "Eat Da Burger",
            link: "https://still-falls-83545.herokuapp.com/",
            date: "March 30, 2019",
            image: "https://images.unsplash.com/photo-1536626330585-17ed78b3b3d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
            description: "Uses mySQL database hosted on Heroku.",
            github: "https://github.com/marybmichaels/burger",
        },
        {
            name: "Speakeasy",
            link: "https://stark-wildwood-48724.herokuapp.com/",
            date: "April 13, 2019",
            image: "https://images.unsplash.com/photo-1510664691675-9c263a118102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
            description: "Uses mySQL database hosted on Heroku.",
            github: "https://github.com/marybmichaels/proj-2",
        },
    ];

    for (i=0; i<projects.length; i++) {
        console.log(projects[i].name);

        var projDiv = $("<div>").appendTo("#projects-go-here").attr({
            class: "col-6-sm col-12-xs col-6-lg col-6-md projCard mb-5 shadow-large"
        });

        var container = $("<div>").attr({
            class: "row p-15"
        }).appendTo(projDiv);

        var image = $("<img>").attr({
            src: projects[i].image,
            class: "proj-img col-6",
            });


        var info = $("<div>").addClass("col-6 info");
            var name = $("<h2>").text(projects[i].name);
            var description = $("<p>").text(projects[i].description);
            
            var gitButton = $("<a>").text("Github Repository").attr({
                class: "sec-cta btn-text btn rounded-0",
                href: projects[i].github,
            });
            var openProj = $("<a>").text("Open Project").attr({
                class: "pri-cta btn-text btn text-white rounded-0",
                href: projects[i].link,
            })

        var spacer
        $(info).append(name, description, gitButton, openProj);
        $(container).append(image, info);
        // $(container).append(image, name, description, gitButton, openProj);
        // $(projDiv).append(container);
    };
});