document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenuWrapper.classList.toggle('active');
        });
    }

    const guestNameElement = document.getElementById('guest-name');
    if (guestNameElement) {
        const userName = prompt("Silakan masukkan nama Anda:", "Anomali");
        guestNameElement.textContent = userName || "Anomali";
    }

});


function validateForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (fullName === "" || email === "" || phone === "" || message === "") {
        errorMessage.textContent = "Semua kolom wajib diisi!";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Mohon masukkan alamat email yang valid!";
        return false;
    }

    if (!/^\d{10,}$/.test(phone)) {
        errorMessage.textContent = "Mohon masukkan nomor telepon yang valid (minimal 10 digit)!";
        return false;
    }

    displayResult(fullName, email, phone, message);

    return false; 
}

function displayResult(name, email, phone, message) {
    document.getElementById('result-name').textContent = name;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-phone').textContent = phone;
    document.getElementById('result-message').textContent = message;

    document.getElementById('form-result-section').style.display = 'block';
    
    document.getElementById('form-result-section').scrollIntoView({ behavior: 'smooth' });
}
