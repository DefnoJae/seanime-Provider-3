# Torrentio for Seanime

A Seanime anime torrent-provider extension backed by Torrentio's Stremio API.

## Install

In Seanime, add this manifest URL:

```text
https://raw.githubusercontent.com/DefnoJae/seanime-Provider-3/main/manifest.json
```

The extension requires Seanime 3.0.2 or newer.

## What it does

- Resolves AniList media through ARM and Yuna.
- Queries every available Kitsu and IMDb route in parallel, merges the results, and removes duplicate info hashes.
- Supports movies, individual episodes, batches, resolution filters, magnets, trackers, and Torrentio configuration.
- Can optionally use a TMDB API key as a fallback for titles missing from the ID mapping services.

All Torrentio settings are optional. Leaving providers blank enables Torrentio's full provider set; leaving excluded qualities blank keeps all qualities.

## Notes

Torrentio and the mapping services are third-party services and may be unavailable independently of Seanime. This extension does not host or distribute media. Use it only for content you are legally allowed to access.


