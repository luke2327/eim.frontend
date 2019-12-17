import { ITEM_OVERALL_CATEGORY } from '../item/itemOverallCategory.type';

export interface CallEquipSetLineReq {
  minItemLevel: number;
  maxItemLevel: number;
  overallCategory: ITEM_OVERALL_CATEGORY;
}
