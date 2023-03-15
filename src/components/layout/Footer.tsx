import ORT from "../../../public/images/ORT.svg";
import TICX from "../../../public/images/TIC X.svg";
import Github from "../../../public/images/Github.svg";
import Twitter from "../../../public/images/Twitter.svg";
import Instagram from "../../../public/images/Instagram.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center bg-background-dark pb-16 gap-12">
            <div className="flex items-center justify-center gap-5">
                <ORT />
                <TICX />
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
                <Github className="glow-lg-github" />
                <Twitter className="glow-lg-twitter" />
                <Instagram className="glow-lg-instagram" />
            </div>
        </footer>
    );
};

export default Footer;
