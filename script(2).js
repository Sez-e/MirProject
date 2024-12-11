function showSecondSemesterPractices() {
    const practices = [
        ["1", "Базовое бэкенд-приложение"],
        ["2", "HTTP-запросы"],
        ["3", "JSON и работа с ним"],
        ["4", "HTTP-ответы"],
        ["5", "Проектирование API"],
        ["6", "Роутинг и его настройка"],
        ["7", "NoSQL базы данных"],
        ["8", "Обеспечение авторизации и доступа пользователей"],
        ["9", "Работа сторонних сервисов уведомления и авторизации"],
        ["10", "Основы ReactJS"],
        ["11", "Работа с компонентами динамической DOM"],
        ["12", "Использование хуков в React"],
        ["13", "Основы микросервисной архитектуры"],
        ["14", "Разработка классических модулей веб-приложений"],
        ["15", "Разработка классических модулей веб-приложений"],
        ["16", "Разработка классических модулей веб-приложений"]
    ];

    const tbody = document.querySelector('#practices tbody');
    tbody.innerHTML = '';

    practices.forEach(practice => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${practice[0]}</td>
            <td>${practice[1]}</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        `;
        tbody.appendChild(row);
    });
}

function toggleLecturesTable() {
    const table = document.querySelector('#lectures .table');
    const button = document.querySelector('.toggle-button');
    table.classList.toggle('show');
    button.classList.toggle('active');
}
