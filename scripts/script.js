function homeChangeOpacity() {
    document.querySelector('.body-resume').style.opacity = '0';
    document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-contact').style.opacity = '0';
}

function resumeChangeOpacity() {
    document.querySelector('.body-home').style.opacity = '0';
    document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-contact').style.opacity = '0';
}

function projectsChangeOpacity() {
    document.querySelector('.body-resume').style.opacity = '0';
    document.querySelector('.body-home').style.opacity = '0';
    document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-contact').style.opacity = '0';
}

function blogChangeOpacity() {
    document.querySelector('.body-resume').style.opacity = '0';
    document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-home').style.opacity = '0';
    document.querySelector('.body-contact').style.opacity = '0';
}

function contactChangeOpacity() {
    document.querySelector('.body-resume').style.opacity = '0';
    document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-home').style.opacity = '0';
}

function home() {
    document.querySelector('.body-home').style.zIndex = '2000';
    document.querySelector('.body-resume').style.zIndex = '1000';
    document.querySelector('.body-projects').style.zIndex = '1000';
    document.querySelector('.body-blog').style.zIndex = '1000';
    document.querySelector('.body-contact').style.zIndex = '1000';
    // animation
    document.querySelector('.body-home').style.opacity = '1';
    document.querySelector('.body-home').style.animationName = 'pageCome';
    document.querySelector('.body-home').style.animationDuration = '1s';
    document.querySelector('.body-resume').style.animationName = 'none';
    document.querySelector('.body-projects').style.animationName = 'none';
    document.querySelector('.body-blog').style.animationName = 'none';
    document.querySelector('.body-contact').style.animationName = 'none';


    var re = document.querySelector('.body-resume').style.opacity
    if (re == '1') {
        document.querySelector('.body-resume').style.animationName = 'pageGo';
        document.querySelector('.body-resume').style.animationDuration = '1s';
        homeChangeOpacity();
        console.log('success yz')
    }
    var pr = document.querySelector('.body-projects').style.opacity
    if (pr == '1') {
        document.querySelector('.body-projects').style.animationName = 'pageGo';
        document.querySelector('.body-projects').style.animationDuration = '1s';
        homeChangeOpacity();
        console.log('success yz')
    }
    var bl = document.querySelector('.body-blog').style.opacity
    if (bl == '1') {
        document.querySelector('.body-blog').style.animationName = 'pageGo';
        document.querySelector('.body-blog').style.animationDuration = '1s';
        homeChangeOpacity();
        console.log('success yz')
    }
    var co = document.querySelector('.body-contact').style.opacity
    if (co == '1') {
        document.querySelector('.body-contact').style.animationName = 'pageGo';
        document.querySelector('.body-contact').style.animationDuration = '1s';
        homeChangeOpacity();
        console.log('success yz')
    }

    document.querySelector('.header-navbar-item-home').style.color = '#595959';
    document.querySelector('.header-navbar-item-home-line').style.opacity = '1';
    document.querySelector('.header-navbar-item-resume').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-resume-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-projects').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-projects-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-blog').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-blog-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-contact').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-contact-line').style.opacity = '0';

}

function resume() {
    document.querySelector('.body-home').style.zIndex = '1000';
    document.querySelector('.body-resume').style.zIndex = '2000';
    document.querySelector('.body-projects').style.zIndex = '1000';
    document.querySelector('.body-blog').style.zIndex = '1000';
    document.querySelector('.body-contact').style.zIndex = '1000';
    // animation
    document.querySelector('.body-resume').style.opacity = '1';
    document.querySelector('.body-resume').style.animationName = 'pageCome';
    document.querySelector('.body-resume').style.animationDuration = '1s';
    document.querySelector('.body-home').style.animationName = 'none';
    document.querySelector('.body-projects').style.animationName = 'none';
    document.querySelector('.body-blog').style.animationName = 'none';
    document.querySelector('.body-contact').style.animationName = 'none';

    var rer = document.querySelector('.body-home').style.opacity
    if (rer == '1') {
        document.querySelector('.body-home').style.animationName = 'pageGo';
        document.querySelector('.body-home').style.animationDuration = '1s';
        resumeChangeOpacity();
        console.log('success yz')
    }
    var prr = document.querySelector('.body-projects').style.opacity
    if (prr == '1') {
        document.querySelector('.body-projects').style.animationName = 'pageGo';
        document.querySelector('.body-projects').style.animationDuration = '1s';
        resumeChangeOpacity();
        console.log('success yz')
    }
    var blr = document.querySelector('.body-blog').style.opacity
    if (blr == '1') {
        document.querySelector('.body-blog').style.animationName = 'pageGo';
        document.querySelector('.body-blog').style.animationDuration = '1s';
        resumeChangeOpacity();
        console.log('success yz')
    }
    var cor = document.querySelector('.body-contact').style.opacity
    if (cor == '1') {
        document.querySelector('.body-contact').style.animationName = 'pageGo';
        document.querySelector('.body-contact').style.animationDuration = '1s';
        resumeChangeOpacity();
        console.log('success yz')
    }



    document.querySelector('.header-navbar-item-home').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-home-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-resume').style.color = '#595959';
    document.querySelector('.header-navbar-item-resume-line').style.opacity = '1';
    document.querySelector('.header-navbar-item-projects').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-projects-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-blog').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-blog-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-contact').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-contact-line').style.opacity = '0';
}

