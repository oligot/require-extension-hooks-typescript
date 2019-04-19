const ts = require('typescript');

module.exports = ({content}) => {
	const result = ts.transpileModule(content, {
		compilerOptions: {
			module: ts.ModuleKind.CommonJS,
			sourceMap: true
		}
	});
	return {
		content: result.outputText,
		sourceMap: result.sourceMapText
	};
};
