const storedLogado = localStorage.getItem('logado');

const isLogged = JSON.parse(storedLogado); 

if (isLogged) {
    document.querySelectorAll('.dlog').forEach(element => {
        element.style.display = 'none';
    });
    
    document.querySelectorAll('.log').forEach(element => {
        element.style.display = 'flex';
    });
}

if (!isLogged) {
    document.querySelectorAll('.dlog').forEach(element => {
        element.style.display = 'flex';
    });
    
    document.querySelectorAll('.log').forEach(element => {
        element.style.display = 'none';
    });
}