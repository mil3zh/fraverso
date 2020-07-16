console.log("start0")

if (window.matchMedia("(max-width: 600px)").matches) {
  console.log("start1")
  let dropdown = document.getElementsByClassName("dropdown")
  let dropmenu = document.getElementsByClassName("drop-menu")
  console.log(document.getElementsByClassName("dropdown")[0].innerHTML)

    for (let i = 0;i<dropdown.length;i++){
      dropdown[i].addEventListener('click', function(){
        dropdown[i].classList.toggle('drop-block');
        dropmenu[i].classList.toggle('drop-block');
      });
    };
}
