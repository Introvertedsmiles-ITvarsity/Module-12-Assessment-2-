

const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

function checkApiKey() {
  const API_KEY_STORAGE = "apiKey";
  const API_KEY_REDIRECT_URL = "enter-api-key.html";

  const apiKey = localStorage.getItem(API_KEY_STORAGE);
  if (!apiKey) {
    window.open(API_KEY_REDIRECT_URL, "_self");
  }
  return apiKey;
}

const apiKey = checkApiKey();
