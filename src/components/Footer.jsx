import logo from '../assets/logo.png';
import ContentWrapper from "../Hoc/SectionWrapper";
import {
  AiOutlineX,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full bg-black-100">
        <ContentWrapper>
          <main className="w-full flex flex-col py-10">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-10 mb-10">
              <section className="flex items-start justify-start gap-20">
                <ul className="flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl sm:text-2xl uppercase mb-2">
                    PopcornPicks
                  </h1>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    For you
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Movies
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Tv shows
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Free
                  </li>
                </ul>
                <ul className="flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl sm:text-2xl capitalize mb-2">
                    Support
                  </h1>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Help Center
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Terms Of Use
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Privacy Policy
                  </li>
                  <li className="font-semibold text-base sm:text-lg capitalize">
                    Content Complaints
                  </li>
                </ul>
              </section>
              <section className="flex flex-col item-start justify-start gap-2">
                <h1 className="capitalize font-bold text-xl sm:text-2xl ">
                  Connect with us
                </h1>
                <div className="flex items-center gap-4">
                  <AiOutlineX
                    className="bg-indigo-600 p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://x.com/AmitGhosh_07",
                        "_blank"
                      )
                    }
                  />
                  <AiFillLinkedin
                    className="bg-indigo-600 p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/amit-kumar-ghosh-185165199",
                        "_blank"
                      )
                    }
                  />
                  <AiOutlineGithub
                    className="bg-indigo-600 p-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://github.com/Amit41z",
                        "_blank"
                      )
                    }
                  />
                </div>
              </section>
            </div>
            <hr />
            <div className="w-full flex items-center justify-between gap-10 mt-10">
              <span className="text-gray-400 text-sm">
                Copyright &copy; 2024 PopcornPicks. All rights reserved.
              </span>
              <img 
                src={logo} 
                alt="Logo" 
                className=" p-[6px] rounded-full text-4xl" 
                style={{ width: '3rem', height: '3rem' }} 
              />
            </div>
          </main>
        </ContentWrapper>
      </footer>
    </>
  );
};

export default Footer;