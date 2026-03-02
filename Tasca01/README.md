
# T01 — Sota el Capó d'Internet: Què passa realment quan fas clic a un enllaç?

## 📘 Descripció de l'activitat

Aquesta activitat forma part del procés de formació tècnica necessari per preparar l’empresa per oferir serveis professionals d’allotjament web (Hosting).

L’objectiu és entendre què succeeix realment quan un usuari accedeix a una pàgina web, analitzant els protocols, serveis i mecanismes que funcionen "sota el capó" d’Internet.

La incubadora d’empreses proposa una **formació intensiva sobre el protocol HTTP i els servidors web** per millorar el nivell tècnic de l’equip i poder competir amb empreses del sector.

---

## 🎯 Objectius d'aprenentatge

- Entendre el funcionament del protocol HTTP/HTTPS.
- Comprendre el procés complet d’accés a una web.
- Analitzar el paper dels servidors web.
- Conèixer aspectes bàsics de seguretat web.
- Preparar-se per a la gestió de serveis d’allotjament professional.

---

## 🌐 Què passa quan fem clic a un enllaç?

Quan un usuari escriu una URL com:


es produeixen diversos processos:

### 1️⃣ Resolució DNS
El navegador consulta un servidor DNS per convertir el nom de domini en una adreça IP.

Exemple:


---

### 2️⃣ Connexió TCP
El navegador estableix una connexió amb el servidor web mitjançant el protocol TCP.

- Port 80 → HTTP
- Port 443 → HTTPS

---

### 3️⃣ Negociació HTTPS (si és segura)
Si la web utilitza HTTPS:

- Es valida el certificat SSL/TLS.
- Es crea una connexió xifrada.

---

### 4️⃣ Petició HTTP
El navegador envia una sol·licitud al servidor:


---

### 5️⃣ Resposta del servidor
El servidor web respon amb:

- Codi d’estat (200, 404, 500…)
- Contingut HTML
- Recursos addicionals (CSS, JS, imatges)

---

### 6️⃣ Renderització
El navegador interpreta el contingut i mostra la pàgina web a l’usuari.

---

## 🖥️ Components implicats

- Navegador web (client)
- Servidor DNS
- Servidor web (Apache / Nginx / IIS)
- Protocol HTTP/HTTPS
- Xarxa Internet

---

## 🔐 Aspectes de seguretat importants

- Ús de HTTPS i certificats SSL/TLS
- Actualització del servidor web
- Control d’accessos
- Protecció contra atacs comuns (XSS, SQL Injection, DDoS)

---

## 📚 Material de suport

- UD5.AA1 — El servei web (Moodle Serveis de Xarxa)

---

## ✅ Resultats esperats

Al final de la formació s’ha de ser capaç de:

- Explicar el funcionament del protocol HTTP.
- Entendre la comunicació client-servidor.
- Configurar serveis web bàsics.
- Superar l’examen final de competència tècnica.

---

## 🚀 Aplicació al projecte empresarial

Aquest coneixement permetrà oferir serveis professionals com:

- Hosting web
- Administració de servidors
- Optimització del rendiment web
- Seguretat de serveis online

La comprensió profunda del funcionament d’Internet és clau per diferenciar-se com a consultors IT professionals.
