const calendar = document.querySelector('.days');
const currentDate = document.querySelector('.current-date');
const prevMonth = document.querySelector('.prev-month');
const nextMonth = document.querySelector('.next-month');

let currentMonth = 2; // February (2nd month)
let currentYear = 1403; // Persian year

const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  let daysInMonth = (currentMonth <= 6) ? 31 : 30;
  if (currentMonth === 12) daysInMonth = 29; // Last month (Esfand) has 29 days

  calendar.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += '<div></div>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;

    const date = new Date(currentYear, currentMonth - 1, i);
    const dayOfWeek = date.getDay();

    if (i === 25 && currentMonth === 2 && currentYear === 1403 && dayOfWeek === 2) {
      day.classList.add('today');
    }

    calendar.appendChild(day);
  }

  currentDate.textContent = `${months[currentMonth - 1]} ${currentYear}`;
}

prevMonth.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 1) {
    currentMonth = 12;
    currentYear--;
  }
  renderCalendar();
});

nextMonth.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 12) {
    currentMonth = 1;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();