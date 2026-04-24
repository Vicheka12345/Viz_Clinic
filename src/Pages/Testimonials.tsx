import React from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Star, Quote } from 'lucide-react';
import doctorMale1 from '../images/doctor_male1.png';
import doctorFemale1 from '../images/doctor_female1.png';
import doctorMale2 from '../images/doctor_male2.png';
import doctorFemale2 from '../images/doctor_female2.png';
import doctorMale3 from '../images/doctor_male3.png';
import doctorFemale3 from '../images/doctor_female3.png';

const testimonials = [
  {
    name: 'សោម សុខា',
    role: 'Patient — Cardiology',
    avatar: doctorMale1,
    rating: 5,
    text: 'ក្រុមការងារផ្នែកបេះដូងនៅទីនេះពិតជាអស្ចារ្យណាស់។ បណ្ឌិត សុខ វិចិត្រ បានចំណាយពេលពន្យល់រាល់ស្ថានភាពជំងឺរបស់ខ្ញុំ និងផែនការព្យាបាលយ៉ាងច្បាស់លាស់។ ការថែទាំដែលខ្ញុំទទួលបានគឺល្អឥតខ្ចោះ។',
  },
  {
    name: 'លី វណ្ណៈ',
    role: 'Patient — Orthopedics',
    avatar: doctorMale2,
    rating: 5,
    text: 'បន្ទាប់ពីការវះកាត់ជង្គង់របស់ខ្ញុំ ដំណើរការនៃការជាសះស្បើយគឺរលូនណាស់ ដោយសារការគាំទ្រដ៏អស្ចារ្យពីក្រុមការងារឆ្អឹង។ ការព្យាបាលដោយចលនាគឺពិតជាល្អ ហើយខ្ញុំអាចដើរបានវិញយ៉ាងឆាប់រហ័ស។',
  },
  {
    name: 'ចាន់ ស្រីមុំ',
    role: 'Patient — Pediatrics',
    avatar: doctorFemale3,
    rating: 5,
    text: 'ការនាំកូនៗរបស់ខ្ញុំមកកាន់គ្លីនិកនេះគឺជាបទពិសោធន៍ដ៏អស្ចារ្យជានិច្ច។ បុគ្គលិកផ្នែកកុមារគឺមានចិត្តល្អ អត់ធ្មត់ និងហ្មត់ចត់បំផុត។ កូនៗរបស់ខ្ញុំពិតជារីករាយក្នុងការមកពិនិត្យសុខភាព!',
  },
  {
    name: 'ហេង រតនា',
    role: 'Patient — Neurology',
    avatar: doctorFemale1,
    rating: 5,
    text: 'ការធ្វើរោគវិនិច្ឆ័យរបស់ បណ្ឌិត ចាន់ សុភា គឺត្រឹមត្រូវបំផុត ហើយការព្យាបាលជំងឺឈឺក្បាលប្រកាំងរបស់ខ្ញុំបានផ្លាស់ប្តូរជីវិតខ្ញុំ។ នាយកដ្ឋានសរសៃប្រសាទទាំងមូលគឺលំដាប់ថ្នាក់ពិភពលោក។',
  },
  {
    name: 'កែវ សុវណ្ណ',
    role: 'Patient — Dermatology',
    avatar: doctorFemale2,
    rating: 5,
    text: 'គ្លីនិកសើស្បែកបានជួយខ្ញុំដោះស្រាយបញ្ហាស្បែកដែលអូសបន្លាយជាយូរមកហើយ ជាមួយនឹងផែនការព្យាបាលផ្ទាល់ខ្លួន។ លទ្ធផលលើសពីការរំពឹងទុករបស់ខ្ញុំ ហើយបុគ្គលិកធ្វើឱ្យខ្ញុំមានអារម្មណ៍កក់ក្តៅ។',
  },
  {
    name: 'ដួង វិបុល',
    role: 'Patient — Emergency',
    avatar: doctorMale3,
    rating: 5,
    text: 'នៅពេលខ្ញុំមកដល់ផ្នែកសង្គ្រោះបន្ទាន់ ក្រុមការងារបានឆ្លើយតបភ្លាមៗដោយវិជ្ជាជីវៈ និងការយកចិត្តទុកដាក់។ ការធ្វើរោគវិនិច្ឆ័យ និងការព្យាបាលរហ័សពិតជាបានសង្គ្រោះជីវិតខ្ញុំ។ សូមអរគុណយ៉ាងជ្រាលជ្រៅ។',
  },
];

const Testimonials = () => (
  <div className="bg-slate-50 min-h-screen font-roboto">
    <PageTemplate title="Testimonials" description="What our patients say about their experience with us." isHome={false} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Patient <span className="text-blue-600">Testimonials</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Don't just take our word for it — hear from the thousands of patients who trust us with their healthcare.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" data-aos="fade-up">
        {[
          { val: '15,000+', label: 'Patients Treated' },
          { val: '4.9/5', label: 'Average Rating' },
          { val: '98%', label: 'Satisfaction Rate' },
          { val: '25+', label: 'Years of Service' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-1">{s.val}</div>
            <div className="text-slate-500 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
              ))}
            </div>
            <div className="relative mb-6 flex-grow">
              <Quote size={32} className="text-blue-100 absolute -top-2 -left-1" />
              <p className="font-hanuman text-slate-600 text-sm leading-relaxed pl-6 relative z-10">{t.text}</p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-hanuman font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-slate-400 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
