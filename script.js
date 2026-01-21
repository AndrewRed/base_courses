// Определение текущего курса
function getCurrentCourse() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const course = (filename === 'course-llm-basics.html' || filename.includes('llm-basics')) ? 'llm-basics' : 
                   (filename === 'course-n8n.html' || filename.includes('n8n')) ? 'n8n' : 'n8n';
    return course;
}

// Структура курса по n8n
const n8nCourseStructure = {
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

// Структура базового курса по LLM
const llmBasicsCourseStructure = {
    sections: [
        {
            id: 'intro',
            title: 'Введение в языковые модели и QWEN',
            lessons: [
                { id: 1, title: 'Что такое языковые модели и зачем они нужны', file: 'data/llm-basics/lesson_1.html' },
                { id: 2, title: 'Знакомство с QWEN и chat.qwen.ai', file: 'data/llm-basics/lesson_2.html' },
                { id: 3, title: 'Регистрация и первый запуск', file: 'data/llm-basics/lesson_3.html' }
            ]
        },
        {
            id: 'basics',
            title: 'Основы работы с chat.qwen.ai',
            lessons: [
                { id: 4, title: 'Интерфейс и основные элементы', file: 'data/llm-basics/lesson_4.html' },
                { id: 5, title: 'Базовое использование: задаем вопросы', file: 'data/llm-basics/lesson_5.html' },
                { id: 6, title: 'Сохранение и управление диалогами', file: 'data/llm-basics/lesson_6.html' },
                { id: 7, title: 'Настройки и параметры', file: 'data/llm-basics/lesson_7.html' }
            ]
        },
        {
            id: 'prompts',
            title: 'Промпты: искусство общения с AI',
            lessons: [
                { id: 8, title: 'Что такое промпт', file: 'data/llm-basics/lesson_8.html' },
                { id: 9, title: 'Структура хорошего промпта', file: 'data/llm-basics/lesson_9.html' },
                { id: 10, title: 'Примеры эффективных промптов', file: 'data/llm-basics/lesson_10.html' },
                { id: 11, title: 'Типичные ошибки и галлюцинации', file: 'data/llm-basics/lesson_11.html' },
                { id: 12, title: 'Практические задания по созданию промптов', file: 'data/llm-basics/lesson_12.html' }
            ]
        },
        {
            id: 'context',
            title: 'Работа с контекстом и большими текстами',
            lessons: [
                { id: 13, title: 'Что такое контекст в языковых моделях', file: 'data/llm-basics/lesson_13.html' },
                { id: 14, title: 'Загрузка и обработка больших документов', file: 'data/llm-basics/lesson_14.html' },
                { id: 15, title: 'Работа с файлами и текстами', file: 'data/llm-basics/lesson_15.html' },
                { id: 16, title: 'Стратегии работы с длинными текстами', file: 'data/llm-basics/lesson_16.html' }
            ]
        },
        {
            id: 'images',
            title: 'Генерация изображений',
            lessons: [
                { id: 17, title: 'Как генерировать изображения в QWEN', file: 'data/llm-basics/lesson_17.html' },
                { id: 18, title: 'Описание желаемого изображения', file: 'data/llm-basics/lesson_18.html' },
                { id: 19, title: 'Редактирование и улучшение изображений', file: 'data/llm-basics/lesson_19.html' }
            ]
        },
        {
            id: 'deep-research',
            title: 'Режим глубокого исследования',
            lessons: [
                { id: 20, title: 'Что такое режим глубокого исследования', file: 'data/llm-basics/lesson_20.html' },
                { id: 21, title: 'Когда его использовать', file: 'data/llm-basics/lesson_21.html' },
                { id: 22, title: 'Практические примеры использования', file: 'data/llm-basics/lesson_22.html' }
            ]
        },
        {
            id: 'teacher-workflow',
            title: 'Интеграция в рабочий процесс учителя',
            lessons: [
                { id: 23, title: 'Ежедневные задачи: планирование и подготовка', file: 'data/llm-basics/lesson_23.html' },
                { id: 24, title: 'Проверка работ и обратная связь', file: 'data/llm-basics/lesson_24.html' },
                { id: 25, title: 'Работа с родителями и документацией', file: 'data/llm-basics/lesson_25.html' },
                { id: 26, title: 'Создание шаблонов и оптимизация процессов', file: 'data/llm-basics/lesson_26.html' }
            ]
        },
        {
            id: 'final-test',
            title: 'Финальный тест',
            lessons: [
                { id: 27, title: 'Финальный тест', file: 'data/llm-basics/lesson_27.html' }
            ]
        }
    ]
};

// Получение структуры текущего курса
function getCourseStructure() {
    const course = getCurrentCourse();
    if (course === 'llm-basics') {
        return llmBasicsCourseStructure;
    }
    return n8nCourseStructure;
}

// Утилиты для работы с localStorage
const ProgressManager = {
    getStorageKey() {
        const course = getCurrentCourse();
        return `${course}_completed_lessons`;
    },

    getCompletedLessons() {
        const key = this.getStorageKey();
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    },

    markLessonComplete(lessonId) {
        const completed = this.getCompletedLessons();
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            const key = this.getStorageKey();
            localStorage.setItem(key, JSON.stringify(completed));
        }
    },

    isLessonComplete(lessonId) {
        return this.getCompletedLessons().includes(lessonId);
    },

    getProgress() {
        const courseStructure = getCourseStructure();
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
    } else {
        // Инициализация кнопки «Начать курс» на стартовом экране
        const startBtn = document.getElementById('startCourseBtn');
        const allLessons = getAllLessons();
        const firstLesson = allLessons.length > 0 ? allLessons[0] : null;

        if (startBtn && firstLesson) {
            startBtn.addEventListener('click', () => {
                loadLesson(firstLesson.id);
            });
        }
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

    const courseStructure = getCourseStructure();
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
        // Определяем правильный путь к файлу
        let filePath = lesson.file;
        
        // Если открыто через file://, пробуем относительный путь
        if (window.location.protocol === 'file:') {
            filePath = './' + lesson.file;
        } else {
            // Для HTTP/HTTPS используем путь относительно текущей директории
            const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
            filePath = basePath + lesson.file;
        }
        
        console.log('Загрузка файла:', filePath);
        const response = await fetch(filePath);
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
        
        // Добавляем улучшения интерфейса (кнопки копирования и т.п.)
        enhanceLessonContent(contentContainer);
        
        // Инициализируем финальный тест, если он есть на странице
        if (contentContainer.querySelector('#final-test')) {
            initFinalTest();
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
        console.error('Попытка загрузить файл:', lesson.file);
        console.error('Базовый путь:', window.location.pathname);
        
        // Попытка альтернативного пути
        const altPath = './' + lesson.file;
        try {
            const altResponse = await fetch(altPath);
            if (altResponse.ok) {
                const html = await altResponse.text();
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                const lessonContent = tempDiv.querySelector('body')?.innerHTML || html;
                contentContainer.innerHTML = lessonContent;
                
                // Обновляем URL
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('lesson', lessonId);
                window.history.pushState({ lessonId }, '', newUrl);
                
                if (window.Prism) {
                    Prism.highlightAllUnder(contentContainer);
                }

                enhanceLessonContent(contentContainer);
                
                // Инициализируем финальный тест, если он есть на странице
                if (contentContainer.querySelector('#final-test')) {
                    initFinalTest();
                }
                
                if (navigationContainer) {
                    navigationContainer.style.display = 'flex';
                }
                
                updateActiveLesson(lessonId);
                updateNavigationButtons(lessonId);
                return;
            }
        } catch (altError) {
            console.error('Альтернативный путь также не сработал:', altError);
        }
        
        contentContainer.innerHTML = `
            <div class="lesson-placeholder">
                <h2>Ошибка загрузки урока</h2>
                <p>Не удалось загрузить урок. Убедитесь, что файл существует: ${lesson.file}</p>
                <p style="font-size: 0.9em; color: #64748b; margin-top: 1rem;">
                    <strong>Примечание:</strong> Для работы сайта необходимо открывать его через веб-сервер, 
                    а не напрямую через file://. Используйте локальный сервер (например, python -m http.server).
                </p>
            </div>
        `;
    }
}

function enhanceLessonContent(contentContainer) {
    if (!contentContainer) return;
    addCopyButtonsToBlockquotes(contentContainer);
}

function addCopyButtonsToBlockquotes(root) {
    root.querySelectorAll('blockquote').forEach((blockquote) => {
        if (blockquote.querySelector('.copy-blockquote-button')) return;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'copy-blockquote-button';
        button.textContent = 'Копировать';

        button.addEventListener('click', async (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (button.dataset.copyInProgress === '1') return;
            button.dataset.copyInProgress = '1';

            const textToCopy = getCopyTextFromBlockquote(blockquote);
            if (!textToCopy) {
                button.dataset.copyInProgress = '0';
                return;
            }

            const copied = await copyTextToClipboard(textToCopy);
            button.textContent = copied ? 'Скопировано' : 'Не получилось';
            if (copied) {
                button.classList.add('copied');
            }
            button.disabled = true;

            window.setTimeout(() => {
                button.textContent = 'Копировать';
                button.classList.remove('copied');
                button.disabled = false;
                button.dataset.copyInProgress = '0';
            }, 1200);
        });

        blockquote.appendChild(button);
    });
}

function getCopyTextFromBlockquote(blockquote) {
    const promptParts = [];
    blockquote.querySelectorAll('p, li').forEach((element) => {
        const extracted = extractQuotedPrompt(element.textContent);
        if (extracted) promptParts.push(extracted);
    });

    const uniquePrompts = [...new Set(promptParts.map((value) => value.trim()).filter(Boolean))];
    if (uniquePrompts.length > 0) {
        return uniquePrompts.join('\n');
    }

    const clone = blockquote.cloneNode(true);
    clone.querySelectorAll('.copy-blockquote-button').forEach((button) => button.remove());
    return clone.textContent.trim();
}

function extractQuotedPrompt(text) {
    const normalized = (text || '').replace(/\s+/g, ' ').trim();
    if (!normalized) return null;

    const quotePairs = [
        { open: '«', close: '»' },
        { open: '“', close: '”' },
        { open: '"', close: '"' }
    ];

    for (const { open, close } of quotePairs) {
        const start = normalized.indexOf(open);
        const end = normalized.lastIndexOf(close);
        if (start !== -1 && end !== -1 && end > start) {
            const inner = normalized.slice(start + open.length, end).trim();
            if (inner) return inner;
        }
    }

    return null;
}

async function copyTextToClipboard(text) {
    if (!text) return false;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        // ignore and fallback
    }

    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        return ok;
    } catch {
        return false;
    }
}

