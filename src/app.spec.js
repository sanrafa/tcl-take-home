import { convertText } from "./App";

describe("convertText", () => {
  const testText = "tHiS iS a TeSt";

  it("converts the text to lowercase when option is selected", () => {
    expect(convertText(testText, "lowercase")).toBe("this is a test");
  });
  it("converts the text to uppercase when option is selected", () => {
    expect(convertText(testText, "uppercase")).toBe("THIS IS A TEST");
  });
});
