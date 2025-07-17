import { TeamMemberCard } from './components/TeamMemberCard';

import { useState } from 'react';
import { ArrowDown } from '../../images/icons/ArrowDown';
import { ArrowUp } from '../../images/icons/ArrowUp';
import { teamMembersData } from './data/teamMembersData';
import { useLanguage } from '../../context/language/useLanguage';

export const TeamMembers = () => {
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  const { currentLanguage } = useLanguage();

  const toggleVisible = () => {
    setIsTeamVisible(!isTeamVisible);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleVisible}
        className="
            py-3 px-3
            border border-icons
            hover:border-black
            transition duration-300 ease-in-out
            cursor-pointer
          "
      >
        {isTeamVisible ? <ArrowUp /> : <ArrowDown />}
      </button>

      {isTeamVisible && (
        <section className="mt-2 tablet:mt-4 ">
          <h2>This site was created:</h2>

          {teamMembersData.map(member => (
            <TeamMemberCard
              key={member.id}
              name={member.name[currentLanguage]}
              photoUrl={member.photoUrl}
              unicornPhotoUrl={member.unicornPhotoUrl}
              role={member.role[currentLanguage]}
              strengths={member.strengths[currentLanguage]}
              quote={member.quote[currentLanguage]}
            />
          ))}
        </section>
      )}
    </>
  );
};
