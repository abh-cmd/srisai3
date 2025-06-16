import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const ContactSection = () => {
    return (
        <div className="py-14">
            <div className="container text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email */}
                    <div className="flex flex-col items-center p-6 bg-amber-100 rounded-lg shadow-md">
                        <HiOutlineMail className="text-4xl text-gray-700 mb-4" />
                        <p className="text-lg font-medium text-gray-800 mb-2">Email Address</p>
                        <a href="mailto:Saiinteriors2015@gmail.com" className="text-gray-600 hover:underline">Saiinteriors2015&#64;gmail.com</a>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center p-6 bg-amber-100 rounded-lg shadow-md">
                        <HiOutlinePhone className="text-4xl text-gray-700 mb-4" />
                        <p className="text-lg font-medium text-gray-800 mb-2">Phone Number</p>
                        <a href="tel:+917013825454" className="text-gray-600 hover:underline">+91 701 382 5454</a>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center p-6 bg-amber-100 rounded-lg shadow-md">
                        <HiOutlineLocationMarker className="text-4xl text-gray-700 mb-4" />
                        <p className="text-lg font-medium text-gray-800 mb-2">Our Location</p>
                        <p className="text-gray-600 text-center">Plot No 1510, Raja Rajeswari Nagar, Near Gem Motors Service Center, Kondapur, Hyderabad, Telangana 500084</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;