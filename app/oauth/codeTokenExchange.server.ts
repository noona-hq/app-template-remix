import { OAuthTokenRequestGrantType } from 'api/models';
import { getOAuthToken } from 'api/oauth';

import { getClientAuthorizationOptions } from './clientAuthorization.server';

type CodeTokenExchangeParams = {
	code: string;
};

export const codeTokenExchange = async ({ code }: CodeTokenExchangeParams) => {
	const { data: tokens } = await getOAuthToken(
		{
			code,
			grant_type: OAuthTokenRequestGrantType.authorization_code,
		},
		getClientAuthorizationOptions()
	);

	return tokens;
};
