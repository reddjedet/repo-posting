document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    
    // Carga la preferencia guardada, si existe
    if (savedTheme) {
        body.className = savedTheme;
    }

    // Actualiza el texto del botón al cargar la página
    // Esto asegura que el texto sea correcto desde el principio
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = 'Modo Oscuro';
    } else {
        themeToggleBtn.textContent = 'Modo Claro';
    }

    // Maneja el clic en el botón
    themeToggleBtn.addEventListener('click', () => {
        // Alterna entre 'light-mode' y 'dark-mode'
        const newTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        body.className = newTheme;

        // Actualiza el texto del botón y el localStorage
        themeToggleBtn.textContent = `Ir a Modo ${newTheme === 'dark-mode' ? 'Claro' : 'Oscuro'}`;
        localStorage.setItem('theme', newTheme);
    });
});
