import Team from '../Team';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Enemy 1', () => {
  const myEnemyTeam = new Team();


  const daemon = new Daemon('test', 'Daemon');
  const bowerman = new Bowerman('test1', 'Bowerman');
  const magician = new Magician('test2', 'Magician');

  myEnemyTeam.addAll(daemon, bowerman, magician, daemon, bowerman, magician);

  const person = myEnemyTeam[Symbol.iterator]();
  const result = person.next().value;

  expect(result).toEqual(
    {
      _attack: 10, _position: 1, _stoned: false, defence: 40, name: 'test', type: 'Daemon', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
  );
});

test('Enemy 2', () => {
  const myEnemyTeam = new Team();


  const daemon = new Daemon('test', 'Daemon');
  const bowerman = new Bowerman('test1', 'Bowerman');
  const magician = new Magician('test2', 'Magician');

  myEnemyTeam.addAll(daemon, bowerman, magician, daemon, bowerman, magician);

  const person = myEnemyTeam[Symbol.iterator]();
  person.next().value;
  const result = person.next().value;

  expect(result).toEqual(
    {
      attack: 25, defence: 25, name: 'test1', type: 'Bowerman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
  );
});


test('Enemy end', () => {
  const myEnemyTeam = new Team();


  const daemon = new Daemon('test', 'Daemon');

  myEnemyTeam.add(daemon);

  const person = myEnemyTeam[Symbol.iterator]();
  person.next().value;
  const result = person.next().done;

  expect(result).toEqual(true);
});
