// 平滑滾動

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 隨機長輩語錄

const quotes = [
  '做人最重要的是開心 ❤️',
  '知足常樂 天天好命 🌸',
  '人生沒有過不去的坎 🙏',
  '保持微笑 好運自然來 ✨',
  '朋友不用多 真心就好 🌞'
];

const quoteBox = document.querySelector('.quote-box');

setInterval(() => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = `「${quotes[random]}」`;
}, 3000);
