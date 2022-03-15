function calcular() {
    var txtp = window.document.querySelector('input#txtpaís');
    var res = window.document.querySelector('div#res');
    var pais = String(txtp.value);
    res.innerHTML = `Você é ${pais}`;
    if (pais == 'Brasil') {
        res.innerHTML = '<p>Você é <strong>Brasileiro</strong></p>';
    } else {
        res.innerHTML = '<p>Você é <strong>Estrangeiro</strong></p>';
    }
}