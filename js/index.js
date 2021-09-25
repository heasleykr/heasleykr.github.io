// Global variables
var showIcon = `<i class="fas fa-bars"></i>`;
var hideIcon = `<i class="fas fa-angle-double-right"></i>`;
var visible = true;
      //cache DOM
      var UI = {};

//Function to dynamically display Home page content
function homeLoad(){

    //update body background
    UI.$body.classList.remove('portfolio', 'main');
    UI.$body.classList.remove('resume');
    UI.$top.classList.remove('resumeNav');
    UI.$body.classList.remove('contact');

    UI.$body.classList.add('home');
    UI.$top.classList.add('shadow', 'navCustom');
    UI.$resumeBackground.classList.add('hide');

    //content to be displayed
    var home = `
    <div id="homePage" class="d-flex justify-content-start bg-white">
        <div id="homeGraphicPanel" class="me-2">
            <div class="row">
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
                <div class="col">
                    <i class="homeIcons far fa-circle"></i>
                </div>
            </div>
        </div>
        <div class="homeGreeting flex-grow">
            <div class="d-flex flex-column justify-content-start"> 
                <div>
                    <img class="homeLines mb-3" src="/img/linesHeader3.png">
                    <h3 class="homeSub">Hi there!</h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">I'm</h3>
                    <h3 class="homeFocus" id="indexName">Katelynn Heasley<h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">Computer Science</h3>
                    <h3 class="homeSub">student,</h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">and your</h3>
                    <h3 class="homeFocus">future</h3>
                </div>
                <h3 class="homeFocus">Junior Frontend Developer</h3>
            </div>
        </div>
    </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = home;
    console.log("Home Page");
}

//Function to dynamically display About page content
function aboutLoad(){

    //update body background
    UI.$body.classList.remove('portfolio');
    UI.$body.classList.remove('resume');
    UI.$top.classList.remove('resumeNav');
    UI.$body.classList.remove('contact');
    UI.$body.classList.remove('home');

    UI.$body.classList.add('main');
    UI.$main.classList.add('bg-white');
    UI.$top.classList.add('shadow', 'navCustom');

    //content to be displayed
    var about = `
    <div id="aboutCard">
        <div class="p-3 about_border">
            <div class="row py-5 about_row1">
                <div class="col vertical_l text-uppercase"><p>Katelynn Heasley</p></div>
                <div class="col-6 pb-5"><h2 id="about_head">About</h2></div> 
                <div class="col vertical_r text-uppercase"><p>Web Designer</p></div>
            </div>
            <div class="row py-5">
                <div class="col"></div>
                <div class="col-6">
                    <p>I am a driven and creative individual who is currently completing both a second bachelors in Computer Science and a Full-Stack Coding Program to fully immerse myself in learning the art of software development. Two years ago, I made the decision to make a career change into software development from the classical music industry. Since then, I am working to educate myself to become the best developer I can. I seek junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.

                    Hello! I am: passionate about front-end design & development. Working towards: A 2nd degree in Computer Science & an entry-level front-end position. 
                                    -Katelynn </p>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = about;
    console.log("About Page");
}

