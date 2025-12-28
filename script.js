// Données des dictées
const DICTEES_DATA = {
    1: {
        titre: "Dictée 1",
        jaune: ["maison1", "jardin2", "école3", "livre4", "stylo5"],
        vert: ["maison6", "jardin7", "école8", "livre9", "stylo10", "cahier11"],
        violet: ["maison12", "jardin13", "école14", "livre15", "stylo16", "cahier17", "table18"]
    },
    2: {
        titre: "Dictée 2",
        jaune: ["chien1", "chat2", "oiseau3", "poisson4", "lapin5"],
        vert: ["chien6", "chat7", "oiseau8", "poisson9", "lapin10", "tortue11"],
        violet: ["chien12", "chat13", "oiseau14", "poisson15", "lapin16", "tortue17", "hamster18"]
    },
    3: {
        titre: "Dictée 3",
        jaune: ["pomme1", "poire2", "banane3", "orange4", "fraise5"],
        vert: ["pomme6", "poire7", "banane8", "orange9", "fraise10", "cerise11"],
        violet: ["pomme12", "poire13", "banane14", "orange15", "fraise16", "cerise17", "raisin18"]
    },
    4: {
        titre: "Dictée 4",
        jaune: ["soleil1", "lune2", "étoile3", "nuage4", "pluie5"],
        vert: ["soleil6", "lune7", "étoile8", "nuage9", "pluie10", "vent11"],
        violet: ["soleil12", "lune13", "étoile14", "nuage15", "pluie16", "vent17", "neige18"]
    },
    5: {
        titre: "Dictée 5",
        jaune: ["rouge1", "bleu2", "vert3", "jaune4", "noir5"],
        vert: ["rouge6", "bleu7", "vert8", "jaune9", "noir10", "blanc11"],
        violet: ["rouge12", "bleu13", "vert14", "jaune15", "noir16", "blanc17", "rose18"]
    },
    6: {
        titre: "Dictée 6",
        jaune: ["maison1", "jardin2", "école3", "livre4", "stylo5"],
        vert: ["maison6", "jardin7", "école8", "livre9", "stylo10", "cahier11"],
        violet: ["maison12", "jardin13", "école14", "livre15", "stylo16", "cahier17", "table18"]
    },
    7: {
        titre: "Dictée 7",
        jaune: ["chien1", "chat2", "oiseau3", "poisson4", "lapin5"],
        vert: ["chien6", "chat7", "oiseau8", "poisson9", "lapin10", "tortue11"],
        violet: ["chien12", "chat13", "oiseau14", "poisson15", "lapin16", "tortue17", "hamster18"]
    },
    8: {
        titre: "Dictée 8",
        jaune: ["pomme1", "poire2", "banane3", "orange4", "fraise5"],
        vert: ["pomme6", "poire7", "banane8", "orange9", "fraise10", "cerise11"],
        violet: ["pomme12", "poire13", "banane14", "orange15", "fraise16", "cerise17", "raisin18"]
    },
    9: {
        titre: "Dictée 9",
        jaune: ["soleil1", "lune2", "étoile3", "nuage4", "pluie5"],
        vert: ["soleil6", "lune7", "étoile8", "nuage9", "pluie10", "vent11"],
        violet: ["soleil12", "lune13", "étoile14", "nuage15", "pluie16", "vent17", "neige18"]
    },
    10: {
        titre: "Dictée 10",
        jaune: ["rouge1", "bleu2", "vert3", "jaune4", "noir5"],
        vert: ["rouge6", "bleu7", "vert8", "jaune9", "noir10", "blanc11"],
        violet: ["rouge12", "bleu13", "vert14", "jaune15", "noir16", "blanc17", "rose18"]
    },
    11: {
        titre: "Dictée 11",
        jaune: ["maison1", "jardin2", "école3", "livre4", "stylo5"],
        vert: ["maison6", "jardin7", "école8", "livre9", "stylo10", "cahier11"],
        violet: ["maison12", "jardin13", "école14", "livre15", "stylo16", "cahier17", "table18"]
    },
    12: {
        titre: "Dictée 12",
        jaune: ["chien1", "chat2", "oiseau3", "poisson4", "lapin5"],
        vert: ["chien6", "chat7", "oiseau8", "poisson9", "lapin10", "tortue11"],
        violet: ["chien12", "chat13", "oiseau14", "poisson15", "lapin16", "tortue17", "hamster18"]
    },
    13: {
        titre: "Dictée 13",
        jaune: ["pomme1", "poire2", "banane3", "orange4", "fraise5"],
        vert: ["pomme6", "poire7", "banane8", "orange9", "fraise10", "cerise11"],
        violet: ["pomme12", "poire13", "banane14", "orange15", "fraise16", "cerise17", "raisin18"]
    },
    14: {
        titre: "Dictée 14",
        jaune: ["soleil1", "lune2", "étoile3", "nuage4", "pluie5"],
        vert: ["soleil6", "lune7", "étoile8", "nuage9", "pluie10", "vent11"],
        violet: ["soleil12", "lune13", "étoile14", "nuage15", "pluie16", "vent17", "neige18"]
    },
    15: {
        titre: "Dictée 15",
        jaune: ["rouge1", "bleu2", "vert3", "jaune4", "noir5"],
        vert: ["rouge6", "bleu7", "vert8", "jaune9", "noir10", "blanc11"],
        violet: ["rouge12", "bleu13", "vert14", "jaune15", "noir16", "blanc17", "rose18"]
    },
    16: {
        titre: "Dictée 16",
        jaune: ["maison1", "jardin2", "école3", "livre4", "stylo5"],
        vert: ["maison6", "jardin7", "école8", "livre9", "stylo10", "cahier11"],
        violet: ["maison12", "jardin13", "école14", "livre15", "stylo16", "cahier17", "table18"]
    },
    17: {
        titre: "Dictée 17",
        jaune: ["chien1", "chat2", "oiseau3", "poisson4", "lapin5"],
        vert: ["chien6", "chat7", "oiseau8", "poisson9", "lapin10", "tortue11"],
        violet: ["chien12", "chat13", "oiseau14", "poisson15", "lapin16", "tortue17", "hamster18"]
    },
    18: {
        titre: "Dictée 18",
        jaune: ["pomme1", "poire2", "banane3", "orange4", "fraise5"],
        vert: ["pomme6", "poire7", "banane8", "orange9", "fraise10", "cerise11"],
        violet: ["pomme12", "poire13", "banane14", "orange15", "fraise16", "cerise17", "raisin18"]
    },
    19: {
        titre: "Dictée 19",
        jaune: ["soleil1", "lune2", "étoile3", "nuage4", "pluie5"],
        vert: ["soleil6", "lune7", "étoile8", "nuage9", "pluie10", "vent11"],
        violet: ["soleil12", "lune13", "étoile14", "nuage15", "pluie16", "vent17", "neige18"]
    },
    20: {
        titre: "Dictée 20",
        jaune: ["rouge1", "bleu2", "vert3", "jaune4", "noir5"],
        vert: ["rouge6", "bleu7", "vert8", "jaune9", "noir10", "blanc11"],
        violet: ["rouge12", "bleu13", "vert14", "jaune15", "noir16", "blanc17", "rose18"]
    },
    21: {
        titre: "Dictée 21",
        jaune: ["maison1", "jardin2", "école3", "livre4", "stylo5"],
        vert: ["maison6", "jardin7", "école8", "livre9", "stylo10", "cahier11"],
        violet: ["maison12", "jardin13", "école14", "livre15", "stylo16", "cahier17", "table18"]
    },
    22: {
        titre: "Dictée 22",
        jaune: ["chien1", "chat2", "oiseau3", "poisson4", "lapin5"],
        vert: ["chien6", "chat7", "oiseau8", "poisson9", "lapin10", "tortue11"],
        violet: ["chien12", "chat13", "oiseau14", "poisson15", "lapin16", "tortue17", "hamster18"]
    },
    23: {
        titre: "Dictée 23",
        jaune: ["pomme1", "poire2", "banane3", "orange4", "fraise5"],
        vert: ["pomme6", "poire7", "banane8", "orange9", "fraise10", "cerise11"],
        violet: ["pomme12", "poire13", "banane14", "orange15", "fraise16", "cerise17", "raisin18"]
    },
    24: {
        titre: "Dictée 24",
        jaune: ["soleil1", "lune2", "étoile3", "nuage4", "pluie5"],
        vert: ["soleil6", "lune7", "étoile8", "nuage9", "pluie10", "vent11"],
        violet: ["soleil12", "lune13", "étoile14", "nuage15", "pluie16", "vent17", "neige18"]
    },
    25: {
        titre: "Dictée 25",
        jaune: ["rouge1", "bleu2", "vert3", "jaune4", "noir5"],
        vert: ["rouge6", "bleu7", "vert8", "jaune9", "noir10", "blanc11"],
        violet: ["rouge12", "bleu13", "vert14", "jaune15", "noir16", "blanc17", "rose18"]
    }
};

