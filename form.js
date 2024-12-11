document.addEventListener('DOMContentLoaded', function() {
    const modalForm = document.querySelector('#modalWin form');
    
    modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Скрываем модальное окно с формой
        $('#modalWin').modal('hide');
        
        // Показываем модальное окно с благодарностью
        $('#thankYouModal').modal('show');
        
        // Очищаем форму
        this.reset();
        
        // Добавляем анимацию текста в модальном окне благодарности
        const thankYouText = document.querySelector('#thankYouModal .modal-body p');
        thankYouText.style.animation = 'textColorChange 2s ease';
    });
});

// Добавляем стили для анимации в head
const style = document.createElement('style');
style.textContent = `
    @keyframes textColorChange {
        0% { color: #f8e2ef; }
        50% { color: #a3278f; }
        100% { color: #330f2d; }
    }
`;
document.head.appendChild(style);