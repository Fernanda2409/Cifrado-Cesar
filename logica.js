// Función de Cifrado César
function encryptCesar() {
    const message = document.getElementById('message').value;  // Obtener mensaje
    const shift = parseInt(document.getElementById('shift').value);  // Obtener desplazamiento

    const result = cifradoCesar(message, shift);
    document.getElementById('result').innerText = `Cifrado César: ${result}`;
}

// Función de Cifrado Vigenère
function encryptVigenere() {
    const message = document.getElementById('message').value;  // Obtener mensaje
    const key = document.getElementById('key').value;  // Obtener clave

    const result = cifradoVigenere(message, key);
    document.getElementById('result').innerText = `Cifrado Vigenère: ${result}`;
}

// Función de Cifrado César
function cifradoCesar(texto, desplazamiento) {
    return texto.split('').map((char) => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const inicio = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - inicio + desplazamiento) % 26) + inicio);
        }
        return char;  // Si no es una letra, lo dejamos igual
    }).join('');
}

// Función de Cifrado Vigenère
function cifradoVigenere(texto, clave) {
    const claveExpandida = clave.repeat(Math.ceil(texto.length / clave.length)).toUpperCase();
    return texto.split('').map((char, index) => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const inicio = code >= 65 && code <= 90 ? 65 : 97;
            const desplazamiento = claveExpandida.charCodeAt(index) - 65;
            return String.fromCharCode(((code - inicio + desplazamiento) % 26) + inicio);
        }
        return char;  // Si no es una letra, lo dejamos igual
    }).join('');
}
