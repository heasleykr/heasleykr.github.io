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
    <div class="container-fluid d-flex flex-column align-items-center">
        <img id="headShot" class="img-fluid img-thumbnail" src="../img/tempHeadshot.png" alt="headshot">
        <div class="d-flex flex-row">
            <h1>Hi, I'm </h1>
            <h1 class="ps-2" id="indexName">Katelynn Heasley!</h1>
        </div>
        <h3>Junior Web Designer and Web Developer</h3>
        <hr>
        <div>
            <p class="ps-2">I am a driven individual seeking junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.
                    -Katelynn </p>
        </div>
        <div>
            <h4>email: heasleykr@gmail.com</h4>
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
        <div>
            <div id="leftSide">
                <h1>Katelynn R Heasley</h1>
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
            <div id="rightSide">
                <div>
                    <p>I am a driven and creative individual who is currently completing both a second bachelors in Computer Science and a Full-Stack Coding Program to fully immerse myself in learning the art of software development. Two years ago, I made the decision to make a career change into software development from the classical music industry. Since then, I am working to educate myself to become the best developer I can. I seek junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.
                        -Katelynn </p>
                </div>

               
                <div>
                    <hr>
                    <h4>CERTIFICATION:</h4>
                    <hr>
                    <p>PSM I: The Professional Scrum Master Level I (PSM I)</p>
                    <p>January 2021</p>
                </div>
                
                <div>
                    <hr>
                    <h2>Experience</h2>
                    <hr>
                    <div>
                        <h3>Patient Registrar, Department of Sharp Staffing Resource Network</h3>
                        <h3>July 2020 – Current</h3>
                        <h3>Sharp Healthcare</h3>
                        <p>Assisted department with registration, including insurance verification, benefits verification,referrals and collected patient liability.</p>
                        <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                    </div>
                    <div>
                        <h3>Patient Registrar, Department of Patient Access</h3>
                        <h3>July 2017 – August 2019</h3>
                        <h3>UC San Diego Health</h3>
                        <p>Assisted department with registration, including insurance verification, benefits verification, referrals and collected patient liability.</p>
                        <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                    </div>
                    <div>
                        <h3>Public Affairs Coordinator, United States Marine Corps Band</h3>
                        <h3>November 2012 - November 2016</h3>
                        <h3>Third Marine Aircraft Wing</h3>
                        <p>Maintained community relations and marketed performance events across social media and local community platforms resulting in a 15% increase in performance opportunities and audience support.</p>
                        <p>Facilitated and designed public outreach tables during performance events that resulted in personal contact and communication with over 50,000 people.</p>
                    </div>
                    <div>
                        <h3>Musician/Percussionist, United States Marine Corps Band</h3>
                        <h3>November 2012 - November 2016</h3>
                        <h3>Third Marine Aircraft Wing</h3>
                        <p>Maintained and upheld the history and traditions of the United States Marine Corps through weekly performances for both military and civilian audiences across the United States in multiple ensembles to include marching bands, rock bands, jazz ensembles, and symphonic bands that amounted to over 500 musical performances.</p>
                        <p>Wrote and composed military marching cadences for the ensemble which was performance for an audience with over tens of thousands in attendance.</p>
                        <p>Provided over 50 hours of musical instruction and guidance to 8 percussion employees in preparation for community performances.</p>
                    </div>
                    <div>
                        <h3>Patient Services Assistant, University of Michigan Health System</h3>
                        <h3>August 2010 - August 2012</h3>
                        <h3>Department of Urology & Department of General Surgery</h3>
                        <p>Verified patient eligibility, distributed new patient registration packets, ensured accuracy of forms resulting in an increase in organizational operations for the patient care team.</p>
                        <p>Scheduled new and return clinic visits, diagnostic services, and ambulatory procedures for patients according to physician associate guidelines.</p>
                        <p>Accepted payment for medical services according to cash acceptance guidelines and performed daily reconciliation with zero balance discrepancies.</p>
                    </div>
                </div>

                <div>
                    <hr>
                    <h2>Education</h2>
                    <hr>
                    <div>
                        <h4>CURRENT ENROLLMENTS:</h4>
                        <p>SECOND BACHELORS /</p>
                        <p>BS, Computer Science  /</p>
                        <p>San Diego Miramar College </p>
                        <p>Expected Comp: May 2022</p>
                    </div>
                    <div>
                        <h4>COMPLETED: </h4>
                        <div>
                            <p>FULL-STACK CODING PROGRAM/</p>
                            <p>San Diego Global Knowledge University</p>
                            <p>March 2021</p>
                        </div>
                        <div>
                            <p>BACHELOR OF ARTS, MUSIC PERFORMANCE /</p>
                            <p>UNIVERSITY OF MICHIGAN</p>
                            <p>May 2011</p>
                        </div>
                    </div>
                </div>
                <hr>
               
                <div>
                    <h2>Key Classes Completed towards BS Computer Science</h2>
                    <div>
                        <p>Introduction to Java</p>
                        <p>Intermediate Java Programming</p>
                        <p>Computer Org and Assembly Lang</p>
                        <p>Introduction to C/C++</p>
                        <p>Calculus/Analytic Geometry II</p>
                    </div>
                </div>
                <hr>
                <div>
                    <hr>
                    <h2>Recommendations</h2>
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