function projects() {
    // animation
    document.querySelector('.body-projects').style.opacity = '1';
    document.querySelector('.body-projects').style.animationName = 'pageCome';
    document.querySelector('.body-projects').style.animationDuration = '1s';
    document.querySelector('.body-home').style.animationName = 'none';
    document.querySelector('.body-resume').style.animationName = 'none';
    document.querySelector('.body-blog').style.animationName = 'none';
    document.querySelector('.body-contact').style.animationName = 'none';

    document.querySelector('.body-home').style.zIndex = '1000';
    document.querySelector('.body-resume').style.zIndex = '1000';
    document.querySelector('.body-projects').style.zIndex = '2000';
    document.querySelector('.body-blog').style.zIndex = '1000';
    document.querySelector('.body-contact').style.zIndex = '1000';

    var rer = document.querySelector('.body-home').style.opacity
    if (rer == '1') {
        document.querySelector('.body-home').style.animationName = 'pageGo';
        document.querySelector('.body-home').style.animationDuration = '1s';
        projectsChangeOpacity();
        console.log('success yz')
    }
    var prr = document.querySelector('.body-resume').style.opacity
    if (prr == '1') {
        document.querySelector('.body-resume').style.animationName = 'pageGo';
        document.querySelector('.body-resume').style.animationDuration = '1s';
        projectsChangeOpacity();
        console.log('success yz')
    }
    var blr = document.querySelector('.body-blog').style.opacity
    if (blr == '1') {
        document.querySelector('.body-blog').style.animationName = 'pageGo';
        document.querySelector('.body-blog').style.animationDuration = '1s';
        projectsChangeOpacity();
        console.log('success yz')
    }
    var cor = document.querySelector('.body-contact').style.opacity
    if (cor == '1') {
        document.querySelector('.body-contact').style.animationName = 'pageGo';
        document.querySelector('.body-contact').style.animationDuration = '1s';
        projectsChangeOpacity();
        console.log('success yz')
    }
    document.querySelector('.header-navbar-item-home').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-home-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-resume').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-resume-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-projects').style.color = '#595959';
    document.querySelector('.header-navbar-item-projects-line').style.opacity = '1';
    document.querySelector('.header-navbar-item-blog').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-blog-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-contact').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-contact-line').style.opacity = '0';
}

function blog() {
    // animation
    document.querySelector('.body-blog').style.opacity = '1';
    document.querySelector('.body-blog').style.animationName = 'pageCome';
    document.querySelector('.body-blog').style.animationDuration = '1s';
    document.querySelector('.body-home').style.animationName = 'none';
    document.querySelector('.body-resume').style.animationName = 'none';
    document.querySelector('.body-projects').style.animationName = 'none';
    document.querySelector('.body-contact').style.animationName = 'none';

    document.querySelector('.body-home').style.zIndex = '1000';
    document.querySelector('.body-resume').style.zIndex = '1000';
    document.querySelector('.body-projects').style.zIndex = '1000';
    document.querySelector('.body-blog').style.zIndex = '2000';
    document.querySelector('.body-contact').style.zIndex = '1000';

    var rer = document.querySelector('.body-home').style.opacity
    if (rer == '1') {
        document.querySelector('.body-home').style.animationName = 'pageGo';
        document.querySelector('.body-home').style.animationDuration = '1s';
        blogChangeOpacity();
        console.log('success yz')
    }
    var prr = document.querySelector('.body-resume').style.opacity
    if (prr == '1') {
        document.querySelector('.body-resume').style.animationName = 'pageGo';
        document.querySelector('.body-resume').style.animationDuration = '1s';
        blogChangeOpacity();
        console.log('success yz')
    }
    var blr = document.querySelector('.body-projects').style.opacity
    if (blr == '1') {
        document.querySelector('.body-projects').style.animationName = 'pageGo';
        document.querySelector('.body-projects').style.animationDuration = '1s';
        blogChangeOpacity();
        console.log('success yz')
    }
    var cor = document.querySelector('.body-contact').style.opacity
    if (cor == '1') {
        document.querySelector('.body-contact').style.animationName = 'pageGo';
        document.querySelector('.body-contact').style.animationDuration = '1s';
        blogChangeOpacity();
        console.log('success yz')
    }
    document.querySelector('.header-navbar-item-home').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-home-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-resume').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-resume-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-projects').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-projects-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-blog').style.color = '#595959';
    document.querySelector('.header-navbar-item-blog-line').style.opacity = '1';
    document.querySelector('.header-navbar-item-contact').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-contact-line').style.opacity = '0';
}

