
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-20 bg-aletheium-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to de-risk your AI and deeptech investments? Get in touch with our team today.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactForm />
    </Layout>
  );
};

export default Contact;
