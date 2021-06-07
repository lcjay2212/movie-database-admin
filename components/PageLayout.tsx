import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const PageLayout = ({ children, className }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={className}>{children}</div>
    </>
  );
};

export default PageLayout;
