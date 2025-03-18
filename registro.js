const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        preview.style.display = 'block'; // Muestra la imagen

        reader.addEventListener('load', function() {
            preview.setAttribute('src', this.result);
        });

        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none'; // Oculta la imagen si no hay archivo seleccionado
        preview.setAttribute('src', '#'); // Restablece la URL de origen
    }
});