// Структура курса по n8n
const courseStructure = {
    sections: [
        {
            id: 'intro',
            title: 'Введение в n8n',
            lessons: [
                { id: 1, title: 'Что такое n8n', file: 'data/n8n/lesson_1.html' },
                { id: 2, title: 'Преимущества и области применения', file: 'data/n8n/lesson_2.html' },
                { id: 3, title: 'Обзор интерфейса', file: 'data/n8n/lesson_3.html' }
            ]
        },
        {
            id: 'installation',
            title: 'Установка и настройка',
            lessons: [
                { id: 4, title: 'Установка n8n (Docker, npm, облако)', file: 'data/n8n/lesson_4.html' },
                { id: 5, title: 'Первоначальная настройка', file: 'data/n8n/lesson_5.html' },
                { id: 6, title: 'Настройка окружения', file: 'data/n8n/lesson_6.html' }
            ]
        },
        {
            id: 'basics',
            title: 'Основы работы с n8n',
            lessons: [
                { id: 7, title: 'Создание первого workflow', file: 'data/n8n/lesson_7.html' },
                { id: 8, title: 'Основные ноды и их использование', file: 'data/n8n/lesson_8.html' },
                { id: 9, title: 'Переменные и выражения', file: 'data/n8n/lesson_9.html' },
                { id: 10, title: 'Обработка ошибок', file: 'data/n8n/lesson_10.html' }
            ]
        },
        {
            id: 'llm',
            title: 'Работа с LLM и DeepSeek',
            lessons: [
                { id: 11, title: 'Настройка DeepSeek API', file: 'data/n8n/lesson_11.html' },
                { id: 12, title: 'Создание нод для работы с LLM', file: 'data/n8n/lesson_12.html' },
                { id: 13, title: 'Промпты и обработка ответов', file: 'data/n8n/lesson_13.html' },
                { id: 14, title: 'Управление контекстом', file: 'data/n8n/lesson_14.html' }
            ]
        },
        {
            id: 'multiagent',
            title: 'Мультиагентные системы',
            lessons: [
                { id: 15, title: 'Архитектура мультиагентных систем', file: 'data/n8n/lesson_15.html' },
                { id: 16, title: 'Создание агентов в n8n', file: 'data/n8n/lesson_16.html' },
                { id: 17, title: 'Коммуникация между агентами', file: 'data/n8n/lesson_17.html' },
                { id: 18, title: 'Оркестрация workflow для агентов', file: 'data/n8n/lesson_18.html' }
            ]
        },
        {
            id: 'prototyping',
            title: 'Быстрое прототипирование',
            lessons: [
                { id: 19, title: 'Шаблоны для создания агентов', file: 'data/n8n/lesson_19.html' },
                { id: 20, title: 'Отладка мультиагентных систем', file: 'data/n8n/lesson_20.html' },
                { id: 21, title: 'Тестирование и валидация', file: 'data/n8n/lesson_21.html' },
                { id: 22, title: 'Оптимизация производительности', file: 'data/n8n/lesson_22.html' }
            ]
        },
        {
            id: 'advanced',
            title: 'Продвинутые техники',
            lessons: [
                { id: 23, title: 'Параллельная обработка', file: 'data/n8n/lesson_23.html' },
                { id: 24, title: 'Управление состоянием', file: 'data/n8n/lesson_24.html' },
                { id: 25, title: 'Обработка больших объемов данных', file: 'data/n8n/lesson_25.html' },
                { id: 26, title: 'Мониторинг и логирование', file: 'data/n8n/lesson_26.html' }
            ]
        }
    ]
};

// Утилиты для работы с localStorage
const ProgressManager = {
    getCompletedLessons() {
        const stored = localStorage.getItem('n8n_completed_lessons');
        return stored ? JSON.parse(stored) : [];
    },

    markLessonComplete(lessonId) {
        const completed = this.getCompletedLessons();
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            localStorage.setItem('n8n_completed_lessons', JSON.stringify(completed));
        }
    },

    isLessonComplete(lessonId) {
        return this.getCompletedLessons().includes(lessonId);
    },

    getProgress() {
        const totalLessons = courseStructure.sections.reduce((sum, section) => sum + section.lessons.length, 0);
        const completed = this.getCompletedLessons().length;
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    }
};

// Инициализация страницы курса
function initCoursePage() {
    if (!document.getElementById('courseSections')) {
        return; // Не на странице курса
    }

    renderCourseNavigation();
    updateProgress();
    
    // Загрузка урока из URL параметра
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lesson');
    if (lessonId) {
        loadLesson(parseInt(lessonId));
    }

    // Обработчики навигации
    document.getElementById('prevLesson')?.addEventListener('click', navigateToPrevLesson);
    document.getElementById('nextLesson')?.addEventListener('click', navigateToNextLesson);
}

