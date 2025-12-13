#!/bin/bash

# Простой скрипт для запуска локального веб-сервера

# Номер порта (можно изменить или задать через переменную окружения PORT)
PORT=${PORT:-8001}

# Если передан аргумент, используем его как порт
if [ -n "$1" ]; then
    PORT=$1
fi

echo "Запуск локального веб-сервера на порту $PORT..."
echo "Откройте в браузере: http://localhost:$PORT"
echo ""
echo "Для остановки нажмите Ctrl+C"
echo ""

# Проверяем наличие Python
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m http.server $PORT
else
    echo "Python не найден. Установите Python или используйте другой способ:"
    echo "  - Node.js: npx http-server -p $PORT"
    echo "  - PHP: php -S localhost:$PORT"
    exit 1
fi


