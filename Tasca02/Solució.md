
# Tasques a realitzar

## 1. Instal·lació del servidor Apache

Instal·lar Apache en Ubuntu Server:

- Actualitzar repositoris.
- Instal·lar el servei web.
- Verificar el funcionament del servidor.

![solucio](/Tasca02/img/1.png) 
![solucio](/Tasca02/img/2.png) 
![solucio](/Tasca02/img/4.png) 
![solucio](/Tasca02/img/5.png) 
![solucio](/Tasca02/img/6.png)

Objectiu:
Garantir que el servei HTTP està operatiu.

---

## 2. Configuració de dominis virtuals (Virtual Hosts)

Configurar dos llocs web independents dins el mateix servidor Apache.

### Requisits

- Cada web ha de tenir el seu directori propi.
- Configuració independent per domini.
- Separació clara dels continguts.

![solucio](/tasca1/img/3.png) 
![solucio](/tasca1/img/7.png) 
![solucio](/tasca1/img/8.png) 
![solucio](/tasca1/img/9.png) 
![solucio](/tasca1/img/10.png) 
![solucio](/tasca1/img/11.png) 
![solucio](/tasca1/img/12.png) 
![solucio](/tasca1/img/13.png)

Exemple conceptual:

```
/var/www/agencia
/var/www/academia
```

Objectiu:
Permetre allotjar múltiples webs en un únic servidor.

---

## 3. Configuració DNS local

Configurar la resolució de noms per poder accedir als dominis des de l’entorn de proves.

Exemple:

```
agencia.local
academia.local
```

Objectiu:
Simular el comportament real d’Internet dins la xarxa local.

---

## 4. Securització amb SSL/TLS

Implementar comunicacions xifrades mitjançant HTTPS.

### Accions

- Generar certificats SSL.
- Activar el mòdul SSL d’Apache.
- Forçar connexions HTTPS.

Objectiu:
Garantir confidencialitat i integritat de les comunicacions.

---

## 5. Optimització del rendiment

Aplicar configuracions modernes del protocol web:

- Activació HTTP/2 (si és possible).
- Compressió de contingut.
- Millora del temps de resposta.

Objectiu:
Millorar l’experiència d’usuari i el rendiment del servidor.

---

## 6. Proves de funcionament

Verificar:

- Accés correcte als dos dominis.
- Funcionament del protocol HTTPS.
- Separació entre webs.
- Correcte servei Apache actiu.

---
