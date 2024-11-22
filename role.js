// Initialisation des employés avec les identifiants par défaut
if (!localStorage.getItem('employees')) {
    const initialEmployees = [
        { name: "Admin", username: "admin", role: "Patron", password: "admin123" },
        { name: "Manager", username: "manager", role: "Co-patron", password: "manager123" }
    ];
    localStorage.setItem('employees', JSON.stringify(initialEmployees));
}

// Charger les employés depuis localStorage
const employees = JSON.parse(localStorage.getItem('employees')) || [];

// Fonction pour ajouter un employé
function addEmployee(name, username, role, password) {
    const newEmployee = { name, username, role, password };
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Fonction pour afficher les employés (utile pour les pages de gestion)
function getEmployeeList() {
    return employees;
}


    const newEmployee = { name, username, role, password };
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    alert("Employé ajouté avec succès !");
    document.getElementById("employee-form").reset();
    renderEmployeeList();


// Fonction pour afficher la liste des employés
function renderEmployeeList() {
    const listContainer = document.getElementById("employee-list");
    listContainer.innerHTML = ""; // Vider la liste actuelle

    employees.forEach((employee, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${employee.name} - ${employee.role} (${employee.username})</p>
            <button onclick="deleteEmployee(${index})">Supprimer</button>
        `;
        listContainer.appendChild(div);
    });
}

// Fonction pour supprimer un employé
function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    renderEmployeeList();
}

// Charger la liste des employés lors du chargement de la page
document.addEventListener("DOMContentLoaded", renderEmployeeList);

function sendEmployeeToDiscord(employee) {
    const message = {
        content: `👤 **Nouvel utilisateur ajouté**`,
        embeds: [
            {
                title: "Détails de l'utilisateur",
                color: 3447003, // Couleur bleue
                fields: [
                    { name: "Nom", value: employee.name, inline: true },
                    { name: "Nom d'utilisateur", value: employee.username, inline: true },
                    { name: "Rôle", value: employee.role, inline: true },
                ],
                footer: {
                    text: "Enregistré via LTD Grove Street",
                },
            },
        ],
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    })
        .then((response) => {
            if (response.ok) {
                console.log("Utilisateur envoyé à Discord avec succès.");
            } else {
                console.error("Erreur lors de l'envoi à Discord :", response.statusText);
            }
        })
        .catch((error) => console.error("Erreur :", error));
}

// Appelez cette fonction après l'ajout d'un employé :
if (newEmployee) {
    sendEmployeeToDiscord(newEmployee);
}