// État de l'application
let currentUser = null;
let selectedUser = null;
let userData = {};
let selectedLists = new Set();
let practiceSession = {
    boxNumber: null,
    words: [],
    currentIndex: 0,
    correct: 0,
    currentWord: null
};

// Génération des étoiles
function createStars() {
    const container = document.getElementById('starsContainer');
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// Gestion du stockage
function loadUserData() {
    const data = localStorage.getItem('dicteeLeitnerData');
    return data ? JSON.parse(data) : {};
}

function saveUserData() {
    localStorage.setItem('dicteeLeitnerData', JSON.stringify(userData));
}

// Vérification des jours de révision
function canReviewBoxToday(boxNumber) {
    const today = new Date().getDay(); // 0 = dimanche, 1 = lundi, etc.
    
    if (boxNumber === 1) {
        return true; // Tous les jours
    } else if (boxNumber === 2) {
        return [2, 4, 6].includes(today); // Mardi, Jeudi, Samedi
    } else if (boxNumber === 3) {
        return [0, 3].includes(today); // Dimanche, Mercredi
    }
    return false;
}

function getDayName(boxNumber) {
    const days = {
        1: 'tous les jours',
        2: 'mardi, jeudi et samedi',
        3: 'mercredi et dimanche'
    };
    return days[boxNumber] || '';
}

function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function cleanOldReviewedWords() {
    if (!currentUser) return;
    
    const user = userData[currentUser];
    const todayKey = getTodayKey();
    
    // Initialiser reviewedToday si nécessaire
    if (!user.reviewedToday) {
        user.reviewedToday = [];
    }
    
    // Si c'est un nouveau jour, vider la liste
    const lastReviewDate = localStorage.getItem('lastReviewDate_' + currentUser);
    if (lastReviewDate !== todayKey) {
        user.reviewedToday = [];
        localStorage.setItem('lastReviewDate_' + currentUser, todayKey);
        saveUserData();
    }
}

function initializeUser(username) {
    if (!userData[username]) {
        userData[username] = {
            password: '',
            lists: {},
            boxes: {
                1: [],
                2: [],
                3: []
            },
            reviewedToday: []
        };
    }
}

// Gestion de la connexion
function displayUserList() {
    const container = document.getElementById('userListContainer');
    const users = Object.keys(userData);
    
    if (users.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); margin-bottom: 20px;">Aucun utilisateur. Crée ton espace !</p>';
    } else {
        container.innerHTML = users.map(username => `
            <div class="user-item" onclick="selectUser('${username}')">
                <span class="user-name">👤 ${username}</span>
                <button class="delete-user" onclick="deleteUser(event, '${username}')">Supprimer</button>
            </div>
        `).join('');
    }
}

