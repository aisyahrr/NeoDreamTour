const eventDate = new Date("2025-12-02T05:17:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const timeBox = document.querySelector(".time-box");

    if (distance <= 0) {
        clearInterval(countdownInterval);
        timeBox.innerHTML = 
            "<span class='text-warning fw-bold text-center'>🚀 Grab Your Tickets Now!!</span>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

// checkout
document.querySelectorAll('.checkout').forEach(btn => {
    btn.addEventListener('click', function () {
        const seatname = this.getAttribute('data-ticket');
        document.getElementById('checkoutLabel').textContent = 'Checkout' + '  ' + seatname;
        document.querySelectorAll('ticketInput').value = seatname;
    });
});
// Merch
const Merch = document.getElementById('MerchModal');
Merch.addEventListener('show.bs.modal', function (event){
    const button = event.relatedTarget; 
    const card = button.closest('.card'); 
    const productName = card.querySelector('.card-title').innerText;
    const productPrice = card.querySelector('.price').innerText;

    // isi modal
    document.getElementById('productName').value = productName;
    document.getElementById('productPrice').value = productPrice;

    const pickItemGroup = document.getElementById('pickItem').closest('.mb-3');
    if(productName.toLowerCase().includes("fanlight")){
        pickItemGroup.style.display ="none";
    } else{
        pickItemGroup.style.display ="block";
    }
});