// Fonction pour afficher la catégorie sélectionnée
function showCitoyenCategory(categoryId) {
    // Cacher toutes les catégories
    document.querySelectorAll('.citoyen-category').forEach(function (category) {
        category.style.display = 'none';
    });

    // Afficher la catégorie sélectionnée
    document.getElementById(categoryId).style.display = 'block';
}
function passerCommande(event) {
    event.preventDefault();

    // Vérification que les éléments existent
    var nomElement = document.getElementById('nom');
    var dateLivraisonElement = document.getElementById('date_livraison');
    var trancheLivraisonElement = document.getElementById('tranche_livraison');
    var modeRetraitElement = document.getElementById('mode_retrait');

    // Vérifiez que les éléments sont trouvés
    if (!nomElement || !dateLivraisonElement || !trancheLivraisonElement || !modeRetraitElement) {
        console.error("Un ou plusieurs éléments du formulaire sont manquants.");
        return; // Sortir de la fonction si un élément est manquant
    }

    var commandeData = {
        nom: nomElement.value,
        date_livraison: dateLivraisonElement.value,
        tranche_livraison: trancheLivraisonElement.value,
        mode_retrait: modeRetraitElement.value,
        produits: [] // Remplacez ceci par la logique de collecte des produits
    };
}

document.addEventListener('DOMContentLoaded', function() {
    // Code qui interagit avec le DOM
    var dateLivraisonElement = document.getElementById('date_livraison');
    var modeRetraitElement = document.getElementById('mode_retrait');
    console.log(dateLivraisonElement, modeRetraitElement); // Tester si les éléments sont bien trouvés
});
var dateLivraisonElement = document.getElementById('date_livraison');
if (dateLivraisonElement) {
    var dateLivraison = dateLivraisonElement.value;
} else {
    console.error("L'élément avec l'ID 'date_livraison' n'a pas été trouvé.");
    var dateLivraison = "Non spécifié";
}
function passerCommande(event) {
    event.preventDefault();

    var nomElement = document.getElementById('nom');
    var dateLivraisonElement = document.getElementById('date_livraison');
    var modeRetraitElement = document.getElementById('mode_retrait');

    // Vérification si les éléments existent avant d'accéder à leur valeur
    if (!nomElement || !dateLivraisonElement || !modeRetraitElement) {
        console.error("Certains éléments sont manquants dans le formulaire.");
        return; // Sortir de la fonction si un élément est manquant
    }

    var commandeData = {
        nom: nomElement.value,
        date_livraison: dateLivraisonElement.value,
        mode_retrait: modeRetraitElement.value,
        produits: [] // Remplacer par votre logique pour récupérer les produits
    };

    var message = `**Nouvelle commande en ligne !**\n\n`;
    message += `**Nom :** ${commandeData.nom}\n`;
    message += `**Date de livraison :** ${commandeData.date_livraison}\n`;
    message += `**Mode de retrait :** ${commandeData.mode_retrait}\n`;

    // Traiter l'envoi du message Discord ici...
}
var dateLivraisonElement = document.getElementById('date_livraison');
console.log(dateLivraisonElement);  // Vérifie si l'élément existe
var dateLivraison = dateLivraisonElement ? dateLivraisonElement.value : "Date non spécifiée";
console.log(dateLivraison);  // Affiche la valeur récupérée

// Tableau global pour stocker les employés
const employees = [];

// Fonction pour ajouter un employé
function addEmployee() {
    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('new-employee-name').value;
    const username = document.getElementById('new-employee-username').value;
    const role = document.getElementById('new-employee-role').value;
    const password = document.getElementById('new-employee-password').value;

    // Vérifier que tous les champs sont remplis
    if (!name || !username || !role || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Créer un nouvel employé
    const newEmployee = { name, username, role, password };

    // Ajouter l'employé à la liste des employés
    employees.push(newEmployee);

    // Afficher le message de succès
    document.getElementById('add-message').style.display = 'block';

    // Effacer les champs du formulaire
    document.getElementById('new-employee-name').value = '';
    document.getElementById('new-employee-username').value = '';
    document.getElementById('new-employee-role').value = 'Employé';
    document.getElementById('new-employee-password').value = '';

    // Afficher la liste des employés
    displayEmployees();
}

// Fonction pour afficher les employés dans la liste
function displayEmployees() {
    const employeeListDiv = document.getElementById('employee-list');
    employeeListDiv.innerHTML = ''; // Vider la liste actuelle

    // Boucle sur les employés et les afficher
    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.textContent = `${employee.name} (${employee.username}) - ${employee.role}`;

        // Ajouter un bouton de suppression à chaque employé
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = function() {
            deleteEmployee(employee.username); // Supprimer l'employé en fonction de son nom d'utilisateur
        };
        employeeDiv.appendChild(deleteButton);

        // Ajouter chaque employé à la liste
        employeeListDiv.appendChild(employeeDiv);
    });
}

