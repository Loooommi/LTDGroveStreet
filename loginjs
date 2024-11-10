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
