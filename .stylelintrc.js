/* https://stylelint.io/user-guide/rules/list */

module.exports = {
	defaultSeverity: "error",
	plugins: ["stylelint-prettier"],
	extends: ["stylelint-prettier/recommended", "stylelint-config-idiomatic-order"],
	rules: {}
};
