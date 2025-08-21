# Repo donde estan todos los videos de xacademy dev-25 en html
**Seguimos documentando y avanzando**
-------------

# 🐳 Mini Guía de Docker en Debian 13 (Trixie)

Esta guía paso a paso muestra cómo instalar Docker en **Debian 13**, configurar el sistema para usar Docker sin `sudo` y probar contenedores básicos y avanzados como Nginx. Ideal para aprender o compartir con alumnos.

---

## 1️⃣ Preparativos en Debian 13

Antes de instalar Docker, asegúrate de que tu sistema esté actualizado:

```bash
sudo apt update
sudo apt upgrade -y



## 2️⃣ Instalar dependencias necesarias

Docker necesita algunas utilidades para manejar llaves GPG y repositorios:

sudo apt install -y ca-certificates curl gnupg lsb-release


ca-certificates → Permite conexiones HTTPS seguras

curl → Para descargar archivos desde internet

gnupg → Gestiona llaves GPG

lsb-release → Permite detectar la versión de Debian automáticamente

3️⃣ Agregar la llave GPG de Docker

Debido a que apt-key está obsoleto, usamos:

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg


🔑 Esto asegura que APT confíe en los paquetes de Docker.

4️⃣ Configurar el repositorio oficial de Docker
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


💡 Esto permite que Debian descargue los paquetes oficiales de Docker.

5️⃣ Instalar Docker

Actualiza los repositorios y luego instala Docker y sus complementos:

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

6️⃣ Verificar instalación

Prueba Docker con el contenedor hello-world:

sudo docker run hello-world


Si ves:

Hello from Docker!
This message shows that your installation appears to be working correctly.


significa que la instalación fue exitosa. 🎉

7️⃣ Configurar Docker para usar sin sudo

Crear el grupo docker si no existe:

sudo groupadd docker


Agregar tu usuario al grupo:

sudo usermod -aG docker $USER


Aplicar los cambios sin reiniciar sesión:

newgrp docker


Verificar:

docker run hello-world


Si funciona sin sudo, todo está listo. ✅

8️⃣ Habilitar Docker para iniciar automáticamente
sudo systemctl enable docker
sudo systemctl enable containerd


Para verificar:

systemctl status docker
systemctl status containerd


Deben aparecer como active (running).

9️⃣ Comandos básicos de Docker
Comando	Descripción
docker --version	Ver versión de Docker
docker compose version	Ver versión de Docker Compose
docker images	Listar imágenes descargadas
docker ps	Listar contenedores activos
docker ps -a	Listar todos los contenedores
docker stop <nombre>	Detener contenedor
docker rm <nombre>	Eliminar contenedor
docker pull <imagen>	Descargar imagen
docker build -t <nombre> .	Crear imagen desde Dockerfile
docker run -d -p 8080:80 --name mi-nginx nginx	Ejecutar contenedor Nginx
🔥 10️⃣ Probar contenedor avanzado: Nginx

Ejecutar Nginx en segundo plano:

docker run -d -p 8080:80 --name mi-nginx nginx


Abrir el navegador en:

http://localhost:8080


Verás la página de bienvenida de Nginx. 🖥️

Listar contenedores activos:

docker ps


Detener y eliminar el contenedor:

docker stop mi-nginx
docker rm mi-nginx

✅ 11️⃣ Conclusión

Con estos pasos, tienes un entorno Docker completamente funcional en Debian 13, listo para:

Probar contenedores de prueba.

Ejecutar servidores web como Nginx.

Construir y probar tus propias imágenes y contenedores.

Enseñar a tus alumnos de forma práctica y segura.

🎓 ¡Ya estás listo para comenzar a explorar Docker y contenedores en Debian 13!