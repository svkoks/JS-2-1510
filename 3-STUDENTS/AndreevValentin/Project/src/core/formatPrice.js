export function formatPrice(price) {
	return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
};
