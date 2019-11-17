const getEnvFromHost = (): { isLocal: boolean; host: string } => {
    const host: string = window.location.host;
    const isLocal: boolean = host.indexOf('localhost') >= 0 || host.indexOf('127.0.0.1') >= 0;

    return {
        isLocal,
        host,
    };
};

export { getEnvFromHost };
