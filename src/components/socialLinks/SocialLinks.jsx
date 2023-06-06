import "./SocialLinks.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialLinks = () => {
  return (
    <ul className="socialLinks">
      <li className="link">
        <TwitterIcon className="icon" />
      </li>
      <li className="link">
        <YouTubeIcon className="icon" />
      </li>
      <li className="link">
        <PinterestIcon className="icon" />
      </li>
      <li className="link">
        <InstagramIcon className="icon" />
      </li>
    </ul>
  );
}

export default SocialLinks
