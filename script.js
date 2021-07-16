const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    let data = JSON.parse(localStorage.getItem('data-lista') || '[]'); 

    data.push({
          nome,
         email,
    });
    
    localStorage.setItem("data-lista", JSON.stringify(data));

})
