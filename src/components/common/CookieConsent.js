import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-base-300 ">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-slate-100">
        <span className="text-black mr-16">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
        <button className="bg-secondary py-2 px-8 rounded text-accent" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );  
};

export default CookieConsent;