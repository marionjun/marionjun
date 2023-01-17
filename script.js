
! function(o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);



  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-40043928-1', {
    'anonymize_ip': false
  });



  var lettering = function(el, optionalArg) {
    var text = el.innerHTML,
      arg = optionalArg || "char",
      size = window.getComputedStyle(el).getPropertyValue("font-size").substring(0, 2);
    if (el.classList.contains('fallback'));
    if (el.parentNode.getAttribute('aria-hidden') === null) {
      var clone = el.cloneNode(true);

      clone.classList.add('fallback');

      el.setAttribute('aria-hidden', 'true');

      clone.classList.add('hide');

      el.parentNode.insertBefore(clone, el.nextSibling);
    };
    el.innerHTML = "";
    if (arg == "char") {
      for (var i = 0; i < text.length; i++) {
        var span = document.createElement("span");
        span.innerHTML = text[i];
        if (text[i] == " ") {
          span.style.margin = "0 " + (size / 10) + "px";
        }
        span.classList.add("char" + (i + 1));
        el.appendChild(span);
      }
    } else if (arg == "words") {
      var words = text.split(" ");
      for (var i = 0; i < words.length; i++) {
        var span = document.createElement("span");
        span.innerHTML = words[i];
        span.classList.add("word" + (i + 1));
        span.style.margin = "0 " + (size / 10) + "px";
        el.appendChild(span);
      }
    }
  };

//   var words = document.querySelectorAll(".text-explode"),
//     i;

//   for (i = 0; i < words.length; ++i) {
//     lettering(words[i]);
//   }

//   words.forEach(word => {
//     word.addEventListener("mouseover", function() {
//       const letters = this.querySelectorAll('.text-explode span');

//       letters.forEach(letter => {
//         const moveY = randomNumber()
//         const rotate = randomNumber()

//         letter.style.transform = `rotate(${rotate}deg) translateY(${moveY}px)`
//       })
//     })
//     word.addEventListener("mouseout", function() {
//       const letters = this.querySelectorAll('.text-explode span');

//       letters.forEach(letter => {
//         letter.style.transform = ""
//       })
//     })
//   })

  function randomNumber() {
    var num = Math.floor(Math.random() * 7);
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return (num);
  }


          const html = document.querySelector('html');
          const body = document.querySelector('body');
          const navLink = document.querySelector('.w-nav-button');
          let clicked = false;
    
          navLink.addEventListener('click', function() {
            let overflow = 'auto';
    
            if (clicked == false) {
              overflow = 'hidden';
              clicked = true;
            } else {
              overflow = 'auto';
              clicked = false;
            }
    
            html.style.overflow = overflow;
            body.style.overflow = overflow;
          })



          imagesLoaded(document.querySelector('.grid'), function(instance) {
            // element as first argument
            var grid = document.querySelector('.grid');
            var colc = new Colcade(grid, {
              columns: '.grid-col',
              items: '.grid-item'
            });
            AOS.init();
          });

