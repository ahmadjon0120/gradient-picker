document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const gradientOutput = document.getElementById('gradient-output');
    const copyBtn = document.getElementById('copy-btn');
    const colorInput1 = document.getElementById('color-input-1');
    const colorInput2 = document.getElementById('color-input-2');
    const directionSelect = document.getElementById('direction-select');
  
    // Function to update the gradient and display value
    const updateGradient = () => {
        const gradient = `linear-gradient(to ${directionSelect.value}, ${colorInput1.value}, ${colorInput2.value})`;
        body.style.background = gradient;
        gradientOutput.value = gradient;
    };
  
    // Set initial gradient
    updateGradient();
  
    // Event listeners for dynamic changes
    colorInput1.addEventListener('input', updateGradient);
    colorInput2.addEventListener('input', updateGradient);
    directionSelect.addEventListener('change', updateGradient);
  
    // Copy gradient to clipboard
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(gradientOutput.value)
            .then(() => alert('Gradient copied to clipboard!'))
            .catch(err => console.error('Error copying to clipboard: ', err));
    });
  });