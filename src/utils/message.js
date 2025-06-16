export const Message = {
    success(api, msg) {
        console.log('通过api调用')
        api.open({
            type: 'success',
            content: msg,
            duration: 10,
        });
        console.log('通过api调用结束')
    },
    error(api, msg) {
        api.error({ content: msg });
    },
    warning(api, msg) {
        api.warning({ content: msg });
    },
    info(api, msg) {
        api.info({ content: msg });
    }
};
