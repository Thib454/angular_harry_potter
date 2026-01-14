export interface SpellModel {
  name: string;
  description: string;
  type: SpellType;
  effect?: string;
}

export type SpellType = 'Charm' | 'Curse' | 'Hex' | 'Jinx' | 'Transfiguration' | 'Healing' | 'Dark Arts' | 'Protection' | 'Miscellaneous';