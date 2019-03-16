const assert = require("assert");
const stand = require("../standtext.js");

const test_input = "The World 2"

describe("Stand Text", () => {
    describe("generateStandText(\"The World\")", () => {
        it("should return 「T h e  W o r l d  2」", () => {
            assert.strictEqual(stand.stand(test_input), "「T h e  W o r l d  2」");
        });
    });
});
