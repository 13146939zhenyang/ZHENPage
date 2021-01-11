function home() {
    document.querySelector('.body-home').style.display = 'block';
    // document.querySelector('.body-home').style.opacity = '1';
    document.querySelector('.body-resume').style.display = 'none';
    // document.querySelector('.body-resume').style.opacity = '0';
    document.querySelector('.body-projects').style.display = 'none';
    // document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-blog').style.display = 'none';
    // document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-contact').style.display = 'none';
    // document.querySelector('.body-contact').style.opacity = '0';
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
    document.querySelector('.body-home').style.display = 'none';
    // document.querySelector('.body-home').style.opacity = '0';
    document.querySelector('.body-resume').style.display = 'block';
    // document.querySelector('.body-resume').style.opacity = '1';
    document.querySelector('.body-projects').style.display = 'none';
    // document.querySelector('.body-projects').style.opacity = '0';
    document.querySelector('.body-blog').style.display = 'none';
    // document.querySelector('.body-blog').style.opacity = '0';
    document.querySelector('.body-contact').style.display = 'none';
    // document.querySelector('.body-contact').style.opacity = '0';
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
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'block';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'none';
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
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'block';
    document.querySelector('.body-contact').style.display = 'none';
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
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'block';
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