//Function to dynamically display Resume page content
function resumeLoad(){

    //update body background
    UI.$body.classList.remove('portfolio', 'main');
    UI.$top.classList.remove('shadow', 'navCustom');
    UI.$body.classList.remove('contact');
    UI.$body.classList.remove('home');

    UI.$body.classList.add('resume');
    UI.$top.classList.add('resumeNav');
    UI.$resumeBackground.classList.remove('hide');


    //content to be displayed
    var resume =`
        <div class="d-flex flex-row justify-content-start">
            <div class="ms-5 me-5 ps-5">
                <img class="linesTri" src="/img/line2.png" alt="dots">
            </div>
            <div id="resumeTop" class="d-flex flex-column justify-content-center align-items-center bg-transparent">
                <h2 id="resume_header">Resume</h2>
                <div>
                <img id="boxGraphic3" src="/img/box6.png" alt="box">
                </div>
            </div>
        </div>
        <div id="resumeContent">
            <div class="d-flex mt-6 p-3">
                <div id="leftSide">
                    <div id="darkHead" class="p-3">
                        <div class="d-flex justify-content-center">
                            <h1 class="firstName pe-2">KATELYNN</h1>
                            <h1 class="lastName">Heasley</h1>
                        </div>
                        <p class="d-flex justify-content-center">Web Designer</p>
                        <div class="d-flex justify-content-center">
                            <button id="downloadBtn"class="btn btn-success shadow rounded-pill"><a href="/img/KHeasley_Resume.pdf"><i class="fas fa-arrow-circle-down me-2"></i>download resume</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="rightSkillsSide" class="ps-2">
                    <div>
                        <h4>Certifications</h4>
                        <i class="fas fa-award mainIcons"></i>
                        <div>
                            <div class="row pt-2">
                                <div class="col-2">
                                    <p>January 2021</p>
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
                    <div class="mt-5">
                        <h4>Hard Skills</h4>
                        <i class="fas fa-code mainIcons"></i>
                        <div class="hardSkills p-3">
                            <div class="row">
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Coding Language Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIcons fas fa-laptop-code"></i>
                                        <p class="">Java, C#, C++, Python, Javascript, Html, CSS, Assembly, SQL</p>
                                    </div>
                                </div>
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Framework Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIcons fas fa-shapes"></i>
                                        <p class="">React, Django, Flask, ASP.Net Core/Entity Framework</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Virtual Environment Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIcons fas fa-cloud"></i>
                                        <p class="">Amazon AWS EC2 Instances</p>
                                    </div>
                                </div>
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Development Environment Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIcons fas fa-hammer"></i>
                                        <p class="">Visual Studio Code IDE, JetBrains IntelliJ IDE, NetBeans IDE, Dr. Java JDK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img id="boxGraphic2" src="/img/box6.png" alt="box">
            </div>
            <div id="resumeBody">
                <div class="container">
                    <div class="d-flex flex-column justify-contents-center align-items-center mb-3">
                        <h4>Experience</h4>
                        <i class="fas fa-briefcase mainIcons"></i>
                        <div class="mt-3">
                    </div>
                    <div>
                        <div class="row pt-2">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">July 2020 – Current</p>
                            </div>
                            <div class="col">
                                <p class="h_title fw-bold">Patient Registrar, Department of Sharp Staffing Resource Network</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="highLight col-2"></div>
                            <div class="col">
                                <p class="h_title fw-light fst-italic">Sharp Healthcare</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2 d-flex align-items-center">
                                <img src="/img/logoSide.png" alt="logo">
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Assisted department with registration, including insurance verification, benefits verification,referrals and collected patient liability.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">July 2017 – August 2019</p>
                            </div>
                            <div class="col">
                                <p class="h_title fw-bold">Patient Registrar, Department of Patient Access</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="highLight col-2"></div>
                            <div class="col">
                                <p class="h_title fst-italic">UC San Diego Health<p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2 d-flex align-items-center">
                                <img src="/img/logoSide.png" alt="logo">
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Assisted department with registration, including insurance verification, benefits verification, referrals and collected patient liability.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Assisted department with insurance notifications and patient rights per guidelines to include emergency, urgent and elective medical care.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">November 2012 - November 2016</p>
                            </div>
                            <div class="col">
                                <p class="h_title fw-bold">Public Affairs Coordinator, United States Marine Corps Band</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="highLight col-2"></div>
                            <div class="col">
                                <p class="h_title fst-italic">Third Marine Aircraft Wing</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2 d-flex align-items-center">
                                <img src="/img/logoSide.png" alt="logo">
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Maintained community relations and marketed performance events across social media and local community platforms resulting in a 15% increase in performance opportunities and audience support.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Facilitated and designed public outreach tables during performance events that resulted in personal contact and communication with over 50,000 people.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">November 2012 - November 2016</p>
                            </div>
                            <div class="col">
                                <p class="h_title fw-bold">Musician/Percussionist, United States Marine Corps Band</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="highLight col-2"></div>
                            <div class="col">
                                <p class="h_title fst-italic">Third Marine Aircraft Wing</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2 d-flex align-items-center">
                                <img src="/img/logoSide.png" alt="logo">
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Maintained and upheld the history and traditions of the United States Marine Corps through weekly performances for both military and civilian audiences across the United States in multiple ensembles to include marching bands, rock bands, jazz ensembles, and symphonic bands that amounted to over 500 musical performances.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Wrote and composed military marching cadences for the ensemble which was performance for an audience with over tens of thousands in attendance.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Provided over 50 hours of musical instruction and guidance to 8 percussion employees in preparation for community performances.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">August 2010 - August 2012</p>
                            </div>
                            <div class="col">
                                <p class="h_title fw-bold">Patient Services Assistant, University of Michigan Health System</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="highLight col-2"></div>
                            <div class="col">
                                <p class="h_title fst-italic">Department of Urology & Department of General Surgery</p>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-2 d-flex align-items-center">
                                <img src="/img/logoSide.png" alt="logo">
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Verified patient eligibility, distributed new patient registration packets, ensured accuracy of forms resulting in an increase in organizational operations for the patient care team.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Scheduled new and return clinic visits, diagnostic services, and ambulatory procedures for patients according to physician associate guidelines.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="fas fa-circle pt-2 bullets"></i>
                                    <p>Accepted payment for medical services according to cash acceptance guidelines and performed daily reconciliation with zero balance discrepancies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div id="education" class="col">
                            <h4 class="resumeTitles">Education</h4>
                            <i class="fas fa-graduation-cap mainIcons"></i>
                            <div class="educationBullets mt-5 mb-5 container">
                                <div class="row">
                                    <div class="col">
                                        <h5>Current Enrollments:</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <p>Expected Comp: May 2022</p>
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
                                        <h5>Completed: </h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <p>March 2021</p>
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
                                        <p class="">May 2011</p>
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
                
                        <div id="keyClasses" class="col">
                            <h4 class="resumeTitles">Key classes</h4> 
                            <h4>completed towards B.S. in Computer Science</h4>
                            <i class="fas fa-check mainIcons"></i>
                            <div class="educationBullets container">
                                <div class="row mt-5">
                                    <div class="col-4">
                                        <div class="d-flex">
                                            <i class="fas fa-circle pt-2 bullets"></i>
                                            <p>Introduction to Java</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex">
                                            <i class="fas fa-circle pt-2 bullets"></i>
                                            <p>Intermediate Java Programming</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex">
                                            <i class="fas fa-circle pt-2 bullets"></i>
                                            <p>Computer Org and Assembly Lang</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="d-flex">
                                            <i class="fas fa-circle pt-2 bullets"></i>
                                            <p>Introduction to C/C++</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex">
                                            <i class="fas fa-circle pt-2 bullets"></i>
                                            <p>Calculus/Analytic Geometry II</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Recommendations</h4>
                    <i class="mainIcons fas fa-user-check"></i>
                    <p class="h_info">Please contact directly for reference requests.</p>
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

    //update body background
    UI.$body.classList.add('portfolio');
    UI.$body.classList.add('main');
    UI.$top.classList.add('shadow', 'navCustom');
    UI.$resumeBackground.classList.add('hide');
    UI.$body.classList.remove('home');

    UI.$body.classList.remove('resume');
    UI.$main.classList.remove('bg-white');
    UI.$top.classList.remove('resumeNav');
    UI.$body.classList.remove('contact');


    //content to be displayed
    var folio = `
        <div class="bg-transparent">
            <div id="port_header" class="d-flex bg-transparent">
                <div class="d-flex flex-column justify-content-end">
                <h2 id="port_head">Portfolio</h2>
                <button id="gitBtn" class="btn btn-dark shadow rounded-pill"><a href="https://github.com/heasleykr"><i class="gitI fab fa-github me-2"></i></a></i>Github</a>
                    </button>
                </div>
                <div></div>
            </div>
            <div class="container-fluid d-flex flex-column align-items-center bg-dark">
                <div class="card mb-5 port_cards card1">
                    <span class="position-absolute translate-middle badge rounded-pill bg-dark p-2">Django</span>
                    <div class="row g-0">
                        <div class="col-md-7 p-2">
                            <div class="card-body">
                                <h3 class="card_title">ParkingLots App</h3>
                                <p>March 2021</p>
                                <hr>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Built web application using the Django Framework, which utilizes APIs like CrispyForms, Jinja, Pillow, Bootstrap, and FontAwesome.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Employed Object Oriented Programming techniques to allow users to buy, sell, and rent parking spaces.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Designed and built logos and marketing content using Adobe Photoshop.</p>
                                </div>
                                <div class="d-flex justify-content-center mt-5">
                                    <button class="btn btn-dark shadow rounded-pill p-3"><a href="https://github.com/heasleykr/ParkingLots"><i class="gitI fab fa-github me-2"></i></a></i>Github Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid rounded-end cardImg" src="../img/parking6.png" alt="Parking Lots">
                        </div>
                    </div>
                </div>

                <div class="card mb-5 port_cards card2">
                    <span class="position-absolute translate-middle badge rounded-pill bg-dark p-2">React</span>
                    <div class="row g-0">
                        <div class="col-md-7 p-2">
                            <div class="card-body">
                                <h3 class="card_title">OrganicBeans App</h3>
                                <p>January 2021</p>
                                <hr>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Web application build with React Framework for educational purposes with San Diego Global Knowledge University.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Utilizes Redux for state management in addition to AXIOS for web server connection for data storage.</p>
                                </div>
                                <div class="d-flex justify-content-center mt-5">
                                    <button class="btn btn-dark shadow rounded-pill p-3"><a href="https://github.com/heasleykr/OrganicBeansRedux"><i class="gitI fab fa-github me-2"></i></a></i>Github Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid rounded-end cardImg" src="../img/organic.png" alt="Organic Beans">
                        </div>
                    </div>
                </div>
            
                <div class="card mb-5 port_cards card2">
                    <span class="position-absolute translate-middle badge rounded-pill bg-dark p-2">ASP.NET MVC</span>
                    <div class="row g-0">
                        <div class="col-md-7 p-2">
                            <div class="card-body">
                                <h3 class="card_title">Property Rental App</h3>
                                <p>November 2020</p>
                                <hr>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Web application build with Microsoft’s ASP.Net Core framework for educational purposes with San Diego Global Knowledge University.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Utilizes the Model-View-Controller architectural style and built backend alongside other students for the purposes of learning the ASP .Net Core framework.</p>
                                </div>
                                <div class="d-flex justify-content-center mt-5">
                                    <button class="btn btn-dark shadow rounded-pill p-3"><a href="https://github.com/heasleykr/Property-Rental-Web-Application"><i class="gitI fab fa-github me-2"></i></a></i>Github Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid rounded-end cardImg" src="../img/organic.png" alt="Organic Beans">
                        </div>
                    </div>
                </div>
                
                <div class="card mb-5 port_cards card4">
                    <span class="position-absolute translate-middle badge rounded-pill bg-dark p-2">HTTP CSS JS</span>
                    <div class="row g-0">
                        <div class="col-md-7 p-2">
                            <div class="card-body">
                                <h3 class="card_title">The Fashion Pet</h3>
                                <p>September 2020</p>
                                <hr>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Statically built website using HTML, CSS, & Javascript techniques.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Emphasized styling of content without API usage.</p>
                                </div>
                                <div class="d-flex">
                                    <i class="bullet fas fa-circle pt-2"></i>
                                    <p class="card-text">Used conventional CSS containers and techniques for layouts.</p>
                                </div>
                                <div class="d-flex justify-content-center mt-5">
                                    <button class="btn btn-dark shadow rounded-pill p-3"><a href="https://github.com/heasleykr/theFashionPet"><i class="gitI fab fa-github me-2"></i></a></i>Github Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid rounded-end cardImg" src="../img/fashion.png" alt="Fashion Pet">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    //add html to DOM object
    UI.$main.innerHTML = folio;
    console.log("Portfolio Page");
}

