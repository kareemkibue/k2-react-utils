const getEnvFromHost = (host: string = window.location.host): { isLocal: boolean; host: string } => {
    const isLocal: boolean = host.indexOf('localhost') >= 0 || host.indexOf('127.0.0.1') >= 0;

    return {
        isLocal,
        host,
    };
};

export { getEnvFromHost };
