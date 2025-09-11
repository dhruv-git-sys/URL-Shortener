# URL-Shortener

### Overview

This project implements a simple URL shortener service using Node.js, Express, and MongoDB. The service allows users to submit a URL and receive a shortened version, which redirects to the original URL. It also tracks the number of visits to each shortened URL.

### Key Components

- **Express Server**: Handles HTTP requests and routes.
- **MongoDB (via Mongoose)**: Stores URL mappings and visit history.
- **nanoid**: Generates unique short IDs for URLs.

### Main Files

- `index.js`: Entry point. Sets up the Express server, connects to MongoDB, and mounts the URL route.
- `routes/url.js`: Defines the POST endpoint for creating new short URLs.
- `controllers/url.js`: Contains the logic for generating a new short URL and saving it to the database.
- `models/url.js`: Mongoose schema for storing short IDs, original URLs, and visit history.
- `connect.js`: Handles MongoDB connection logic.

### How It Works

1. **Shorten URL**:  
    - POST to `/url` with a JSON body containing a `url` field.
    - Generates a unique `shortId` and stores the mapping in MongoDB.
    - Responds with the generated short ID.

2. **Visit Tracking**:  
    - The schema includes a `visitHistory` array to log timestamps of visits (though the redirect and tracking logic is not shown in the current code).

### Example Usage

```bash
curl -X POST http://localhost:8001/url -H "Content-Type: application/json" -d '{"url":"https://example.com"}'
```

### Extending Functionality

- Implement a GET endpoint to handle redirects and log visits.
- Add user authentication for personalized URL management.
- Provide analytics on URL usage.

### Project Structure

```
URL-Shortener/
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── connect.js
├── index.js
├── package.json
└── README.md
```