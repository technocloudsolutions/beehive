import Image from 'next/image';
import Link from 'next/link';
import { Bug, Leaf, Award, Users, Clock, CheckCircle, Shield } from 'lucide-react';

const features = [
  {
    icon: Bug,
    title: 'Interactive Learning',
    description: 'Get hands-on experience with our bee colonies under expert guidance. Learn about bee behavior, hive maintenance, and honey production.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practice',
    description: 'Discover how our bee keeping practices contribute to local biodiversity and support sustainable agriculture in the Kandy region.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Award,
    title: 'Pure Local Honey',
    description: 'Taste and purchase our pure, locally harvested honey. Each jar represents the unique floral diversity of our region.',
    color: 'from-amber-600 to-amber-700'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our experienced beekeepers share their knowledge and passion, ensuring a safe and educational experience for all participants.',
    color: 'from-emerald-600 to-emerald-700'
  }
];

const activities = [
  {
    title: 'Hive Inspection',
    duration: '1 hour',
    description: 'Learn about hive structure and bee colony organization',
    included: ['Protective gear provided', 'Expert guidance', 'Photo opportunities'],
    price: 'LKR 2,500',
    icon: Bug
  },
  {
    title: 'Honey Extraction',
    duration: '1.5 hours',
    description: 'Participate in the honey harvesting process',
    included: ['Hands-on experience', 'Honey tasting', 'Take-home honey jar'],
    price: 'LKR 3,500',
    icon: Award
  },
  {
    title: 'Educational Workshop',
    duration: '2 hours',
    description: 'Comprehensive introduction to beekeeping',
    included: ['Theory session', 'Live demonstration', 'Q&A session'],
    price: 'LKR 4,000',
    icon: Users
  }
];

const beekeepingImages = [
  {
    src: '/images/beekeeping1.jpeg',
    alt: 'Beekeepers working with hive in protective gear'
  },
  {
    src: '/images/beekeeping2.jpeg',
    alt: 'Close-up of honeycomb and bee colony'
  },
  {
    src: '/images/beekeeping3.jpeg',
    alt: 'Beekeeper using smoker with honeycomb'
  },
  {
    src: '/images/beekeeping4.jpeg',
    alt: 'Fresh honeycomb with pure honey'
  }
];

export default function BeeKeepingSection() {
  return (
    <section id="bee-keeping" className="relative section-padding bg-gradient-earth overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5" />
      
      <div className="relative container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-amber-200 rounded-full px-6 py-2 mb-6">
            <Bug className="h-5 w-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium">Unique Experience</span>
          </div>
          <h2 className="section-title">
            Bee Keeping Experience
          </h2>
          <p className="section-subtitle">
            Immerse yourself in the fascinating world of bees while contributing to local biodiversity. Our bee keeping experience offers a perfect blend of education and hands-on learning in the heart of Kandy.
          </p>
        </div>

        {/* Main Image and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-slide-up">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/beekeeping1.jpeg"
              alt="Bee keeping experience at Bee Hive Villa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-gold">
                Connect with Nature
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Bee Hive Villa, we offer a unique opportunity to experience traditional bee keeping in the heart of Kandy. Our program combines education with hands-on experience, allowing guests to learn about these fascinating creatures while contributing to local ecosystem preservation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re a nature enthusiast, a curious learner, or someone looking for a unique experience in Sri Lanka, our bee keeping program offers something special for everyone.
            </p>
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center justify-center w-fit"
              aria-label="Book a bee keeping experience"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Book Your Experience
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-modern card-hover group p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-block p-4 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Beekeeping Gallery */}
        <div className="mb-20 animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-gradient-gold mb-12">
            Experience Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beekeepingImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="card-modern p-10 mb-16 animate-scale-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full px-6 py-2 mb-6">
              <Clock className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium">Available Activities</span>
            </div>
            <h3 className="text-3xl font-bold text-gradient-nature">
              Choose Your Adventure
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {activity.title}
                      </h4>
                      <div className="flex items-center text-sm text-amber-600 font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {activity.included.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gradient-gold">
                      {activity.price}
                    </span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety Note */}
        <div className="glass-effect rounded-3xl p-8 border border-amber-200 animate-fade-in">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl flex-shrink-0">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-amber-800 mb-4">
                Safety First
              </h4>
              <p className="text-amber-700 text-lg leading-relaxed">
                All bee keeping activities are conducted under strict safety protocols. Protective gear is provided, and participants receive thorough safety briefings. Please inform us of any allergies or health concerns in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 