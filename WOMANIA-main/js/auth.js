auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
})

const logout = document.querySelector('#logout');
logout.addEventListener('click', (event) => {
    event.preventDefault();
    window.location = 'index.html'
    auth.signOut();
});

const signupForm = document.querySelector('#signupform');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = signupForm['signupname'].value;
    const email = signupForm['signupemail'].value;
    const password = signupForm['signuppassword'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        signupForm.reset();
    });
});