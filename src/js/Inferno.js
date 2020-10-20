import Character from './Character';

export default class Inferno extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.defence = 40;
    this._stoned = false;
    this._position = 1;
    this._attack = this.calcAttack(10);
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }

  /* Установка параметра атаки */
  set attack(setAttack) {
    this.validAttack(this.calcAttack(setAttack));
  }

  get attack() {
    return this._attack;
  }

  calcAttack(attack) {
    const setAttackFromPosition = (attack * ((100 - ((this._position - 1) * 10)) / 100));
    if (this._stoned) {
      return Math.round(setAttackFromPosition - (Math.log2(this._position) * 5));
    }
    return Math.round(setAttackFromPosition);
  }

  validAttack(attack) {
    if (attack < 0) {
      this._attack = 0;
    } else {
      this._attack = attack;
    }
  }

  /* Позиция персонажа на поле */
  set position(setPosition) {
    this._position = setPosition;
    this.attack = this._attack;
  }

  get position() {
    return this._position;
  }

  /* Дурман, надеюсь, если правильно понял .... */
  set stoned(setStoned) {
    this._stoned = setStoned;
    this.attack = this._attack;
  }

  get stoned() {
    return this._stoned;
  }
}
