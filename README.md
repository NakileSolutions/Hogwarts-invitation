# Hogwarts Invitation - Site d'invitation magique

Site web interactif pour révéler une invitation aux studios Harry Potter à Londres.

## Fonctionnalités

- Système d'énigmes progressives en anglais (5 niveaux de difficulté)
- Animation d'enveloppe de Poudlard qui s'ouvre
- Lettre d'invitation personnalisée qui sort de l'enveloppe
- Design responsive (mobile et desktop)

## Déploiement

### Prérequis
- Docker
- Docker Compose
- Cloudflare Tunnel configuré

### Installation

1. Cloner le projet
```
git clone git@github.com:NakileSolutions/Hogwarts-invitation.git
cd hogwarts-invitation
```

2. Personnaliser la lettre
Éditer `public/index.html` et remplacer :
- `[Nom de sa sœur]` par le prénom
- `[Date du voyage]` par la date réelle
- `[Vos prénoms]` par vos prénoms

3. Build et lancer
```
docker-compose up -d --build
```

4. Vérifier les logs
```
docker-compose logs -f
```

5. Configurer Cloudflare Tunnel
Pointer `[votrenomdedomaine]` vers `http://localhost:8080`

## Structure du projet

```
hogwarts-invitation/
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md
```

## Technologies

- HTML/CSS/JavaScript (vanilla)
- Nginx
- Docker
- Cloudflare Tunnel

## Réponses aux énigmes

Les réponses acceptées sont : `londres` ou `london` (insensible à la casse)
