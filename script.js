// Huang's Cafe – minimal interaction
document.addEventListener('DOMContentLoaded', function () {
  var orderBtn = document.querySelector('.cta-order');
  if (orderBtn) {
    orderBtn.addEventListener('click', function (e) {
      // Optional: replace #order with your order URL
      // e.preventDefault();
      // window.location.href = 'https://your-order-link.com';
    });
  }
});