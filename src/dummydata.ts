// src/data/doctors.ts
import { Doctor } from './types/index'

export const doctors: Doctor[] = [
  {
    id: "111418",
    name: "Dr. Kshitija Jagdale",
    name_initials: "KJ",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Kshitija Jagdale, BDS, has an Experience of 10 years, Graduated from Maharashtra University of Health Sciences, Nashik, currently practising in The Dent Inn Advanced Dental Clinic, Fatima Nagar, Pune",
    specialities: [
      {
        name: "Dentist"
      }
    ],
    fees: "₹ 500",
    experience: "13 Years of experience",
    languages: [
      "English",
      "हिन्दी",
      "मराठी"
    ],
    clinic: {
      name: "The Dent Inn Advanced Dental Clinic",
      address: {
        locality: "Wanowrie",
        city: "Pune",
        address_line1: "Office No. 6, Parmar Corner 1st Floor",
        location: "73.901653,18.504216",
        logo_url: ""
      }
    },
    video_consult: true,
    in_clinic: true
  },
  {
    id: "131682",
    name: "Dr. Chhaya Vora",
    name_initials: "CV",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Chhaya Vora is an experienced Gynaecologist with 39 years of practice",
    specialities: [
      {
        name: "Gynaecologist and Obstetrician"
      }
    ],
    fees: "₹ 400",
    experience: "39 Years of experience",
    languages: [
      "English",
      "हिन्दी",
      "मराठी"
    ],
    clinic: {
      name: "Dr. Chaya Vora",
      address: {
        locality: "Hadapsar",
        city: "Pune",
        address_line1: "Silver plaza aprt opp,Vitthal Rao Shivarkar Road, Fatima Nagar",
        location: "73.9011205,18.5045484",
        logo_url: ""
      }
    },
    video_consult: false,
    in_clinic: true
  },
  {
    id: "245612",
    name: "Dr. Murari Iswalkar",
    name_initials: "MI",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Murari Iswalkar is a General Physician with 27 years of experience",
    specialities: [
      {
        name: "General Physician"
      }
    ],
    fees: "₹ 600",
    experience: "27 Years of experience",
    languages: [
      "English",
      "हिन्दी",
      "मराठी"
    ],
    clinic: {
      name: "Apex Multispeciality and Maternity",
      address: {
        locality: "Kurla East",
        city: "Mumbai",
        address_line1: "Kurla East, Mumbai",
        location: "72.8777,19.0760",
        logo_url: ""
      }
    },
    video_consult: true,
    in_clinic: true
  },
  {
    id: "388421",
    name: "Dr. Subhash Bajaj",
    name_initials: "SB",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Subhash Bajaj specializes in General Medicine and Cardiology",
    specialities: [
      {
        name: "General Physician"
      },
      {
        name: "Cardiologist"
      }
    ],
    fees: "₹ 600",
    experience: "11 Years of experience",
    languages: [
      "English",
      "हिन्दी"
    ],
    clinic: {
      name: "Dr. Bajaj Wellness Clinic",
      address: {
        locality: "Santacruz",
        city: "Mumbai",
        address_line1: "Santacruz West, Mumbai",
        location: "72.8296,19.0821",
        logo_url: ""
      }
    },
    video_consult: true,
    in_clinic: true
  },
  {
    id: "423911",
    name: "Dr. Mohafizul Zulkif",
    name_initials: "MZ",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Mohafizul Zulkif is a General Physician providing online consultations",
    specialities: [
      {
        name: "General Physician"
      }
    ],
    fees: "₹ 600",
    experience: "7 Years of experience",
    languages: [
      "English",
      "हिन्दी"
    ],
    clinic: {
      name: "Sasvad Polyclinic",
      address: {
        locality: "Karvenagar",
        city: "Pune",
        address_line1: "Karvenagar, Pune",
        location: "73.8197,18.4909",
        logo_url: ""
      }
    },
    video_consult: true,
    in_clinic: false
  },
  {
    id: "512345",
    name: "Dr. Sanjana Mehta",
    name_initials: "SM",
    photo: "/api/placeholder/80/80",
    doctor_introduction: "Dr. Sanjana Mehta is a Neurologist specializing in brain disorders",
    specialities: [
      {
        name: "Neurologist"
      }
    ],
    fees: "₹ 800",
    experience: "15 Years of experience",
    languages: [
      "English",
      "हिन्दी"
    ],
    clinic: {
      name: "Neurovision Health Center",
      address: {
        locality: "Andheri West",
        city: "Mumbai",
        address_line1: "Andheri West, Mumbai",
        location: "72.8296,19.1364",
        logo_url: ""
      }
    },
    video_consult: true,
    in_clinic: true
  }
];