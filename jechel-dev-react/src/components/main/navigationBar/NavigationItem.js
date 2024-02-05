import { Link, useLocation } from 'react-router-dom';

const NavigationItem = ({ link, text, icon}) => {
  const location = useLocation();
  const className = location.pathname === link ? 'navigation_item' : '';

  return (
    <>
        <Link 
          className={className}
          to={link}
        >
          {text} {icon}
        </Link>
    </>
  );
};

export default NavigationItem;