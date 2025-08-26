import React from "react";

const FloatingElements = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="relative floating-elements-section">
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>
      {children}
    </section>
  );
};
export default FloatingElements;
