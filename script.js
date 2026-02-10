let step = 0;
const cards = document.querySelectorAll('.card');
const content = document.getElementById('content');
const title = document.getElementById('title');

function next() {
  cards[step].classList.remove('active');
  step++;
  cards[step].classList.add('active');
}

function strength() {
  const v = document.getElementById('pass').value.length;
  const bar = document.getElementById('bar');
  bar.style.width = v * 10 + '%';
  bar.style.background = v > 8 ? '#22c55e' : v > 4 ? '#facc15' : '#ef4444';
}

function enter() {
  document.getElementById('auth').style.display = 'none';
  document.getElementById('os').classList.remove('hidden');
  openApp('storage');
}

function openApp(app) {
  title.innerText = app.toUpperCase();

  if (app === 'storage')
    content.innerHTML = `<h3>Cloud Storage</h3><p>Used: 2.1 GB of 10 GB</p>`;

  if (app === 'mail')
    content.innerHTML = `<h3>Mail</h3><p>No new messages</p>`;

  if (app === 'photos')
    content.innerHTML = `<h3>Photos</h3><p>128 photos synced</p>`;

  if (app === 'settings')
    content.innerHTML = `<h3>Settings</h3><p>Account security enabled</p>`;
}

function toggleTheme() {
  document.body.classList.toggle('light');
}
