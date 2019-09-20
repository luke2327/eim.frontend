import { observable, action } from 'mobx';

export default class commonStore {
  @observable defaultColor = 'white';
  @observable defaultTheme = 'white';
  @observable defaultLang = navigator.language.split(/[-_]/)[0];
  @observable defaultNofi = 'on';
  @observable defaultLangList = ['en', 'ko', 'ja'];
  @observable defaultHeaderTab = 1;

  @observable selectedLang;
  @observable selectedHeaderTab = this.defaultHeaderTab;

  @action selectLang = (language) => {
    this.selectedLang = language;
  }

  @action selectHeaderTab = (tab) => {
    console.log(tab);
    this.selectedHeaderTab = tab;
  }
}