// Рендеринг навигации курса
function renderCourseNavigation() {
    const container = document.getElementById('courseSections');
    if (!container) return;

    container.innerHTML = '';

    courseStructure.sections.forEach((section, sectionIndex) => {
        const sectionLi = document.createElement('li');
        sectionLi.className = 'course-section';

        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.textContent = section.title;
        sectionHeader.dataset.sectionId = section.id;
        
        // Иконка для раскрытия/сворачивания
        const icon = document.createElement('span');
        icon.textContent = '▼';
        icon.style.fontSize = '0.75rem';
        sectionHeader.appendChild(icon);

        const lessonsList = document.createElement('ul');
        lessonsList.className = 'section-lessons expanded';

        section.lessons.forEach((lesson, lessonIndex) => {
            const lessonLi = document.createElement('li');
            lessonLi.className = 'lesson-item';

            const lessonLink = document.createElement('a');
            lessonLink.href = '#';
            lessonLink.className = 'lesson-link';
            lessonLink.textContent = lesson.title;
            lessonLink.dataset.lessonId = lesson.id;
            lessonLink.dataset.lessonFile = lesson.file;

            if (ProgressManager.isLessonComplete(lesson.id)) {
                lessonLink.classList.add('completed');
            }

            lessonLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadLesson(lesson.id);
                updateActiveLesson(lesson.id);
            });

            lessonLi.appendChild(lessonLink);
            lessonsList.appendChild(lessonLi);
        });

        // Переключение раскрытия/сворачивания секции
        sectionHeader.addEventListener('click', () => {
            const isExpanded = lessonsList.classList.contains('expanded');
            if (isExpanded) {
                lessonsList.classList.remove('expanded');
                icon.textContent = '▶';
            } else {
                lessonsList.classList.add('expanded');
                icon.textContent = '▼';
            }
        });

        sectionLi.appendChild(sectionHeader);
        sectionLi.appendChild(lessonsList);
        container.appendChild(sectionLi);
    });
}

// Загрузка урока
async function loadLesson(lessonId) {
    const lesson = findLessonById(lessonId);
    if (!lesson) {
        console.error('Урок не найден:', lessonId);
        return;
    }

    const contentContainer = document.getElementById('lessonContent');
    const navigationContainer = document.getElementById('lessonNavigation');
    
    if (!contentContainer) return;

    // Показываем индикатор загрузки
    contentContainer.innerHTML = '<div class="lesson-placeholder"><h2>Загрузка урока...</h2></div>';

    try {
        const response = await fetch(lesson.file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        
        // Создаем временный контейнер для парсинга HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Извлекаем содержимое body или весь HTML
        const lessonContent = tempDiv.querySelector('body')?.innerHTML || html;
        
        contentContainer.innerHTML = lessonContent;
        
        // Обновляем URL без перезагрузки страницы
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lesson', lessonId);
        window.history.pushState({ lessonId }, '', newUrl);

        // Инициализируем подсветку синтаксиса
        if (window.Prism) {
            Prism.highlightAllUnder(contentContainer);
        }

        // Показываем навигацию
        if (navigationContainer) {
            navigationContainer.style.display = 'flex';
        }

        updateActiveLesson(lessonId);
        updateNavigationButtons(lessonId);
        
        // Прокрутка к верху контента
        contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    } catch (error) {
        console.error('Ошибка загрузки урока:', error);
        contentContainer.innerHTML = `
            <div class="lesson-placeholder">
                <h2>Ошибка загрузки урока</h2>
                <p>Не удалось загрузить урок. Убедитесь, что файл существует: ${lesson.file}</p>
            </div>
        `;
    }
}

// Поиск урока по ID
function findLessonById(lessonId) {
    for (const section of courseStructure.sections) {
        const lesson = section.lessons.find(l => l.id === lessonId);
        if (lesson) return lesson;
    }
    return null;
}

// Обновление активного урока в навигации
function updateActiveLesson(lessonId) {
    document.querySelectorAll('.lesson-link').forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.dataset.lessonId) === lessonId) {
            link.classList.add('active');
            // Прокрутка к активному уроку в навигации
            link.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// Обновление кнопок навигации
function updateNavigationButtons(lessonId) {
    const prevButton = document.getElementById('prevLesson');
    const nextButton = document.getElementById('nextLesson');
    
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    
    if (prevButton) {
        prevButton.disabled = currentIndex === 0;
        if (currentIndex > 0) {
            prevButton.onclick = () => loadLesson(allLessons[currentIndex - 1].id);
        }
    }
    
    if (nextButton) {
        nextButton.disabled = currentIndex === allLessons.length - 1;
        if (currentIndex < allLessons.length - 1) {
            nextButton.onclick = () => {
                loadLesson(allLessons[currentIndex + 1].id);
                ProgressManager.markLessonComplete(lessonId);
                updateProgress();
            };
        }
    }
}

// Получить все уроки в порядке следования
function getAllLessons() {
    const lessons = [];
    courseStructure.sections.forEach(section => {
        section.lessons.forEach(lesson => {
            lessons.push(lesson);
        });
    });
    return lessons;
}

// Навигация к предыдущему уроку
function navigateToPrevLesson() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLessonId = parseInt(urlParams.get('lesson')) || 1;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    
    if (currentIndex > 0) {
        loadLesson(allLessons[currentIndex - 1].id);
    }
}

// Навигация к следующему уроку
function navigateToNextLesson() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLessonId = parseInt(urlParams.get('lesson')) || 1;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    
    if (currentIndex < allLessons.length - 1) {
        const nextLesson = allLessons[currentIndex + 1];
        loadLesson(nextLesson.id);
        ProgressManager.markLessonComplete(currentLessonId);
        updateProgress();
    }
}

// Обновление прогресса
function updateProgress() {
    const progress = ProgressManager.getProgress();
    const progressFill = document.getElementById('courseProgress');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${progress}%`;
    }

    // Обновляем визуальные индикаторы завершенных уроков
    getAllLessons().forEach(lesson => {
        const lessonLink = document.querySelector(`[data-lesson-id="${lesson.id}"]`);
        if (lessonLink) {
            if (ProgressManager.isLessonComplete(lesson.id)) {
                lessonLink.classList.add('completed');
            } else {
                lessonLink.classList.remove('completed');
            }
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initCoursePage();
});

// Обработка кнопки "Завершить урок" если она есть в контенте
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-lesson-btn')) {
        const urlParams = new URLSearchParams(window.location.search);
        const lessonId = parseInt(urlParams.get('lesson'));
        if (lessonId) {
            ProgressManager.markLessonComplete(lessonId);
            updateProgress();
            e.target.textContent = '✓ Урок завершен';
            e.target.disabled = true;
        }
    }
});