//Function to dynamically display Contact page content
function contactLoad(){

    //update body background
    UI.$body.classList.remove('portfolio', 'main');
    UI.$top.classList.remove('shadow', 'navCustom');
    UI.$body.classList.remove('home');

    // UI.$body.classList.add('resume');
    UI.$body.classList.add('contact');
    UI.$top.classList.add('resumeNav');
    UI.$resumeBackground.classList.remove('hide');

    //content to be displayed
    var contact = `
        <div class="d-flex flex-row justify-content-start">
            <div class="ms-5 me-5 ps-5">
                <img class="linesTri" src="/img/line2.png" alt="dots">
            </div>
            <div id="contactTop" class="d-flex flex-column justify-content-center align-items-center bg-transparent">
                <h2 id="contact_header">Contact</h2>
                <div>
                <img id="boxGraphic3" src="/img/box6.png" alt="box">
                </div>
            </div>
        </div>
        <div id="contactContent" class="bg-transparent">
            <div class="d-flex flex-row justify-contents-center">
                <div>
                    <img class="" src="/img/contact4.jpg" alt="headshot">
                </div>

                <div id="contactInfo">
                    <div class="d-flex flex-column p-3">
                        <h2 class="contactGreeting ps-5">Reach out,</h2>
                        <h2 class="contactGreetingSub ps-5">I'd love to connect!</h2>
                        <div class="d-flex flex-column justify-content-end ps-5 pe-5">
                            <p class="">Feel free to contact me using any communication tool, or platform, of your preference. I'm seeking entry-level, junior front-end developer employment. Any communication is welcome.</p>
                            <p class="me-5 pe-5 align-self-end"> -Katelynn</p>
                        </div>
                        
                        <div class="contactMain mt-5">
                            <div class="directContact row pe-5">
                                <div class="col d-flex flex-row justify-content-end">
                                    <i class="mainIcons fas fa-phone"></i>
                                    <p class="ps-3">(619) 317-4334</p>
                                </div>
                                <div class="col d-flex flex-row justify-content-end">
                                    <i class="mainIcons far fa-envelope"></i>
                                    <p class="ps-3">heasleykr@gmail.com</p>
                                </div>
                            </div>
                            <div id="contactSubIcons" class="row">
                                <div id="subIconsInner" class="col d-flex flex-row justify-content-center">
                                    <p class="p-5"><a href="https://github.com/heasleykr"><i class="fab fa-github"></i></a></p>
                                    <p class="p-5"><a href="https://www.linkedin.com/in/katelynn-heasley-13933435/"><i class="fab fa-linkedin-in"></i></a></p>
                                    <p class="p-5"><a href="https://www.facebook.com/katelynn.heasley/"><i class="fab fa-facebook"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-center mt-3">
                        <i class="contactIcons fas fa-globe"></i>
                        <p class="pt-3">www.katelynnheasley.com</p>
                    </div>
                </div>
            </div>
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
        $body: document.getElementById('main'),
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
        $homeNav: document.getElementById('homeNav'),
        $aboutNav: document.getElementById('aboutNav'),
        $resNav: document.getElementById('resumeNav'),
        $folioNav: document.getElementById('folioNav'),
        $contactNav: document.getElementById('contactNav'),
        $resumeBackground: document.getElementById('resumeGraphics'),
    };

    //load main content
    homeLoad();

    //catch click events on side-nav & top-nav panel
    UI.$homeBtn.onclick = homeLoad;
    UI.$aboutBtn.onclick = aboutLoad;
    UI.$resBtn.onclick = resumeLoad;
    UI.$folioBtn.onclick = folioLoad;
    UI.$contactBtn.onclick = contactLoad;
    UI.$homeNav.onclick = homeLoad;
    UI.$aboutNav.onclick = aboutLoad;
    UI.$resNav.onclick = resumeLoad;
    UI.$folioNav.onclick = folioLoad;
    UI.$contactNav.onclick = contactLoad;
    UI.$btnHide.onclick = showDetails;

    //catch click events on top nav
    UI.$btnShow.onclick = showDetails; 
}



window.onload = init;