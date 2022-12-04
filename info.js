//Function snipets from: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
function scrollfunction(elid) {
    const element = document.getElementById(elid);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}