// Lottie animation for homepage
if (document.getElementById("lottie-animation")) {
  lottie.loadAnimation({
    container: document.getElementById("lottie-animation"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_ydo1amjm.json' // Replace with your file if needed
  });
}

// Form submission
const form = document.getElementById("appointmentForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your appointment has been submitted.");
    form.reset();
  });
}
