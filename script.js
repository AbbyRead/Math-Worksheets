document.addEventListener('DOMContentLoaded', () => {
    const fractionButton = document.getElementById('fraction-button');
    const fractionInputs = document.getElementById('fraction-inputs');
    const confirmFraction = document.getElementById('confirm-fraction');
    const numeratorInput = document.getElementById('numerator-input');
    const denominatorInput = document.getElementById('denominator-input');
    const preview = document.getElementById('latex-preview');
    const latexCode = document.getElementById('latex-code');

    // Show numerator and denominator inputs when fraction button is clicked
    fractionButton.addEventListener('click', () => {
        fractionInputs.classList.remove('hidden');
    });

    // Add fraction to LaTeX preview when "Confirm" is clicked
    confirmFraction.addEventListener('click', () => {
        const numerator = numeratorInput.value.trim();
        const denominator = denominatorInput.value.trim();

        if (numerator && denominator) {
            // Generate LaTeX code for fraction
            const fractionLatex = `\\frac{${numerator}}{${denominator}}`;

            // Add the fraction to the preview and textarea
            preview.textContent += ` ${fractionLatex} `;
            latexCode.value += ` ${fractionLatex} `;

            // Clear inputs and hide the fraction inputs section
            numeratorInput.value = '';
            denominatorInput.value = '';
            fractionInputs.classList.add('hidden');
        } else {
            alert('Please fill in both numerator and denominator!');
        }
    });
});
