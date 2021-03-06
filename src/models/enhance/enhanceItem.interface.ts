import { CATEGORY } from '../category.type';
import { ENHANCE_CATE } from './enhanceCate.type';

export interface Item {
  item_no: number;
  cate: CATEGORY;
  name: string;
  item_cate: ENHANCE_CATE;
  level: 0 | 150 | 160 | 200;
  mg_atk: number;
  atk: number;
  def: number;
  str: number;
  dex: number;
  luk: number;
  int: number;
  hp: number;
  mp: number;
  atk_speed: string; // TODO: ATK_SPEED 타입 추가할 것
  move_speed: number;
  jump_power: number;
  boss_atk: number;
  monster_def: number;
  upgrade: number;
  starforce: number;
}
