function generateSignal() {
    const now = new Date();
    
    // On simule un délai de 2 à 7 minutes pour le prochain "cycle"
    const randomMinutes = Math.floor(Math.random() * 5) + 2;
    now.setMinutes(now.getMinutes() + randomMinutes);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Affichage
    document.getElementById('signalDisplay').innerText = `${hours}:${minutes}`;
    
    // Suggestion de cote aléatoire entre 1.20 et 2.10
    const randomCote = (Math.random() * (2.1 - 1.2) + 1.2).toFixed(2);
    document.getElementById('cote').innerText = `${randomCote}x`;
}
