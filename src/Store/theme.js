export default store => {
  store.on("@init", () => ({ theme: { darkTop: true, darkSide: true } }));

  store.on("theme/toggleTop", (state) => {
    console.log("state was:", state);
    return {
      theme: {
        ...state.theme,
        darkTop: !state.theme.darkTop
      }
    };
  });

  store.on("theme/toggleSide", (state) => {
    console.log("state was:", state);
    return {
      theme: {
        ...state.theme,
        darkSide: !state.theme.darkSide
      }
    };
  });
};
