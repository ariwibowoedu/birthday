AOS.init();

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
});

function mulai() {
    window.scrollTo(0, 0)
    const mail_section = $('#mail-section')
    // ganti gambar ke animasi pembuka
    $('#mail').attr('src', 'assets/img/mail.gif')
    // fade out setelah 2 detik
    setTimeout(() => {
        mail_section.addClass('opacity-0 transition-opacity duration-1000')
        $('body').removeClass('overflow-hidden')
    }, 2000)
    setTimeout(() => {
        mail_section.addClass('hidden')
        $('#content-section').removeClass('hidden')
        $('#content-section').addClass('opacity-100')
    }, 4000)
}

function wa(isi) {
    open("https://wa.me/6287856506363?text=Ulang tahun ini aku mau " + isi)
}

async function makeAWish() {
    var {
        value: kado
    } = await swal.fire({
        imageUrl: 'assets/img/makeWish.jpeg',
        title: 'Di hari ulang tahun ini kamu mau apa?',
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonColor: '#4165c2',
        confirmButtonText: 'Kirim',
        input: 'text',
        showCancelButton: false
    })

    if (kado) {
        await swal.fire({
            imageUrl: 'assets/img/send-wa.jpeg',
            title: "Kirim jawabannya di wa yaaa.",
            confirmButtonColor: '#4165c2',
            confirmButtonText: 'Ok..',
        })
        wa(kado)
    } else {
        await swal.fire({
            icon: 'error',
            title: 'Jangan dikosongin yaa!!'
        })
    }
}