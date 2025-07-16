import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarIcon, Loader2, Send, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  checkIn: z.string().min(1, 'Please select a check-in date'),
  checkOut: z.string().min(1, 'Please select a check-out date'),
  guests: z.string().min(1, 'Please select number of guests'),
  room: z.string().optional(),
  beeKeeping: z.boolean().optional(),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Create email content
      const emailSubject = encodeURIComponent(`Booking Inquiry from ${data.name}`);
      const emailBody = encodeURIComponent(`
Dear Bee Hive Villa Team,

I would like to make a booking inquiry with the following details:

Guest Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Booking Details:
- Check-in Date: ${data.checkIn}
- Check-out Date: ${data.checkOut}
- Number of Guests: ${data.guests}
- Room Preference: ${data.room || 'No preference'}
        - Interested in Bee Keeping Experience: ${data.beeKeeping ? 'Yes' : 'No'}

${data.message ? `Special Requests/Questions:\n${data.message}` : ''}

Looking forward to your response.

Best regards,
${data.name}
      `);

      // Open email client with pre-filled content
      window.location.href = `mailto:info@beehivevilla.com?subject=${emailSubject}&body=${emailBody}`;
      
      // Simulate form processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            placeholder="+94 XX XXX XXXX"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Check-in/Check-out Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-800 mb-2">
              Check-in Date *
            </label>
            <div className="relative">
              <input
                type="date"
                id="checkIn"
                {...register('checkIn')}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
              <CalendarIcon className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.checkIn && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {errors.checkIn.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-800 mb-2">
              Check-out Date *
            </label>
            <div className="relative">
              <input
                type="date"
                id="checkOut"
                {...register('checkOut')}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
              <CalendarIcon className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.checkOut && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {errors.checkOut.message}
              </p>
            )}
          </div>
        </div>

        {/* Number of Guests & Room Preference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="guests" className="block text-sm font-semibold text-gray-800 mb-2">
              Number of Guests *
            </label>
            <select
              id="guests"
              {...register('guests')}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <option value="">Select guests</option>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
            {errors.guests && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {errors.guests.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="room" className="block text-sm font-semibold text-gray-800 mb-2">
              Room Preference
            </label>
            <select
              id="room"
              {...register('room')}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <option value="">Select room type</option>
              <option value="standard-twin">Standard Twin Room</option>
              <option value="deluxe-twin">Deluxe Twin Room</option>
              <option value="premium-twin">Premium Twin Room</option>
              <option value="luxury-suite">Luxury Twin Suite</option>
            </select>
          </div>
        </div>

        {/* Bee Keeping Interest */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border-2 border-amber-200">
          <div className="flex items-start space-x-4">
            <div className="flex items-center h-6">
              <input
                type="checkbox"
                id="beeKeeping"
                {...register('beeKeeping')}
                className="h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500 focus:ring-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="beeKeeping" className="text-sm font-semibold text-amber-800 cursor-pointer">
                🐝 I&apos;m interested in the bee keeping experience
              </label>
              <p className="text-sm text-amber-700 mt-1">
                Learn about traditional bee keeping while contributing to local biodiversity
              </p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
            Special Requests or Questions
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Any special requirements, dietary restrictions, or questions about your stay?"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-6 w-6 mr-3" />
                Preparing Your Inquiry...
              </>
            ) : (
              <>
                <Send className="h-6 w-6 mr-3" />
                Send Booking Inquiry
              </>
            )}
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-emerald-800">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-emerald-700 mt-1">
                  Your email client has opened with your inquiry details. Please send the email to complete your booking request.
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
} 