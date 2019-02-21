const getEnvFromHost = (): { isLocal: boolean; host: string } => {
	const host: string = window.location.host;
	const isLocal: boolean = host.indexOf('localhost') >= 0;

	return {
		isLocal,
		host,
	};
};

export { getEnvFromHost };
