import React, { useState } from 'react'
import { Button } from './index'
import { useToast } from './toastContext'
import { useAuth } from './index'

export default function Contact() {
  const { showToast } = useToast()
  const { loading, setLoading } = useAuth()
  const api_base_url = import.meta.env.VITE_APP_API_URL

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    content: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitForm = async (e) => {
    try {
      e.preventDefault()
      console.log('this is form data', formData)
      const response = await fetch(`${api_base_url}/users/message`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        showToast('Message sent successfully', 'success');
        setFormData({fullName:"",email:"",content:""});
      }
    } catch (error) {
      console.log('Error in form submission', error)
      showToast('Message Failed to send! please try again', 'error')
    }
  }

  return (
    <div
      className="w-full min-h-min flex flex-col sm:flex-row px-6 sm:px-12 md:px-20 gap-8 bg-gray-100"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      {/* Form Section */}
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-5 sm:w-1/2 lg:w-1/3  p-6 bg-white rounded-b-lg shadow-md "
      >
        <div>
          <label className="text-lg font-medium mb-1" htmlFor="fullName">
            Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName||""}
            onChange={handleInputChange}
            className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="text-lg font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email||""}
            onChange={handleInputChange}
            className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-1" htmlFor="content">
            Write message/review
          </label>
          <textarea
            id="content"
            placeholder="Write here"
            name="content"
            value={formData.content||""}
            rows={5}
            onChange={handleInputChange}
            className="outline-none rounded-md bg-gray-50 px-4 py-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>
        <Button
          type="submit"
          content="Submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold self-start"
        />
      </form>

      {/* Contact Section */}
      <div className="flex flex-col gap-6 sm:w-1/3 lg:w-1/2 my-6">
        <div className="text-lg text-gray-700">
          <p><strong>Email:</strong> dandgacademy@gmail.com</p>
          <p className="lg:ml-12">support.dandg@gmail.com</p>
        </div>
        <div className="bg-white shadow-md rounded-lg w-60 h-40 p-3">
          <h2 className="text-xl font-semibold text-gray-800">Center Address</h2>
          <address className="mt-2 text-gray-600 italic">
            D&G Academy<br />
            Behind Ram Mandir, Jambara<br />
            Contact: +91-8305868010
          </address>
        </div>
        <a
          href="https://maps.app.goo.gl/ngdiS5kwGYYVxtoG7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 w-40 h-12 flex items-center justify-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}
