# T08: Vigilància i Auditoria de Sistemes

## Breu descripció

Implementació de mecanismes de monitorització i auditoria de seguretat a la infraestructura de **TransLògic S.A.** per detectar activitats sospitoses, intents d’intrusió i verificar l’estat del sistema.

---

## Introducció

Un cop la infraestructura base està operativa, l’empresa necessita garantir la **integritat de les dades** i la detecció d’accessos no autoritzats.

L’objectiu és configurar sistemes de vigilància activa mitjançant:

- Monitorització de recursos
- Auditoria d’accessos
- Simulació d’incidents
- Anàlisi forense dels logs

---

## 1. Monitorització de Recursos

Verificació del rendiment del servidor.

### Accions realitzades

- Accés al **Monitor de Rendiment** o **Gestor de Tasques**
- Captura de:
  - Ús de CPU
  - Memòria RAM disponible

### Interpretació

S’analitza si el servidor:

- està saturat ❌  
- o funciona amb normalitat ✅

---

## 2. Configuració d'Auditoria de Seguretat

Activació del registre d’inicis de sessió per detectar possibles atacs.

### Configuració

Mitjançant **GPO** o política local:

Activar auditoria de:

- ✅ Inicis de sessió correctes (Success)
- ✅ Inicis de sessió fallits (Failure)

Objectiu: detectar intents de força bruta.

---

## 3. Simulació d'Incidents (Hacking Ètic)

Prova del sistema d’auditoria configurat.

### Procediment

1. Tancar la sessió actual.
2. Intentar iniciar sessió amb contrasenya incorrecta.
3. Repetir l’error **3 o 4 vegades**.
4. Iniciar sessió correctament amb administrador.

---

## 4. Anàlisi Forense (Event Viewer)

Investigació dels intents d'accés registrats.

### Passos

- Obrir **Event Viewer**
- Accedir a:

```
Windows Logs → Security
```

- Localitzar esdeveniments recents d’error
- Analitzar detalls:
  - Usuari
  - Hora
  - IP d’origen (si disponible)

### Dada clau

Event ID d’intent d’inici de sessió fallit:

```
4625
```

---

## Lliurables

### Informe d'Auditoria

Incloure:

- Captura dels recursos del sistema + interpretació
- Captura de la política d’auditoria configurada
- Evidència del Visor d’Esdeveniments amb errors generats
- Identificació de l’Event ID corresponent

---

## Material de suport

```
0224 SOX — UD7 (AA3)
```

Disponible al Moodle de l’assignatura.
