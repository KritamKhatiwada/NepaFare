import { json } from '@sveltejs/kit';

import { API_KEY } from '$env/static/private';

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