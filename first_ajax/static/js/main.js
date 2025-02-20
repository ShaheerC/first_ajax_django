// What HTTP method did your browser use to make the request?
// How many milliseconds did it take your browser to complete it?
// What HTTP status code did the server return? What does that mean?
// Look at the "Initiator" and "Type". Was this an xhr/JavaScript/AJAX request or a normal browser request?

document.addEventListener("DOMContentLoaded", function() {
    const initialajaxrequest = document.getElementById('run_ajax_root');
    
    const pingpongajaxrequest = document.getElementById('run_ajax_pingpong');
    const sectionping = document.querySelector('.step_ping');
    
    const countajaxrequest = document.getElementById('run_ajax_count');
    const sectionseven = document.querySelector('.step_seven');

    const timeajaxrequest = document.getElementById('run_ajax_time');
    const sectioneight = document.querySelector('.step_eight');

    const acarajaxrequest = document.getElementById('run_ajax_acar');
    const sectionnine = document.querySelector('.step_nine');
    const emptyul = document.getElementById('car_ul');

    initialajaxrequest.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/');
        request.then(function(response) {
            console.log("__REQUEST_MADE__");
        });
        
    });

    pingpongajaxrequest.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/ping');
        request.then(function(response){
            console.log("_REQUEST_PING_MADE__");
            console.log(response.data);
            const appendDataElem = document.createElement('p');
            appendDataElem.innerHTML = response.data;
            sectionping.appendChild(appendDataElem);
        })
        .catch(function(error) {
            console.error('__REQUEST_FAILED___')
            console.error(error.response.data);
            const errorDataElem = document.createElement('p');
            errorDataElem.innerHTML = error.response.data;
            sectionping.appendChild(errorDataElem);
        })
        .then(function(response) {
            console.log("__REQUEST_NOTSURE__")
        });
    });

    countajaxrequest.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/count');
        request.then(function(response) {
            console.log("__REQUEST_COUNT_MADE__");
            console.log(response.data);
            const countDataElem = document.createElement('p');
            countDataElem.innerHTML = response.data;
            sectionseven.appendChild(countDataElem);
        });
    });

    timeajaxrequest.addEventListener('click', () => {
        const request = axios.get("http://intro-ajax-api.herokuapp.com/time", { 
            params: {timezone: 'Asia/Kolkata'}
        });
        request.then(function(response) {
            console.log("__REQUEST_TIME_MADE__");
            console.log(request.data);
            const timeDataElem = document.createElement('p');
            timeDataElem.innerHTML = response.data;
            sectioneight.appendChild(timeDataElem);
        });
    });

    acarajaxrequest.addEventListener('click', () => {
        const request = axios.get("http://intro-ajax-api.herokuapp.com/a_car");
        request.then(function(response) {
            console.log("__REQUEST_ACAR_MADE__");
            console.log(request.data);
            const carDataElem = document.createElement('li');
            carDataElem.innerHTML = response.data;
            emptyul.appendChild(carDataElem);
        });
    });
    
    // const request = axios.get('http://intro-ajax-api.herokuapp.com/');
    // request.then(function(response) {
    //     console.log("__REQUEST MADE__");
    // });
  
});