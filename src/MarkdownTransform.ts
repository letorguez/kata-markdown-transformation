
export class MarkdownTransform {
  public linkToFootnote(markdown: string): string {
    const delimiters = /\[ | \]\( | \)/g;
    const markdownSplitted = markdown.split(delimiters);
    const labelList = [];
    const anchorList = [];
    for (let i = 0; i < markdownSplitted.length / 3; i++) {
      const linkText = markdownSplitted[3 * i + 1];
      const linkUrl = markdownSplitted[3 * i + 2];
    }


    return linkText + ' [^anchor1]\n\n[^anchor1]: ' + linkUrl;
  }
}
