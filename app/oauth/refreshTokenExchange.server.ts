import { OAuthTokenRequestGrantType } from 'api/models';
import { getOAuthToken } from 'api/oauth';

import { getClientAuthorizationOptions } from './clientAuthorization.server';

type RefreshTokenExchangeParams = {
	refreshToken: string;
};

export const refreshTokenExchange = async ({ refreshToken }: RefreshTokenExchangeParams) => {
	const { data: tokens } = await getOAuthToken(
		{
			refresh_token: refreshToken,
			grant_type: OAuthTokenRequestGrantType.refresh_token,
		},
		getClientAuthorizationOptions()
	);

	return tokens;
};
