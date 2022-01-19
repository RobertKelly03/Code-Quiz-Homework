var count = document.querySelector('#count');
var increment = document.querySelector('#increment');
var decrement = document.querySelector('#decrement');

var currentCount = localStorage.getItem('count') || 0;

count.textContent = currentCount;

increment.addEventListener('click', function() {
    currentCount++;
    count.textContent = currentCount;
    localStorage.setItem('count', currentCount);
});

decrement.addEventListener('click', function() {
    currentCount--;
    count.textContent = currentCount;
    localStorage.setItem('count', currentCount);
});