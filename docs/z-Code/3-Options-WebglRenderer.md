# OPTION DE WEBGLRENDERER

```js
scene = new THREE.Scene();
// utiliser son propre canvas définis dans le html
const canvasHtml = document.getElementById("mycanvas");
// antialias => lissage des objet 3D
// canvas => utiliser son propre canvas définie dans le html
// alpha => permet ou non la transparence de la couleur de fond de la scène
renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvasHtml,
  alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
// définir la couleur de fond de la scene avec setClearColor
// prend deux paramettre : la couleur et l'opaciter
renderer.setClearColor(0x16a085, 0); // couleur verte
```

Dans le html:

```html
<canvas id="mycanvas"></canvas>
```