function selectUser(username) {
    selectedUser = username;
    document.getElementById('newUserForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginPassword').focus();
}

function cancelLogin() {
    selectedUser = null;
    document.getElementById('newUserForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
}

function showTeacherLogin() {
    document.getElementById('newUserForm').classList.add('hidden');
    document.getElementById('teacherLoginForm').classList.remove('hidden');
    document.getElementById('teacherPassword').focus();
}

function cancelTeacherLogin() {
    document.getElementById('newUserForm').classList.remove('hidden');
    document.getElementById('teacherLoginForm').classList.add('hidden');
    document.getElementById('teacherPassword').value = '';
}

function loginTeacher() {
    const password = document.getElementById('teacherPassword').value;
    
    if (password !== 'Legouve59') {
        alert('Mot de passe incorrect !');
        document.getElementById('teacherPassword').value = '';
        return;
    }
    
    showTeacherPage();
}

function showTeacherPage() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('teacherPage').classList.remove('hidden');
    createTeacherEditor();
}

function logoutTeacher() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('teacherPage').classList.add('hidden');
    document.getElementById('newUserForm').classList.remove('hidden');
    document.getElementById('teacherLoginForm').classList.add('hidden');
    document.getElementById('teacherPassword').value = '';
}

function createUser() {
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;

    if (!username) {
        alert('Entre ton prénom !');
        return;
    }

    if (!password) {
        alert('Choisis un mot de passe !');
        return;
    }

    if (userData[username]) {
        alert('Ce prénom existe déjà !');
        return;
    }

    initializeUser(username);
    userData[username].password = password;
    saveUserData();
    currentUser = username;
    
    showMainPage();
}

