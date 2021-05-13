import Navbar from "./Navbar";

const PageLayout = ({ children, className }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div>{children}</div>
    </>
  );
};

export default PageLayout;
