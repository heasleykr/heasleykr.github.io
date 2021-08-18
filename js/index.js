// Global variables
var showIcon = `<i class="fas fa-bars"></i>`;
var hideIcon = `<i class="fas fa-angle-double-right"></i>`;
var visible = true;
      //cache DOM
      var UI = {};

//Function to dynamically display Home page content
function homeLoad(){

    //content to be displayed
    var home = `
    <div class="container-fluid">
        <div class="d-flex flex-column align-items-center">
            <img id="headShot" class="img-fluid img-thumbnail" src="../img/headshot.JPG" alt="headshot">
            <div class="d-flex flex-row">
                <h1>Hi, I'm </h1>
                <h1 class="ps-2" id="indexName">Katelynn Heasley!</h1>
            </div>
            <div class="pt-2">
                <h3>Junior Web Designer and Web Developer</h3>
            </div>
            <hr>
            <div>
                <p class="ps-2">I am a driven individual seeking junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.</p>
                <p class="d-flex flex-row-reverse pe-5"> - Katelynn</p>
            </div>
        </div>
        <hr>
        <div id="indexContact" class="d-flex flex-row justify-content-evenly">
            <h4>Email: heasleykr@gmail.com</h4>
            <h4>Phone: 619-317-4334</h4>
        </div>
    </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = home;
    console.log("Home Page");
}

//Function to dynamically display About page content
function aboutLoad(){

    //content to be displayed
    var about = `
    <div>
        <h2>TODO:</h2>
        <h4>Insert Biographicall information here. Career paragraph and more.</h4>
    </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = about;
    console.log("About Page");
}

