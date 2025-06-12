
export const APP_TITLE = "Narrative Video Automator";
export const DEFAULT_ASPECT_RATIO = '16:9';
export const AVERAGE_WORDS_PER_SECOND = 3; // Fallback if Gemini doesn't provide duration

export const FALLBACK_FOOTAGE_KEYWORDS = [
  "abstract", "cityscape", "nature", "technology", "office", "landscape", "motion graphics"
];

// Public domain or Creative Commons images for well-known figures.
// These images are fetched instead of Unsplash placeholders when a scene's
// keywords include the corresponding name.
export const NAMED_FIGURE_IMAGE_URLS: Record<string, string> = {
  "elon musk":
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
  "jeff bezos":
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jeff_Bezos_2016.jpg",
  "bernard arnault":
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bernard_Arnault_2017.jpg",
};

// Gemini model for text analysis
export const GEMINI_TEXT_MODEL = 'gemini-2.5-flash-preview-04-17';
// Imagen model for image generation
export const IMAGEN_MODEL = 'imagen-3.0-generate-002'; // Deprecated, now using FLUX
export const FLUX_MODEL_ID = 'black-forest-labs/FLUX.1-schnell';

// Hugging Face API key for FLUX model
export const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;


// Placeholder for API Key - this should be set in the environment
export const API_KEY = process.env.API_KEY;
