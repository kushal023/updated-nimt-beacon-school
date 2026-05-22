export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DayRoutineItem {
  time: string;
  activity: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  stars: number;
  quote: string;
  videoPlaceholder: string;
}

export const FAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is the campus safe for children?",
    answer: "Yes, NIMT Beacon School features 24x7 security with trained guards, comprehensive CCTV coverage across academic & residential buildings, strict double-gate entry/exit policies, and dedicated wardens on shift around-the-clock."
  },
  {
    id: "faq-2",
    question: "How do students communicate with parents?",
    answer: "We offer dedicated communication slots during the week. Students have controlled access to calls/video check-ins, allowing them to remain connected with their parents while maintaining a focused, distraction-free routine."
  },
  {
    id: "faq-3",
    question: "What is the food quality like?",
    answer: "Our in-house dining hall serves pure, hygienic, balanced, and nutritious multi-cuisine meals. Meals are prepared under strict hygienic supervision by professional chefs, providing standard daily energy requirements tailored for growing boarders."
  },
  {
    id: "faq-4",
    question: "How is the boarding routine structured?",
    answer: "The boarding schedule is meticulously designed to balance academic studies, mandatory self-study sessions with mentors, sport & co-curricular activities, and healthy sleeping slots (typically 8 hours of sleep)."
  },
  {
    id: "faq-5",
    question: "What about medical support?",
    answer: "We have an on-campus modern medical wing with 24x7 nursing staff, regular doctor visits, emergency ambulance provisions, and tie-ups with leading local multi-specialty hospitals."
  },
  {
    id: "faq-6",
    question: "How is hostel accommodation arranged?",
    answer: "Hostels are divided into separate spacious blocks for boys and girls. Rooms are well-ventilated, equipped with custom study desks, personal storage wardrobes, and high-quality bedding. Resident wardens stay within the blocks."
  },
  {
    id: "faq-7",
    question: "What is the admission process?",
    answer: "Admissions start by submitting the Inquiry Form. Following this, an interaction and assessment are scheduled, which help evaluate the child's readiness for a residential life. Selected candidates are then offered seats based on vacancy."
  },
  {
    id: "faq-8",
    question: "What is the fee structure?",
    answer: "The fee structure is transparent and covers tuition, boarding lodge, food services, laundry, sports amenities, and competitive prep. Complete fee breakdowns can be sent directly to registered email addresses post-inquiry."
  }
];

export const DailyRoutine: DayRoutineItem[] = [
  { time: "6:00 AM", activity: "Wake Up & Exercise" },
  { time: "7:00 AM", activity: "Breakfast" },
  { time: "8:00 AM", activity: "Classes Begin" },
  { time: "1:00 PM", activity: "Lunch & Rest" },
  { time: "2:00 PM", activity: "Classes Resume" },
  { time: "4:00 PM", activity: "Sports & Activities" },
  { time: "6:00 PM", activity: "Study Time" },
  { time: "7:30 PM", activity: "Dinner" },
  { time: "8:00 PM", activity: "Self-Study & Mentoring" },
  { time: "10:30 PM", activity: "Rest & Sleep" }
];

export const Testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Parent Testimonial 1",
    role: "Parent of Class 11 Student",
    stars: 5,
    quote: "Our son has transformed completely. He's more confident, disciplined, and focused on his studies.",
    videoPlaceholder: "Video Testimonial 1"
  },
  {
    id: "t-2",
    name: "Parent Testimonial 2",
    role: "Parent of Class 9 Student",
    stars: 5,
    quote: "The personalized attention that teachers give combined with residential support is incomparable. She has become an independent thinker and takes initiative.",
    videoPlaceholder: "Video Testimonial 2"
  },
  {
    id: "t-3",
    name: "Parent Testimonial 3",
    role: "Parent of Class 12 Student",
    stars: 5,
    quote: "Getting schooling and top-tier IIT-JEE training in the same campus saved hours of commuting. Our child's mental wellness and academics were both prioritised.",
    videoPlaceholder: "Video Testimonial 3"
  }
];
