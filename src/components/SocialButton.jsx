import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function SocialButton() {
  return (
    <div className="w-full max-w-md mx-auto text-center">

      {/* Title */}
      <h2 className="text-2xl text-gray-800 tracking-tight font-semibold mb-4">
        Social
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 text-3xl text-gray-600">
        <a
          href="https://github.com/ijaihari"
          target="_blank"
          className="hover:text-black transition hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/jaihari"
          target="_blank"
          className="hover:text-black transition hover:scale-110"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://x.com/ijaihari"
          target="_blank"
          className="hover:text-black transition hover:scale-110"
        >
          <FaXTwitter />
        </a>

      </div>

    </div>
  );
}