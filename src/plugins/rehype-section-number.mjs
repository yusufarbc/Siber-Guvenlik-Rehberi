import { visit } from 'unist-util-visit';

const SECTION_NUMBER = /^(§\d+(?:\.\d+)*\.)\s*/;

/**
 * Chapter headings are written as "## §6.1.2. Title text". Splits the
 * "§6.1.2." prefix out of the heading's first text node into its own
 * <span class="chapter-num">, so it can be styled small and muted
 * (networksciencebook.com's "Section 1.4" kicker label) instead of
 * rendering at the same size/weight as the rest of the title.
 */
export default function rehypeSectionNumber() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName !== 'h2') return;
			const firstChild = node.children[0];
			if (!firstChild || firstChild.type !== 'text') return;

			const match = SECTION_NUMBER.exec(firstChild.value);
			if (!match) return;

			const [whole, number] = match;
			const rest = firstChild.value.slice(whole.length);

			node.children.splice(0, 1, {
				type: 'element',
				tagName: 'span',
				properties: { className: ['chapter-num'] },
				children: [{ type: 'text', value: number }],
			}, { type: 'text', value: rest });
		});
	};
}
