       /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
       function menuFunction() {
           document.getElementById("menuDropdown").classList.toggle("show");
       }
       console.log(menuFunction);

       // Close the dropdown if the user clicks outside of it
       window.onclick = function(event) {
           if (!event.target.matches('.dropbtn')) {
               var dropdowns = document.getElementById("menuDropdown");
               console.log(dropdowns);
               var i;
               for (i = 0; i < dropdowns.length; i++) {
                   var openDropdown = dropdowns[i];

                   if (openDropdown.classList.contains('show')) {
                       openDropdown.classList.remove('show');
                   }
               }
           }
       }


       /* FadeIn Scroll */
       $(document).ready(function() {

           /* Every time the window is scrolled ... */
           $(window).scroll(function() {

               /* Check the location of each desired element */
               $('.rec_image').each(function(i) {

                   var bottom_of_object = $(this).position().top + $(this).outerHeight();
                   var bottom_of_window = $(window).scrollTop() + $(window).height();

                   /* If the object is completely visible in the window, fade it in */
                   if (bottom_of_window > bottom_of_object) {

                       $(this).animate({
                           'opacity': '1'
                       }, 4000);

                   }

               });

           });

       });