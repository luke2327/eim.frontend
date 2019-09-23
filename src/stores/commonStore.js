import { observable, action } from 'mobx';

export default class commonStore {
  @observable defaultColor = 'white';
  @observable defaultTheme = 'white';
  @observable defaultLang = navigator.language.split(/[-_]/)[0];
  @observable defaultNofi = 'on';
  @observable defaultLangList = ['en', 'ko', 'ja'];
  @observable defaultHeaderTab = 1;

  @observable selectedLang = localStorage.getItem('language');
  @observable selectedHeaderTab = parseInt(localStorage.getItem('selectedHeaderTab')) || this.defaultHeaderTab;

  @observable langTabState = false;

  @action selectLang = (language) => {
    this.selectedLang = language;
    localStorage.setItem('language', language);
  }

  @action selectHeaderTab = (tab) => {
    localStorage.setItem('selectedHeaderTab', tab);
    this.selectedHeaderTab = tab;
  }
}
