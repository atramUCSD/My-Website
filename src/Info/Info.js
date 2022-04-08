import React from 'react';
import self from '../img/self.png';


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(139, 158, 233)", "rgb(13, 81, 171)"];
/*
I highly recommend using a gradient generator like https://paytonjewell.github.io/gradient-generator/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Alan",
    lastName: "Tram",
    initials: "at", // the example uses first and last, but feel free to use three or more if you like.
    position: "Aspiring Design Technologist and UI/UX Developer",
    selfPortrait: self, // don't change this unless you want to name your self portrait in the "img" folder something else!
    gradient: `linear-gradient(135deg, ${colors})`, // don't change this either
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        ["🖥️", "My goal is to create memorable User Interfaces and ensure all users have a quality experience using our Platforms."], // change the emojis to something related to your list item :)
        ["🏖️", "Located in California, San Diego and San Marcos"],
        ["💼", "Currently a Student Researcher @ UCSD Design Lab and UI/UX Intern @ ReCODE Health"],
        ["✉️", "Primary: atram@ucsd.edu | Secondary: atramwebui@gmail.com"],
        ["📱", <a class = "number" href="tel:5554280940"> Phone Number: 760-500-6934 </a>]
    ],
    socials: [
        ["https://github.com/", facebookIcon()], // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon! // Just change the links so that they lead to your social profiles.
        ["https://linkedin.com", linkedInIcon()],
    ],
    bio: "My name is Alan Tram, I majored in Design/Human-Computer Interaction and minored in Computer Science at the University of California, San Diego (UCSD).",
    
   resumeIntro:"",
    
    goals: [
        ["📖", "Build better UI/UX Habits by reading related academic works/books"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🧩", "Improve ability to problem solve by taking advantage of volunteerships and side projects"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["📸", "Take more photos and videos with a focus to be more well rounded visually"],
        ["💼", "Get my first full time job!"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            liveLink: "paytonjewell.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "paytonjewell.dev", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Project 2",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 3",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 4",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
    ]
}

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

function facebookIcon() {
    return <i className="fa fa-github" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true"/>
};

function twitterIcon() {
    return <i className="fa fa-twitter" aria-hidden="true"/>
};

function gmailIcon() {
    return <i className='fa fa-google' aria-hidden="true"/>
}


