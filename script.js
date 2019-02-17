var ImageData =['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/13.jpg','images/14.jpg'];
var index = 0;
function changeImage() {
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',ImageData[index]);
    index++;
    if (index >= ImageData.length) {
        index = 0;
    }
}
setInterval(changeImage, 2000);
