export type STAT_NAME_BASIC =
  | 'mg_atk'
  | 'atk'
  | 'hp'
  | 'mp'
  | 'str'
  | 'luk'
  | 'int'
  | 'dex';

export type STAT_NAME_ADDITIONAL = STAT_NAME_BASIC
  | 'allstat'
  | 'damage'
  | 'boss_atk'
  | 'chackgam'
  | 'monster_def';

export type ALL_STAT_NAME = STAT_NAME_ADDITIONAL;