import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="text-gray-700">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made by{' '}
    <a href="mailto:n.bonillamarin@gmail.com?subject=(from:RedIsapres)%20Deseo%20cotizar%20un%20desarrollo%20web/software" className="text-primary-500 hover:underline">Nicolás Bonila M</a>.
    <a href="https://www.vectorstock.com/royalty-free-vector/abstract-colorful-flower-logo-template-vector-28618474">Logo Vector image by VectorStock / Razzan99</a>
   </div>
);

export { FooterCopyright };
