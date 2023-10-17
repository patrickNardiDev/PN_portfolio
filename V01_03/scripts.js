const myBtnMoreinfos = document.querySelector('#btnMoreInfos');
const myBtnLessinfos = document.querySelector('#btnLessinfos');
const moreinfosZone = document.getElementById("moreinfosZone");
const introZone = document.getElementById("introZone");

const navAll = document.querySelector('#nav--all');

const innerMain = document.querySelector('#innerMain');

/* switch to page home and careerpath with copie/deconste/stick_____________________________________________ */
const mainFooterZone = document.querySelector('#mainFooterZone');
const innerNav = document.querySelector('#innerNav');
const navHome = document.querySelector('#nav--home');
const contentHome = document.querySelector('#content--home');
const burger = document.querySelector('#burger');
const mynameNav = document.querySelector('#myname--nav');
// const colMynameNav = mynameNav.children;
const colMynameNav = document.querySelectorAll('.myname--nav--hiden');
console.log("colMynameNav" + colMynameNav);
// console.log("colMynameNav 0" + colMynameNav[0]);
// document.querySelector(".myname--nav").style.backgroundColor = "red";

const navCareerpath = document.querySelector('#nav--careerpath');
const contentCareerpath = document.querySelector('#content--careerpath');
const footerCareerpath = document.querySelector('#footer--careerpath');
const tips = document.querySelector('#tips');


const pHomeNav0101 = document.getElementById("nav--home01Niv01");
const pHomeNav0102 = document.getElementById("nav--home01Niv02");

const pCareerNav0101 = document.getElementById("nav--careerpath01Niv01");
const pCareerNav0102 = document.getElementById("nav--careerpath01Niv02");

const pAllNavHamberger01 = document.getElementById("nav--hambergerNiv01");
const pAllNavHamberger02 = document.getElementById("nav--hambergerNiv02");

const tipsContainer = document.getElementById("tips--container");
const tipsElements = document.getElementById("tips--element");
const tipsImg = document.getElementById("tips_img");
console.log(tipsImg);



/* progress bar_________________________________________________ */

let indicator = document.querySelector('#progressbar');

if (indicator != null) {

    if (document.querySelector('#article--careerpath--small') != null || document.querySelector('#article--careerpath--big') != null) {
        console.log("articlcareerpath_small :" + document.querySelector('#article--careerpath--small').offsetHeight);
        console.log("articlcareerpath_big :" + document.querySelector('#article--careerpath--big').offsetHeight);
        let progressIndicator = function () {
            // var articlcareerpath_small = document.querySelector('#article--careerpath--small');
            // var articlcareerpath_big = document.querySelector('#article--careerpath--big');

            if (document.querySelector('#article--careerpath--small') != null) {
                if (document.querySelector('#article--careerpath--small').offsetHeight != 0) {
                    console.log("small : " + (window.scrollY / (document.querySelector('#article--careerpath--small').offsetHeight - window.innerHeight) * 100).toFixed(1) + "%");
                    indicator.style.width = (window.scrollY / (document.querySelector('#article--careerpath--small').offsetHeight - window.innerHeight) * 100).toFixed(1) + "%";

                }
            }
            if (document.querySelector('#article--careerpath--big') != null) {
                if (document.querySelector('#article--careerpath--big').offsetHeight != 0) {
                    indicator.style.width = (window.scrollY / (document.querySelector('#main').offsetHeight - window.innerHeight) * 100).toFixed(1) + "%";
                    console.log("big : " + (window.scrollY / (document.querySelector('#article--careerpath--big').offsetHeight - window.innerHeight) * 100).toFixed(1) + "%");
                    // indicator.style.width = (window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100).toFixed(1) + "%";
                }
            }
            console.log("dedans");
        };
        window.addEventListener("scroll", progressIndicator);
    }
};

