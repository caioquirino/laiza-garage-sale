export const ProductStatus = ({ status }) => {
  switch (status) {
    case "sold":
      return <div className="sold">SOLD</div>;
    case "reserved":
      return <div className="reserved">RESERVED</div>;
    default:
      return null;
  }
};
