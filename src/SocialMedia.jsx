import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './socialMedia.scss';

export const SocialMedia = () => {
  return (
    <div className="containerSocialMedia">
      <a href="https://github.com/CarlosGabrielCarreno" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/carlosgabrielcarreno/" target="_blank">
        <LinkedInIcon />
      </a>
    </div>
  );
};
