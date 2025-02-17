// Lösung für Algebra-Aufgabe
document.getElementById("algebra-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const answer1 = document.getElementById("task1").value;
    
    if (parseInt(answer1) === 4) {
        document.getElementById("solution1").innerHTML = "Richtig! Die Lösung ist x = 4.";
    } else {
        document.getElementById("solution1").innerHTML = '<span style="color: red">Falsch. Die richtige Antwort ist x = 4. Lösung: 2x + 3 = 11 → x = (11 - 3) / 2 = 4.</span>';
    }
});

// Lösung für Geometrie-Aufgabe
document.getElementById("geometry-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const area = parseInt(document.getElementById("task2").value);
    const perimeter = parseInt(document.getElementById("task2-umfang").value);
    
    if (area === 15 && perimeter === 16) {
        document.getElementById("solution2").innerHTML = "Richtig! Fläche = 15 cm² und Umfang = 16 cm.";
    } else {
        document.getElementById("solution2").innerHTML = '<span style="color: red">Falsch. Fläche = 15 cm² und Umfang = 16 cm.</span>';
    }
});

// Lösung für Funktionen-Aufgabe
document.getElementById("functions-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const answer3 = document.getElementById("task3").value;
    
    if (parseInt(answer3) === 2) {
        document.getElementById("solution3").innerHTML = "Richtig! Die Steigung ist 2.";
    } else {
        document.getElementById("solution3").innerHTML = '<span style="color: red">Falsch. Die Steigung ist 2. Lösung: Die Steigung m = 2.</span>';
    }
});