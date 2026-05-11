# DevHire Platform - CI/CD Implementation
## 📌 Overview
DevHire Platform is a simple web application that serves as a developer talent directory. The project is built to demonstrate a basic end-to-end DevOps workflow, including containerization, CI/CD automation, and deployment to a VPS environment.

The main focus of this project is to implement a complete deployment pipeline using lightweight infrastructure and production-like practices.

---

## 🌐 Live Demo
https://dacoders.web.id/

---

## 🧩 Features
- Display list of developer talents
- Search talent by skill, role, or experience
- View developer profile details
- Add new talent via form input

---

## 🏗️ Architecture
User → Nginx → Static Web Application


### Architecture Details:
- Single server deployment
- Static frontend (HTML, CSS, JavaScript)
- Nginx used as web server and reverse proxy
- Docker used for containerization

---

## ☁️ Infrastructure
- Type: VPS (IaaS)
- CPU: 1 vCPU
- RAM: 512MB
- Storage: 10GB
- OS: Ubuntu Server
- Region: Singapore

---

## 🐳 Docker Implementation
The application is containerized using Docker with Nginx as the base image.

### Implementation Details:
- Base image: Nginx
- Static files copied into container
- Application runs inside a Docker container

### Benefits:
- Consistent environment across development and production
- Easy deployment process
- Lightweight and portable setup

---

## 🔄 CI/CD Pipeline
This project uses a CI/CD pipeline to automate deployment from repository to server.

### Workflow:
Git Push → GitHub Actions → Build Docker Image → Deploy to VPS → Restart Container


### Implementation:
- GitHub Actions used for automation
- Docker build process integrated into pipeline
- SSH-based deployment to VPS

### Benefits:
- Automated deployment process
- Reduced manual intervention
- Faster and consistent delivery

---

## 🚀 Deployment Strategy
- Application runs inside a Docker container
- Nginx handles web serving
- Single VPS deployment (monolithic setup)

This approach is chosen for simplicity and resource efficiency.

---

## 💰 Cost Optimization
Since the project runs on a low-spec VPS, several optimizations are applied:
- 1GB swap memory to improve stability
- Minimal container footprint
- No auto-scaling to reduce cost
- Lightweight system monitoring

---

## 📊 Monitoring
Basic monitoring tools are used:
- `htop` → CPU and memory monitoring
- `docker stats` → container resource usage
- Nginx logs → request and error tracking

---

## 🔐 Security
- UFW firewall enabled
- SSH-only access to server
- Nginx reverse proxy configuration
- HTTPS enabled using Let's Encrypt (Certbot)

---

## 🛠️ Tech Stack
- HTML, CSS, JavaScript
- Nginx
- Docker
- GitHub Actions
- Ubuntu Server (VPS)

---

## 📦 Summary
This project demonstrates a basic DevOps workflow including:
- Source code management with GitHub
- CI/CD automation using GitHub Actions
- Containerization using Docker
- Deployment to VPS infrastructure
- Web serving using Nginx

The system is designed to be simple, lightweight, and suitable for low-resource environments while still following DevOps best practices.