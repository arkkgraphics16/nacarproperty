# Nacar Family Realty

Luxury vacant-lot mini realty MVP built with Vite + React. All imagery is sourced from external URLs to keep the repository binary-free.

## Development

```bash
npm install
npm run dev
```

If `npm install` is blocked, install dependencies in an environment with registry access.

## Scripts

- `npm run dev` – start local development server
- `npm run build` – create production build
- `npm run preview` – preview production build

## Data Management

Property data is stored in [`src/data/properties.json`](src/data/properties.json). Use the admin panel at `/admin` to edit listings, then export the JSON and replace the data file.
