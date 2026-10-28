async function check() {
  const cssRes = await fetch('https://kingleotattoo.cognisphereindia.com/assets/index-DXznraDf.css');
  const css = await cssRes.text();
  const regex = /([^{}]*\{[^{}]*\})/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    if (match[0].includes('cta-journey-img') || match[0].includes('cta-journey-fixed') || match[0].includes('cta-journey-veil')) {
      console.log('--- RULE: ---', match[0]);
    }
  }
}
check();
