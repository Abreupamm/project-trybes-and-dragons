import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static _numberOfInterfaces = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._numberOfInterfaces += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._numberOfInterfaces;
  }
}