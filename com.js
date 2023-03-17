//active image:
const activeImage = document.querySelectorAll('.con img');
const slider=document.querySelector('.image');

let currentImage=0;

activeImage.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        activeImage[currentImage].classList.remove('active');
        item.classList.add('active');
        currentImage=index;
        slider.style.backgroundImage=`url(${item.src})`;
    }
        )});

//active sizes:
let activeSize=document.querySelectorAll('.sizes div');

    activeSize.forEach((item)=>{
        item.addEventListener('click',()=>{
            activeSize.forEach((item)=>{
                item.classList.remove('active');
            })
            item.classList.add('active');
        }
            )});
