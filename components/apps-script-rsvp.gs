/**
 * Script para recibir las confirmaciones de la invitación
 * directamente en esta hoja de Google Sheets.
 *
 * Pégalo en: tu hoja → Extensiones → Apps Script
 * Luego: Implementar → Nueva implementación → Aplicación web
 *   - Ejecutar como: Yo
 *   - Quién tiene acceso: Cualquier persona
 * Copia la URL /exec resultante y pégala en components/RSVP.tsx
 */
function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = e.parameter;

  hoja.appendRow([
    new Date(),                      // Fecha y hora de la confirmación
    p.nombre || "",                  // Nombre completo
    "'" + (p.telefono || ""),        // Teléfono (el apóstrofe evita que Sheets borre el 0 inicial)
    p.asistencia || "",              // Sí / No
    p.restricciones || "",           // Restricciones alimenticias
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
