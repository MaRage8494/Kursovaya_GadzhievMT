const play1 = document.querySelector('.play1');
const play2 = document.querySelector('.play2');
const play3 = document.querySelector('.play3');
const play4 = document.querySelector('.play4');
const play5 = document.querySelector('.play5');
const play6 = document.querySelector('.play6');
const play7 = document.querySelector('.play7');
const play8 = document.querySelector('.play8');
const play9 = document.querySelector('.play9');
const play10 = document.querySelector('.play10');
const audio1 = document.querySelector('.audio1')
const audio2 = document.querySelector('.audio2')
const audio3 = document.querySelector('.audio3')
const audio4 = document.querySelector('.audio4')
const audio5 = document.querySelector('.audio5')
const audio6 = document.querySelector('.audio6')
const audio7 = document.querySelector('.audio7')
const audio8 = document.querySelector('.audio8')
const audio9 = document.querySelector('.audio9')
const audio10 = document.querySelector('.audio10')
const progress_container1 = document.querySelector('.progress_container1');
const progress_container2 = document.querySelector('.progress_container2');
const progress_container3 = document.querySelector('.progress_container3');
const progress_container4 = document.querySelector('.progress_container4');
const progress_container5 = document.querySelector('.progress_container5');
const progress_container6 = document.querySelector('.progress_container6');
const progress_container7 = document.querySelector('.progress_container7');
const progress_container8 = document.querySelector('.progress_container8');
const progress_container9 = document.querySelector('.progress_container9');
const progress_container10 = document.querySelector('.progress_container10');
const progress1 = document.querySelector('.progress1')
const progress2 = document.querySelector('.progress2')
const progress3 = document.querySelector('.progress3')
const progress4 = document.querySelector('.progress4')
const progress5 = document.querySelector('.progress5')
const progress6 = document.querySelector('.progress6')
const progress7 = document.querySelector('.progress7')
const progress8 = document.querySelector('.progress8')
const progress9 = document.querySelector('.progress9')
const progress10 = document.querySelector('.progress10')
const imgSrc1 = document.querySelector('.img_src1')
const imgSrc2 = document.querySelector('.img_src2')
const imgSrc3 = document.querySelector('.img_src3')
const imgSrc4 = document.querySelector('.img_src4')
const imgSrc5 = document.querySelector('.img_src5')
const imgSrc6 = document.querySelector('.img_src6')
const imgSrc7 = document.querySelector('.img_src7')
const imgSrc8 = document.querySelector('.img_src8')
const imgSrc9 = document.querySelector('.img_src9')
const imgSrc10 = document.querySelector('.img_src10')

let playing1 = 0;

function playSong1(){
    imgSrc1.src = 'images/pause.png'
    playing1 -= 1
    audio1.play()
}

function pauseSong1(){
    imgSrc1.src = 'images/play.png'
    playing1 += 1
    audio1.pause()
}

play1.addEventListener('click', () =>{
    if (playing1){
        pauseSong1()
    }
    else{
        playSong1()
    }
})

function updateProgress1(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress1.style.width = `${progressPercent}%`
}

function setProgress1(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio1.duration

    audio1.currentTime = (clickX/width)*duration
}
progress_container1.addEventListener('click', setProgress1)
audio1.addEventListener('timeupdate', updateProgress1)


