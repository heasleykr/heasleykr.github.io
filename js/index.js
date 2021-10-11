
// Global variables
var showIcon = `<i class="fas fa-bars"></i>`;
var hideIcon = `<i class="fas fa-angle-double-right"></i>`;
var visible = false;
      //cache DOM
      var UI = {};

//Function to dynamically display Home page content
function homeLoad(){


    //update body background
    UI.$homeBackground.classList.remove('hide');
    UI.$body.classList.remove('portfolio', 'main', 'about');
    UI.$body.classList.remove('resume');
    UI.$top.classList.remove('resumeNav');
    UI.$body.classList.remove('contact');
    UI.$footer.classList.remove('contactFooter');
    UI.$main.classList.remove('hide');

    UI.$body.classList.add('home');
    UI.$top.classList.add('shadow', 'navCustom');
    UI.$footer.classList.add('mainFooter');
    UI.$contactMain.classList.add('hide');
    

    //content to be displayed
    var home = `
    <div id="homePage">
        <div class="homeGreeting">
            <div class="d-flex flex-column justify-content-start"> 
                <div>
                    <img class="homeLines mb-3" src="/img/linesHeader3.png">
                    <h3 class="homeSub">Hi there!</h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">I'm</h3>
                    <h3 class="homeFocus" id="indexName">Katelynn Heasley</h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">Computer Science</h3>
                    <h3 class="homeSub">student,</h3>
                </div>
                <div class="d-flex flex-row">
                    <h3 class="homeSub pe-2">& future</h3>
                    <h3 class="homeFocus">Front-end Developer</h3>
                </div>
                <div>
                    <p class="homeMiniFocus d-flex justify-content-center align-self-center mt-3 pt-3 pb-3">I'm currently seeking employment</p>
                </div>
                <div>
                    <a class="btn btn-warning mt-2" href="#" id="starterBtn">See my resume</a>
                </div>
            </div>
        </div>
    </div>
    `;
    
    //load content at top of page, hide until top is reached
    $('body').hide(0, function(){
        window.scrollTo(0,0);
    });
    $('body').show(2000);

    //add html to DOM object
    UI.$main.innerHTML = home;
    console.log("Home Page");

    //listen for js dynamically loaded click events
    $("#starterBtn").on( "click", resumeLoad);
    
}

//Function to dynamically display About page content
function aboutLoad(){

    //update body background
    UI.$body.classList.remove('portfolio');
    UI.$body.classList.remove('resume', 'main');
    UI.$top.classList.remove('resumeNav');
    UI.$body.classList.remove('contact');
    UI.$body.classList.remove('home');
    UI.$footer.classList.remove('contactFooter');
    UI.$main.classList.remove('hide');

    UI.$body.classList.add('about');
    UI.$homeBackground.classList.add('hide');
    UI.$main.classList.add('bg-white');
    UI.$top.classList.add('shadow', 'navCustom');
    UI.$footer.classList.add('mainFooter');
    UI.$contactMain.classList.add('hide');

    //content to be displayed
    var about = `
    <div id="aboutWrap" class="about_border">
        <div class="row py-5 about_row1">
            <div class="col vertical_l text-uppercase"><p>Katelynn Heasley</p></div>
            <div class="col-6 pb-5"><h2 id="about_head">About</h2></div> 
            <div class="col vertical_r text-uppercase"><p>Prospective Developer</p></div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="aboutCol2">
                <p id="aboutContent">Hi! I'm Katelynn. I'm driven and creative, and currently completing both a second bachelors in Computer Science and a Full-Stack Coding Program to fully immerse myself in learning the art of software development. Two years ago, I made the decision to make a career change into software development from the classical music industry. Since then, I am working to educate myself to become the best developer I can. I seek junior-level employment within a creative team environment that attains to develop, design, and bring innovative devices and services through the use of cutting-edge software development. With over 9 years of working in healthcare, music, and the United States Marine Corps, I am committed to quality work and to joining a team that is on the forefront of technology innovation. Please contact me for any inquries, interest, or opportunites you may have.
                <div class="d-flex justify-content-end">
                    <p class="me-5">- Katelynn</p>
                </div>
            </div>
        </div>
    </div>
    `;

    //load content at top of page, hide until top is reached
    $('body').hide(0, function(){
        window.scrollTo(0,0);
    });
    $('body').show(2000);

    //add html to DOM object
    UI.$main.innerHTML = about;
    console.log("About Page");
}

