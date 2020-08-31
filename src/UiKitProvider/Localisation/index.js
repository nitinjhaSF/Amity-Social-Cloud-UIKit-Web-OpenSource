import React from 'react';
import { IntlProvider } from 'react-intl';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { FormattedTime } from 'react-intl';

TimeAgo.addLocale(en);

const Localization = props => <IntlProvider locale="en-us" {...props} />;

export default Localization;
