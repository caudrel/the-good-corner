## Setup

### Install dependencies

```sh
npm i
```

### Environement variables

```
cp .env.example .env
```

And then change variables inside `.env` to match your own environment.
If you ever want to add an environment variable, please add it to `.env.example`.

### builder l'image et lancer le server

docker compose -f docker-compose.yml up --build

front available on port 3000
back available on port 4001
