export default function ContactCard() {
  return (
    <>
      <div>
        <i className="bi bi-map h1" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px', paddingRight: '5px' }}>
        <span style={{ color: 'grey' }}>&nbsp;LOCATION</span>
        <span>&nbsp;Morrisville, NC</span>
      </div>
    </>
  );
}