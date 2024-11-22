// Fonction pour gérer la connexion de l'employé
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Vérifier que les champs ne sont pas vides
    if (!username || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Chercher l'employé correspondant dans la liste des employés
    const employee = employees.find(emp => emp.username === username && emp.password === password);

    // Si l'employé est trouvé et les informations sont correctes
    if (employee) {
        // Afficher le message de succès
        document.getElementById('login-message').style.display = 'block';
        document.getElementById('login-error').style.display = 'none';

        // Rediriger l'employé vers son espace personnel ou une autre page (par exemple, dashboard)
        // Par exemple, en utilisant window.location.href pour rediriger
        setTimeout(() => {
            window.location.href = "espace_employe.html";  // Remplacez cette URL par l'URL de l'espace employé
        }, 1500);  // Attente de 1,5 seconde avant la redirection pour que le message de succès s'affiche
    } else {
        // Si les informations sont incorrectes
        document.getElementById('login-error').style.display = 'block';
        document.getElementById('login-message').style.display = 'none';
    }
}
document.getElementById('login-form').addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemple de comptes pré-enregistrés
    const accounts = [
        { username: 'patron1', password: 'admin123', role: 'Patron' },
        { username: 'patron2', password: 'admin456', role: 'Patron' },
        { username: 'employe1', password: 'password1', role: 'Employé' },
        { username: 'employe2', password: 'password2', role: 'Employé' },
    ];

    // Trouver l'utilisateur correspondant
    const user = accounts.find(
        (account) => account.username === username && account.password === password
    );

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        if (user.role === 'Patron') {
            window.location.href = 'gestion_employes.html'; // Redirection pour les patrons
        } else {
            window.location.href = 'espace_employe.html'; // Redirection pour les employés
        }
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

