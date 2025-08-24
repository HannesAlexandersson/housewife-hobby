import React from "react";

const FloatingElements = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="floating-elements-section z-20 ">
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>
      {children}
      {/* <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div> */}
    </section>
  );
};
export default FloatingElements;
