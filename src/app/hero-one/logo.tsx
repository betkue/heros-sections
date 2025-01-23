/* eslint-disable @next/next/no-img-element */
type Props  ={
    logo:string
}

const Logo = ({logo}:Props) => {
    return (
        <img src={logo} alt="Logo 1" className="h-8" />
    );
  };
  
  export default Logo;

