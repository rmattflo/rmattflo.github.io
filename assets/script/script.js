function unhideLightbox(lightboxID) {
   document.getElementById('lightbox-overlay').classList.remove('hidden');
   document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
   unhideLightbox('yhwh1');
}
document.getElementById('button1').onclick = unhideLightbox1;


function unhideLightbox2() {
   unhideLightbox('kp1');
}
document.getElementById('button2').onclick = unhideLightbox2;


function unhideLightbox3() {
   unhideLightbox('ds1');
}
document.getElementById('button3').onclick = unhideLightbox3;


function closeLightbox(lightboxID) {
   document.getElementById('lightbox-overlay').classList.add('hidden');
   document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
   var lightboxElements = document.getElementsByClassName('lightbox');

   for (var i = 0; i < lightboxElements.length; i++) {
       var id = lightboxElements[i].id;
       closeLightbox(id);
   }
}
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
