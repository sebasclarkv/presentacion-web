# Presentación - Sebastian Clark

Landing page moderna para mostrar propuesta profesional a clientes potenciales.

## Archivos

- `index.html`: estructura principal de la presentación y formulario de contacto.
- `styles.css`: diseño visual moderno (glassmorphism, gradientes y animaciones suaves).

## Cómo probar

Abre `index.html` en tu navegador.

## Formulario de contacto

El formulario está integrado con `EmailJS` para enviar el correo directamente desde la página hacia:

- `sebasclarkv@icloud.com`

### Configuración rápida (gratis)

1. Crea cuenta en [EmailJS](https://www.emailjs.com/).
2. Agrega un servicio de correo (por ejemplo Gmail u Outlook) y copia tu `SERVICE_ID`.
3. Crea un template de email y copia tu `TEMPLATE_ID`.
4. Copia tu `PUBLIC_KEY` desde EmailJS.
5. En `index.html`, reemplaza:

- `TU_PUBLIC_KEY`
- `TU_SERVICE_ID`
- `TU_TEMPLATE_ID`

Con eso, el botón **Enviar mensaje** enviará directo a tu bandeja.

### ¿Necesitamos base de datos?

- Para **solo recibir correos**, no necesitas base de datos.
- Si quieres **guardar cada lead** (historial de contactos), entonces sí conviene usar una DB (por ejemplo Firebase o Supabase) y/o automatizar con Make/Zapier.
