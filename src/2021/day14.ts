let startString = "NNCB";

type Rule = { searchString: string; charToInsert: string };

const applyRule = (rule: Rule, startString: string) => {
  startString.matchAll() //includes(rule.searchString)
};
