// Adjust the import path accordingly
import { Download, Icon, Link } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 pl-24 pr-10 bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto bg-[#a5b4fc]/90  text-white border-none p-8 rounded-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact me</h2>
            <p className="text-lg text-gray-200">
              I&apos;m always looking forward to new opportunities, and my inbox is always open. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="flex items-center bg-black rounded-md px-6 py-3">
                <a
                href="https://drive.google.com/file/d/1qQHDV2_zFRUMrfS8uXLSgQ-OKOC8rhIu/view?usp=sharing"
                download // This will prompt the user to download the file
                className="flex items-center text-white"
                >
                <div className="m-2">Download Resume</div>
                </a>
            </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
