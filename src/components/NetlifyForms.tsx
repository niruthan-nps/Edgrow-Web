// src/components/NetlifyForms.tsx
const NetlifyForms = () => {
  return (
    <div style={{ display: "none" }}>
      {/* Contact Form */}
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
      </form>

      {/* Volunteer Form */}
      <form name="volunteer" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="volunteer" />
      </form>

      {/* Collaborate Form */}
      <form name="collaborate" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="collaborate" />
      </form>
    </div>
  );
};

export default NetlifyForms;
