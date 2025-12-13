#!/bin/bash

# Простой скрипт для запуска локального веб-сервера

echo "Запуск локального веб-сервера..."
echo "Откройте в браузере: http://localhost:8001"
echo ""
echo "Для остановки нажмите Ctrl+C"
echo ""

# Проверяем наличие Python
if command -v python3 &> /dev/null; then
    python3 -m http.server 8001
elif command -v python &> /dev/null; then
    python -m http.server 8001
else
    echo "Python не найден. Установите Python или используйте другой способ:"
    echo "  - Node.js: npx http-server"
    echo "  - PHP: php -S localhost:8000"
    exit 1
fi