play1.addEventListener('click', () =>{
  if(progress_container1.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container1.classList.toggle('active');
});

let playing2 = 0;

function playSong2(){
    imgSrc2.src = 'images/pause.png'
    playing2 -= 1
    audio2.play()
}

function pauseSong2(){
    imgSrc2.src = 'images/play.png'
    playing2 += 1
    audio2.pause()
}

play2.addEventListener('click', () =>{
    if (playing2){
        pauseSong2()
    }
    else{
        playSong2()
    }
})

function updateProgress2(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress2.style.width = `${progressPercent}%`
}

function setProgress2(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio2.duration

    audio2.currentTime = (clickX/width)*duration
}
progress_container2.addEventListener('click', setProgress2)
audio2.addEventListener('timeupdate', updateProgress2)


play2.addEventListener('click', () =>{
  if(progress_container2.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container2.classList.toggle('active');
});


let playing3 = 0;

function playSong3(){
    imgSrc3.src = 'images/pause.png'
    playing3 -= 1
    audio3.play()
}

function pauseSong3(){
    imgSrc3.src = 'images/play.png'
    playing3 += 1
    audio3.pause()
}

play3.addEventListener('click', () =>{
    if (playing3){
        pauseSong3()
    }
    else{
        playSong3()
    }
})

function updateProgress3(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress3.style.width = `${progressPercent}%`
}

function setProgress3(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio3.duration

    audio3.currentTime = (clickX/width)*duration
}
progress_container3.addEventListener('click', setProgress3)
audio3.addEventListener('timeupdate', updateProgress3)


play3.addEventListener('click', () =>{
  if(progress_container3.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container3.classList.toggle('active');
});

let playing4 = 0;

function playSong4(){
    imgSrc4.src = 'images/pause.png'
    playing4 -= 1
    audio4.play()
}

function pauseSong4(){
    imgSrc4.src = 'images/play.png'
    playing4 += 1
    audio4.pause()
}

play4.addEventListener('click', () =>{
    if (playing4){
        pauseSong4()
    }
    else{
        playSong4()
    }
})

function updateProgress4(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress4.style.width = `${progressPercent}%`
}

function setProgress4(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio4.duration

    audio4.currentTime = (clickX/width)*duration
}
progress_container4.addEventListener('click', setProgress4)
audio4.addEventListener('timeupdate', updateProgress4)


play4.addEventListener('click', () =>{
  if(progress_container4.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container4.classList.toggle('active');
});

let playing5 = 0;

function playSong5(){
    imgSrc5.src = 'images/pause.png'
    playing5 -= 1
    audio5.play()
}

function pauseSong5(){
    imgSrc5.src = 'images/play.png'
    playing5 += 1
    audio5.pause()
}

play5.addEventListener('click', () =>{
    if (playing5){
        pauseSong5()
    }
    else{
        playSong5()
    }
})

function updateProgress5(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress5.style.width = `${progressPercent}%`
}

function setProgress5(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio5.duration

    audio5.currentTime = (clickX/width)*duration
}
progress_container5.addEventListener('click', setProgress5)
audio5.addEventListener('timeupdate', updateProgress5)


play5.addEventListener('click', () =>{
  if(progress_container5.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container5.classList.toggle('active');
});

let playing6 = 0;

function playSong6(){
    imgSrc6.src = 'images/pause.png'
    playing6 -= 1
    audio6.play()
}

function pauseSong6(){
    imgSrc6.src = 'images/play.png'
    playing6 += 1
    audio6.pause()
}

play6.addEventListener('click', () =>{
    if (playing6){
        pauseSong6()
    }
    else{
        playSong6()
    }
})

function updateProgress6(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress6.style.width = `${progressPercent}%`
}

function setProgress6(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio6.duration

    audio6.currentTime = (clickX/width)*duration
}
progress_container6.addEventListener('click', setProgress6)
audio6.addEventListener('timeupdate', updateProgress6)


play6.addEventListener('click', () =>{
  if(progress_container6.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container6.classList.toggle('active');
});

let playing7 = 0;

function playSong7(){
    imgSrc7.src = 'images/pause.png'
    playing7 -= 1
    audio7.play()
}

function pauseSong7(){
    imgSrc7.src = 'images/play.png'
    playing7 += 1
    audio7.pause()
}

play7.addEventListener('click', () =>{
    if (playing7){
        pauseSong7()
    }
    else{
        playSong7()
    }
})

function updateProgress7(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress7.style.width = `${progressPercent}%`
}

function setProgress7(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio7.duration

    audio7.currentTime = (clickX/width)*duration
}
progress_container7.addEventListener('click', setProgress7)
audio7.addEventListener('timeupdate', updateProgress7)


play7.addEventListener('click', () =>{
  if(progress_container7.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container7.classList.toggle('active');
});

let playing8 = 0;

function playSong8(){
    imgSrc8.src = 'images/pause.png'
    playing8 -= 1
    audio8.play()
}

function pauseSong8(){
    imgSrc8.src = 'images/play.png'
    playing8 += 1
    audio8.pause()
}

play8.addEventListener('click', () =>{
    if (playing8){
        pauseSong8()
    }
    else{
        playSong8()
    }
})

function updateProgress8(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress8.style.width = `${progressPercent}%`
}

function setProgress8(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio8.duration

    audio8.currentTime = (clickX/width)*duration
}
progress_container8.addEventListener('click', setProgress8)
audio8.addEventListener('timeupdate', updateProgress8)


play8.addEventListener('click', () =>{
  if(progress_container8.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container8.classList.toggle('active');
});

let playing9 = 0;

function playSong9(){
    imgSrc9.src = 'images/pause.png'
    playing9 -= 1
    audio9.play()
}

function pauseSong9(){
    imgSrc9.src = 'images/play.png'
    playing9 += 1
    audio9.pause()
}

play9.addEventListener('click', () =>{
    if (playing9){
        pauseSong9()
    }
    else{
        playSong9()
    }
})

function updateProgress9(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress9.style.width = `${progressPercent}%`
}

function setProgress9(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio9.duration

    audio9.currentTime = (clickX/width)*duration
}
progress_container9.addEventListener('click', setProgress9)
audio9.addEventListener('timeupdate', updateProgress9)


play9.addEventListener('click', () =>{
  if(progress_container9.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container9.classList.toggle('active');
});

let playing10 = 0;

function playSong10(){
    imgSrc10.src = 'images/pause.png'
    playing10 -= 1
    audio10.play()
}

function pauseSong10(){
    imgSrc10.src = 'images/play.png'
    playing10 += 1
    audio10.pause()
}

play10.addEventListener('click', () =>{
    if (playing10){
        pauseSong10()
    }
    else{
        playSong10()
    }
})

function updateProgress10(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress10.style.width = `${progressPercent}%`
}

function setProgress10(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio10.duration

    audio10.currentTime = (clickX/width)*duration
}
progress_container10.addEventListener('click', setProgress10)
audio10.addEventListener('timeupdate', updateProgress10)


play10.addEventListener('click', () =>{
  if(progress_container10.classList.contains('active')) {
    this.textContent = "Open Menu";
  } else {
    this.textContent = "Close Menu";
  }
  progress_container10.classList.toggle('active');
});