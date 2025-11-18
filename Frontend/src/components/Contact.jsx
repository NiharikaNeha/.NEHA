const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <form
        action="mailto:example@gmail.com"
        method="POST"
        className="grid gap-4 max-w-xl"
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg h-32"
        ></textarea>

        <button className="bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