// Поиск урока по ID
function findLessonById(lessonId) {
    const courseStructure = getCourseStructure();
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
    const isLast = currentIndex === allLessons.length - 1;
    
    if (prevButton) {
        prevButton.disabled = currentIndex === 0;
        if (currentIndex > 0) {
            prevButton.onclick = () => loadLesson(allLessons[currentIndex - 1].id);
        }
    }
    
    if (nextButton) {
        if (isLast) {
            // Последний урок: вместо неактивной кнопки делаем «Вернуться в начало курса»
            nextButton.disabled = false;
            nextButton.textContent = 'Вернуться в начало курса';
            nextButton.onclick = () => {
                const firstLesson = allLessons[0];
                if (firstLesson) {
                    loadLesson(firstLesson.id);
                }
            };
        } else {
            // Промежуточные уроки: стандартная навигация «Следующий урок →»
            nextButton.disabled = false;
            nextButton.textContent = 'Следующий урок →';
            nextButton.onclick = () => {
                loadLesson(allLessons[currentIndex + 1].id);
                ProgressManager.markLessonComplete(lessonId);
                updateProgress();
            };
        }

        // Альтернативный вариант (скрывать кнопку на последнем уроке вместо смены текста):
        // if (isLast) {
        //     nextButton.style.display = 'none';
        // } else {
        //     nextButton.style.display = '';
        //     nextButton.disabled = false;
        //     nextButton.textContent = 'Следующий урок →';
        //     nextButton.onclick = () => {
        //         loadLesson(allLessons[currentIndex + 1].id);
        //         ProgressManager.markLessonComplete(lessonId);
        //         updateProgress();
        //     };
        // }
    }
}

