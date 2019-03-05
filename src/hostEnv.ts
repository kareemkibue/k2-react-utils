interface IHostEnv {
	isLocal: boolean;
	host: string;
}

const getEnvFromHost = (): IHostEnv => {
	const host: string = window.location.host;
	const isLocal: boolean = host.indexOf('localhost') >= 0;

	return {
		isLocal,
		host,
	};
};

export { getEnvFromHost };
