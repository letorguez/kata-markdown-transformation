import { MarkdownTransform } from '../src/MarkdownTransform';


describe('Markdown transformation', () => {
  const transform = new MarkdownTransform();
  it('Transform markdown link to anchor', () => {
    expect(transform.linkToFootnote('[visible text link](url)')).toBe('visible text link [^anchor1]\n\n[^anchor1]: url')
    expect(transform.linkToFootnote('Hola que tal [visible text link](url) jaja adios')).toBe('Hola que tal visible text link [^anchor1] jaja adios\n\n[^anchor1]: url')
  });
});
