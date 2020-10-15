(function() {
  "use strict";

  window.addEventListener("load", init);
  //Links to all of the projects in order that they appear in the css 
  let links = ["ect.html","reWA.html", "cg.html","nightowl.html", "k-12wb.html",
  "https://students.washington.edu/vremaker/felineGroovy/",
  "https://play.google.com/store/apps/details?id=edu.washington.info448.pace","https://students.washington.edu/vremaker/NamePunsSp19/", "https://students.washington.edu/vremaker/dubhacks2018/landing.html"];
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

    let tiles = qsa(".image-container");
    for(let i = 0; i < tiles.length; i ++) {
      tiles[i].addEventListener("click", function() {
        console.log(links[i].substr(0,3));
        if(links[i].substring(0,3) === "htt") {
          window.open(links[i], '_blank');
        } else {
          window.open(links[i], '_self');        }
      })
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