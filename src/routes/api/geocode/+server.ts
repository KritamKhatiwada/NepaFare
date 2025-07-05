import { json } from '@sveltejs/kit';

const API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImU0YjMwYTVkY2U5MzRiY2E4OGNlZjg1ZmU1ZWM2YWFmIiwiaCI6Im11cm11cjY0In0=';

export async function GET({ url }) {
  const place = url.searchParams.get('place');
  try {
    const response = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(place)}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Geocoding failed: ${response.status}`);
    }

    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error('Geocoding error:', error);
    return json({ error: 'Geocoding failed' }, { status: 500 });
  }
}