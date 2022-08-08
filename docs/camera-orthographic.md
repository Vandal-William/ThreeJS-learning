# VUE ORTHOGRAPHIC

Pour avoir une camere qui donne une vue du dessus plutot que sur le coté avec perspectivecamera.

![OrthographicCamera](./images/OrthographicCamera.png)

```js
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 1000; // distance d'affichage
camera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2, // gauche
  (frustumSize * aspect) / 2, // droite
  frustumSize / 2, // haut
  frustumSize / -2, // bas
  1, // distance de vue minimale
  10000 // distance de vue maximale
);
camera.position.set(
  -500, //gauche(x)
  500, // haut(y)
  -500 // rotation(z)
);
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.add(camera);
```
