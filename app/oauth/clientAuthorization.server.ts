export const getClientAuthorizationOptions = () => {
	const credentials = Buffer.from(`${process.env.CLIENT_ID!}:${process.env.CLIENT_SECRET!}`).toString('base64');

	return { headers: { Authorization: `Basic ${credentials}` } };
};
