# Kódér

## Intro
Tvým úkolem je
- nastylování homepage designu podle https://www.figma.com/file/soMJHrKVsIs2h4tlhQAUfK/FO---Frontend?type=design&node-id=1-4449&mode=design&t=gX6kWIxgtTQrWDY8-0
- nastylování inputů pro formulář faktury podle https://www.figma.com/file/soMJHrKVsIs2h4tlhQAUfK/FO---Frontend?type=design&node-id=4-126&mode=design&t=gX6kWIxgtTQrWDY8-0

## Zadání
- Forkni si tento projekt, výchozí branch je dev, rebasni si dev s main branchi, pak začni pracovat. Jako výsledek tvé práce pošli odkaz na repozitář, kam pushnes své změny.
- Nastyluj HP podle designu ve Figma, jak pro desktop, tak pro mobilní zařízení. Design je k dispozici pouze pro desktop variantu; chceme vidět, jak si dokážeš poradit se zpracováním responsivity, nejen technicky, ale i kreativně, proto nejsou k dispozici designy pro mobilní variantu. Ne vždy jsou k dispozici designy pro všechny rozlišení, proto potřebujeme vidět, jak si s tím poradíš. Nebudeš začínat s prázdným projektem, ale s částečně nastylovanou HP, záleží na tobě co se stávajícím kódem uděláš.
- Stránka je záměrně trochu 'rozbitá', podívej se co není dobře a chyby oprav.
- Implementuj adaptivní placeholdery... Na http://localhost:3000/form najdeš formulář, uprav komponenty inputu, tak aby fungovaly podobně, jako např. tu https://codepen.io/jasonbecker/pen/wdyLym a odpovídaly designům, které jsou ve Figma

## Shrnutí
- Na vypracování úkolu máš maximálně 5 hodin, více času úkolu prosím nevěnuj, potřebujeme vidět, co zvládneš za daný čas vytvořit.
- Tento repozitář obsahuje nový Rails projekt, který reflektuje náš akutální stack na kterém faktura běží, potřebujeme vidět jak se v něm zvládneš zorientovat a zároveň zjistíš na jakých vnitřnostech FO cca běží.

## Proč zadání vypadá jak vypadá?
Potřebujeme si oveřit že:
- zvládneš nastylovat stránku v SASSu (organizace kódu, přístup stylování, znovupoužitelnost)
- zlvádneš pracovat s GITem
- vyznáš se ve větším projektu, Rails/Slim/SASS a Vue ti nedělá problémy
- poradíš si s překlady v railsech i ve Vue
- seš pečliv(ý/á), dodržuješ best practice HTML/CSS/pagespeed
- kamarádíš se s Vue a JS není tvůj nepřítel
- dokážeš si poradit s responsivem i bez designů

## Init projektu
Všichni používáme MacOS a projekt máme nainstalovány přímo v systému, ale pro rychlejší init projektu jsem připravil Docker.

## Docker

### Stažení a instalace Dockeru
https://www.docker.com/products/docker-desktop/

### Build a spuštění kontaineru
    docker-compose build
    docker-compose up

### Instalace chybejících baliků gems/packages
    docker-compose run --rm web bundle install
    docker-compose run --rm web yarn

### Migrace a naplnění db
    docker-compose run --rm web rails db:migrate
    docker-compose run --rm web rails db:seed
