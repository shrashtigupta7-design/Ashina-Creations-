// reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // order form -> WhatsApp deep link
  const form = document.getElementById('orderForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const course = document.getElementById('course').value.trim();
    const deadline = document.getElementById('deadline').value;
    const type = document.getElementById('type').value;
    const details = document.getElementById('details').value.trim();

    const message =
`Hi Ashina Creations! I'd like to place an order.

Name: ${name}
Class/Course: ${course}
Needed by: ${deadline}
Item: ${type}
Details: ${details}`;

    const phone = "917451054346"; // Ashina Creations WhatsApp number
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  });