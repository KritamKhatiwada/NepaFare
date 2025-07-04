import { json } from '@sveltejs/kit';

const API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjFhMjZlMTE0YTRhYTQwMmI4NThkOTNkZjFmNzE5YjRjIiwiaCI6Im11cm11cjY0In0=';

export async function GET({ url }) {
  const place = url.searchParams.get('place');
  
  if (!place) {
    return json({ error: 'Place parameter is required' }, { status: 400 });
  }

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