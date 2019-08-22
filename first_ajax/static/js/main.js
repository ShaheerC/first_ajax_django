// What HTTP method did your browser use to make the request?
// How many milliseconds did it take your browser to complete it?
// What HTTP status code did the server return? What does that mean?
// Look at the "Initiator" and "Type". Was this an xhr/JavaScript/AJAX request or a normal browser request?

document.addEventListener("DOMContentLoaded", function() {
    const initialajaxrequest = document.getElementById('run_ajax_root');
    const pingpongajaxrequest = document.getElementById('run_ajax_pingpong');
    const sectionping = document.querySelector('.step_ping');

    initialajaxrequest.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
        request.then(function(response) {
            console.log("__REQUEST_MADE__");
        });
        
    });

    pingpongajaxrequest.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/pong');
        request.then(function(response){
            console.log("_REQUEST_PING_MADE__");
            console.log(request.data);
            const appendDataElem = document.createElement('p');
            appendDataElem.innerHTML = response.data;
            sectionping.appendChild(appendDataElem);
        });
        request.catch(function(error) {
            console.error('__REQUEST_FAILED___')
            console.error(error.response.data);
            const errorDataElem = document.createElement('p');
            errorDataElem.innerHTML = error.response.data;
            sectionping.appendChild(errorDataElem);
        });
    });
    // const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    // request.then(function(response) {
    //     console.log("__REQUEST MADE__");
    // });
  
});