function greetUser() {
    const userName = prompt("What's your name?");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to our website.`);
    }
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Simple form validation
function validateForm() {
    const nameInput = document.getElementById("name").value;
    if (nameInput === "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Greet user on page load
    greetUser();

    // Button click event to change background color
    const colorButton = document.getElementById("changeColorButton");
    if (colorButton) {
        colorButton.addEventListener("click", changeBackgroundColor);
    }


    const form = document.getElementById("myForm");

            }
        });
    }
});
