// ---------- WEBSHARE Nativo ----------
// const $button = document.querySelector('#button')
// if ('share' in navigator) {
//     $button.addEventListener('click', share)
//     function share() {
//         navigator.share({
//             title: 'Share API',
//             text: 'eCard - MID® Mitch Dehesa:',
//             url: 'https://dedalomultimedia.com/ecard/mid/mitch-dehesa',
//         })
//         .then(()=>{
//             alert('¡La eCard se compartió con éxtio!')
//         })
//         .catch(()=>{
//             alert('No se pudo compartir.')
//         })
//     }
// } else {
//     alert('No es posible compartir desde este navegador. El sitio requiere un certificado SSL')
// }


var nativeShare = function() {
    if (navigator.share) { 
       navigator.share({
        title: 'Share API',
        text: 'eCard - MID® Mitch Dehesa:',
        url: 'https://dedalomultimedia.com/ecard/mid/mitch-dehesa',
       }) 
    }
    return false;
 }