import { SUPPORTED_GAME } from './supportedGame.type';
import { SUPPORTED_LANGUAGE } from '../language.type';
import { SUPPORTED_SOURCE } from './supportedSource.type';

export interface VodItem {
  vod_no: number;
  title: string;
  auth: string;
  game: SUPPORTED_GAME;
  source: SUPPORTED_SOURCE;
  link: string;
  image_link: string;
  language: SUPPORTED_LANGUAGE;
  del_field: boolean;
  create_tmp: string;
}
