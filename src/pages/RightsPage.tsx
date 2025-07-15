import { useLanguage } from '../context/language/useLanguage';
import { rightsPageDictionary } from '../i18n/rightsPageDictionary';

export const RightsPage = () => {
  const { currentLanguage } = useLanguage();
  const translations = rightsPageDictionary[currentLanguage];

  return <div className="m-10">{translations.content}</div>;
};
