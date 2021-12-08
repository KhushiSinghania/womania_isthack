auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
})

const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm['loginemail'].value;
    const password = loginForm['loginpassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location = 'index.html';
        loginForm.reset();
    });
});