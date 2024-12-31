let users = JSON.parse(localStorage.getItem('users')) || []; // Kullanıcıları yerel depolamadan al

// Kayıt işlemi
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const tcKimlikNo = document.getElementById('register_tc_kimlik_no').value;
    const hedef = document.getElementById('target').value; // Seçilen hedef

    // Kullanıcı bilgilerini kontrol et
    const existingUser = users.find(u => u.tc_kimlik_no === tcKimlikNo);
    if (existingUser) {
        alert('Bu T.C. kimlik numarası zaten kayıtlı!');
        return;
    }

    // Yeni kullanıcıyı ekle
    users.push({ tc_kimlik_no: tcKimlikNo, hedef: hedef });
    localStorage.setItem('users', JSON.stringify(users)); // Kullanıcıları yerel depolamaya kaydet
    alert('Kayıt başarılı!');
});

// Giriş işlemi
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const tcKimlikNo = document.getElementById('tridField').value;

    // Kullanıcı bilgilerini kontrol et
    const user = users.find(u => u.tc_kimlik_no === tcKimlikNo);

    if (user) {
        // Kullanıcı bulundu, uygun hedefe yönlendir
        window.location.href = user.hedef;
    } else {
        alert('T.C. kimlik numarası hatalı!');
    }
});
