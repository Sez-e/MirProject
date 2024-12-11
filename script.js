// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для вывода времени в консоль
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}

// Функция для изменения цвета страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для сброса цвета к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция для извлечения параметра utm_term
function updateH1FromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');

    if (utmTerm && h1Element) {
        h1Element.textContent = utmTerm;
    }
}

// Вызов функции showMessage сразу после определения
showMessage("Скрипт загружен!");

// Вызов функции logCurrentTime сразу после showMessage
logCurrentTime();

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Сброс цвета к исходному
    resetBackgroundColor();

    // Изменение цвета фона после полной загрузки страницы
    changeBackgroundColor("#fce6f8");

    // Переключение видимости
    toggleVisibility('.content');

    // Обновление текста H1
    updateH1FromUtmTerm();
});


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    header.addEventListener('click', function() {
        alert('Вы кликнули на заголовок - так держать!');
    });

    const userImage = document.querySelector('.user-image');


    userImage.addEventListener('mouseover', function() {
        this.style.width = '60%';
        this.style.height = '60%';
    });

    userImage.addEventListener('mouseout', function() {
        this.style.width = '';
        this.style.height = ''; 
    });

    userImage.addEventListener('click', function() {
        this.src = 'images/8f36cbd05c1d84845eb7ab326bb67d8c.jpg'; 
        this.alt = 'Изображение китика';
    });


    userImage.addEventListener('dblclick', function() {
        alert('Не налегай, у меня не так много китиков');
    });
});

const paragraph = document.getElementById('paragraph');

paragraph.addEventListener('click', function() {
    const currentColor = paragraph.style.backgroundColor;
    paragraph.style.backgroundColor = currentColor === '#a3278f' ? 'transparent' : '#a3278f';
});
