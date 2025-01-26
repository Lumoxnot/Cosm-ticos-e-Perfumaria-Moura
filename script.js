document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");
    let readyMessage = document.getElementById("ready-message");
    let progress = 0;

    function updateProgress() {
        progress += 1;
        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress < 100) {
            setTimeout(updateProgress, 50);
        } else {
            readyMessage.style.display = "block";
            setTimeout(function() {
                window.location.href = "loja.html"; // Substitua "nextpage.html" pela URL da próxima página
            }, 3000); // Espera 2 segundos antes de redirecionar
        }
    }

    updateProgress();
});
