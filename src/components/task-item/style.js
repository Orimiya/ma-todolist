const style = new CSSStyleSheet();
style.replaceSync(`@import url('style.css')`);
console.log(style.CSSRules);
