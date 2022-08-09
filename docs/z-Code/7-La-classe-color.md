# LE CONSTRUCTEUR DE LA CLASSE COLOR

```js
[---]

const cubeMatPhong = new THREE.MeshPhongMaterial({
  color: 0x34495e,
});

cube = new THREE.Mesh(cubeGeo, cubeMatPhong);
scene.add(cube);

// la classs Color de THREE.js

// le constructeur de la classe Color
// je peut utiliser pour définir la couleur
// - De l'exadécimal(0xff0000)
// - Du RGB(0.25, 0.1, 0.30)
const tmpColor = new THREE.Color(0.25, 0.1, 0.3);
cubeMatPhong.color = tmpColor;

// methode setHex() et setRGB() pour changer la couleur
cubeMatPhong.emissive.setHex(0xff0000);
cubeMatPhong.emissive.setRGB(0.25, 0.1, 0.3);

[---]
```

# CHANGER LA COULEUR DU CUBE DYNAMYQUEMENT

```js
function render(){

    const elapsed = clock.elapsedTime;

    // changer la couleur du cube a chaque tour de boucle
    cube.material.color.setRGB(
        Math.sin(elapsed),
        Math.sin(elapsed / 2),
        Math.sin(elapsed / 2)

    );
    cube.material.emissive.setRGB(
        Math.sin(elapsed * 2),
        Math.sin(elapsed / 4),
        Math.sin(elapsed / 6)

    );

    [---]
}
```
