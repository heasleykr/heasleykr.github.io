// Global variables
      //cache DOM
      var UI = {};


//Function to dynamically display resume to screen
function resumeLoad(){
    //grab DOM elements
    //  var main = UI.$main.val();
     

    //dynamically make HTML elements
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
    // UI.$main.innerHTML = resume;
    console.log("Resume btn working!!");
    console.log(resume);
}





function init(){
    console.log("Katelynn Heasley's Website, welcome!");

    // UI DOM Object
    UI = {
        // get html elements
        $main: $('#mainLoad'),
    };

    //catch click events on links
    // $("#resumeBtn").click(resumeLoad);

    $('#resumeBtn').on('click', resumeLoad);
}



window.onload = init;