// Определение текущего курса
function getCurrentCourse() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const course = (filename === 'course-llm-basics.html' || filename.includes('llm-basics')) ? 'llm-basics' : 
                   (filename === 'course-n8n.html' || filename.includes('n8n')) ? 'n8n' : 'n8n';
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/9f7d3ce0-fb5c-4290-a350-afb41e7b5de1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2',message:'getCurrentCourse result',data:{path,filename,course},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
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
            title: 'Введение в LLM и QWEN',
            lessons: [
                { id: 1, title: 'Что такое LLM и зачем они нужны', file: 'data/llm-basics/lesson_1.html' },
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
                { id: 13, title: 'Что такое контекст в LLM', file: 'data/llm-basics/lesson_13.html' },
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/9f7d3ce0-fb5c-4290-a350-afb41e7b5de1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:197',message:'initCoursePage called',data:{hasCourseSections:!!document.getElementById('courseSections')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    if (!document.getElementById('courseSections')) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/9f7d3ce0-fb5c-4290-a350-afb41e7b5de1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:200',message:'courseSections not found, returning early',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
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

    // #region agent log
    try {
        const course = getCurrentCourse();
        const courseStructure = getCourseStructure();
        fetch('http://127.0.0.1:7242/ingest/9f7d3ce0-fb5c-4290-a350-afb41e7b5de1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:218',message:'renderCourseNavigation before forEach',data:{course,hasStructure:!!courseStructure,sectionsCount:courseStructure?.sections?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    } catch(e) {
        fetch('http://127.0.0.1:7242/ingest/9f7d3ce0-fb5c-4290-a350-afb41e7b5de1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:218',message:'renderCourseNavigation ERROR',data:{error:e.message,errorStack:e.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        throw e;
    }
    // #endregion

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

            const textToCopy = getCopyTextFromBlockquote(blockquote);
            if (!textToCopy) return;

            const copied = await copyTextToClipboard(textToCopy);
            const originalLabel = button.textContent;
            button.textContent = copied ? 'Скопировано' : 'Не получилось';
            if (copied) {
                button.classList.add('copied');
            }

            window.setTimeout(() => {
                button.textContent = originalLabel;
                button.classList.remove('copied');
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
