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
function handleConnexion(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = employees.find(emp => emp.username === username && emp.password === password);

    if (user) {
        document.getElementById('employe-name').textContent = user.name;
        document.getElementById('error-message').style.display = "none";

        // Afficher la gestion des employés pour les patrons et co-patrons
        if (user.role === "Patron" || user.role === "Co-patron") {
            window.location.href = "gestion-employes.html"; // Redirection vers la gestion des employés
        } else {
            window.location.href = "espace_employe.html"; // Redirection vers l'espace employé standard
        }
    } else {
        document.getElementById('error-message').style.display = "block";
    }
}

// Associer la fonction à l'événement du formulaire
document.getElementById("login-form").addEventListener("submit", handleConnexion);
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const user = employees.find(emp => emp.username === username && emp.password === password);

    if (user) {
        // Sauvegarde des informations de l'utilisateur connecté
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redirection selon le rôle
        if (user.role === "Patron" || user.role === "Co-patron") {
            window.location.href = "gestion-employes.html";
        } else {
            window.location.href = "espace_employe.html";
        }
    } else {
        // Affichage d'un message d'erreur
        document.getElementById("error-message").style.display = "block";
    }
});
// Données des comptes pré-enregistrés
const accounts = [
    { username: "patron", password: "1234", role: "Patron" },
    { username: "copatron", password: "5678", role: "Co-patron" },
    { username: "employe", password: "abcd", role: "Employé" },
];

// Gestion de la connexion
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Vérification des identifiants
    const user = accounts.find(account => account.username === username && account.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Stocker l'utilisateur connecté
        alert(`Connexion réussie en tant que ${user.role}`);
        if (user.role === "Patron" || user.role === "Co-patron") {
            window.location.href = "gestion-employes.html"; // Redirection pour les patrons et co-patrons
        } else {
            window.location.href = "espace_employe.html"; // Redirection pour les employés
        }
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});

// Fonction pour afficher les employés dans la gestion des employés
function displayEmployees() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const list = document.getElementById("employee-list");
    list.innerHTML = "";

    employees.forEach((employee, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p><strong>Nom :</strong> ${employee.name}</p>
            <p><strong>Nom d'utilisateur :</strong> ${employee.username}</p>
            <p><strong>Rôle :</strong> ${employee.role}</p>
            <button onclick="deleteEmployee(${index})">Supprimer</button>
            <hr>
        `;
        list.appendChild(item);
    });
}

// Fonction pour ajouter un nouvel employé
function addEmployee() {
    const name = document.getElementById("employee-name").value;
    const username = document.getElementById("employee-username").value;
    const password = document.getElementById("employee-password").value;
    const role = document.getElementById("employee-role").value;

    const newEmployee = { name, username, password, role };
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employé ajouté avec succès !");
    document.getElementById("employee-form").reset();
    displayEmployees(); // Met à jour la liste
}

// Fonction pour supprimer un employé
function deleteEmployee(index) {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index, 1); // Supprime l'employé à l'index donné
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees(); // Met à jour la liste
}

// Chargement automatique des employés lors de l'ouverture de la page gestion-employes.html
if (document.getElementById("employee-list")) {
    displayEmployees();
}
// Affichage des sections au clic des boutons
document.getElementById("viewSummary").addEventListener("click", function() {
    alert("Voici le récapitulatif des employés.");
});

document.getElementById("assignRoles").addEventListener("click", function() {
    alert("Page pour attribuer des rôles.");
});

document.getElementById("changePassword").addEventListener("click", function() {
    alert("Page pour changer le mot de passe.");
});

document.getElementById("manageEmployees").addEventListener("click", function() {
    // Afficher la gestion des employés
    document.getElementById("employeeManagement").style.display = 'block';
});

// Formulaire de gestion des employés
document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire
    const role = document.getElementById("role").value;
    alert(`Rôle "${role}" attribué avec succès à l'employé.`);
});
document.addEventListener('DOMContentLoaded', function () {
    // Gestionnaires pour les boutons de navigation
    const navButtons = document.querySelectorAll('.employe-nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            showEmployeSection(sectionId);
        });
    });

    // Fonction pour afficher la section demandée
    function showEmployeSection(sectionId) {
        // Masquer toutes les sections
        const sections = document.querySelectorAll('.employe-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Afficher la section sélectionnée
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        } else {    
            console.error(`Section avec l'ID "${sectionId}" introuvable.`);
        }
    }

    // Initialisation : afficher par défaut la première section si elle existe
    const firstSection = document.querySelector('.employe-section');
    if (firstSection) {
        firstSection.style.display = 'block';
    }
});

// Fonction pour mettre à jour le champ "Lieu" en fonction de la station
function updateLieuComptabilite() {
    const station = document.getElementById("comptabilite-station").value;
    const lieux = {
        "1": "Grove Street",
        "2": "Innocence Blvd",
        "3": "Strawberry Av",
        "4": "Davis Av",
        "5": "Vespucci Blvd",
        "6": "ElRancho Blvd"
    };
    document.getElementById("comptabilite-lieu").value = lieux[station] || '';
}

// Fonction pour sauvegarder le formulaire de comptabilité
function saveComptabiliteForm(event) {
    event.preventDefault();

    const date = document.getElementById("comptabilite-date").value;
    const station = document.getElementById("comptabilite-station").value;
    const lieu = document.getElementById("comptabilite-lieu").value;
    const nbBidons = document.getElementById("comptabilite-nb-bidons").value;

    const table = document.getElementById("recap-table").querySelector("tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${date}</td>
        <td>${station}</td>
        <td>${lieu}</td>
        <td>${nbBidons}</td>
    `;
    table.appendChild(newRow);

    // Réinitialiser le formulaire après soumission
    event.target.reset();
}
// Fonction pour envoyer les identifiants à Google Apps Script
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const data = {
        username: username,
        password: password
    };
    
    fetch('https://script.google.com/macros/s/AKfycbwRjNnk1wxZsDQVa0_UBj5Jt6Xox2X0b1V4VU_XgRjBzEBDPdi3BvSP0O-xKeIPMIdTiQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            // Connexion réussie, afficher le formulaire de comptabilité
            document.getElementById('comptabilite-form').style.display = 'block';
            document.getElementById('login-form').style.display = 'none';  // Masquer le formulaire de connexion
            alert(data.message); // Afficher un message de succès
        } else {
            alert(data.message); // Afficher un message d'erreur
        }
    })
    .catch(error => console.error('Erreur:', error));
});

// Fonction pour soumettre les données de comptabilité à Google Sheets
document.getElementById('comptabilite-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;  // On suppose que le nom d'utilisateur est toujours disponible
    const date = document.getElementById('date').value;
    const station = document.getElementById('station').value;
    const lieu = document.getElementById('lieu').value;
    const nbBidons = document.getElementById('nb-bidons').value;
    
    const data = {
        username: username,
        date: date,
        station: station,
        lieu: lieu,
        nbBidons: nbBidons
    };
    
    fetch('https://script.google.com/macros/s/AKfycbwRjNnk1wxZsDQVa0_UBj5Jt6Xox2X0b1V4VU_XgRjBzEBDPdi3BvSP0O-xKeIPMIdTiQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Afficher un message de succès ou d'erreur
    })
    .catch(error => console.error('Erreur:', error));
});
