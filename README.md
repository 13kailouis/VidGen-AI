# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key.
3. Run the app:
   `npm run dev`

### Placeholder visuals

If AI image generation is disabled or fails, the app fetches placeholder images or videos from the Pexels API based on the keywords extracted from your narration. Set the `PEXELS_API_KEY` environment variable with your Pexels API key.

### Named figure images

When your narration mentions well-known public figures such as **Elon Musk**,
**Jeff Bezos**, or **Bernard Arnault**, the app automatically uses public domain
or Creative Commons images from Wikimedia Commons instead of generic stock
photos. Ensure their names appear in the extracted keywords to trigger this
behavior.
