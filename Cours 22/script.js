const start = document.getElementById('start_date');
const end = document.getElementById('end_date');
const today = new Date().toISOString().split('T')[0];

start.value = today;
start.min = today;

const tomorrowDate = () => {
  const day = new Date(today);
  day.setDate(day.getDate() + 1);
  const tomorrow = day.toISOString().split('T')[0];
  end.value = tomorrow;
  end.min = tomorrow;
};

tomorrowDate();

start.addEventListener('change', (e) => {
  const day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  const tomorrow = day.toISOString().split('T')[0];
  end.value = tomorrow;
  end.min = tomorrow;
});

const bookingTotal = () => {
  const date1 = new Date(start.value);
  const date2 = new Date(end.value);
  const diffTime = Math.abs(date2 - date1);

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const nightPrice = document.getElementById('nightPrice').innerHTML;

  const total = diffDays * nightPrice;
  document.getElementById('total').innerHTML = total;
};

start.addEventListener('change', () => bookingTotal());
end.addEventListener('change', () => bookingTotal());

bookingTotal();
