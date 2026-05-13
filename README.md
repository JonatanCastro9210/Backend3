# Backend 3 - Entrega Final

Proyecto realizado para la entrega final del curso Backend 3.

## Tecnologias utilizadas

- Node.js
- Express
- Jest
- Supertest
- Docker

---

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/JonatanCastro00/backend3.git
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar servidor

```bash
npm start
```

Servidor funcionando en:
```bash
http://localhost:8080
```

---

## Ejectuar tests

```bash
npm test
```

---

## Docker

Construir imagen:

```bash
docker build -t backend3 .
```

Ejecutar contenedor:

```bash
docker run -p 8080:8080 backend3
```

---

# Imagen DockerHub

htpps://hub.docker.com/r/jonatancastro00/backend3

---

## Endpoints

### GET /api/adoptions

Obtiene todas las adopciones.

### POST /api/adoptions

Crea una nueva adopción.

Ejemplo body:

```json
{
    "users": "Jonatan"
    "pet": "Simon"
}

```

---

## Autor 


Jonatan Castro