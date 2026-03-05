import Profile from "../components/Profile"
import LinkButton from "../components/LinkButton"
import SocialButton from "../components/SocialButton"
import { FaXTwitter, } from "react-icons/fa6";
export default function LinksPage() {

  return (
    <div className="min-h-screen flex justify-center px-8 py-8">

      <div className="w-full max-w-xs space-y-4">
        <Profile />
        <div className="mb-6">
          <LinkButton label="Portfolio" href="https://jaihari.dev/" />
          <LinkButton label="Resume" href="https://jaihari.dev/resume/JaiHari-Data-Analyst-Resume.pdf" />
          {/* <LinkButton
            label={
              <span className="flex items-center gap-2">
                Message on <FaXTwitter />
              </span>
            }
            href="https://twitter.com/messages/compose?recipient_id=2008022900415352832"
          /> */}
        </div>
        <SocialButton />
      </div>


    </div>
  )
}