/* change page ______________________________________________ */
let gotoCareerpath = function () {
    burger.click();
    // window.scrollTo(0, 0);
    // mainFooterZone.scrollTo(0, 0);


    innerNav.appendChild(navCareerpath);
    innerMain.appendChild(contentCareerpath);
    if (document.getElementById("introZone") === null) {
        contentCareerpath.appendChild(introZone);

    }
    if (document.getElementById("moreinfosZone") === null) {
        contentCareerpath.appendChild(moreinfosZone);
        innerMain.appendChild(tips);


    }
    innerMain.appendChild(footerCareerpath);

    myBtnLessinfos.addEventListener("click", displayLessInfos);
    myBtnMoreinfos.addEventListener("click", displayMoreInfos);

    navHome.remove();
    contentHome.remove();
    moreinfosZone.remove();
    if (!mainFooterZone.classList.contains("margintop--careerpath")) {
        mainFooterZone.classList.add("margintop--careerpath");
    }
    if (!mainFooterZone.classList.contains("flexzone--careerpath")) {
        mainFooterZone.classList.toggle("flexzone--careerpath");
    }
    if (navAll.style.backgroundColor === "") {
        navAll.style.backgroundColor = "var(--header)";
    }
    if (colMynameNav != null) {
        // for (let index = 0; index < colMynameNav.length; index++) {
        //     colMynameNav[index].classList.remove("myname--nav");
        // }

        colMynameNav.forEach(item =>
            item.classList.remove("myname--nav--hiden")
        );
        // mynameNav.classList.remove("myname--nav");
    }
    innerMain.appendChild(footerCareerpath);

    indicator.style.width = 0;
    displayLessInfos();
    // window.scrollTo(0, 0);
    // document.body.scrollTop;
    // mainFooterZone.scrollTo(0, 0);
    contentCareerpath.style.paddingTop = "110px";
    // window.scrollTo(0, 0);
    // introZone.scrollBy(0, -200);
};

let gotoHome = function () {
    burger.click();
    navCareerpath.remove();
    tips.remove();

    if (document.querySelector('#content--careerpath')) {

        contentCareerpath.remove();
    }
    if (document.querySelector('#footer--careerpath')) {
        footerCareerpath.remove();
    }
    innerNav.appendChild(navHome);
    innerMain.appendChild(contentHome);

    if (mainFooterZone.classList.contains("margintop--careerpath")) {
        mainFooterZone.classList.remove("margintop--careerpath");
    }
    if (mainFooterZone.classList.contains("flexzone--careerpath")) {
        mainFooterZone.classList.toggle("flexzone--careerpath");
    }
    // if (!mynameNav.classList.contains("myname--nav")) {

    //     mynameNav.classList.add("myname--nav");
    // }
    // if (!colMynameNav[0].classList.contains("myname--nav")) {
    //     for (let index = 0; index < colMynameNav.length; index++) {
    //         colMynameNav[index].classList.add("myname--nav");
    //     }
    //     // mynameNav.classList.remove("myname--nav");
    // }
    if (colMynameNav != null) {
        colMynameNav.forEach(item =>
            item.classList.add("myname--nav--hiden")
        );

        // mynameNav.classList.remove("myname--nav");
    }


    navAll.style.backgroundColor = "";

    window.scrollTo(0, 0);
    document.body.scrollTop;
    indicator.style.width = 0;
};

/* img viewer____________________________________________________*/
let imgViewer = function () {
    if (tipsContainer.classList.contains("tips--container--big")) {

        tipsContainer.classList.remove("tips--container--big");
        tipsElements.classList.remove("tips--element--big");
        tipsImg.classList.remove("img_alone--big");
        tipsContainer.classList.remove("tips--container--big--100");
        tipsImg.classList.add("img_alone--small");
        // innerMain.classList.remove("innerMain--hidden");
    } else {
        tipsContainer.classList.add("tips--container--big");
        tipsElements.classList.add("tips--element--big");
        tipsImg.classList.remove("img_alone--small");
        tipsImg.classList.add("img_alone--big");
        tipsContainer.classList.add("tips--container--big--100");
        // innerMain.classList.add("innerMain--hidden");


    };
}

/*nav events ____________________________________________________ */
function addenventClickNav() {
    pHomeNav0101.addEventListener("click", gotoHome);
    pHomeNav0102.addEventListener("click", gotoCareerpath);

    pCareerNav0101.addEventListener("click", gotoHome);
    pCareerNav0102.addEventListener("click", gotoCareerpath);

    pAllNavHamberger01.addEventListener("click", gotoHome);
    pAllNavHamberger02.addEventListener("click", gotoCareerpath);
    tipsImg.addEventListener("click", imgViewer);
};

/* More/Less infos_________________________________________________ */
function displayMoreInfos() {
    introZone.remove();
    contentCareerpath.appendChild(moreinfosZone);
    innerMain.appendChild(tips);

    indicator.style.width = 0;
    contentCareerpath.style.paddingTop = "20px";
    window.scrollTo(0, 0);
};

function displayLessInfos() {
    moreinfosZone.remove();
    tips.remove();
    contentCareerpath.appendChild(introZone);

    indicator.style.width = 0;
    contentCareerpath.style.paddingTop = "20px";

    window.scrollTo(0, 0);
};


// INITIALISATION DE LA PAGE AU CHARGEMENT 
addenventClickNav();
// je supprime les éléments de la page Careerpath
navCareerpath.remove();
contentCareerpath.remove();
footerCareerpath.remove();
tips.remove();
navAll.style.backgroundColor = "";
// navAll.style.backgroundColor = "";