//Function to dynamically display Resume page content
function resumeLoad(){

    //content to be displayed
    var resume =`
        <div class="d-flex p-3">
            <div id="leftSide" class="p-3">
                <div class="d-flex">
                    <h1 class="firstName pe-2">KATELYNN</h1>
                    <h1 class="lastName">Heasley</h1>
                </div>
                <h2>Web Designer</h2>
                <button><a href="/img/KHeasley_Resume.pdf">Download Resume<i class="fas fa-arrow-circle-down"></i></a></button>
                <div>
                    <h2>Personal Information</h2>

                    <h3>Phone</h3>
                    <p>(619) 317-4334</p>

                    <h3>Email</h3>
                    <p>heasleykr@gmail.com</p>

                    <h3>WWW</h3>
                    <p>www.katelynnheasley.com</p>

                    <h3>Address</h3>
                    <p>4454 Dawson Ave Apt 6</p>
                    <p>San Diego, CA 92115</p>
                    
                    <h3>LinkedIn</h3>
                    <p>https://www.linkedin.com/in/katelynn-heasley-13933435/</p>
                </div>
                <div>
                    <h2>Hard Skills</h2>
                        <div>
                            <h4>Coding Language Exposure:</h4>
                            <p>Java, C#, C++, Python, Javascript, Html, CSS, Assembly, SQL</p>
                        </div>
                        <div>
                            <h4>Framework Exposure:</h4>
                            <p>React, Django, Flask, ASP.Net Core/Entity Framework</p>
                        </div>
                        <div>
                            <h4>Virtual Environment Exposure:</h4>
                            <p>Amazon AWS EC2 Instances</p>
                        </div>
                        <div>
                            <h4>Development Environment Exposure:</h4>
                            <p>Visual Studio Code IDE, JetBrains IntelliJ IDE, NetBeans IDE, Dr. Java JDK</p>
                        </div>
                </div>
                <div></div>
            </div>
            <hr>
            <div id="rightSide" class="p-3">
                <div>
                    <p>I am a driven and creative individual who is currently completing both a second bachelors in Computer Science and a Full-Stack Coding Program to fully immerse myself in learning the art of software development. Two years ago, I made the decision to make a career change into software development from the classical music industry. Since then, I am working to educate myself to become the best developer I can. I seek junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.
                        -Katelynn </p>
                </div>

                <div>
                    <hr>
                    <h4>Certification:</h4>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">January 2021</p>
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-start">
                                    <p class="me-2 fw-bold">PSM I: </p>
                                    <p>The Professional Scrum Master Level I (PSM I)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <hr>
                    <h4>Experience</h4>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">July 2020 –</p>
                            </div>
                            <div class="col">
                                <p class="fw-bold">Patient Registrar, Department of Sharp Staffing Resource Network</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">Current</p>
                            </div>
                            <div class="col">
                                <p class="fw-light">Sharp Healthcare</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2"></div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Assisted department with registration, including insurance verification, benefits verification,referrals and collected patient liability.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">July 2017 –</p>
                            </div>
                            <div class="col">
                                <p class="fw-bold">Patient Registrar, Department of Patient Access</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">August 2019</p>
                            </div>
                            <div class="col">
                                <p>UC San Diego Health<p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2"></div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Assisted department with registration, including insurance verification, benefits verification, referrals and collected patient liability.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">November 2012 -</p>
                            </div>
                            <div class="col">
                                <p class="fw-bold">Public Affairs Coordinator, United States Marine Corps Band</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">November 2016</p>
                            </div>
                            <div class="col">
                                <p>Third Marine Aircraft Wing</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2"></div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Maintained community relations and marketed performance events across social media and local community platforms resulting in a 15% increase in performance opportunities and audience support.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Facilitated and designed public outreach tables during performance events that resulted in personal contact and communication with over 50,000 people.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">November 2012 -</p>
                            </div>
                            <div class="col">
                                <p class="fw-bold">Musician/Percussionist, United States Marine Corps Band</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">November 2016</p>
                            </div>
                            <div class="col">
                                <p>Third Marine Aircraft Wing</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2"></div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Maintained and upheld the history and traditions of the United States Marine Corps through weekly performances for both military and civilian audiences across the United States in multiple ensembles to include marching bands, rock bands, jazz ensembles, and symphonic bands that amounted to over 500 musical performances.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Wrote and composed military marching cadences for the ensemble which was performance for an audience with over tens of thousands in attendance.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Provided over 50 hours of musical instruction and guidance to 8 percussion employees in preparation for community performances.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">August 2010 -</p>
                            </div>
                            <div class="col">
                                <p class="fw-bold">Patient Services Assistant, University of Michigan Health System</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="ps-3">August 2012</p>
                            </div>
                            <div class="col">
                                <p>Department of Urology & Department of General Surgery</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2"></div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Verified patient eligibility, distributed new patient registration packets, ensured accuracy of forms resulting in an increase in organizational operations for the patient care team.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Scheduled new and return clinic visits, diagnostic services, and ambulatory procedures for patients according to physician associate guidelines.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Accepted payment for medical services according to cash acceptance guidelines and performed daily reconciliation with zero balance discrepancies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr>
                    <h4>Education</h4>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h4>Current Enrollments:</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <p class="ps-3">Expected Comp: May 2022</p>
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-start">
                                    <p class="me-2 fw-bold">SECOND BACHELORS:</p>
                                    <p>B.S. in Computer Science, San Diego Miramar College</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4>Completed: </h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <p class="ps-3">March 2021</p>
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-start">
                                    <p class="me-2 fw-bold">FULL-STACK CODING PROGRAM:</p>
                                    <p>San Diego Global Knowledge University</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <p class="ps-3">May 2011</p>
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-start">
                                    <p class="me-2 fw-bold">BACHELORS:</p>
                                    <p>B.A. in Music Performance, University of Michigan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div>
                    <hr>
                    <h4>Key classes completed towards B.S. in Computer Science</h4>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col-4 ps-3">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Introduction to Java</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Intermediate Java Programming</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Computer Org and Assembly Lang</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 ps-3">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Introduction to C/C++</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2"></i>
                                    <p>Calculus/Analytic Geometry II</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div>
                    <hr>
                    <h4>Recommendations</h4>
                    <hr>
                    <img src="/img/inzunza.pdf" alt="">
                    <img src="/img/mejia.pdf" alt="">
                </div>
            </div>
        </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = `
        <div>${resume}</div>
    `;
    console.log("Resume Page");

}

//Function to dynamically display Portfolio page content
function folioLoad(){

    //content to be displayed
    var folio = `
        <div>
            <h2>Portfolio</h2>
            <h3>GitHub:  https://github.com/heasleykr</h3>
            <hr>
            <div>
                <h3>ParkingLots</h3>
                <h4>March 2021</h4>
                <h4>URL: [https://github.com/heasleykr/ParkingLots]</h4>
                <p>Built web application using the Django Framework, which utilizes APIs like CrispyForms, Jinja, Pillow, Bootstrap, and FontAwesome.</p>
                <p>Employed Object Oriented Programming techniques to allow users to buy, sell, and rent parking spaces.</p>
                <p>Designed and built logos and marketing content using Adobe Photoshop.</p>
            </div>
            <div>
                <h3>OrganicBeans</h3>
                <h4>January 2021</h4>
                <h4>URL: [https://github.com/heasleykr/OrganicBeansRedux]</h4>
                <p>Web application build with React Framework for educational purposes with San Diego Global Knowledge University</p>
                <p>Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                <p>Utilizes Redux for state management in addition to AXIOS for web server connection for data storage.</p>
            </div>
            <div>
                <h3>Property Rental</h3>
                <h4>November 2020</h4>
                <h4>URL: [https://github.com/heasleykr/Property-Rental-Web-Application]</h4>
                <p>Web application build with Microsoft’s ASP .Net Core framework for educational purposes with San Diego Global Knowledge University</p>
                <p>Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                <p>Utilizes the Model-View-Controller architectural style and built backend alongside other students for the purposes of learning the ASP .Net Core framework.</p>
            </div>
            <div>
                <h3>The Fashion Pet</h3>
                <h4>September 2020</h4>
                <h4>URL: [https://github.com/heasleykr/theFashionPet]</h4>
                <p>Statically built website using HTML, CSS, & Javascript techniques.</p>
                <p>Emphasized styling of content without API usage.</p>
                <p>Used conventional CSS containers and techniques for layouts</p>
            </div>
        </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = folio;
    console.log("Portfolio Page");
}

//Function to dynamically display Contact page content
function contactLoad(){

    //content to be displayed
    var contact = `
    <div>
        <h2>TODO:</h2>
        <h4>Insert Contact information here. Career paragraph and more.</h4>
        <p>Do we need this page or can it be something else?</p>
    </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = contact;
    console.log("Contact Page");
}

// Function to show/hide side navigational panel
function showDetails(){


    // Show details
    if(!visible){
        // Show side bar
        UI.$side.classList.remove('hide');

        //Hide top bar
        UI.$top.classList.add('hide');

        // change boolean
        visible = true;
    }
    //Hide Details
    else{ 
        //Hide side bar
        UI.$side.classList.add('hide');

        //Show top bar
        UI.$top.classList.remove('hide');

        // change boolean
        visible = false;
    }
}

/************************  TODO: *************************
 * 
 *  1. Add slidding functionality to each page (MyCalendar)
 *        - buttons change on click
 *        - Main left Tab can be closed
 * 
 *  2. Add all CSS stylings
 * 
 *  3. Sizing for all devices
 * 
 *  4. Add 'inspect page'/console tidbits for programmers
*/


function init(){

    console.log("Welcome to Katelynn Heasley's website!");

    // UI DOM Object
    UI = {
        $main: document.getElementById('mainLoad'),
        $side: document.getElementById('sideBar'),
        $top: document.getElementById('topBar'),
        $btnShow: document.getElementById('btnShow'),
        $btnHide: document.getElementById('btnHide'),
        $homeBtn: document.getElementById('homeBtn'),
        $aboutBtn: document.getElementById('aboutBtn'),
        $resBtn: document.getElementById('resumeBtn'),
        $folioBtn: document.getElementById('folioBtn'),
        $contactBtn: document.getElementById('contactBtn'),
    };

    //load main content
    homeLoad();

    //catch click events on side nav panel
    UI.$homeBtn.onclick = homeLoad;
    UI.$aboutBtn.onclick = aboutLoad;
    UI.$resBtn.onclick = resumeLoad;
    UI.$folioBtn.onclick = folioLoad;
    UI.$contactBtn.onclick = contactLoad;
    UI.$btnHide.onclick = showDetails;

    //catch click events on top nav
    UI.$btnShow.onclick = showDetails; 
}



window.onload = init;