export function load({ params }) {
    console.log('params', params);
	return {
		className: params.class
	};
}