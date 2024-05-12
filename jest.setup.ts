// set/clear Immediate not available by default.
global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
global.clearImmediate = jest.useRealTimers as unknown as typeof clearImmediate;
// https://github.com/expo/expo/issues/27496
jest.mock("expo-localization", () => ({
  getLocales: jest.fn(() => {
    return [{ languageCode: "en" }];
  }),
}));
