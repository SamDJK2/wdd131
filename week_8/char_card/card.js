const health = document.getElementById("health");
const level = document.getElementById("level");
const attackBtn = document.getElementById("attack-btn");
const levelBtn = document.getElementById("level-btn");

function attacked() {
    let currentHealth = parseInt(health.textContent);

    if (currentHealth > 0) {
        currentHealth -= 20;
        health.textContent = currentHealth; 
    } 
    
    if (currentHealth <= 0) {
        health.textContent = 0; 
        alert("Character is Dead");
    }
}

function levelUp() {
    let currentLevel = parseInt(level.textContent);

    currentLevel += 1;
    level.textContent = currentLevel; 
}

attackBtn.addEventListener("click", attacked);
levelBtn.addEventListener("click", levelUp);