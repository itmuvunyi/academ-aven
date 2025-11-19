import Image from 'next/image';

const teamMembers = [
  {
    name: 'M. Innocent',
    role: 'Technical Specialist',
    image: '/images/t.png',
    social: { x: '#', instagram: '#', telegram: '#' },
  },
  {
    name: 'M. Sheila',
    role: 'Group Lead',
    image: '/images/aa.jpg',
    social: { x: '#', instagram: '#', telegram: '#' },
  },
  {
    name: 'T. Ketsia',
    role: 'Information Seeker',
    image: '/images/bb.jpg',
    social: { x: '#', instagram: '#', telegram: '#' },
  },
  {
    name: 'K. Laura',
    role: 'Morale Booster',
    image: '/images/laura.jpg',
    social: { x: '#', instagram: 'https://www.instagram.com/laura_karangwa/profilecard/?igsh=ZmluejN5NWd0cjZm', telegram: '#' },
  },
  {
    name: 'I. Benitha',
    role: 'Visual Aid Creator',
    image: '/images/beni.jpg',
    social: { x: '#', instagram: '#', telegram: '#' },
  },
  {
    name: 'I. Lois',
    role: 'Quality Control',
    image: '/images/lois.jpg',
    social: { x: '#', instagram: '#', telegram: '#' },
  },
];

export default function TeamSection() {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Meet Our Team</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
        <p className="text-base text-gray-600 max-w-xl mx-auto">
          A diverse group of passionate individuals working together to create positive change
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto w-32 h-32 object-cover border-4 border-primary"
              />
            </div>
            <p className="text-primary font-semibold mb-1 text-sm">{member.role}</p>
            <h4 className="text-lg font-bold mb-3 text-gray-800">{member.name}</h4>
            <div className="flex justify-center gap-3">
              <a 
                href={member.social.x || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors text-lg"
                aria-label={`${member.name} X profile`}
              >
                <i className="fa-brands fa-x"></i>
              </a>
              <a 
                href={member.social.instagram || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors text-lg"
                aria-label={`${member.name} Instagram profile`}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href={member.social.telegram || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors text-lg"
                aria-label={`${member.name} Telegram profile`}
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
