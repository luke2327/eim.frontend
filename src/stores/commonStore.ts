import { observable, action } from 'mobx';
import { SUPPORTED_HEADER_TAB } from '../models/common/supportedHeaderTab.type';
import { SUPPORTED_LANGUAGE } from '../models/common/supportedLanguage.type';
import { SUPPORTED_THEME } from '../models/common/supportedTheme.type';

export default class CommonStore {
  @observable defaultColor: SUPPORTED_THEME = 'white';
  @observable defaultTheme: SUPPORTED_THEME = 'white';
  @observable defaultLang = navigator.language.split(/[-_]/)[0] as SUPPORTED_LANGUAGE;
  @observable defaultLangList: SUPPORTED_LANGUAGE[] = ['en', 'ko', 'ja'];

  @observable statedLanguage = localStorage.getItem('statedLanguage') as SUPPORTED_LANGUAGE | null;
  @observable statedHeaderTab = sessionStorage.getItem('statedHeaderTab') || 'home';

  @action setLanguage = (language: SUPPORTED_LANGUAGE) => {
    localStorage.setItem('statedLanguage', language);

    this.statedLanguage = language;
  }

  @action setHeaderTab = (tab: SUPPORTED_HEADER_TAB) => {
    sessionStorage.setItem('statedHeaderTab', tab);

    this.statedHeaderTab = tab;
  }
}