function loginUser() {
    const password = document.getElementById('loginPassword').value;

    if (!selectedUser || !userData[selectedUser]) {
        alert('Utilisateur non trouvé !');
        return;
    }

    if (userData[selectedUser].password !== password) {
        alert('Mot de passe incorrect !');
        document.getElementById('loginPassword').value = '';
        return;
    }

    currentUser = selectedUser;
    cleanOldReviewedWords();
    showMainPage();
}

function deleteUser(event, username) {
    event.stopPropagation();
    if (confirm(`Supprimer l'utilisateur ${username} et toutes ses données ?`)) {
        delete userData[username];
        saveUserData();
        displayUserList();
    }
}

function logout() {
    currentUser = null;
    selectedUser = null;
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('newUserForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('loginPassword').value = '';
}

function showMainPage() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
    document.getElementById('currentUserName').textContent = `👤 ${currentUser}`;
    
    cleanOldReviewedWords();
    updateBoxesDisplay();
    updateProgressDisplay();
    createDicteeGrid();
}

// Gestion des onglets
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

// Affichage des boîtes
function updateBoxesDisplay() {
    const user = userData[currentUser];
    
    for (let i = 1; i <= 3; i++) {
        const canReview = canReviewBoxToday(i);
        const allWords = user.boxes[i];
        const reviewedToday = user.reviewedToday || [];
        const availableWords = allWords.filter(w => !reviewedToday.includes(w));
        const count = availableWords.length;
        const words = availableWords.slice(0, 10);
        
        document.getElementById(`box${i}Count`).textContent = count;
        
        let previewHTML = '';
        if (words.length > 0) {
            previewHTML = words.map(w => `<div class="word-preview">• ${w}</div>`).join('');
        } else if (allWords.length > 0 && availableWords.length === 0) {
            previewHTML = '<div class="word-preview" style="color: var(--secondary);">✓ Tous les mots révisés aujourd\'hui</div>';
        } else {
            previewHTML = '<div class="word-preview" style="color: var(--text-light);">Aucun mot</div>';
        }
        
        if (!canReview) {
            previewHTML = `<div class="word-preview" style="color: var(--danger); font-weight: 600;">⏰ Disponible ${getDayName(i)}</div>`;
        }
        
        document.getElementById(`box${i}Preview`).innerHTML = previewHTML;
        
        // Désactiver le bouton si impossible de réviser
        const btn = document.querySelector(`.leitner-box.box${i} .btn-practice`);
        if (btn) {
            btn.disabled = !canReview || count === 0;
            btn.style.opacity = (!canReview || count === 0) ? '0.5' : '1';
            btn.style.cursor = (!canReview || count === 0) ? 'not-allowed' : 'pointer';
        }
    }
}

