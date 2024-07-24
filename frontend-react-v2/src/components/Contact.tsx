import { motion } from 'framer-motion';
import FadeIn from '@/lib/variants';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import toast from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = (message: string) => toast(message);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = { name, email, message };

    try {
      const response = await fetch('/api/messages/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        notify("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        const errorMessage = data.email[0] || 'An error occurred while sending your message.';
        notify(errorMessage);
      }
    } catch (error) {
      notify('Failed to send the message, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='Contact' className='bg-[url(/contact/contact-bg.png)] py-28'>
      <form
        className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'
        onSubmit={sendEmail}
      >
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            let&apos;s work <br /> <span className='under-line'>together</span>
          </h1>
        </motion.div>
        <motion.div
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10'
        >
          <Input
            className='bg-transparent py-3 transition-all'
            type='text'
            id='name'
            placeholder='Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className='bg-transparent py-3 transition-all'
            type='email'
            id='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            className='bg-transparent py-3 transition-all'
            id='message'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
          {loading ? (
            <Button className='w-[160px] mt-12 bg-blue transition-all duration-300' disabled>
              <Loader2 className='w-4 h-4 animate-spin mr-2' /> Please wait...
            </Button>
          ) : (
            <Button className='w-[160px] mt-12 bg-blue transition-all duration-300' type='submit'>
              Send
            </Button>
          )}
        </motion.div>
      </form>
    </section>
  );
};

export default Contact;
