// --- CONFIGURAÇÃO DO CONTADOR REGRESSIVO ---

// Coloque a data da sua festa aqui no formato: Mês Dia, Ano HH:MM:SS
const dataDaFesta = "Nov 8, 2025 21:00:00";

// --- FIM DA CONFIGURAÇÃO ---


const countDownDate = new Date(dataDaFesta).getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formata para sempre ter dois dígitos (ex: 09 em vez de 9)
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>A FESTA JÁ COMEÇOU!</h2>";
    }
}, 1000);
