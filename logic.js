function spinWheel() {
    let probabilityInput = document.getElementById('probability').value;
    let probabilities = names.map(name => parseInt(probabilityInput, 10));
    let totalProbability = probabilities.reduce((acc, curr) => acc + curr, 0);
    let randomValue = Math.random() * totalProbability;

    let cumulativeProbability = 0;
    let selectedIndex = 0;
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (randomValue <= cumulativeProbability) {
            selectedIndex = i;
            break;
        }
    }

    let selectedAngle = selectedIndex * (2 * Math.PI / names.length);
    currentAngle = selectedAngle;
    drawWheel();
    setTimeout(() => {
        alert('Selected: ' + names[selectedIndex]);
        currentAngle = 0; // Reset to default
        drawWheel();
    }, 3000);
}
