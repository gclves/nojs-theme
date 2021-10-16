window.showBanner = (href) => {
  const h1 = document.createElement('h1');
  const a = document.createElement('a');

  h1.innerText = 'Please disable JavaScript';
  h1.id = 'disable-js-banner';
  a.setAttribute('href', href);
  a.appendChild(h1);

  document.body.appendChild(a);
}
