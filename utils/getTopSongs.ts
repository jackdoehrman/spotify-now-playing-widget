import fetch from "node-fetch";

export async function getTopSongs(accessToken: string) {
  const limit = 5; // Fetch top 5, change as needed
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return data.items.map((item: any) => ({
    track: item.name,
    artist: item.artists.map((a: any) => a.name).join(", "),
  }));
}
