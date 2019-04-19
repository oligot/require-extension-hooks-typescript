import test from 'ava';
import awesome from './_awesome.ts';

test('imports a basic TypeScript file', t => {
	t.is(awesome(), 'awesome');
});