function contact() {
    // animation
    document.querySelector('.body-contact').style.opacity = '1';
    document.querySelector('.body-contact').style.animationName = 'pageCome';
    document.querySelector('.body-contact').style.animationDuration = '1s';
    document.querySelector('.body-home').style.animationName = 'none';
    document.querySelector('.body-resume').style.animationName = 'none';
    document.querySelector('.body-projects').style.animationName = 'none';
    document.querySelector('.body-blog').style.animationName = 'none';


    document.querySelector('.body-home').style.zIndex = '1000';
    document.querySelector('.body-resume').style.zIndex = '1000';
    document.querySelector('.body-projects').style.zIndex = '1000';
    document.querySelector('.body-blog').style.zIndex = '1000';
    document.querySelector('.body-contact').style.zIndex = '2000';

    var rer = document.querySelector('.body-home').style.opacity
    if (rer == '1') {
        document.querySelector('.body-home').style.animationName = 'pageGo';
        document.querySelector('.body-home').style.animationDuration = '1s';
        contactChangeOpacity();
        console.log('success yz')
    }
    var prr = document.querySelector('.body-resume').style.opacity
    if (prr == '1') {
        document.querySelector('.body-resume').style.animationName = 'pageGo';
        document.querySelector('.body-resume').style.animationDuration = '1s';
        contactChangeOpacity();
        console.log('success yz')
    }
    var blr = document.querySelector('.body-projects').style.opacity
    if (blr == '1') {
        document.querySelector('.body-projects').style.animationName = 'pageGo';
        document.querySelector('.body-projects').style.animationDuration = '1s';
        contactChangeOpacity();
        console.log('success yz')
    }
    var cor = document.querySelector('.body-blog').style.opacity
    if (cor == '1') {
        document.querySelector('.body-blog').style.animationName = 'pageGo';
        document.querySelector('.body-blog').style.animationDuration = '1s';
        contactChangeOpacity();
        console.log('success yz')
    }
    document.querySelector('.header-navbar-item-home').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-home-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-resume').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-resume-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-projects').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-projects-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-blog').style.color = '#9a9a9a';
    document.querySelector('.header-navbar-item-blog-line').style.opacity = '0';
    document.querySelector('.header-navbar-item-contact').style.color = '#595959';
    document.querySelector('.header-navbar-item-contact-line').style.opacity = '1';
}

function moveName() {
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderName').style.top = '-10px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderName').style.left = '5px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderName').style.fontSize = '12px';
}

function movePlaceholderName(name) {
    document.querySelector(name).style.top = '-10px';
    document.querySelector(name).style.left = '5px';
    document.querySelector(name).style.fontSize = '12px';
}

function moveEmail() {
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderEmail').style.top = '-10px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderEmail').style.left = '5px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderEmail').style.fontSize = '12px';
}

function moveComment() {
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderComment').style.top = '-18px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderComment').style.left = '5px';
    document.querySelector('.body-contact_bottom-detail-content-form-detail-text-placeholderComment').style.fontSize = '12px';
}

function checkName() {
    // var len = document.querySelector('.body-contact_bottom-detail-content-form-detail-text-input').value.length
    var len = document.querySelector('#inputName').value.length
    if (len == 0) {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipName').style.visibility = 'visible';
        console.log("cool")
    } else {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipName').style.visibility = 'hidden';
    }
    // console.log(len)
}

function checkEmail() {
    var len = document.querySelector('#inputEmail').value.length
    if (len == 0) {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipEmail').style.visibility = 'visible';
        console.log("cool")
    } else {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipEmail').style.visibility = 'hidden';
    }
    // console.log(len)
}

function checkComment() {
    var len = document.querySelector('#inputComment').value.length
    if (len == 0) {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipComment').style.visibility = 'visible';
        console.log("cool")
    } else {
        document.querySelector('.body-contact_bottom-detail-content-form-detail-text-toolTipComment').style.visibility = 'hidden';
    }
    // console.log(len)
}