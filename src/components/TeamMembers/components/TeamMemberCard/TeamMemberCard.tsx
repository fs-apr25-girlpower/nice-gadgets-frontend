import { useState } from 'react';

type Props = {
  name: string;
  photoUrl: string;
  unicornPhotoUrl: string;
  role: string;
  strengths: {
    label: string;
    text: string;
  };
  quote: string;
};
//
export const TeamMemberCard = ({
  name,
  photoUrl,
  unicornPhotoUrl,
  role,
  strengths,
  quote,
}: Props) => {
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  const handleImageClick = () => {
    setShowRealPhoto(!showRealPhoto);
  };

  return (
    <article className="team-member-card mb-2 p-2">
      <h3 className="name ml-2">{name}</h3>

      <div className="content p-2 tablet:p-4 desktop:p-6 flex flex-col   tablet:flex-row      gap-2 desktop:gap-6 desktop:items-start desktop:justify-start">
        <div
          className="photo-container cursor-pointer
        w-32 h-48 bg-sky-400
        
          mx-auto tablet:mx-0
          mb-4
          rounded-full
          overflow-hidden
          md:w-45 md:h-64
    lg:w-50 lg:h-70
          flex-shrink-0
        "
          onClick={handleImageClick}
        >
          <img
            src={showRealPhoto ? photoUrl : unicornPhotoUrl}
            alt={showRealPhoto ? `Фото ${name}` : `Єдиноріг, схожий на ${name}`}
            className="
             w-full h-full
            object-cover
           "
          />
        </div>

        <div
          className="description desktop:ml-4
          text-center
          flex flex-col gap-2 tablet:gap-4 desktop:gap-6
          
          tablet:text-left
          tablet:flex-grow
          tablet:max-w-md                    
          tablet:min-w-0                     
          tablet:w-auto   
        "
        >
          <h4 className="role">{role}</h4>
          <div className="strengths">
            <p>
              <strong>{strengths.label}</strong>
              {strengths.text}
            </p>
          </div>

          <blockquote className="quote mt-2">
            <strong>{quote}</strong>
          </blockquote>
        </div>
      </div>
    </article>
  );
};
