// URL de votre webhook Discord
const webhookUrl = "https://discord.com/api/webhooks/1307719688993902643/9Hh1JmEYk2vJhMQAbSHeLnNHXPR8UHcPRvnqiKDC-GxpnceTuE2yPkv6J8AR_ubVuR8E";

// Fonction pour envoyer un utilisateur via Webhook
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

    // Envoyer les données à Discord
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

// Exemple d'utilisation après l'ajout d'un employé
document.getElementById("employee-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const newEmployee = {
        name: document.getElementById("new-employee-name").value,
        username: document.getElementById("new-employee-username").value,
        role: document.getElementById("new-employee-role").value,
    };

    // Sauvegarder l'employé dans localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    // Envoyer les données via le webhook Discord
    sendEmployeeToDiscord(newEmployee);

    // Réinitialiser le formulaire
    event.target.reset();
    alert("Employé ajouté et envoyé à Discord !");
});
