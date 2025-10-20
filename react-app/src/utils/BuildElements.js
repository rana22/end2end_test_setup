import { getValueByKey } from "./Data";

export const builderJsonToHtml = (node) => {
    if (!node || typeof node !== 'object') return '';

    // Handle text node
    if (node.component?.name === 'Text') {
        return `<span>${node.component.options?.text || ''}</span>`;
    }

    // add html attribute
    let tag = 'div';
    if (node.tagName) {
        tag = node.tagName;
    }

    if (node?.properties) {
        const keys = Object.keys(node?.properties);
        keys.forEach((key) => {
            const value = node?.properties[key] ?? '';
            const attrVal = ` ${key}="${String(value)}"`;
            tag += attrVal;
        })
    }

    // add style
    if (node?.responsiveStyles && node?.responsiveStyles?.large) {
        const styleObject = getValueByKey(node, "responsiveStyles");
        if (styleObject && typeof styleObject.large === 'object') {
            const styleString = Object.entries(styleObject.large)
                .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
                .join('; ');
            tag += ` style="${styleString}"`;
        }
    }

    // Recursively generate children HTML
    const childrenHtml = (node.children || [])
        .map(child => builderJsonToHtml(child))
        .join('');
    
    return `<${tag}>${childrenHtml}</${tag}>`;
}
