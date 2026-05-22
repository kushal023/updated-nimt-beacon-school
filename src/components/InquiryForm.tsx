import React, { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    mobile: "",
    targetClass: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const classes = [
    "Nursery",
    "KG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11 - Science (PCM)",
    "Class 11 - Science (PCB)",
    "Class 11 - Commerce",
    "Class 11 - Humanities",
    "Class 12 - Science (PCM)",
    "Class 12 - Science (PCB)",
    "Class 12 - Commerce",
    "Class 12 - Humanities",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Student Name is required";
    if (!formData.parentName.trim()) newErrors.parentName = "Parent Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email has not been entered";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please input a valid email address";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9+() -]{10,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.targetClass) newErrors.targetClass = "Selecting school grade is mandatory";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="admissions" className="bg-white py-20 border-t border-slate-100 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inquiry for Admission
          </h2>
          <p className="mt-4 text-base text-gray-500 font-medium leading-relaxed">
            Fill out the form below to inquire about admission to NIMT Beacon School
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow relative">
            
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center animate-scale-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100 shadow-inner mb-6">
                  <CheckCircle className="h-10 w-10 stroke-[2.5]" />
                </div>
                
                <h3 className="font-display text-2xl font-extrabold text-[#1344e6]">
                  Inquiry Submitted!
                </h3>
                <p className="mt-3 text-sm font-semibold text-gray-500 max-w-sm leading-relaxed">
                  Thank you, <strong>{formData.parentName}</strong>. We've received your inquiry details for <strong>{formData.studentName}</strong> (applying for {formData.targetClass}).
                </p>

                <div className="mt-8 rounded-xl bg-slate-50 border border-slate-100 px-6 py-4.5 text-xs text-slate-400 font-mono tracking-wide">
                  <span>Reference ID: NIMT-2026-{(Math.floor(Math.random() * 90000) + 10000)}</span>
                  <div className="mt-1 font-semibold text-slate-500">
                    A representative will contact you on {formData.mobile} soon.
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ studentName: "", parentName: "", email: "", mobile: "", targetClass: "" });
                  }}
                  className="mt-8 text-xs font-extrabold tracking-widest text-[#1344e6] hover:underline uppercase block cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 text-left">
                
                {/* Student Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-800 font-display">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                    className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
                      errors.studentName 
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100" 
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.studentName && (
                    <span className="text-xs font-bold text-red-500">{errors.studentName}</span>
                  )}
                </div>

                {/* Parent Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-800 font-display">
                    Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter parent name"
                    className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
                      errors.parentName 
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100" 
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-xs font-bold text-red-500">{errors.parentName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-800 font-display">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
                      errors.email 
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100" 
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs font-bold text-red-500">{errors.email}</span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-800 font-display">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
                      errors.mobile 
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100" 
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.mobile && (
                    <span className="text-xs font-bold text-red-500">{errors.mobile}</span>
                  )}
                </div>

                {/* Applying for Class Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-800 font-display">
                    Applying for Class <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="targetClass"
                      value={formData.targetClass}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold bg-white transition-all outline-none appearance-none cursor-pointer ${
                        errors.targetClass 
                          ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100" 
                          : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                      }`}
                    >
                      <option value="">Select a class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ▼
                    </div>
                  </div>
                  {errors.targetClass && (
                    <span className="text-xs font-bold text-red-500">{errors.targetClass}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1344e6] text-white py-4 font-bold text-sm shadow-md hover:bg-blue-700 transition-colors disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>

                {/* Small grey disclaimer */}
                <span className="block text-[10px] font-bold text-gray-400 text-center leading-snug">
                  By submitting this form, you agree to be contacted by NIMT Beacon School regarding your inquiry.
                </span>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
