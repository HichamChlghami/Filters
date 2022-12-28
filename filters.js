let img=document.getElementById('img');
let upload=document.getElementById('upload');
let download=document.getElementById('download');

let saturate=document.getElementById('saturate');
let contrast=document.getElementById('contrast');
let Brightness=document.getElementById('Brightness');
let sepia=document.getElementById('sepia');
let Grayscale=document.getElementById('Grayscale');
let Blur=document.getElementById('Blur');
let huerotate=document.getElementById('hue-rotate');
let imgBox = document.querySelector('.img-box');
let reset = document.querySelector('span');
    
    function resetValue() {
    img. style.filter="none"
    saturate.value='100';
    contrast.value='100';
    Brightness.value='100';
    sepia.value='0';
    Grayscale.value='0';
    Blur.value='0';
    huerotate.value='100';

}
window.onload = function(){
    download.style.display='none';
    imgBox.style.display='none';
    reset.style.display='none';

}
upload.onchange = function(){
    resetValue()
    reset.style.display='block';
    imgBox.style.display='block';
    download.style.display='block';
    let file=new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        img.src=file.result;
    }
}
let filters=document.querySelectorAll(' ul li input');
filters.forEach(filter => {
    filter.addEventListener('input',function(){
        img.style.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        Brightness(${Brightness.value}%)
        sepia(${sepia.value}%)
        Grayscale(${Grayscale.value})
        Blur(${Blur.value}px)
        hue-rotate(${huerotate.value}deg)

        `
    })
})

download.onclick=function(){
    download.href=img.src
}
