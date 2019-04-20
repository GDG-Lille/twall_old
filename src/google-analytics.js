if (process.env.NODE_ENV === 'production') {
  document.write(
    '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124200391-5"></script>' +
    '<script>' +
    '  window.dataLayer = window.dataLayer || [];' +
    '  function gtag(){dataLayer.push(arguments);}' +
    '  gtag(\'js\', new Date());' +
    '  gtag(\'config\', \'UA-124200391-5\');' +
    '</script>');
}