// Fonction pour supprimer un employé
function deleteEmployee(username) {
    // Trouver l'index de l'employé à supprimer
    const index = employees.findIndex(emp => emp.username === username);
    if (index !== -1) {
        // Supprimer l'employé du tableau
        employees.splice(index, 1);
        alert("L'employé a été supprimé.");

        // Afficher à nouveau la liste des employés
        displayEmployees();
    } else {
        alert("L'employé n'a pas été trouvé.");
    }
}

// Fonction pour afficher/masquer les sections de l'espace employé
function showEmployeSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.employe-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher la section spécifiée
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// Fonction pour gérer les rôles des employés (patron, co-patron, employé)
function assignRole(employeeId, role) {
    const employee = employees.find(emp => emp.username === employeeId);
    if (employee) {
        employee.role = role;
        alert(`${employee.name} a maintenant le rôle de ${role}.`);
        displayEmployees(); // Mettre à jour l'affichage
    } else {
        alert("L'employé n'a pas été trouvé.");
    }
}

// Fonction pour gérer l'attribution des mots de passe des employés
function assignPassword(employeeId, newPassword) {
    const employee = employees.find(emp => emp.username === employeeId);
    if (employee) {
        employee.password = newPassword;
        alert(`Le mot de passe de ${employee.name} a été mis à jour.`);
    } else {
        alert("L'employé n'a pas été trouvé.");
    }
}

// Fonction pour ajouter un nouvel employé via le formulaire (interface d'administration)
function showEmployeeForm() {
    const formSection = document.getElementById('gestion-employes');
    formSection.style.display = 'block'; // Afficher la section du formulaire
}

// Fonction pour masquer la section de gestion des employés après soumission
function hideEmployeeForm() {
    const formSection = document.getElementById('gestion-employes');
    formSection.style.display = 'none'; // Masquer la section du formulaire
}

// Cette fonction est appelée lors du chargement de la page pour initialiser l'affichage
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser la première section à afficher
    showEmployeSection('accueil'); // Par défaut, afficher la section d'accueil
});
// Exemple de tableau d'employés avec leurs informations (nom, rôle, etc.)
const employees = [
    { name: "Alice", username: "alice123", role: "Patron", password: "password123" },
    { name: "Bob", username: "bob456", role: "Co-patron", password: "password456" },
    { name: "Charlie", username: "charlie789", role: "Employé", password: "password789" }
];

// Fonction pour afficher ou masquer les sections en fonction du rôle
function showEmployeSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.employe-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher la section correspondante
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }

    // Si l'on affiche le récapitulatif, on le remplit avec les employés
    if (sectionId === 'recapitulatif') {
        displayEmployeeRecap();
    }
}

// Afficher le récapitulatif des employés (uniquement pour les patrons et co-patrons)
function displayEmployeeRecap() {
    const recapContainer = document.getElementById('employee-recap');
    recapContainer.innerHTML = ''; // Vider le contenu avant de le remplir

    // Vérifier le rôle de l'employé connecté
    const employeRole = getLoggedInEmployeeRole();

    if (employeRole === "Patron" || employeRole === "Co-patron") {
        // Si l'utilisateur est un patron ou un co-patron, afficher la liste des employés
        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.classList.add('employee-info');
            employeeDiv.innerHTML = `
                <strong>Nom : </strong>${employee.name}<br>
                <strong>Nom d'utilisateur : </strong>${employee.username}<br>
                <strong>Rôle : </strong>${employee.role}<br><br>
            `;
            recapContainer.appendChild(employeeDiv);
        });
    } else {
        recapContainer.innerHTML = "<p>Vous n'avez pas accès à cette section.</p>";
    }
}

// Fonction pour simuler la récupération du rôle de l'employé connecté
// Ici, on suppose que le rôle de l'employé est déjà défini lors de la connexion (vous pouvez récupérer le rôle via une session ou autre méthode)
function getLoggedInEmployeeRole() {
    // Exemple: récupérons le rôle de l'employé connecté (par exemple, depuis une variable globale ou une session)
    return "Patron"; // Vous pouvez remplacer ceci par la vraie logique de récupération du rôle
}

// Initialisation de la page
document.addEventListener('DOMContentLoaded', () => {
    // Par défaut, on affiche la première section
    showEmployeSection('formation');
});
