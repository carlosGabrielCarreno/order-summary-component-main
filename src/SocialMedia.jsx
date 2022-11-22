import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './socialMedia.scss';

export const SocialMedia = () => {
  const onClickLinkedin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="containerSocialMedia">
      <span>
        <GitHubIcon />
      </span>
      <span>
        <LinkedInIcon />
      </span>
    </div>
  );
};
