import { observable, action } from 'mobx';

export default class commonStore {
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

  @observable selectedLang = localStorage.getItem('language');
  @observable selectedHeaderTab = parseInt(sessionStorage.getItem('selectedHeaderTab')) || this.defaultHeaderTab;

  @action selectLang = (language) => {
    this.selectedLang = language;
    localStorage.setItem('language', language);
  }

  @action selectHeaderTab = (tab) => {
    sessionStorage.setItem('selectedHeaderTab', tab);
    this.selectedHeaderTab = tab;
  }
}
