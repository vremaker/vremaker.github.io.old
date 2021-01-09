(function() {
  "use strict";
  
  const PROEJECT_DETAILS = {
    "crochet-buddy": {
      "short-name": "crochet-buddy",
      "title": "Crochet Buddy",
      "description": "In the Spring of 2020, around the start of the Novel Coronavirus Pandemic that caused countries to shut down, I took up the art of crochet to fill the days in isolation. Due to my inability to count my stitches correctly in each of the rows I completed, the first blanket I made came out as more of a trapezoid than a rectangle. The other big issue that most novice crochet hobbyists is keeping a consistent tension in the amount that you pull on the yarn to create each stitch. Crochet Buddy is an Internet of Things (IoT) device created to assist novice crochet hobbyists in their pursuit of beautiful yarn-craft.",
      "links": [ "Analog Prototpye", "https://vremaker.medium.com/meet-crochet-buddy-6ea6e1c062f", 
        "CAD Model", "https://vremaker.medium.com/exploring-crochet-buddy-in-onshape-9343e39630bd", 
        "Bodystorming","https://vremaker.medium.com/you-can-count-on-crochet-buddy-1066d94b0aa2" 
    ]
    },
    "feline-fit": {
        "short-name": "feline-fit",
        "title": "The Feline Fit Scrunchie",
        "description": "The Feline Fit Scrunchie is a hip new re-fur-esh on the standard fitness tracker offered through companies like Fitbit. But, instead of residing only the wrist, the Feline Fit Scrunchie gives you the option of wearing it in your hair as well as around your wrist. This is a purr-fect addition to your wardrobe that will help you reach your fitness goals in style!",
        "links": [
          "Process Blog","https://vremaker.medium.com/meet-the-feline-fit-scrunchie-541bad3e2142"
        ]
    },
    "zoom-u": {
      "short-name": "zoom-u",
      "title": "The Virtual College Experience",
      "description":"A qualitative research study consisting of two field observations and two interviews which sought to answer the question: how do college students motivate and maintain productivity while learning from home?",
      "links": ["View the Study", "https://vremaker.medium.com/the-virtual-college-experience-e23d982f09bf"]
    },
    "ECT": {
      "short-name": "ECT",
      "title": "Emerald City Transit",
      "description": "As a project, in an advanced design class offered through the HCDE Department at The University of Washington, I redesigned Seattle Public Transit. This redesign started with user research, to understand the audience of Seattle Public Transit in order to design for the actual audience. Next, came the creation of six tasks that a user on Seattle Public Transit would complete. Three of these tasks would be designed for a mobile platform, and three of these tasks would be made for a kiosk interaction which would be located at a transit stop. Next, there were diagrams of user flows, to understand how the user would interact with the system while completing their tasks. Then, we created low fidelity wireframes to understand and test the layout of these interactions. Then, we created mood boards and picked a typographic hierarchy and a color scheme. Finally, we created high fidelity wireframes which showcased the fully designed interactions.",
      "links": ["Process Blog","https://vremaker.medium.com/seattle-public-transit-brand-redesign-5ce950b8513"]
    },
    "workbook": {
      "short-name": "Workbook",
      "title": "Human Centered Design Charrette Workbook",
      "description": "As a hands-on charrette, our project encourages students to engage with the prompt physically, using materials that they can likely find at home. This might be helpful for kids who are tired of working virtually, and enjoy concrete activities. The charrette asks students to ‘design a mobile application for a group of people with similar interests.’ Not only is this prompt universal enough that we run the same challenge in K-12 classrooms that we do with our university students, but it’s broad enough for you to tailor to your current lesson plan.",
      "links": [
        "Medium Article", "https://medium.com/@pukhrajs/how-human-centered-design-can-motivate-students-to-learn-7e2bd76d99fa", 
        "The Workbook", "https://drive.google.com/file/d/1vkKZenVvaFn68tSJrs_T5z20hfNBy_45/view"
      ]
    },
    "rewa": {
      "short-name": "rewa",
      "title": "Refugee Women's Alliance Redesign",
      "description": "Refugee Women's Alliance is a non-profit in Seattle with a focus on providing programs refugee women and their families. Over the course of 6 weeks, I adapted the existing color scheme for the brand, as well as the logo, iconography, and typography.",
      "links": ["Process Blog","https://medium.com/p/43658536ecd9"]
    },
    "night-owl": {
      "short-name": "night-owl",
      "title": "Night Owl ",
      "description": "This project spanned 11 weeks in our HCDE 318 (Introduction to User Centered Design) course, in Autumn 2019. As a team of 4, we applied the user centered design process to the problem area of the danger of walking alone at night for students. The process culminated in a mobile application called Night Owl that gives students confidence and control when walking alone at night.",
       "links": ["Process Blog", "https://vremaker.medium.com/meet-night-owl-2cddf92d1b61"]
    },
    "common-ground": {
      "short-name": "common-ground",
      "title": "Common Ground: People Over Politics",
      "description": "For the HCDE democracy design jam of 2020, a 24 hour virtual design sprint. We designed a mobile app called Common Ground. Common Ground is designed to combat the social divisions that were weaponized in the 2016 election It humanizes the “opposing side” by focusing on what people have in common, rather than political strategy. Politics have become increasingly polarized in recent years. In many ways, COVID-19 has deepened this political divide: Our team wondered: In a country divided by politics and physical isolation, how can people connect and find common ground with each other?", 
      "links": ["Process Blog", "https://vremaker.medium.com/common-ground-fa5eebd326a"]
    },
    "feline-groovy": {
      "short-name": "feline-groovy",
      "title": "Feline Groovy",
      "description": "An exploration of the Reddit API to create a website that serves users memes and cat pictures from reddit. This webiste uses HTML, CSS, and Javascript.",
      "links": ["View the Site", "https://students.washington.edu/vremaker/felineGroovy/"]
    },
    "cse-pun54": {
      "short-name": "cse-pun54",
      "title": "The CSE 154 Name Pun Generator",
      "description": "Created as a creative project for CSE154, a web development class at The University of Washington. Using the participants tab on the Canvas web page for the course, I created a name pun for every student in the class, and created an API around these name puns. I then created a searchable interface to look up name puns for people in the class. You can also select a random name pun for anyone in the class.",
      "links": ["View the Site","https://students.washington.edu/vremaker/NamePunsSp19/"]
    }
  };
  //

  window.addEventListener("load", init);
 function init() {
    let chev = qs(".box");
    let menu = qs(".navbar-toggle");
    let min = id("js-menu");
    let main = qs(".main-nav");
    chev.addEventListener("click", function(){
      window.open("index.html#portfolio","_self");
    } )
    menu.addEventListener("click", function(){
        main.classList.toggle('active');
    });
    min.addEventListener("click", function(){
        main.classList.toggle('active');
    });
    let navlinks = qsa("li a");
    for(let i = 0; i < navlinks.length; i++) {
      navlinks[i].addEventListener("click", () => {
        id("landing").classList.remove("hidden");
        id("about").classList.remove("hidden");
        id("portfolio").classList.remove("hidden");
        id("contact").classList.remove("hidden");
        id("text-view").classList.add("hidden");
      });
    }
    id("logo").addEventListener("click",()=>{
         id("landing").classList.remove("hidden");
        id("about").classList.remove("hidden");
        id("portfolio").classList.remove("hidden");
        id("contact").classList.remove("hidden");
        id("text -view").classList.add("hidden");
    });
    let tiles = qsa(".image-container");
    for(let i = 0; i < tiles.length; i ++) {
      tiles[i].addEventListener("click", function() {
        qs("#text-view .links").innerHTML = "";
        id("landing").classList.add("hidden");
        id("about").classList.add("hidden");
        id("portfolio").classList.add("hidden");
        id("contact").classList.add("hidden");
        id("text-view").classList.remove("hidden");
        qs("#text-view h2").innerText = PROEJECT_DETAILS[this.id]["title"];
        id("cow").innerText = PROEJECT_DETAILS[this.id]["description"];
        qs("#text-view img").src = "./tiles/" + PROEJECT_DETAILS[this.id]["short-name"] + ".jpg"; 
      
        qs("#text-view img").alt = PROEJECT_DETAILS[this.id]["title"];  
        for(let m = 0; m < PROEJECT_DETAILS[this.id]["links"].length; m+=2) {
          let button = document.createElement("p");
          button.classList.add("button");
          button.textContent = PROEJECT_DETAILS[this.id]["links"][m];
          button.addEventListener("click", ()=> {
            window.open( PROEJECT_DETAILS[this.id]["links"][m + 1], '_blank');
          })
          qs("#text-view .links").appendChild(button);
        }
        /* <a href="resume.html" class="button" id="resume-btn">My Resume</a>*/ 

      });
    }
  }


  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

})();