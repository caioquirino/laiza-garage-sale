type ProductStatusProps = {
  active: boolean
}

export const ProductStatus = ({ active }: ProductStatusProps) => {
  switch (active) {
    case true:
      return <div className="available">Available</div>;
    case false:
      return <div className="sold">Not available</div>;
    default:
      return null;
  }
};
