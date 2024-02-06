'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef: any= useRef();
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      'service_3j2vzju',
      'contact_form',
      formRef.current,
      {publicKey: 'q-2Pi6QyFmaTxP4BR'}
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible');
      setForm({
        from_name: '',
        from_email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  };

  return (
      <div
        className='shadow-lg shadow-white w-3/4 rounded-lg p-2 outline-2 outline outline-slate-600 bg-black-100'
      >
        <h3 className='text-lg text-center'>
          Contact me
        </h3>
        <p className='text-secondary text-center'>
          to schedule an estimate, ask questions, or leave a review
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='from_name'
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='from_email'
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help? Please include your preffered contact method: email, phone call, or text"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button 
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? '...Sending' : 'Send'}
          </button>

        </form>

      </div>
  )
}

export default Contact