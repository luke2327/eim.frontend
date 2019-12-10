import { observable, action } from 'mobx';
import { SUPPORTED_LANGUAGE } from '../models/language.type';

export default class CommonStore {
  @observable defaultColor = 'white';
  @observable defaultTheme = 'white';
  @observable defaultLang = navigator.language.split(/[-_]/)[0];
  @observable defaultNofi = 'on';
  @observable defaultLangList = ['en', 'ko', 'ja'];
  @observable defaultHeaderTab = 1;

  @observable headerHome = 1;
  @observable headerEnhance = 2;
  @observable headerSimulate = 3;
  @observable headerVod = 4;
  @observable headerNotice = 5;

  @observable selectedLang = localStorage.getItem('language') as SUPPORTED_LANGUAGE | null;
  @observable selectedHeaderTab =
    parseInt(sessionStorage.getItem('selectedHeaderTab') || this.defaultHeaderTab.toString(), 10);

  @action selectLang = (language: SUPPORTED_LANGUAGE) => {
    this.selectedLang = language;
    localStorage.setItem('language', language);
  }

  @action selectHeaderTab = (tab: number) => {
    sessionStorage.setItem('selectedHeaderTab', tab.toString());
    this.selectedHeaderTab = tab;
  }
}
