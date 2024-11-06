document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.menu-button');
    const workItems = document.querySelectorAll('.work-item');

    // Функция для отображения работ в зависимости от выбранной категории
    function showWorks(category) {
        workItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.add('show'); // Показываем элемент
            } else {
                item.classList.remove('show'); // Скрываем элемент
            }
        });
    }

    // Отображаем все работы по умолчанию
    showWorks('all');

    // Добавляем обработчик событий для кнопок меню
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showWorks(category);
        });
    });
});
