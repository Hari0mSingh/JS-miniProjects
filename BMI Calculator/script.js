const form = document.querySelector('form')

form.addEventListener("submit", function(e) {
    e.preventDefault();//preventing default behaviour
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results")
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Enter valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Enter valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
