import { LinkedIn, GitHub } from '@mui/icons-material';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <LinkedIn />
      </div>
      <p> &copy; 2023 jalenmurray.com</p>
    </div>
  );
}

export default Footer;
