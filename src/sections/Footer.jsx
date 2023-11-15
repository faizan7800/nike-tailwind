import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum aspernatur asperiores eum atque blanditiis qui odit quibusdam possimus aut quae accusantium.</p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon)=>(
                <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt}
                  width={24} height={24} />
                </div>
              ))}
            </div>
          </a>
        </div>
        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                <ul>
                  {section.links.map((link)=>(
                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                      <a href="/">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer