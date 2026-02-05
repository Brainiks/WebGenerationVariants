function generateNumbers() {
    const rangeInput = document.getElementById('range');
    const countInput = document.getElementById('count');
    const numbersDiv = document.getElementById('numbers');
    const resultDiv = document.getElementById('result');
    
    const maxNumber = parseInt(rangeInput.value);
    const count = parseInt(countInput.value);
    
    // Валидация
    if (isNaN(maxNumber) || maxNumber < 1) {
        alert('Пожалуйста, введите корректное количество вариантов (минимум 1)');
        return;
    }
    
    if (isNaN(count) || count < 1) {
        alert('Пожалуйста, введите корректное количество чисел для выбора (минимум 1)');
        return;
    }
    
    if (count > maxNumber) {
        alert(`Нельзя выбрать ${count} чисел из диапазона 1-${maxNumber}. Максимум можно выбрать ${maxNumber} чисел.`);
        return;
    }
    
    // Генерация неповторяющихся случайных чисел
    const uniqueNumbers = generateUniqueRandomNumbers(count, maxNumber);
    
    // Отображение результата
    numbersDiv.innerHTML = '';
    
    uniqueNumbers.forEach(num => {
        const badge = document.createElement('div');
        badge.className = 'number-badge';
        badge.textContent = num;
        numbersDiv.appendChild(badge);
    });
    
    resultDiv.style.display = 'block';
    
    // Плавная прокрутка к результату
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function generateUniqueRandomNumbers(count, max) {
    const numbers = new Set();
    
    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * max) + 1;
        numbers.add(randomNum);
    }
    
    return Array.from(numbers).sort((a, b) => a - b);
}

// Обработка нажатия Enter
document.getElementById('range').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') generateNumbers();
});

document.getElementById('count').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') generateNumbers();
});