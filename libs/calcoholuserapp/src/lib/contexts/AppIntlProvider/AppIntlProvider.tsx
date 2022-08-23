import { FC, PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";

export const AppIntlProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {
	return (
		<IntlProvider
			locale="en"
			defaultLocale="en"
		>
			{children}
		</IntlProvider>
	);
};

export default AppIntlProvider;