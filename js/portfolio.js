//cache DOM
var UI = cacheDom();

//Add Portfolio button function calls
UI.$folioNav.onclick = folioLoad;


// Function to Cache Dom
function cacheDom() {
    var UI = {
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

    return UI
}

function folioLoad(){

    console.log('Portfolio Page');

    //Cache DOM
    var UI = cacheDom();

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
                <h3 id="portSubHead">My recent works and their source code</h3>
                <button id="gitBtn" class="btn btn-outline-light rounded-pill"><a href="https://github.com/heasleykr"><i class="gitI fab fa-github me-2"></i>Github</a>
                </button>
                <img class="folioLines mt-5" src="../img/folioLine2.png">
            </div>
        </div>
        
        <div id="carouselBtns">
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div id="indicators" class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <div id="parking" class="row mt-5 mb-5 projectView">
                        <div class="col d-flex justify-content-center">
                            <img class="img-fluid rounded projectImg" src="../img/parking6.png" alt="Parking Lots">
                        </div>
                        <div class="col projectContent p-3 me-2">
                            <div class="d-flex">
                                <h3 class="projectTitle pe-3">ParkingLots App</h3>
                                <i class="mainIconsP fas fa-car"></i>
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
                        <div class="cellProgress mt-5">
                            <i class="p-3 fas fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <div class="row pb-5 pt-5 projectView" id="organic">
                        <div class="col d-flex justify-content-center">
                            <img class="img-fluid rounded-end projectImg" src="../img/organic.png" alt="Organic Beans">
                         </div>
                        <div class="col projectContent p-3">
                            <div class="d-flex">
                                <h3 class="projectTitle pe-3">OrganicBeans App</h3>
                                <i class="mainIconsP fas fa-shopping-cart"></i>
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
                        <div class="cellProgress mt-5">
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 fas fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <div class="row pb-5 pt-5 projectView" id="property">
                        <div class="col d-flex justify-content-center">
                            <img class="img-fluid rounded-end projectImg" src="../img/property.png" alt="Organic Beans">
                        </div>
                        <div class="col projectContent p-3 me-2">
                            <div class="d-flex">
                                <h3 class="projectTitle pe-3">Property Rental App</h3>
                                <i class="mainIconsP fas fa-home"></i>
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
                                <button class="gitI btn btn-outline-light shadow rounded-pill"><a href="https://github.com/heasleykr/dotNetPropertyRental"><i class="fab fa-github me-2"></i>Github Code</a></button>
                            </div>
                            <a class="companySite" href="https://icons8.com/icon/22989/microsoft">Microsoft icon by Icons8</a>
                        </div>
                        <div class="cellProgress mt-5">
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                            <i class="p-3 fas fa-circle"></i>
                            <i class="p-3 far fa-circle"></i>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <div class="row pb-5 pt-5 projectView" id="fashion">
                        <div class="col d-flex justify-content-center">
                            <img class="img-fluid rounded-end projectImg" src="../img/fashion.png" alt="Fashion Pet">
                        </div>
                        <div class="col projectContent p-3 me-2">
                            <div class="d-flex">
                                <h3 class="projectTitle pe-3">The Fashion Pet</h3>
                                <i class="mainIconsP fas fa-dog"></i>
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
                            <div class="cellProgress mt-5">
                                <i class="p-3 far fa-circle"></i>
                                <i class="p-3 far fa-circle"></i>
                                <i class="p-3 far fa-circle"></i>
                                <i class="p-3 fas fa-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <p id="swipe"><i class="me-4 fas fa-chevron-left"></i>Swipe <i class="ms-2 far fa-hand-point-up"></i><i class="ms-4 fas fa-chevron-right"></i></p>
        </div>
        
        <div id="portfolioGrid1">
                <img id="folioImg" src="/img/circleGrid3.png">
        </div>

        <div id="topDiv" class="row d-flex flex-column justify-content-center align-items-center p-5">
            <img id="portfolioLineBottom" class="mt-2 mb-5" src="../img/bottomLine3.png">
            <a class="btn btn-outline-secondary mt-2 mb-2" href="#" id="portfolioTopBtn">Top</a>
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