import { google } from 'googleapis';

export async function getGoogleSheetData() {
  try {
    // Autenticación con las credenciales de Google Sheets
    const auth = new google.auth.GoogleAuth({
      // Aquí colocarías tus credenciales de autenticación
      // keyFile: 'credentials.json',
      // scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    // Creamos una instancia de Google Sheets
    const sheets = google.sheets({ version: 'v4', auth });

    // ID de la hoja de cálculo y rango de datos
    const spreadsheetId = '1Cjj4jivU2ywU7KVKlLLxCRcN2wRPNc_kvhOyKMvfVzY';
    const range = 'Sheet1!A:F'; // Nombre de la hoja y rango de datos

    // Obtenemos los datos de la hoja de cálculo
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Extraemos los valores de la respuesta
    const rows = response.data.values;

    // Creamos el array de proyectos a partir de los datos de la hoja de cálculo
    const projects = rows.map(row => ({
      img: row[0],
      title: row[1],
      resume: row[2],
      description: row[3],
      projectLink: row[4],
      technologies: row[5].split(',').map(tech => tech.trim()), // Dividir y limpiar los elementos separados por comas
    }));

    // Retornamos el array de proyectos
    return projects;
  } catch (error) {
    console.error('Error al obtener los datos de Google Sheets:', error);
    return [];
  }
}
