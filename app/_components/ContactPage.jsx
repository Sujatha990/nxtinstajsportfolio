"use client";

const ContactPage = () => {
  const handle = () => {
    alert("Contact saved sucessfully!");
  };
  return (
    <>
      

      <div className="main-container">
        <h2 style={{ color: "#9c506e" }} className="sub-head">
          Contact
        </h2>
        <div className="contact-container">
          <form onSubmit={handle} className="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
              
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
              
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
               
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
