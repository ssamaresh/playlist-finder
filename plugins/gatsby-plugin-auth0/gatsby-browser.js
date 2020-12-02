import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const handleRedirect = (appState) =>
  appState && appState.targetUrl && navigate(appState.targetUrl);

export const wrapRootElement = ({ element }, pluginOptions) => {
  console.log('pluginOptions', pluginOptions);
  console.log('element', element);
  return (
    <Auth0Provider
      domain={pluginOptions.domain}
      clientId={pluginOptions.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={handleRedirect}
    >
      {element}
    </Auth0Provider>
  );
};
