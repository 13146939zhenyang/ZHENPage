function home() {
    document.querySelector('.body-home').style.display = 'block';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'none';
}

function resume() {
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'block';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'none';
}

function projects() {
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'block';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'none';
}

function blog() {
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'block';
    document.querySelector('.body-contact').style.display = 'none';
}

function contact() {
    document.querySelector('.body-home').style.display = 'none';
    document.querySelector('.body-resume').style.display = 'none';
    document.querySelector('.body-projects').style.display = 'none';
    document.querySelector('.body-blog').style.display = 'none';
    document.querySelector('.body-contact').style.display = 'block';
}