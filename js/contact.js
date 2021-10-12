//Form dictionary to be sent
var data_js = {
    "access_token": "fq4yotycku3m9w3u2a6u0lbo"
};

// cache DOM
var UI = cacheDom();


//Add contact button function calls
UI.$contactNav.onclick = contactLoad;
UI.$contactFtBtn.onclick = contactLoad;
UI.$formSubmit.onclick = js_send;

// Function to Cache Dom
function cacheDom() {
    var UI = {
        $body: document.getElementById('main'),
        $main: document.getElementById('mainLoad'),
        $top: document.getElementById('topBar'),
        $footer: document.getElementById('footer'),
        $contactMain: document.getElementById('contactDiv'),
        $contactBtn: document.getElementById('contactBtn'),
        $contactNav: document.getElementById('contactNav'),
        $contactFtBtn: document.getElementById('footerContact'),
        $homeBackground: document.getElementById('homeGraphicDiv'),
        $form: document.getElementById('contact_form'),
        $formName: document.getElementById('extra_name'),
        $formEmail: document.getElementById('reply_to'),
        $formSubject: document.getElementById('subject'),
        $formMessage: document.getElementById('message'),
        $formSubmit: document.getElementById('js_send'),
    };

    return UI
}

    

//Function to dynamically display Contact page content
function contactLoad() {

    
    console.log('Conact Page');

    //Cache DOM
    var UI = cacheDom();

    //update body background
    UI.$body.classList.remove('portfolio', 'main', 'home', 'resume');
    UI.$top.classList.remove('shadow', 'navCustom');
    UI.$footer.classList.remove('mainFooter');
    UI.$contactMain.classList.remove('hide');

    UI.$main.classList.add('hide');
    UI.$body.classList.add('about');
    UI.$footer.classList.add('contactFooter');
    UI.$top.classList.add('resumeNav');
    UI.$homeBackground.classList.add('hide');


    //load content at top of page, hide until top is reached
    $('body').hide(0, function(){
        window.scrollTo(0,0);
    });
    $('body').show(2000);


}


// Function to display success message on form submission
function js_onSuccess() {

    //Cache DOM
    var UI = cacheDom();

    //Display console status
    console.log('Http POST Request: success');

    //Update DOM
    UI.$formSubmit.disabled = false;
    UI.$formSubmit.classList.remove('btn-warning');
    UI.$formSubmit.classList.add('btn-success');
    UI.$formSubmit.innerHTML = "Sent";

    //clear form
    UI.$formName.value = "";
    UI.$formEmail.value = "";
    UI.$formSubject.value = "";
    UI.$formMessage.value = "";
    
}

// Function to display error message on form submission
function js_onError(error) {
    
    //Display error on Console
    console.log("Http POST Request error :" + error);
}


// Function to send email on form submission
// Displays 'success' or 'error' on submission
function js_send() {

    //Cache DOME
    var UI = cacheDom();

    //Update form btn
    UI.$formSubmit.value = "Sending...";
    UI.$formSubmit.innerHTML = "Sending...";
    UI.$formSubmit.disabled = true; 
    

    //New XML request
    var request = new XMLHttpRequest(), 
        method = "POST",
        url = "https://postmail.invotes.com/send";
    
    //Open request
    request.open(method, url, true);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            var status = request.status;
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        }
    };

    //Convert Form variables
    var extra_name = UI.$formName.value;
    var reply_to = UI.$formEmail.value;
    var subject = UI.$formSubject.value;
    var message = UI.$formMessage.value;


    //Add to data dict to be sent
    data_js['subject'] = subject;
    data_js['text'] = message;
    data_js['reply_to'] = reply_to;
    data_js['extra_name'] = extra_name;

    //convert data to be sent
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    var params = form_data.join("&");


    //Send post request
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);

    return false;
}

//Prevent page refresh
var js_form = document.getElementById('contact_form');
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
});




