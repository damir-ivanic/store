import React, { useState } from "react";
import data from "../../utils/shopingData";
import PreviewCollection from "../../components/previewcollection/PreviewCollection";

const ShopPage = () => {
  const [collections] = useState(data);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
