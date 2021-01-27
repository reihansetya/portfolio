function opentag(namatag) {
            var i;
            var x = document.getElementsByClassName("tag");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(namatag).style.display = "flex";
}

new Typed('#typed',{
  strings : ['Front-End Developer','Programmer','UI/UX'],
  typeSpeed : 100,
  delaySpeed : 100,
  loop : true
});