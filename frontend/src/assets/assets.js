// ===== Importing assets =====
import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logo1 from './logo1.png'
import image_banner from './image_banner.png'
import rekha from './rekha.png'
import image_1 from './image_1.png'
import image_2 from './image_2.png'
import image_3 from './image_3.png'
import image_4 from './image_4.png'
import image_5 from './image_5.png'


// ===== Assets Export =====
export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    profile_pic,
    contact_image,
    about_image,
    logo,
    dropdown_icon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logo1,
    image_banner,
    rekha
}

// ===== Speciality Data =====
export const specialityData = [
    { speciality: 'Domestic help', image: image_1 },
    { speciality: 'Cooks', image: image_2 },
    { speciality: 'All Rounder', image: image_3 },
    { speciality: 'Babysitter', image: image_4 },
    { speciality: '24-Hrs Fulltime', image: image_5 }
]

// ===== Doctors Data =====
export const doctors = [
    {
        _id: 'rekha_1',
        name: 'Rekha kumar Mishra',
        image: rekha,
        speciality: 'Domestic help',
        contact: 'MBBS',
        experience: '4 Years',
        about: 'Experienced in comprehensive medical care, focusing on preventive medicine and early diagnosis.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_2',
        name: 'Rekha kumar Mishra',
        image: rekha,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Specialist in women\'s health with emphasis on preventive and therapeutic care.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_3',
        name: 'Dr. Sarah Patel',
        image: rekha,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Focused on skincare treatments and cosmetic dermatology for various skin types.',
        fees: 45,
        address: {
            line1: '5th Avenue, Baker Street',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_4',
        name: 'Dr. Henry Adams',
        image: rekha,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dedicated pediatrician providing specialized care to infants, children, and adolescents.',
        fees: 55,
        address: {
            line1: '8th Cross, Jubilee Hills',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_5',
        name: 'Dr. Laura White',
        image: rekha,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Expert in treating disorders of the brain, spine, and nervous system.',
        fees: 70,
        address: {
            line1: 'Sunset Boulevard, Downtown',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_6',
        name: 'Dr. Daniel Brown',
        image: rekha,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Experienced in digestive system disorders and related treatments.',
        fees: 65,
        address: {
            line1: 'Main Street, Soho',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_7',
        name: 'Dr. Amelia Scott',
        image: rekha,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Providing primary health care and wellness solutions for all age groups.',
        fees: 40,
        address: {
            line1: 'Silver Street, West End',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_8',
        name: 'Dr. Brian Lee',
        image: rekha,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Focused on skin, hair, and nail conditions, offering tailored treatments.',
        fees: 50,
        address: {
            line1: 'Hill Road, Cambridge',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_9',
        name: 'Dr. Chloe Green',
        image: rekha,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Passionate about providing holistic health services to women.',
        fees: 60,
        address: {
            line1: 'Baker Street, Marylebone',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_10',
        name: 'Dr. Ethan Walker',
        image: rekha,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Treating complex neurological disorders with advanced medical practices.',
        fees: 75,
        address: {
            line1: 'Bond Street, Mayfair',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_11',
        name: 'Dr. Olivia Martin',
        image: rekha,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Providing specialized health care services for children and adolescents.',
        fees: 55,
        address: {
            line1: 'Fleet Street, City of London',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_12',
        name: 'Dr. Michael Evans',
        image: rekha,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Experienced in diagnosing and managing gastrointestinal tract issues.',
        fees: 65,
        address: {
            line1: 'Kensington High Street',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha',
        name: 'Dr. Sophia Carter',
        image: rekha,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Focused on preventive care, health promotion, and disease management.',
        fees: 45,
        address: {
            line1: 'Park Lane, Westminster',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha',
        name: 'Dr. William Baker',
        image: rekha,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dedicated to diagnosing and treating a wide range of skin conditions.',
        fees: 55,
        address: {
            line1: 'Oxford Street, Westminster',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha',
        name: 'Dr. Ava Johnson',
        image: rekha,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Specialized in obstetrics, prenatal care, and women\'s reproductive health.',
        fees: 60,
        address: {
            line1: 'Piccadilly Circus, Central London',
            line2: 'Ring Road, London',
        },
    },
]