//Function to dynamically display Resume page content
function resumeLoad(){

    //update body background
    UI.$body.classList.remove('portfolio', 'main', 'about', 'contact', 'home');
    UI.$top.classList.remove('shadow', 'navCustom');
    UI.$footer.classList.remove('contactFooter');
    UI.$main.classList.remove('hide');

    UI.$body.classList.add('resume');
    UI.$homeBackground.classList.add('hide');
    UI.$top.classList.add('resumeNav');
    UI.$footer.classList.add('mainFooter');
    UI.$contactMain.classList.add('hide');


    //content to be displayed
    var resume =`
        <div class="topGrids">
            <img src="../img/circleGrid3.png">
        </div>
        <div class="bg-transparent">
            <div id="resumeHeader" class="d-flex flex-column align-items-center bg-transparent mb-4">
                <h2 id="resumeTitle" class="m-3">Resume</h2>
                <button id="downloadBtn" class="btn btn-outline-success rounded-pill mb-2"><a href="/img/KHeasley_Resume.pdf"><i class="fas fa-arrow-circle-down me-2"></i>download resume</a>
                </button>
                <img class="folioLines mt-5 mb-5" src="../img/folioLine2.png">
            </div>
            <div class="profile d-flex mt-5 mb-5">
                <h3 id="resumeSubTitle">Profile: </h3>
                <h4 id="profileP" class="ms-3">Current Computer Science student, Veteran, & former Professional Musican with a BA in Music Performance. Passionately driven towards front-end development and a rewarding career in the tech industry.</h4>
            </div>
        </div>
        <div id="resumeContent">
            <div class="headingSection d-flex">
                <div id="leftSide">
                    <div id="darkHead" class="p-3">
                        <div class="d-flex justify-content-center">
                            <h1 class="firstName pe-2">KATELYNN</h1>
                            <h1 class="lastName">Heasley</h1>
                        </div>
                        <p class="d-flex justify-content-center">Prospective Developer</p>
                    </div>
                    <div id="profileSm" class="d-flex mb-5">
                        <h3 id="resumeSubTitle2">Profile </h3>
                        <h4 id="profileP2" class="ms-3">Current Computer Science student, Veteran, & former Professional Musican with a BA in Music Performance. Passionately driven towards front-end development and a rewarding career in the tech industry.</h4>
                        <div id="certSm" class="d-flex flex-column justify-content-start">
                            <div class="d-flex">
                                <h4 id="certificationSm">Certifications</h4>
                            </div>
                            <div>
                                <div class="scrumSmContent row pt-2 ps-3">
                                    <div class="scrumSmContent col-2">
                                        <p class="scrumSmContent">January 2021</p>
                                    </div>
                                    <div class="scrumSmContent col">
                                        <p id="scrumDesSm" class="scrumSmContent">Professional Scrum Master, Level I (PSM I)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="ms-3">
                                <img id="scrumSm" src="./img/psmI.svg">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rightSkillsSide" class="ps-2 pb-5">
                    <div id="certLg" class="rightHeads d-flex flex-row justify-content-start">
                        <div>
                            <div class="d-flex">
                                <h4 id="certification">Certifications</h4>
                            </div>
                            <div>
                                <div class="row pt-2 ps-3">
                                    <div class="col-2">
                                        <p class="scrumLgContent">January 2021</p>
                                    </div>
                                    <div class="col">
                                        <div class="scrumLgContent d-flex justify-content-start">
                                            <p class="scrumLgContent me-2 fw-bold">PSM I: </p>
                                            <p class="scrumLgContent">Professional Scrum Master, Level I (PSM I)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img id="scrum" src="./img/psmI.svg">
                        </div>
                    </div>
                    <div>
                        <div class="rightHeads2 d-flex"> 
                            <h4>Hard Skills</h4>
                            <i class="fas fa-code mainIconsR ps-3"></i>
                        </div>
                        <div class="hardSkills p-3">
                            <div class="row">
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Coding Language Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIconsR fas fa-laptop-code"></i>
                                        <p class="">Java, C#, C++, Python, Javascript, Html, CSS, Assembly, SQL</p>
                                    </div>
                                </div>
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Framework Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIconsR fas fa-shapes"></i>
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
                                        <i class="subIconsR fas fa-cloud"></i>
                                        <p class="">Amazon AWS EC2 Instances</p>
                                    </div>
                                </div>
                                <div class="col mb-3 border-0">
                                    <div class="h_title">
                                        <p class="">Development Environment Exposure:</p>
                                    </div>
                                    <div class="h_body">
                                        <i class="subIconsR fas fa-hammer"></i>
                                        <p class="">Visual Studio Code IDE, JetBrains IntelliJ IDE, NetBeans IDE, Dr. Java JDK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="resumeGrid" class="ps-3">
                <img id="gridImg" src="/img/circleDripSm2.png">
                <div class="d-flex flex-row mb-3">   
                    <h4 id="experienceHead">Experience</h4>
                    <i class="mainIcons fas fa-glasses ms-4"></i>
                </div>
            </div>
            <div id="resumeBody">
                <div class="container">
                    <div>
                        <div class="row pt-2">
                            <div class="col-2">
                                <p class="resumeDate fw-bold">July 2020 – Current</p>
                            </div>
                            <div class="col d-flex flex-column">
                                <p class="h_title2 fw-bold">Patient Registrar, Department of Sharp Staffing Resource Network</p>
                                <p class="h_titleSub fw-light fst-italic">Sharp Healthcare</p>
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
                            <div class="col d-flex flex-column">
                                <p class="h_title2 fw-bold">Patient Registrar, Department of Patient Access</p>
                                <p class="h_titleSub fst-italic">UC San Diego Health<p>
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
                            <div class="col d-flex flex-column">
                                <p class="h_title2 fw-bold">Public Affairs Coordinator, United States Marine Corps Band</p>
                                <p class="h_titleSub fst-italic">Third Marine Aircraft Wing</p>
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
                            <div class="col d-flex flex-column">
                                <p class="h_title2 fw-bold">Musician: Percussionist, United States Marine Corps Band</p>
                                <p class="h_titleSub fst-italic">Third Marine Aircraft Wing</p>
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
                            <div class="col d-flex flex-column">
                                <p class="h_title2 fw-bold">Patient Services Assistant, University of Michigan Health System</p>
                                <p class="h_titleSub fst-italic">Department of Urology & Department of General Surgery</p>
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
                    <div id="education" class="row pt-5 mb-3">
                        <div class="col">
                            <div class="d-flex">
                                <h4 class="resumeTitles pe-3">Education</h4>
                                <i class="fas fa-graduation-cap mainIcons"></i>
                                <img class="resumeLine1 ps-5 mt-2"src="../img/resumeLine3.png">
                            </div>
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
                    </div>
                    <div class="row pt-5 pb-5">
                        <div id="keyClasses" class="col">
                            <h4 class="resumeTitles">Key classes completed</h4> 
                            <h4>towards B.S. in Computer Science</h4>
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
                        <div class="col">
                            <h4>Recommendations</h4>
                            <i class="mainIcons fas fa-user-check mt-5"></i>
                            <p class="h_info mt-4">Please contact directly for reference requests.</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center p-5">
                        <img id="resumeLineBottom" class="mt-2 mb-5" src="../img/bottomLine3.png">
                        <a class="btn btn-outline-secondary mt-2 mb-2" href="#" id="resumeTopBtn">Top</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    //load content at top of page, hide until top is reached
    $('body').hide(0, function(){
        window.scrollTo(0,0);
    });
    $('body').show(2000);


    //add html to DOM object
    UI.$main.innerHTML = `
        <div>${resume}</div>
    `;
    console.log("Resume Page");

    //listen for js dynamically loaded click events
    $("#resumeTopBtn").on( "click", function() {
        window.scrollTo(0,0);
    });

}

//Function to dynamically display Portfolio page content
function folioLoad(){


    //update body background
    UI.$body.classList.add('portfolio');
    UI.$body.classList.add('main');
    UI.$top.classList.add('resumeNav');
    UI.$footer.classList.add('mainFooter');
    UI.$homeBackground.classList.add('hide');

    UI.$body.classList.remove('resume', 'about', 'home', 'contact');
    UI.$main.classList.remove('bg-white');
    UI.$top.classList.remove('shadow', 'navCustom');
    UI.$footer.classList.remove('contactFooter');
    UI.$contactMain.classList.add('hide');
    UI.$main.classList.remove('hide');


    //content to be displayed
    var folio = `
    <div class="container-fluid bg-transparent">
        <div class="topGrids">
            <img src="../img/circleGrid3.png">
        </div>
        <div>
            <div id="port_header" class="d-flex flex-column justify-content-center align-items-center">
                <h2 id="port_head" class="m-3">Portfolio</h2>
                <h3 id="portSubHead" class="mb-5">My recent works and their source code</h3>
                <button id="gitBtn" class="btn btn-outline-light rounded-pill mb-5"><a href="https://github.com/heasleykr"><i class="gitI fab fa-github me-2"></i>Github</a>
                </button>
                <img class="folioLines mt-5" src="../img/folioLine2.png">
            </div>
        </div>
        <div id="portfolioContent">    
            <div id="parking" class="row mb-5 projectView">
                <div class="col d-flex justify-content-center">
                    <img class="img-fluid rounded projectImg" src="../img/parking6.png" alt="Parking Lots">
                </div>
                <div class="col projectContent p-3 me-2">
                    <div class="d-flex">
                        <h3 class="projectTitle pe-3">ParkingLots App</h3>
                        <i class="mainIcons fas fa-car"></i>
                    </div>
                    <p class="projectSubDate">March 2021</p>
                    <p>Summary: </p>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Built web application using the Django Framework, which utilizes APIs like CrispyForms, Jinja, Pillow, Bootstrap, and FontAwesome.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Employed Object Oriented Programming techniques to allow users to buy, sell, and rent parking spaces.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Designed and built logos and marketing content using Adobe Photoshop.</p>
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center mt-3">
                        <img src="https://img.icons8.com/color/96/000000/django.png"/>
                        <button class="gitI btn btn-outline-light rounded-pill"><a href="https://github.com/heasleykr/ParkingLots"><i class="fab fa-github me-2"></i>Github Code</a></button>
                    </div>
                    <a class="companySite" href="https://icons8.com/icon/qV-JzWYl9dzP/django">Django icon by Icons8</a>
                </div>
            </div>

            <div id="portfolioGrid2">
                <img id="folioImg" src="/img/circleGrid3.png">
            </div>
            <div class="row pb-5 pt-5 projectView" id="organic">
                <div class="col d-flex justify-content-center">
                    <img class="img-fluid rounded-end projectImg" src="../img/organic.png" alt="Organic Beans">
                </div>
                <div class="col projectContent p-3">
                    <div class="d-flex">
                        <h3 class="projectTitle pe-3">OrganicBeans App</h3>
                        <i class="mainIcons fas fa-shopping-cart"></i>
                    </div>
                    <p class="projectSubDate">January 2021</p>
                    <p>Summary: </p>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Web application build with React Framework for educational purposes with San Diego Global Knowledge University.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Utilizes Redux for state management in addition to AXIOS for web server connection for data storage.</p>
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center mt-3 pb-3">
                        <img id="react" src="https://img.icons8.com/officel/80/000000/react.png"/>
                        <button class="gitI btn btn-outline-light shadow rounded-pill"><a href="https://github.com/heasleykr/OrganicBeansRedux"><i class="fab fa-github me-2"></i>Github Code</a></button>
                    </div>
                    <a class="companySite" href="https://icons8.com/icon/wPohyHO_qO1a/react">React icon by Icons8</a>   
                </div>
            </div>

            <div id="portfolioGrid3">
                <img id="folioImg" src="/img/circleGrid3.png">
            </div> 
            <div class="row pb-5 pt-5 projectView" id="property">
                <div class="col d-flex justify-content-center">
                    <img class="img-fluid rounded-end projectImg" src="../img/organic.png" alt="Organic Beans">
                </div>
                <div class="col projectContent p-3 me-2">
                    <div class="d-flex">
                        <h3 class="projectTitle pe-3">Property Rental App</h3>
                        <i class="mainIcons fas fa-home"></i>
                    </div>
                    <p class="projectSubDate">November 2020</p>
                    <p>Summary: </p>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Web application build with Microsoft’s ASP.Net Core framework for educational purposes with San Diego Global Knowledge University.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Built and designed all front-end elements with original code, HTML/CSS/JS.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Utilizes the Model-View-Controller architectural style and built backend alongside other students for the purposes of learning the ASP .Net Core framework.</p>
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center mt-3 pb-3">
                        <img id="microsoft" src="https://img.icons8.com/color/96/000000/microsoft.png"/>
                        <button class="gitI btn btn-outline-light shadow rounded-pill"><a href="https://github.com/heasleykr/Property-Rental-Web-Application"><i class="fab fa-github me-2"></i>Github Code</a></button>
                    </div>
                    <a class="companySite" href="https://icons8.com/icon/22989/microsoft">Microsoft icon by Icons8</a>
                </div>
            </div>

            <div id="portfolioGrid4">
                <img id="folioImg" src="/img/circleGrid3.png">
            </div> 
            <div class="row pb-5 pt-5 projectView" id="fashion">
                <div class="col d-flex justify-content-center">
                    <img class="img-fluid rounded-end projectImg" src="../img/fashion.png" alt="Fashion Pet">
                </div>
                <div class="col projectContent p-3 me-2">
                    <div class="d-flex">
                        <h3 class="projectTitle pe-3">The Fashion Pet</h3>
                        <i class="mainIcons fas fa-dog"></i>
                    </div>
                    <p class="projectSubDate">September 2020</p>
                    <p>Summary: </p>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Statically built website using HTML, CSS, & Javascript techniques.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Emphasized styling of content without API usage.</p>
                    </div>
                    <div class="d-flex">
                        <i class="bullet fas fa-circle pt-2"></i>
                        <p class="projectSub">Used conventional CSS containers and techniques for layouts.</p>
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center mt-3 pb-3">
                        <div class="d-flex flex-column justify-content-center align-items-center mt-2">
                            <p>Static/ No Framework</p>
                            <img id="static" src="https://img.icons8.com/office/80/000000/overview-pages-4.png"/>
                        </div>
                        <button class="gitI btn btn-outline-light shadow rounded-pill"><a href="https://github.com/heasleykr/theFashionPet"><i class="fab fa-github me-2"></i>Github Code</a></button>
                    </div>
                </div>
            </div>

            <div id="topDiv" class="row d-flex flex-column justify-content-center align-items-center p-5">
                <img id="portfolioLineBottom" class="mt-2 mb-5" src="../img/bottomLine3.png">
                <a class="btn btn-outline-secondary mt-2 mb-2" href="#" id="portfolioTopBtn">Top</a>
            </div>
        </div>
    </div>
    `;

    //load content at top of page, hide until top is reached
    $('body').hide(0, function(){
        window.scrollTo(0,0);
    });
    $('body').show(2000);


    //add html to DOM object
    UI.$main.innerHTML = folio;
    console.log("Portfolio Page");

    

    //listen for js dynamically loaded click events
    $("#portfolioTopBtn").on( "click", function() {
        window.scrollTo(0,0);
    });
}


// Function to show/hide side navigational panel
function showDetails(){


    // Show Side Large Panel & Hide Small
    if(!visible){
        //Show Large side bar
        UI.$sideL.classList.remove('hide');

        //Hide nav bar
        UI.$top.classList.add('hide');

        //Hide small side bar
        UI.$sideSm.classList.add('hide');

        // change boolean
        visible = true;
    }
    //Hide Side Large Panel & Show small
    else{ 
        //Hide Large side bar
        UI.$sideL.classList.add('hide');

        //Show nav bar
        UI.$top.classList.remove('hide');

        //Show small side bar
        UI.$sideSm.classList.remove('hide');

        // change boolean
        visible = false;
    }
}



function init(){

    console.log("Welcome to Katelynn Heasley's website!");

    // UI DOM Object
    UI = {
        $body: document.getElementById('main'),
        $main: document.getElementById('mainLoad'),
        $sideL: document.getElementById('sidebarLg'),
        $sideSm: document.getElementById('sidebarSm'),
        $top: document.getElementById('topBar'),
        $footer: document.getElementById('footer'),
        $btnShow: document.getElementById('btnShow'),
        $btnHide: document.getElementById('btnHide'),
        $homeBtn: document.getElementById('homeBtn'),
        $aboutBtn: document.getElementById('aboutBtn'),
        $resBtn: document.getElementById('resumeBtn'),
        $folioBtn: document.getElementById('folioBtn'),
        $homeNav: document.getElementById('homeNav'),
        $aboutNav: document.getElementById('aboutNav'),
        $resNav: document.getElementById('resumeNav'),
        $folioNav: document.getElementById('folioNav'),
        $resFtBtn: document.getElementById('footerResume'),
        $homeBackground: document.getElementById('homeGraphicDiv'),
        $contactMain: document.getElementById('contactDiv'),
    };


    //load main content
    homeLoad();

   

    //catch click events on side-nav & top-nav panel
    UI.$homeBtn.onclick = homeLoad;
    UI.$aboutBtn.onclick = aboutLoad;
    UI.$resBtn.onclick = resumeLoad;
    UI.$folioBtn.onclick = folioLoad;
    UI.$homeNav.onclick = homeLoad;
    UI.$aboutNav.onclick = aboutLoad;
    UI.$resNav.onclick = resumeLoad;
    UI.$folioNav.onclick = folioLoad;
    UI.$resFtBtn.onclick = resumeLoad;
    UI.$btnHide.onclick = showDetails;
    UI.$btnShow.onclick = showDetails;

    


}

   
    



window.onload = init;