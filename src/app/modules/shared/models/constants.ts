import { Language } from './language.enum';

export const EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/;
export const USER_LOCAL_STORAGE_KEY = 'USER';
export const LANG_LOCAL_STORAGE_KEY = 'LANG';
export const RTL_LANGUAGES = [Language.AR];
export const DIRECTION = {  RTL: 'rtl', LTR: 'ltr' };

