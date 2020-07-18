if (window.matchMedia("(max-width: 600px)").matches) {

  let dropdown = document.getElementsByClassName("dropdown")
  let droplink = document.getElementsByClassName("drop-link")
  console.log(droplink[0].getAttribute('href'))

    for (let i = 0;i<dropdown.length;i++){
      dropdown[i].addEventListener('touchstart', function(){
        if(dropdown[i].classList.contains('drop-block')){
          droplink[i].href = 'works.html'
        } else {
          droplink[i].href = '#'
          dropdown[i].classList.add('drop-block');
        }
      });
    };
}
