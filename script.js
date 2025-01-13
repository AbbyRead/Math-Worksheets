document.getElementById('generate').addEventListener('click', () => {
	const worksheet = document.getElementById('worksheet');
	worksheet.innerHTML = ''; // Clear old problems
	
	for (let i = 1; i <= 10; i++) {
		const a = Math.floor(Math.random() * 100);
		const b = Math.floor(Math.random() * 100);
		const problem = document.createElement('p');
		problem.textContent = `${a} + ${b} = ___`;
		worksheet.appendChild(problem);
	}
});