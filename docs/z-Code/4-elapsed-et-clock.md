# CLOCK

```js
/*
    INFO:

    la vitesse de rotation du cube est déterminé par les frames par seconde,
    si l'app tourne a 30 frame par seconde le cube tournera 2x moin vite que si
    l'app trournais a 60 frame par seconde. pour évité cela on utilise la class clock
    qui calcule le temps ecouler d'une frame a l'autre

*/

[-------]
// 1. j'initialise une variable clock
let clock;

function init(){
    scene = new THREE.Scene();
    // 2. je l'instencie avec la class Clock
    clock = new THREE.Clock();

    [----]
}

function render(){

    // 3. clacule du temps qui c'est écouler depuis la dernière frame
    const delta = clock.getDelta();

    cube.rotation.y += 0.6 * delta; // 4. vitesse de rotation * par le temps écouler
    cube.rotation.x += 0.3 * delta;
    [----]
}
```

# ELAPSED

```js
function render() {
  // calcule du nombre de second écouler depuis le lencement de l'app
  const elapsed = clock.elapsedTime;

  // Le cube se déplace de haut en bas
  cube.position.y = Math.sin(elapsed) * 100;
  //le cube se déplace de droite a gauche
  cube.position.x = Math.cos(elapsed) * 100;
  // et avec les deux le cude trace un cercle
  [---]
}
```
