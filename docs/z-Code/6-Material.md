# MATERIAL

```js
//Phong
const cubeMatPhong = new THREE.MeshPhongMaterial({
  color: 0x34495e,
  shininess: 100, //Taux de brillance du matérial min:0, max:100
});

//Basic
const cubeMatBasic = new THREE.MeshBasicMaterial({
  color: 0x34495e,
});

//Lambert
const cubeMatLambert = new THREE.MeshLambertMaterial({
  color: 0x34495e,
});

//Toon: effet cartoon
const cubeMatToon = new THREE.MeshToonMaterial({
  color: 0x34495e,
});

//Standard: effet visuel plus réaliste
const cubeMatStandard = new THREE.MeshStandardMaterial({
  color: 0x34495e,
  metalness: 0.5, // définit l'aspect métalique du matérial min:0, max:1
  roughness: 1, // définit un aspect non brillant min:0, max:1
});
//Physical
const cubeMatPhysical = new THREE.MeshPhysicalMaterial({
  color: 0x34495e,
  metalness: 0, // définit l'aspect métalique du matérial min:0, max:1
  roughness: 1, // définit un aspect non brillant min:0, max:1

  // => paramettre valable sur tout les objet 3D

  clearcoat: 1, // définit un vernie brillant a la surface des obj 3D
  clearcoatRoughness: 0,
  emissive: 0xc0392b, // définit la couleur émise par un objet 3D
  opacity: 0, // définit l'opacité d'un objet 3D
  transparent: false, // rend l'objet transparent selon la valeur de son opacité
  wireframe: true, // affiche l'objet en mode fil de fer
  //attention si la structure est trop complexe on ne vera pas le maillage
});
//Normal: color l'objet en fonction des normales de sa structure 3D
// ce material n'est pas affecter par la lumière
const cubeMatNormal = new THREE.MeshNormalMaterial();

//Depth: plus la caméra s'éloigne de l'objet plus il sera sombre et inversement
// ce material n'est pas affecter par la lumière
const cubeMatDepth = new THREE.MeshDepthMaterial();
```

faire tourner la lumière:

```js
function render() {
  const elapsed = clock.elapsedTime;

  directionalLight.position.x = Math.sin(elapsed) * 1000;
  directionalLight.position.z = Math.cos(elapsed) * 1000;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
```