// Получить все уроки в порядке следования
function getAllLessons() {
    const lessons = [];
    const courseStructure = getCourseStructure();
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

// Проверка протокола и предупреждение
function checkProtocol() {
    if (window.location.protocol === 'file:') {
        const warning = document.getElementById('fileProtocolWarning');
        if (warning) {
            warning.style.display = 'block';
        }
        console.warn('Сайт открыт через file://. Используйте локальный веб-сервер для корректной работы.');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    checkProtocol();
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

// Финальный тест
const finalTestQuestions = [
    {
        question: "Что такое языковые модели?",
        options: [
            "Языковая модель, которая умеет понимать и генерировать текст",
            "Программа для работы с базами данных",
            "Графический редактор",
            "Операционная система"
        ],
        correct: 0
    },
    {
        question: "Как включить режим SEARCH (поиск) в QWEN?",
        options: [
            "Написать в промпте 'Используй режим поиска'",
            "Нажать соответствующую кнопку в интерфейсе",
            "Отправить специальное сообщение",
            "Изменить настройки аккаунта"
        ],
        correct: 1
    },
    {
        question: "Что такое промпт?",
        options: [
            "Название программы",
            "Вопрос, запрос или инструкция, которую вы даете языковой модели (QWEN — это один из видов моделей, мы используем его в этом курсе, так как он бесплатный и доступный в РФ)",
            "Тип файла",
            "Настройка интерфейса"
        ],
        correct: 1
    },
    {
        question: "В чем разница между режимом SEARCH и режимом глубокого исследования?",
        options: [
            "Это одно и то же",
            "SEARCH — быстрый поиск актуальной информации, глубокое исследование — комплексный анализ из множества источников",
            "SEARCH работает только на русском языке",
            "Глубокое исследование не использует интернет"
        ],
        correct: 1
    },
    {
        question: "Что такое контекст в языковых моделях?",
        options: [
            "Настройки интерфейса",
            "Информация из предыдущих сообщений в диалоге, которая помогает понять текущий вопрос",
            "Размер шрифта",
            "Цветовая схема"
        ],
        correct: 1
    },
    {
        question: "Как начать генерацию изображений в QWEN?",
        options: [
            "Просто написать 'Создай изображение' в обычном режиме",
            "Переключиться в режим 'Изображения/Image' кнопкой, затем описать желаемое изображение",
            "Загрузить изображение в чат",
            "Использовать специальную команду в настройках"
        ],
        correct: 1
    },
    {
        question: "Что такое галлюцинации в языковых моделях?",
        options: [
            "Визуальные эффекты в интерфейсе",
            "Когда модель выдает неправильную или выдуманную информацию, которая звучит убедительно",
            "Ошибки загрузки страницы",
            "Проблемы с интернет-соединением"
        ],
        correct: 1
    },
    {
        question: "В каком формате можно экспортировать диалог из chat.qwen.ai?",
        options: [
            "Только в формате PDF",
            "Только в формате TXT (текстовый файл)",
            "В любом формате",
            "Экспорт недоступен"
        ],
        correct: 1
    },
    {
        question: "Что нужно сделать для работы с большим документом в QWEN?",
        options: [
            "Разбить документ на части вручную",
            "Загрузить документ через кнопку '+' или 'Attach'",
            "Скопировать весь текст в одно сообщение",
            "Использовать только текстовый режим"
        ],
        correct: 1
    },
    {
        question: "Когда лучше использовать режим глубокого исследования?",
        options: [
            "Для всех вопросов",
            "Для простых вопросов, не требующих анализа",
            "Для сложных задач, требующих комплексного анализа и сравнения из разных источников",
            "Только для генерации изображений"
        ],
        correct: 2
    },
    {
        question: "Что такое хороший промпт?",
        options: [
            "Очень короткий вопрос",
            "Вопрос с контекстом, конкретными инструкциями и уточнениями",
            "Вопрос на английском языке",
            "Вопрос без деталей"
        ],
        correct: 1
    },
    {
        question: "Где находится кнопка 'Новый чат' в интерфейсе chat.qwen.ai?",
        options: [
            "В правом верхнем углу",
            "В левой боковой панели",
            "Внизу страницы",
            "В настройках"
        ],
        correct: 1
    },
    {
        question: "Можно ли включить режим SEARCH, просто написав 'Используй режим поиска' в промпте?",
        options: [
            "Да, это работает",
            "Нет, нужно обязательно нажать кнопку в интерфейсе",
            "Только для премиум-пользователей",
            "Только в определенных версиях интерфейса"
        ],
        correct: 1
    },
    {
        question: "Что делать, если QWEN дал неправильный ответ?",
        options: [
            "Ничего, модель всегда права",
            "Уточнить вопрос, попросить проверить информацию, использовать режим SEARCH для проверки фактов",
            "Удалить диалог",
            "Перезагрузить страницу"
        ],
        correct: 1
    },
    {
        question: "QWEN может работать с какими типами файлов?",
        options: [
            "Только с текстовыми файлами",
            "С различными форматами: PDF, Word, текстовые файлы (зависит от версии интерфейса)",
            "Только с изображениями",
            "С любыми файлами без ограничений"
        ],
        correct: 1
    }
];

let currentTestQuestion = 0;
let testAnswers = [];
let testStarted = false;

function initFinalTest() {
    const testContainer = document.getElementById('test-container');
    const totalQuestions = document.getElementById('total-questions');
    
    if (!testContainer) return;
    
    totalQuestions.textContent = finalTestQuestions.length;
    testAnswers = new Array(finalTestQuestions.length).fill(null);
    currentTestQuestion = 0;
    testStarted = false;
    
    renderTestQuestion();
    setupTestNavigation();
}

function renderTestQuestion() {
    const testContainer = document.getElementById('test-container');
    const currentQuestionEl = document.getElementById('current-question');
    const question = finalTestQuestions[currentTestQuestion];
    
    if (!testContainer || !question) return;
    
    currentQuestionEl.textContent = currentTestQuestion + 1;
    
    const questionHtml = `
        <div class="test-question">
            <h4>${question.question}</h4>
            <ul class="test-options">
                ${question.options.map((option, index) => `
                    <li class="test-option" data-index="${index}">
                        <input type="radio" name="test-answer" id="option-${index}" value="${index}">
                        <label for="option-${index}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    testContainer.innerHTML = questionHtml;
    
    // Восстанавливаем выбранный ответ, если он был
    if (testAnswers[currentTestQuestion] !== null) {
        const radio = document.getElementById(`option-${testAnswers[currentTestQuestion]}`);
        if (radio) radio.checked = true;
    }
    
    // Добавляем обработчики
    document.querySelectorAll('.test-option').forEach(option => {
        option.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            const index = parseInt(this.dataset.index);
            const radio = document.getElementById(`option-${index}`);
            radio.checked = true;
            testAnswers[currentTestQuestion] = index;
            
            // Отключаем все опции после выбора
            document.querySelectorAll('.test-option').forEach(opt => {
                opt.classList.add('disabled');
            });
            
            // Показываем правильный ответ
            showAnswerFeedback(index, question.correct);
        });
    });
}

function showAnswerFeedback(selectedIndex, correctIndex) {
    document.querySelectorAll('.test-option').forEach((option, index) => {
        option.classList.add('disabled');
        if (index === correctIndex) {
            option.classList.add('correct');
            // Добавляем галочку к правильному ответу
            const label = option.querySelector('label');
            if (label && !label.textContent.includes('✓')) {
                label.innerHTML = '✓ ' + label.textContent;
            }
        } else if (index === selectedIndex && index !== correctIndex) {
            option.classList.add('incorrect');
            // Добавляем крестик к неправильному ответу
            const label = option.querySelector('label');
            if (label && !label.textContent.includes('✗')) {
                label.innerHTML = '✗ ' + label.textContent;
            }
        }
    });
    
    // Включаем кнопку "Следующий вопрос"
    const nextButton = document.querySelector('.test-next-button');
    if (nextButton) {
        nextButton.disabled = false;
    }
}

function setupTestNavigation() {
    const testContainer = document.getElementById('test-container');
    if (!testContainer) return;
    
    // Удаляем старую навигацию, если есть
    const oldNav = testContainer.querySelector('.test-navigation');
    if (oldNav) oldNav.remove();
    
    const navHtml = `
        <div class="test-navigation">
            <button class="test-button test-prev-button" ${currentTestQuestion === 0 ? 'disabled' : ''}>
                ← Предыдущий
            </button>
            <span class="test-question-counter">${currentTestQuestion + 1} / ${finalTestQuestions.length}</span>
            <button class="test-button test-next-button" ${testAnswers[currentTestQuestion] === null ? 'disabled' : ''}>
                ${currentTestQuestion === finalTestQuestions.length - 1 ? 'Завершить тест' : 'Следующий →'}
            </button>
        </div>
    `;
    
    testContainer.insertAdjacentHTML('beforeend', navHtml);
    
    // Обработчики кнопок
    const prevButton = testContainer.querySelector('.test-prev-button');
    const nextButton = testContainer.querySelector('.test-next-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentTestQuestion > 0) {
                currentTestQuestion--;
                renderTestQuestion();
                setupTestNavigation();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (testAnswers[currentTestQuestion] === null) return;
            
            if (currentTestQuestion < finalTestQuestions.length - 1) {
                currentTestQuestion++;
                renderTestQuestion();
                setupTestNavigation();
            } else {
                showTestResults();
            }
        });
    }
}