function showBoxWords(boxNumber) {
    const user = userData[currentUser];
    const allWords = user.boxes[boxNumber];
    const reviewedToday = user.reviewedToday || [];
    const words = allWords.filter(w => !reviewedToday.includes(w));
    
    if (allWords.length === 0) {
        alert(`La boîte ${boxNumber} est vide !`);
        return;
    }

    let content = `<h2 class="modal-title">Boîte ${boxNumber} (${words.length} mots disponibles / ${allWords.length} total)</h2>`;
    
    if (words.length > 0) {
        content += `<div style="max-height: 400px; overflow-y: auto;">
            ${words.map(w => `<div class="word-preview" style="padding: 8px; border-bottom: 1px solid #E5E7EB;">• ${w}</div>`).join('')}
        </div>`;
    } else {
        content += `<p style="color: var(--secondary); text-align: center; padding: 20px;">Tous les mots ont été révisés aujourd'hui !</p>`;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            ${content}
            <button class="close-modal btn" onclick="this.closest('.modal').remove()">Fermer</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Progression
function updateProgressDisplay() {
    const user = userData[currentUser];
    const lists = Object.keys(user.lists);
    
    const container = document.getElementById('progressList');
    
    if (lists.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 20px;">Aucune liste ajoutée. Va dans "Ajouter des listes" !</p>';
        return;
    }

    container.innerHTML = lists.map(listName => {
        const list = user.lists[listName];
        const total = list.words.length;
        const inBox1 = list.words.filter(w => user.boxes[1].includes(w)).length;
        const inBox2 = list.words.filter(w => user.boxes[2].includes(w)).length;
        const inBox3 = list.words.filter(w => user.boxes[3].includes(w)).length;
        const mastered = total - inBox1 - inBox2 - inBox3;
        const progress = total > 0 ? Math.round((mastered / total) * 100) : 0;

        return `
            <div class="progress-item">
                <div style="font-weight: 600; min-width: 200px;">${listName}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
                <div style="font-weight: 600; color: var(--success); min-width: 80px;">${mastered}/${total}</div>
                <button class="delete-list-btn" onclick="deleteList('${listName}')">Supprimer</button>
            </div>
        `;
    }).join('');
}

function deleteList(listName) {
    if (!confirm(`Supprimer la liste "${listName}" ?`)) return;

    const user = userData[currentUser];
    const words = user.lists[listName].words;

    // Retirer les mots de toutes les boîtes
    for (let i = 1; i <= 3; i++) {
        user.boxes[i] = user.boxes[i].filter(w => !words.includes(w));
    }

    delete user.lists[listName];
    saveUserData();
    updateBoxesDisplay();
    updateProgressDisplay();
}

// Sélection de listes
function createDicteeGrid() {
    const grid = document.getElementById('dicteeGrid');
    selectedLists.clear();
    
    grid.innerHTML = '';
    for (let i = 1; i <= 25; i++) {
        const card = document.createElement('div');
        card.className = 'dictee-card';
        card.innerHTML = `
            <div class="dictee-number">${DICTEES_DATA[i].titre}</div>
            <div class="color-options">
                <div class="color-option jaune" data-dictee="${i}" data-color="jaune" onclick="toggleColor(this)">
                    Jaune
                </div>
                <div class="color-option vert" data-dictee="${i}" data-color="vert" onclick="toggleColor(this)">
                    Vert
                </div>
                <div class="color-option violet" data-dictee="${i}" data-color="violet" onclick="toggleColor(this)">
                    Violet
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
}

function toggleColor(element) {
    const dictee = element.dataset.dictee;
    const color = element.dataset.color;
    const dicteeNum = parseInt(dictee);
    const titre = DICTEES_DATA[dicteeNum].titre;
    const listKey = `${titre} - ${color}`;
    
    element.classList.toggle('selected');
    
    if (element.classList.contains('selected')) {
        selectedLists.add(JSON.stringify({ dicteeNum, color, listKey }));
    } else {
        selectedLists.delete(JSON.stringify({ dicteeNum, color, listKey }));
    }
}

function addSelectedLists() {
    if (selectedLists.size === 0) {
        alert('Sélectionne au moins une liste !');
        return;
    }

    const user = userData[currentUser];
    let addedCount = 0;
    
    selectedLists.forEach(listJSON => {
        const { dicteeNum, color, listKey } = JSON.parse(listJSON);
        const words = DICTEES_DATA[dicteeNum][color];

        if (!user.lists[listKey]) {
            user.lists[listKey] = { words: [...words] };
            
            // Ajouter tous les mots dans la boîte 1
            words.forEach(word => {
                if (!user.boxes[1].includes(word)) {
                    user.boxes[1].push(word);
                }
            });
            addedCount++;
        }
    });

    saveUserData();
    selectedLists.clear();
    createDicteeGrid();
    updateBoxesDisplay();
    updateProgressDisplay();
    
    showNotification(`✅ ${addedCount} liste(s) ajoutée(s) avec succès !`);
}

// Notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.4s ease-out reverse';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Espace enseignant
function createTeacherEditor() {
    const container = document.getElementById('teacherEditor');
    container.innerHTML = '';
    
    const grid = document.createElement('div');
    grid.className = 'dictee-editor-grid';
    
    for (let i = 1; i <= 25; i++) {
        const card = document.createElement('div');
        card.className = 'dictee-editor-card';
        card.innerHTML = `
            <div class="dictee-editor-title">Dictée ${i}</div>
            
            <div class="color-section">
                <div class="color-section-title" style="color: var(--primary); font-size: 1.1rem;">📝 Titre personnalisé</div>
                <input type="text" 
                       class="word-list-editor" 
                       style="min-height: auto; height: 45px;"
                       data-dictee="${i}" 
                       placeholder="Ex: Le roi de la forêt"
                       value="${DICTEES_DATA[i].titre}"
                       onchange="updateDicteeTitre(${i}, this.value)">
            </div>
            
            <div class="color-section">
                <div class="color-section-title jaune">🟡 Jaune (mots simples)</div>
                <textarea class="word-list-editor" 
                          data-dictee="${i}" 
                          data-color="jaune"
                          placeholder="Entrez les mots séparés par des virgules"
                          onchange="updateDicteeData(${i}, 'jaune', this.value)">${DICTEES_DATA[i].jaune.join(', ')}</textarea>
            </div>
            
            <div class="color-section">
                <div class="color-section-title vert">🟢 Vert (mots moyens)</div>
                <textarea class="word-list-editor" 
                          data-dictee="${i}" 
                          data-color="vert"
                          placeholder="Entrez les mots séparés par des virgules"
                          onchange="updateDicteeData(${i}, 'vert', this.value)">${DICTEES_DATA[i].vert.join(', ')}</textarea>
            </div>
            
            <div class="color-section">
                <div class="color-section-title violet">🟣 Violet (mots difficiles)</div>
                <textarea class="word-list-editor" 
                          data-dictee="${i}" 
                          data-color="violet"
                          placeholder="Entrez les mots séparés par des virgules"
                          onchange="updateDicteeData(${i}, 'violet', this.value)">${DICTEES_DATA[i].violet.join(', ')}</textarea>
            </div>
        `;
        grid.appendChild(card);
    }
    
    container.appendChild(grid);
}

function updateDicteeTitre(dicteeNum, titre) {
    DICTEES_DATA[dicteeNum].titre = titre.trim() || `Dictée ${dicteeNum}`;
}

function updateDicteeData(dicteeNum, color, value) {
    const words = value.split(',')
        .map(w => w.trim().toLowerCase())
        .filter(w => w.length > 0);
    
    DICTEES_DATA[dicteeNum][color] = words;
}

function saveAndExportHTML() {
    // Générer le nouveau HTML avec les données modifiées
    const htmlContent = generateUpdatedHTML();
    
    // Créer un blob et télécharger
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dictee-leitner-personnalise.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('✅ Fichier HTML téléchargé avec vos modifications !');
}

function generateUpdatedHTML() {
    // Pour une app web GitHub, on génère un fichier standalone
    let htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>J'apprends mes mots de dictée en CE2</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
`;
    
    // Lire le CSS
    fetch('style.css')
        .then(r => r.text())
        .then(css => {
            htmlContent += `<style>${css}</style>\n</head>\n<body>\n`;
            
            // Lire le HTML du body
            const bodyContent = document.body.innerHTML;
            htmlContent += bodyContent;
            
            // Ajouter le script avec les données mises à jour
            htmlContent += `\n<script>\n`;
            htmlContent += `const DICTEES_DATA = ${JSON.stringify(DICTEES_DATA, null, 2)};\n\n`;
            
            // Ajouter le reste du script
            fetch('script.js')
                .then(r => r.text())
                .then(js => {
                    // Enlever la déclaration DICTEES_DATA du script original
                    const jsWithoutData = js.replace(/const DICTEES_DATA = \{[\s\S]*?\};/, '');
                    htmlContent += jsWithoutData;
                    htmlContent += `\n</script>\n</body>\n</html>`;
                    
                    // Télécharger
                    const blob = new Blob([htmlContent], { type: 'text/html' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'dictee-leitner-personnalise.html';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                });
        });
    
    return '';
}

// Révision
function startPractice(boxNumber) {
    // Vérifier si on peut réviser cette boîte aujourd'hui
    if (!canReviewBoxToday(boxNumber)) {
        alert(`La boîte ${boxNumber} ne peut être révisée que ${getDayName(boxNumber)} !`);
        return;
    }

    const user = userData[currentUser];
    const reviewedToday = user.reviewedToday || [];
    const availableWords = user.boxes[boxNumber].filter(w => !reviewedToday.includes(w));

    if (availableWords.length === 0) {
        if (user.boxes[boxNumber].length > 0) {
            alert(`Tous les mots de la boîte ${boxNumber} ont déjà été révisés aujourd'hui !`);
        } else {
            alert(`La boîte ${boxNumber} est vide !`);
        }
        return;
    }

    // Mélanger les mots
    const words = [...availableWords];
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }

    practiceSession = {
        boxNumber,
        words,
        currentIndex: 0,
        correct: 0,
        currentWord: null
    };

    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('practicePage').classList.remove('hidden');
    document.getElementById('practiceBoxNumber').textContent = boxNumber;
    
    showNextWord();
}

function showNextWord() {
    if (practiceSession.currentIndex >= practiceSession.words.length) {
        endPractice();
        return;
    }

    practiceSession.currentWord = practiceSession.words[practiceSession.currentIndex];
    
    document.getElementById('wordNumber').textContent = 
        `Mot ${practiceSession.currentIndex + 1} sur ${practiceSession.words.length}`;
    document.getElementById('practiceCorrect').textContent = practiceSession.correct;
    document.getElementById('practiceTotal').textContent = practiceSession.currentIndex;
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').className = 'answer-input';
    document.getElementById('feedbackContainer').innerHTML = `
        <div style="text-align: center; color: var(--text-light);">
            <div style="font-size: 3rem; margin-bottom: 20px;">💡</div>
            <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;">Conseil</p>
            <p style="font-size: 1rem;">Écoute bien le mot et écris-le lettre par lettre.</p>
            <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.8;">Le feedback s'affichera ici après validation</p>
        </div>
    `;
    
    // Lire automatiquement le mot
    speakWord();
}

function speakWord() {
    const word = practiceSession.currentWord;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

function typeKey(char) {
    const input = document.getElementById('answerInput');
    input.value += char;
    input.focus();
}

function typeBackspace() {
    const input = document.getElementById('answerInput');
    input.value = input.value.slice(0, -1);
    input.focus();
}

function validateAnswer() {
    const userAnswer = document.getElementById('answerInput').value.toLowerCase().trim();
    const correctWord = practiceSession.currentWord;
    const isCorrect = userAnswer === correctWord;

    const input = document.getElementById('answerInput');
    const feedbackContainer = document.getElementById('feedbackContainer');

    if (isCorrect) {
        input.classList.add('correct');
        practiceSession.correct++;
        
        feedbackContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-family: 'Fredoka', sans-serif; font-size: 3rem; margin-bottom: 20px;">🎉</div>
                <div style="font-family: 'Fredoka', sans-serif; font-size: 2rem; font-weight: 700; color: var(--success); margin-bottom: 15px;">
                    Bravo !
                </div>
                <div style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 20px;">
                    Tu as bien écrit le mot
                </div>
                <div style="font-size: 2rem; font-weight: 700; color: var(--success); margin-bottom: 30px; padding: 15px; background: rgba(78, 205, 196, 0.1); border-radius: 15px;">
                    ${correctWord}
                </div>
                <button class="btn" onclick="moveWordAndContinue(true)" style="font-size: 1.1rem;">
                    ➡️ Mot suivant
                </button>
            </div>
        `;

    } else {
        input.classList.add('incorrect');
        
        feedbackContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-family: 'Fredoka', sans-serif; font-size: 3rem; margin-bottom: 20px;">💭</div>
                <div style="font-family: 'Fredoka', sans-serif; font-size: 1.8rem; font-weight: 700; color: var(--danger); margin-bottom: 15px;">
                    Pas tout à fait...
                </div>
                <div style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 15px;">
                    Ta réponse :
                </div>
                <div style="font-size: 1.5rem; font-weight: 600; color: var(--danger); margin-bottom: 15px; padding: 10px; background: rgba(230, 57, 70, 0.1); border-radius: 10px; text-decoration: line-through;">
                    ${userAnswer || '(vide)'}
                </div>
                <div style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 15px;">
                    Le mot correct est :
                </div>
                <div style="font-size: 2rem; font-weight: 700; color: var(--success); margin-bottom: 30px; padding: 15px; background: rgba(78, 205, 196, 0.1); border-radius: 15px;">
                    ${correctWord}
                </div>
                <button class="btn" onclick="moveWordAndContinue(false)" style="font-size: 1.1rem;">
                    ➡️ Mot suivant
                </button>
            </div>
        `;
    }
}

function moveWordAndContinue(isCorrect) {
    const user = userData[currentUser];
    const word = practiceSession.currentWord;
    const currentBox = practiceSession.boxNumber;

    // Ajouter le mot à la liste des mots révisés aujourd'hui
    if (!user.reviewedToday) {
        user.reviewedToday = [];
    }
    if (!user.reviewedToday.includes(word)) {
        user.reviewedToday.push(word);
    }

    // Retirer le mot de la boîte actuelle
    user.boxes[currentBox] = user.boxes[currentBox].filter(w => w !== word);

    if (isCorrect) {
        // Mot réussi : progression vers boîte supérieure
        const nextBox = Math.min(currentBox + 1, 3);
        if (nextBox <= 3 && !user.boxes[nextBox].includes(word)) {
            user.boxes[nextBox].push(word);
        }
    } else {
        // Mot raté : retour en boîte 1
        if (!user.boxes[1].includes(word)) {
            user.boxes[1].push(word);
        }
    }

    saveUserData();
    practiceSession.currentIndex++;
    showNextWord();
}

function endPractice() {
    const totalWords = practiceSession.currentIndex;
    const correctWords = practiceSession.correct;
    const percentage = totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;

    alert(`Révision terminée !\n\n✅ Réussies : ${correctWords}\n📝 Total : ${totalWords}\n📊 Score : ${percentage}%`);

    document.getElementById('practicePage').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
    
    updateBoxesDisplay();
    updateProgressDisplay();
}

// Initialisation
window.onload = function() {
    createStars();
    userData = loadUserData();
    
    // Initialiser reviewedToday pour les utilisateurs existants
    Object.keys(userData).forEach(username => {
        if (!userData[username].reviewedToday) {
            userData[username].reviewedToday = [];
        }
    });
    saveUserData();
    
    displayUserList();
};
