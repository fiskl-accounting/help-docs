import TOC from '@theme/TOC';

export default function InlineTOC(props) {
  return (
    <div style={{ border: '1px solid #eaecef', padding: '1em', marginBottom: '2em', backgroundColor: '#f9f9f9' }}>
      <TOC minHeadingLevel={2} maxHeadingLevel={4} {...props} />
    </div>
  );
}
