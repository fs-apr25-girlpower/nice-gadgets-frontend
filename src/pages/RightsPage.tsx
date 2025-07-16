import { TeamMembers } from '../components/TeamMembers';
import { useLanguage } from '../context/language/useLanguage';
import { rightsPageDictionary } from '../i18n/rightsPageDictionary';

export const RightsPage = () => {
  const { currentLanguage } = useLanguage();
  const translations = rightsPageDictionary[currentLanguage];

  return (
    <div className="m-auto text-default text-center text-black tracking-wide leading-relaxed">
      <div className="m-10">{translations.content}</div>
      <TeamMembers />
    </div>
  );
};
