(function(){
  window.addEventListener("load", init);

  function init() {
    id("mail").addEventListener("click", mail);
  }

  function mail() {
    let url = "email.php";
    let name = id("last").value + " " + id("first").value;
    let email = id("email").value;
    let subject = id("sub").value;
    let message = id("msg").value;
    if(name && email && subject && message) {
    let params = new FormData();
      params.append("email", email);
      params.append("name", name);
      params.append("subject", subject);
      params.append("message", message);
    fetch(url, { method : "POST", body : params })
       .then(checkStatus)
       .then(send)
       .catch(ohNo);
    } else {
      result.innerText = "Please fill out all fields in the contact form. ";
      setTimeout(function() {
        result.innerText = "";
      }, 3000);
    }
  }

  function send(response) {
    id("email").value = "";
    id("last").value = "";
    id("first").value = "";
    id("sub").value = "";
    id("msg").value = "";
    result.innerText = "Sent!"
    setTimeout(function() {
      result.innerText = "";
    }, 3000);
}
    function ohNo(response) {
result.innerText = "Something Went Wrong ";
  setTimeout(function() {
    result.innerText = "";
  }, 3000);
}

  /**** helpers *****/
/* Helper function to return the response's result text if successful, otherwise
* returns the rejected Promise result with an error status and corresponding text
* @param {object} response - response to check for success/error
* @return {object} - valid result text if response was successful, otherwise rejected
*                    Promise result
*/
function checkStatus(response) {
 if (response.status >= 200 && response.status < 300 || response.status == 0) {
   return response.text();
 } else {
   return Promise.reject(new Error(response.status + ": " + response.statusText));
 }
}

  function id(id){
    return document.getElementById(id);
  }
})();
