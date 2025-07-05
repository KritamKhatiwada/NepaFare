import { json } from '@sveltejs/kit';

const API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImU0YjMwYTVkY2U5MzRiY2E4OGNlZjg1ZmU1ZWM2YWFmIiwiaCI6Im11cm11cjY0In0=';

export async function POST({ request }) {
  try {
    const { coordinates } = await request.json();
    
    if (!coordinates || coordinates.length < 2) {
      return json({ error: 'At least 2 coordinates are required' }, { status: 400 });
    }

    const response = await fetch(
      'https://api.openrouteservice.org/v2/directions/driving-car',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify({
          coordinates
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Distance calculation failed: ${response.status}`);
    }

    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error('Distance calculation error:', error);
    return json({ error: 'Distance calculation failed' }, { status: 500 });
  }
}
