require("sepia");
const queries = require("./queries");
const fs = require("fs");

// queries.getCategories()
//   .then(result => fs.writeFileSync("result.json", JSON.stringify(result)));


test("Test with VCR", () => {
  expect.assertions(1);
  const expectedResult = JSON.parse(fs.readFileSync("result.json"));

  return queries.getCategories()
    .then(result => {
      expect(result).toEqual(expectedResult);
    });
});
