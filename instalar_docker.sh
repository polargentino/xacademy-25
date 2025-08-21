#!/bin/bash
# Script para instalar Docker en Debian 13

echo "🚀 Desinstalando versiones antiguas de Docker..."
sudo apt remove -y docker docker-engine docker.io containerd runc

echo "🔄 Actualizando índice de paquetes e instalando dependencias..."
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

echo "🗝️ Agregando la llave GPG de Docker..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo "📦 Agregando el repositorio de Docker..."
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

echo "🔄 Actualizando repositorios nuevamente..."
sudo apt update

echo "🐳 Instalando Docker..."
sudo apt install -y docker-ce docker-ce-cli containerd.io

echo "✅ Probando instalación de Docker con hello-world..."
sudo docker run hello-world

echo "👤 Configurando Docker para usar sin sudo..."
sudo usermod -aG docker $USER

echo "🔄 Recarga de grupo Docker (puedes necesitar cerrar sesión y volver a entrar)..."
newgrp docker

echo "🟢 Probando Docker sin sudo..."
docker run hello-world

echo "⚙️ Habilitando Docker al iniciar Debian..."
sudo systemctl enable docker
sudo systemctl enable containerd

echo "🎉 Instalación y configuración de Docker completada."
