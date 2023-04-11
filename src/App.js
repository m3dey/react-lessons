
import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Rickandmorty from "./components/rickandmorty/Rickandmorty";

let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];
let rickandmorty=[
  {"id":25,"name":"Armothy","status":"Dead","species":"unknown","type":"Self-aware arm","gender":"Male","origin":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"location":{"name":"Post-Apocalyptic Earth","url":"https://rickandmortyapi.com/api/location/8"},"image":"https://rickandmortyapi.com/api/character/avatar/25.jpeg","episode":["https://rickandmortyapi.com/api/episode/23"],"url":"https://rickandmortyapi.com/api/character/25","created":"2017-11-05T08:54:29.343Z"},
  {"id":332,"name":"Stacy","status":"Alive","species":"Human","type":"","gender":"Female","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/332.jpeg","episode":["https://rickandmortyapi.com/api/episode/27"],"url":"https://rickandmortyapi.com/api/character/332","created":"2018-01-10T16:31:10.465Z"},
  {"id":428,"name":"Phone-person","status":"Alive","species":"Humanoid","type":"Phone","gender":"Male","origin":{"name":"Earth (Phone Dimension)","url":"https://rickandmortyapi.com/api/location/72"},"location":{"name":"Earth (Phone Dimension)","url":"https://rickandmortyapi.com/api/location/72"},"image":"https://rickandmortyapi.com/api/character/avatar/428.jpeg","episode":["https://rickandmortyapi.com/api/episode/10"],"url":"https://rickandmortyapi.com/api/character/428","created":"2018-04-16T21:54:48.372Z"},
  {"id":617,"name":"Phoenixperson","status":"Alive","species":"Alien","type":"Soulless Puppet","gender":"Male","origin":{"name":"Story Train","url":"https://rickandmortyapi.com/api/location/96"},"location":{"name":"Story Train","url":"https://rickandmortyapi.com/api/location/96"},"image":"https://rickandmortyapi.com/api/character/avatar/617.jpeg","episode":["https://rickandmortyapi.com/api/episode/37"],"url":"https://rickandmortyapi.com/api/character/617","created":"2020-08-06T12:54:15.895Z"},
  {"id":711,"name":"When Wolf","status":"Alive","species":"Mythological Creature","type":"Whenwolf","gender":"Male","origin":{"name":"Interdimensional Cable","url":"https://rickandmortyapi.com/api/location/6"},"location":{"name":"Interdimensional Cable","url":"https://rickandmortyapi.com/api/location/6"},"image":"https://rickandmortyapi.com/api/character/avatar/711.jpeg","episode":["https://rickandmortyapi.com/api/episode/43"],"url":"https://rickandmortyapi.com/api/character/711","created":"2021-10-16T16:11:18.457Z"},
  {"id":826,"name":"Butter Robot","status":"Alive","species":"Robot","type":"Passing Butter Robot","gender":"Genderless","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/826.jpeg","episode":["https://rickandmortyapi.com/api/episode/9"],"url":"https://rickandmortyapi.com/api/character/826","created":"2021-11-02T17:24:37.458Z"},
]
function App() {
  return (
    <div>
      <Simpsons props={simpsons}/>;
      <Rickandmorty props={rickandmorty}/>;
    </div>
  );
}

export default App;