function showTestResults() {
    const testContainer = document.getElementById('test-container');
    const testResults = document.getElementById('test-results');
    const correctAnswers = testAnswers.reduce((count, answer, index) => {
        return count + (answer === finalTestQuestions[index].correct ? 1 : 0);
    }, 0);
    
    const percentage = Math.round((correctAnswers / finalTestQuestions.length) * 100);
    
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('total-answers').textContent = finalTestQuestions.length;
    document.getElementById('score-percentage').textContent = percentage + '%';
    
    // Формируем обратную связь
    let feedback = '';
    if (percentage >= 90) {
        feedback = '<h4>Отлично! 🎉</h4><p>Вы отлично усвоили материал курса! Вы готовы эффективно использовать QWEN в своей работе.</p>';
    } else if (percentage >= 70) {
        feedback = '<h4>Хорошо! 👍</h4><p>Вы хорошо усвоили основные концепции. Рекомендуем повторить те разделы, где были ошибки.</p>';
    } else if (percentage >= 50) {
        feedback = '<h4>Неплохо 📚</h4><p>Вы усвоили базовые знания, но есть пробелы. Рекомендуем вернуться к урокам и повторить материал.</p>';
    } else {
        feedback = '<h4>Нужно повторить 📖</h4><p>Рекомендуем пройти курс еще раз, обращая особое внимание на темы, где были допущены ошибки.</p>';
    }
    
    // Добавляем информацию о неправильных ответах
    const wrongAnswers = [];
    testAnswers.forEach((answer, index) => {
        if (answer !== finalTestQuestions[index].correct) {
            wrongAnswers.push({
                question: finalTestQuestions[index].question,
                correct: finalTestQuestions[index].options[finalTestQuestions[index].correct]
            });
        }
    });
    
    if (wrongAnswers.length > 0) {
        feedback += '<h4 style="margin-top: 1.5rem;">Рекомендуется повторить:</h4><ul>';
        wrongAnswers.forEach(item => {
            feedback += `<li><strong>${item.question}</strong><br>Правильный ответ: ${item.correct}</li>`;
        });
        feedback += '</ul>';
    }
    
    document.getElementById('test-feedback').innerHTML = feedback;
    
    testContainer.style.display = 'none';
    testResults.style.display = 'block';
    
    // Обработчик кнопки "Пройти заново"
    document.getElementById('retry-test').addEventListener('click', () => {
        testAnswers = new Array(finalTestQuestions.length).fill(null);
        currentTestQuestion = 0;
        testContainer.style.display = 'block';
        testResults.style.display = 'none';
        renderTestQuestion();
        setupTestNavigation();
    });
}
