const CTASticky = ({ messengerUrl }) => {
  return (
    <div className="cta-sticky">
      <a href={messengerUrl} target="_blank" rel="noreferrer">
        💬 Message on Messenger
      </a>
      <a href="tel:+639171234567">📞 Call Us</a>
    </div>
  );
};

export default CTASticky;
