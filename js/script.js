window.onload = function() {
  const ui = SwaggerUIBundle({
    url: 'https://raw.githubusercontent.com/omahoito/oda-kapa-api/master/kapa-api/kapa-api.yaml',
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })
  window.ui = ui
}
