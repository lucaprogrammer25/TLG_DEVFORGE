import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const pathnames = location.pathname.split('/')
    .filter(crumb => crumb !== '');

  
  const crumbs = pathnames.slice(0, -1).map(crumb => {
    let displayCrumb = crumb;
    if (crumb === "unisex") {
      displayCrumb = "Accessories";
    } else if (crumb === "men") {
      displayCrumb = "Men";
    } else if (crumb === "women") {
      displayCrumb = "Women";
    } 
    currentLink += `/${crumb}`;
    return (
      <div className='crumb' key={crumb}>
        <Link to={currentLink}>{displayCrumb}</Link>
      </div>
    );
  });

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;
