# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key.
   For image generation with the FLUX model, also set `HUGGINGFACE_API_KEY` to a Hugging Face token that has access to `black-forest-labs/FLUX.1-schnell`.
3. Run the app:
   `npm run dev`

### Placeholder images

If AI image generation is disabled or fails, the app fetches placeholder images from the Unsplash Source API based on the keywords extracted from your narration.
