export default store => {
    store.on("@init", () => ({ sidebar: { isExpanded: true } }));

    store.on("sidebar/toggleCollapsed", (state) => {
        console.log("[sidebar] state was:", state);
        return {
            sidebar: {
                ...state.sidebar,
                isCollapsed: !state.sidebar.isCollapsed
            }
        };
    });

};
