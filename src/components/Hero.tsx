
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    mobile: '',
    feedback: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll get back to you shortly!",
    });
    setIsOpen(false);
    setFormData({ name: '', mobile: '', feedback: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative min-h-screen bg-richBlack flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-richBlack to-[#1A1F2C] opacity-90"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl fade-in">
          <span className="inline-block px-4 py-1 bg-purple-900/40 text-purple-200 rounded-full text-sm font-medium font-inter mb-6">
            AI-Powered Financial Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-inter leading-tight">
            Your All-in-One AI Financial Genie
          </h1>
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-lg md:text-xl text-gray-300 font-readex">
              <span className="text-purple-200">Track:</span> Monitor your investments in real-time
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-readex">
              <span className="text-purple-200">Recommendations:</span> Get AI-powered investment insights
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-readex">
              <span className="text-purple-200">Act:</span> Execute strategies with confidence
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-readex">
              <span className="text-purple-200">Review:</span> Analyze performance and optimize
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all duration-200 font-inter text-lg"
            >
              Request Invite
            </button>
          </div>
        </div>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/95 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#221F26] border border-purple-400/20 rounded-xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-xl font-bold text-white">Request an Invite</Dialog.Title>
              <Dialog.Close className="text-gray-300 hover:text-white">
                <X size={24} />
              </Dialog.Close>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-200 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-200 mb-1">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                  placeholder="Share your thoughts with us"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all duration-200 font-inter"
              >
                Submit Request
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Hero;
