const shareButton = document.getElementById('share-button');
const mobileShare = document.getElementById('mobile-share');
const shareButtonMobile = document.getElementById('share-button-mobile');
const tooltipDesktop = document.getElementById('tootip-share');
const tooltipDesktop2  = document.getElementsByClassName('tooltip-content');
const logoShare =  document.getElementById('logo-share');
tooltipDesktop.style.visibility = "hidden";

shareButton.addEventListener('click', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        mobileShare.style.display = "grid";
    } else if (windowWidth > 768){      
        if (tooltipDesktop.style.visibility === "visible" ) {
            tooltipDesktop.style.visibility = "hidden";
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            logoShare.style.fill = "hsl(214, 17%, 51%)";
        }
        else {
            tooltipDesktop.style.visibility = "visible";
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            logoShare.style.fill = "hsl(210, 46%, 95%)";
        }
        
    }
});
    
shareButtonMobile.addEventListener('click', () => {
    let windowWidth = window.innerWidth;
    mobileShare.style.display = "none";
});
