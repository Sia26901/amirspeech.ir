import { createModel, createRecognizer } from 'https://cdn.jsdelivr.net/npm/vosk-browser/+esm';

// آدرس دقیق مدل
const MODEL_URL = './model/'; 

async function startVosk() {
    console.log("در حال بارگذاری مدل...");
    const model = await createModel(MODEL_URL + 'vosk-model-small-fa-0.4.tar.gz');
    const recognizer = await createRecognizer(model, 16000);
    console.log("مدل آماده شد!");
    // ادامه کد تشخیص...
}
