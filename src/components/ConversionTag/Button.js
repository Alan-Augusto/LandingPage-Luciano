import React from "react";

const ConversionTag = () => {
  React.useEffect(() => {
    const script = new GoogleAds.Script({
      conversionId: CONVERSION_ID,
      tagName: 'aw-conversion-script',
      pageType: 'landing',
    });
    script.render();
  }, []);

  return <noscript />;
};


export default ConversionTag;
