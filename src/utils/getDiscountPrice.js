export default function getDiscountPrice(price, discount) {
  const discountAmount = (price / 100) * discount;

  return price - discountAmount;
}
