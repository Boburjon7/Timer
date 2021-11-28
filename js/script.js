const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minutesNum = document.querySelector('.minutes')

function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`


    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}
console.log(clock());

const tabsContentItem = document.querySelectorAll('.tabsContentItem'),
    tabsItem = document.querySelectorAll('.tabsItem')

// tabsItem.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(el);
//         el.classList.add('active')

//     })
// })
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}





//homework





const sechour = document.querySelector('.stopwatch__hours'),
      secminut = document.querySelector('.stopwatch__minutes'),
      secsecund = document.querySelector('.stopwatch__seconds'),



      mistake = document.querySelector('.tabsLink__span.active_clear')
        
    
    const stopwatch_btn = document.querySelector('.stopwatch__btn')

    stopwatch_btn.addEventListener('click', ()=>{
        start()
        stopwatch_btn.innerHTML='Stop';
        stopwatch_btn.style.background = `yellow`
        mistake.style.background = 'yellow'
        stopwatch_btn.addEventListener('click', ()=>{
            stop()
            stopwatch_btn.innerHTML='Clear';
            stopwatch_btn.style.background = `red`
            mistake.style.background = 'red'
            stopwatch_btn.addEventListener('click', ()=>{
                
                sechour.innerHTML = '00';
                secminut.innerHTML = '00';
                secsecund.innerHTML = '00';


                alert("Secundomer kerak bo'lsa F5 ni bosing")
                stopwatch_btn.innerHTML='Start';
                stopwatch_btn.style.background = `green`
                mistake.style.background = 'green'
                
                
            })
            
        })
    })








    
    var sct = 1,
      mint = 1,
      hr = 1,
      timerOn = 0,
      msec;
    

    
    function setSec() {
      if (sct > 59) {
        setMin();
        sct = 0;
      }
      if (sct < 10) {
        secsecund.innerHTML = "0" + sct;
      } else {
        secsecund.innerHTML = sct;
      }
      sct = sct + 1;
      msec = setTimeout(setSec, 1000);

    }
    
    function setMin() {
      if (mint > 59) {
        setHour();
        mint = 0;
      }
      if (mint < 10) {
        secminut.innerHTML = "0" + mint;
      } else {
        secminut.innerHTML = mint;
      }
      mint = mint + 1;
      
    }
    
    function setHour() {
      if (hr < 10) {
        sechour.innerHTML = "0" + hr;
      } else {
        sechour.innerHTML = hr;
      }
      hr = hr + 1;
    }
    
    function start() {
      if (!timerOn) {
        timerOn = 1;
        setSec();
      }
    }
    
    function stop() {
      clearTimeout(msec);
      timerOn = 0;
    }






    





