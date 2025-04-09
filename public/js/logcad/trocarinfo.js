document.getElementById('Login').addEventListener('click', function() {
    document.querySelectorAll('.cad').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('.log').forEach(element => {
        element.style.display = 'flex';
    });
});

document.getElementById('Cadastro').addEventListener('click', function() {
    document.querySelectorAll('.cad').forEach(element => {
        element.style.display = 'flex';
    });

    document.querySelectorAll('.log').forEach(element => {
        element.style.display = 'none';
    });
});

document.getElementById('cadform').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuariocad').value;
    const email = document.getElementById('emailcad').value;
    const senha = document.getElementById('senhacad').value;
    const confsenha =  document.getElementById('confsenhacad').value;

    if (senha === confsenha){
        localStorage.setItem('user', usuario);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
        alert('Cadastro realizado com sucesso!');
        document.querySelectorAll('.cad').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelectorAll('.log').forEach(element => {
            element.style.display = 'flex';
        });
    }else{
        alert('Senhas não são iguais.');
    }

});

document.getElementById('logform').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('usuariolog').value;
    const senha = document.getElementById('senhalog').value;


    const storedUser = localStorage.getItem('user');
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');

    if ((email === storedEmail || email === storedUser) && senha === storedSenha) {
        alert('Login realizado com sucesso!');
        logado = true
        localStorage.setItem('logado', JSON.stringify(true));
        window.location.href = "./index.html";
    } else {
        alert('Email ou senha incorretos.');
    }
});