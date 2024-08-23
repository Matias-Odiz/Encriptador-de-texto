function encriptar() {
    const inputTexto = document.querySelector('.input').value;
    if (!/^[a-z\s]*$/.test(inputTexto)) {
        alert('Por favor, usa solo letras minúsculas y sin acentos.');
        return;
    }

    const textoEncriptado = inputTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const inputTexto = document.querySelector('.input').value;

    const textoDesencriptado = inputTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const conteiner = document.querySelector('.conteiner');
    conteiner.innerHTML = `
        <h2>Resultado</h2>
        <p id="respuesta">${texto}</p>
        <button class="presentacion__enlaces__boton3" onclick="copiar()">Copiar</button>
    `;
}

function copiar() {
    var copyText = document.getElementById("respuesta");


    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 

    try {
        document.execCommand('copy');
        alert("Texto copiado al portapapeles");
    } catch (err) {
        alert("No se pudo copiar el texto: " + err);
    }

    window.getSelection().removeAllRanges();
}