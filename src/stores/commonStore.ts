import { observable, action } from 'mobx';
import { SUPPORTED_HEADER_TAB } from 'models/common/supportedHeaderTab.type';
import { SUPPORTED_LANGUAGE } from 'models/common/supportedLanguage.type';
import { SUPPORTED_THEME } from 'models/common/supportedTheme.type';

export default class CommonStore {
  // 2019-12-16 liam
  // 일단 안사용 하니까 주석 처리
  // @observable defaultColor: SUPPORTED_THEME = 'white';
  // @observable defaultTheme: SUPPORTED_THEME = 'white';

  @observable defaultLang = navigator.language.split(/[-_]/)[0] as SUPPORTED_LANGUAGE;
  @observable defaultLangList: SUPPORTED_LANGUAGE[] = ['en', 'ko', 'ja'];

  @observable statedLanguage = localStorage.getItem('statedLanguage') as SUPPORTED_LANGUAGE;
  @observable statedHeaderTab = sessionStorage.getItem('statedHeaderTab') as SUPPORTED_HEADER_TAB || 'home';

  @action setLanguage = (language: SUPPORTED_LANGUAGE): void => {
    localStorage.setItem('statedLanguage', language);

    this.statedLanguage = language;
  }

  @action setHeaderTab = (tab: SUPPORTED_HEADER_TAB): void => {
    sessionStorage.setItem('statedHeaderTab', tab);

    this.statedHeaderTab = tab;
  }
}
