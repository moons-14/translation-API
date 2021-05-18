function doGet(e) {
  return ContentService.createTextOutput(LanguageApp.translate(LanguageApp.translate(e.parameter.text, "ja", "en"), "en", "ja"));
}
