function countdown( elementName, minutes, seconds ){
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n ) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
 
$('document').ready(function(){
  $("[data-modal]").on('click', function(){
     var modalID = $(this).attr("data-modal");
     $('.custom-modal#'+modalID).addClass('show');
  });
  
  $('.custom-modal__close').on('click', function(){
    $(this).parents('.custom-modal').removeClass('show');
  });
});

jQuery('.order--product').click(function(e){
  e.preventDefault();
  let productID = jQuery('.order--product-ID').val();
  if(productID){
     $.ajax({
          type: 'POST',
          url: window.Shopify.routes.root + 'cart/add.js',
          dataType: 'json',
          data: {'id': productID, 'quantity': 1 },
          success: function (response) {
              console.log('Success:', response);               
              window.location.href = '/checkout?express';
          },
          error: function (xhr, status, error) {
              console.error('Error:', error);
          }
      });
  }
  });

jQuery(document).ready(function () {
  if (jQuery("body").hasClass("product")) {
    jQuery("#prvw__bundle_container").hide();
    var groupedQuantity = jQuery("#prvw__bundle_container").html();
    if (groupedQuantity) {
      jQuery(".product-form__buttons_new").before(
        '<div class="prvw__bundle_container">' + groupedQuantity + "</div>"
      );
    }

    jQuery(".block__cbwrapper .block__cb input#cb1").attr("checked", true);
    jQuery(".block__cbwrapper .block__cb label").on("click", function (e) {
      jQuery(".block__cbwrapper .block__cb input").removeAttr("checked");
      jQuery(this).parent().find("input").attr("checked", true);
    });

    jQuery("label.ROS-radio-button-click-target-3").on("click", function () {
      jQuery(".prvw__bundle_container").addClass("content-disabled");
    });

    function countdownByClass(className, hours, minutes, seconds) {
      var elements = document.getElementsByClassName(className);
      if (elements.length === 0) {
        console.error("Element with class '" + className + "' not found.");
        return;
      }

      var endTime, hours, mins, msLeft, time;

      function twoDigits(n) {
        return n <= 9 ? "0" + n : n;
      }

      function updateTimer() {
        msLeft = endTime - +new Date();
        if (msLeft < 1000) {
          for (var i = 0; i < elements.length; i++) {
            document.getElementById("countdown-container").style.display =
              "none";
          }
        } else {
          time = new Date(msLeft);
          hours = time.getUTCHours();
          mins = time.getUTCMinutes();
          var timeString =
            (hours ? hours + "h " + twoDigits(mins) : mins) +
            "m " +
            twoDigits(time.getUTCSeconds()) +
            "s";

          for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = timeString;
          }

          setTimeout(updateTimer, 1000);
        }
      }

      endTime = +new Date() + 1000 * (3600 * hours + 60 * minutes + seconds);
      updateTimer();
    }

    // Helper function to convert the current time to EST or EDT
    function getESTDate() {
      const now = new Date();

      // Get the UTC time
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;

      // Calculate EST/EDT based on whether DST is in effect
      const estOffset = -5; // UTC-5 for EST
      const edtOffset = -4; // UTC-4 for EDT

      // Use the America/New_York time zone to determine if it's daylight saving time (DST)
      const isDST = now
        .toLocaleString("en-US", {
          timeZone: "America/New_York",
          hour12: false,
        })
        .includes("PM");

      // Calculate the correct offset
      const offset = isDST ? edtOffset : estOffset;

      // Return the new date in EST or EDT
      return new Date(utcTime + offset * 3600000);
    }

    // Function to calculate the delivery date based on EST time
    function calculateDeliveryDate() {
      const estDate = getESTDate(); // Get current date and time in EST
      const currentHour = estDate.getHours(); // Current hour in EST (24-hour format)
      // Add 3 days to the current EST date
      let extraDays = 3;

      // Check if the current time is after 3 PM EST
      if (currentHour >= 15) {
        console.log('after 3 PM EST');
        extraDays += 1; // Add an extra day if it's after 3 PM EST
      }
      console.log('extraDays:',extraDays,', currentHour:',currentHour,':',estDate.getMinutes(),'estDate: ',estDate);
      // Update the delivery date by adding extra days
      estDate.setDate(estDate.getDate() + extraDays);

      const options = { weekday: "long", month: "long", day: "numeric" };
      const formattedDate = estDate.toLocaleDateString("en-US", options);

      // Update all elements with class 'daycount' with the new delivery date
      document.querySelectorAll(".daycount").forEach((element) => {
        element.innerText = formattedDate;
      });
    }

    // Countdown function and calculate the delivery date
    countdownByClass("countdown", 6, 0, 0);
    calculateDeliveryDate();
  }
});

/*============= FAQs ===============*/
$(document).ready(function () {
  // FAQ
    $(".faq-item h4").click(function () {
      var $this = $(this);
      $(this).parent().toggleClass("active").siblings().removeClass("active").find(".faq-item-box").slideUp(300);
      $(this).siblings(".faq-item-box").stop().slideToggle(300, function(){
          var self = this;
          if($(window).scrollTop() > $this.offset().top){
              setTimeout(function() {
                  var theOffset = $(self).offset();
                  console.log(theOffset.top);
                  $('body,html').animate({ scrollTop: theOffset.top - $('header').outerHeight() * 2 });
              }, 10);
          }
      });
  });
  
  $(".faq-link").click(function (e) {
    e.preventDefault();

    var targetID = $(this).attr("href");
    var $target = $(targetID);

    // Scroll to the target section
    $("html, body").animate({
      scrollTop: $target.offset().top - $("header").outerHeight() * 2
    }, 300);

    // Set active class on clicked nav
    $(".faq-link").removeClass("active");
    $(this).addClass("active");

    // Optionally collapse all open FAQs when switching category
    $(".faq-item").removeClass("active").find(".faq-item-box").slideUp(300);
  });

  // === 3. Optional: Highlight the active FAQ nav link on scroll ===
  var $faqHeaders = $(".faq-list h2"); // category headings
  var headerHeight = $("header").outerHeight() * 2;

  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();

    $faqHeaders.each(function () {
      var $section = $(this);
      var sectionTop = $section.offset().top - headerHeight;

      if (scrollPos >= sectionTop) {
        var id = $section.attr("id");
        $(".faq-link").removeClass("active");
        $('.faq-link[href="#' + id + '"]').addClass("active");
      }
    });
  });
});
