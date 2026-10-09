export type Category = { title: string; bn: string; description: string; icon: string; accent: string };
export type Activity = { title: string; category: string; date: string; image: string; description: string; tag: string };
export type EventItem = { title: string; category: string; date: string; time: string; location: string; description: string; status: "Upcoming" | "Ongoing" | "Previous"; link: string };
export type UpdateItem = { title: string; category: string; date: string; description: string; status: "Ongoing" | "Previous"; link: string };
export type BloodDonor = { name: string; bloodGroup: string; address: string; phone: string; lastDonation: string; totalDonated: number };
export type BloodDonationStats = { totalDonated: number };

export const categories: Category[] = [
  { title: "Health & Humanitarian", bn: "স্বাস্থ্য ও মানবিক সহায়তা", description: "রক্তদান, মেডিকেল ক্যাম্প ও জরুরি সহায়তায় পাশে থাকি।", icon: "✚", accent: "#f68712" },
  { title: "Education", bn: "শিক্ষা", description: "শিক্ষার্থীদের পাশে থেকে গড়ছি আলোকিত আগামী।", icon: "↗", accent: "#3159d8" },
  { title: "Sports & Youth", bn: "খেলাধুলা ও তারুণ্য", description: "খেলাধুলায় শক্তিশালী, সুস্থ ও একতাবদ্ধ তারুণ্য।", icon: "◎", accent: "#55a96d" },
  { title: "Environment", bn: "পরিবেশ", description: "গাছ লাগাই, সবুজে সাজাই আমাদের প্রিয় Taltola।", icon: "⌁", accent: "#78a33b" },
  { title: "Relief & Welfare", bn: "ত্রাণ ও জনকল্যাণ", description: "উৎসবের আনন্দ ভাগ করে নিই সবার সাথে।", icon: "♡", accent: "#d94963" },
  { title: "Community Development", bn: "কমিউনিটি ডেভেলপমেন্ট", description: "সচেতনতা, দক্ষতা ও সেবায় বদলাচ্ছে সমাজ।", icon: "↗", accent: "#8c5cc7" },
];

export const activities: Activity[] = [
  { title: "One Night Badminton", category: "Sports & Youth", date: "Coming soon", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=85", description: "রাতভর ব্যাডমিন্টনে তারুণ্যের প্রাণচাঞ্চল্য।", tag: "Event" },
  { title: "Tree distribution drive", category: "Environment", date: "Coming soon", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85", description: "আম, কাঁঠাল, আমড়া, লেবু ও পেয়ারা—দেশি গাছের চারা।", tag: "Campaign" },
  { title: "Ramadan iftar distribution", category: "Relief & Welfare", date: "Seasonal activity", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85", description: "সম্প্রীতি আর ভালোবাসায় ইফতার ভাগ করে নেওয়া।", tag: "Welfare" },
];

export const events: EventItem[] = [
  { title: "One Night Badminton", category: "Sports & Youth", date: "Date to be announced", time: "Time to be announced", location: "Taltola, Chatkhil", description: "রাতভর ব্যাডমিন্টনে তারুণ্যের প্রাণচাঞ্চল্য।", status: "Upcoming", link: "/events" },
  { title: "Tree distribution drive", category: "Environment", date: "Date to be announced", time: "Time to be announced", location: "Taltola, Chatkhil", description: "আম, কাঁঠাল, আমড়া, লেবু ও পেয়ারা গাছের চারা বিতরণ।", status: "Upcoming", link: "/events" },
  { title: "Ramadan iftar distribution", category: "Relief & Welfare", date: "Seasonal activity", time: "Time to be announced", location: "Taltola, Chatkhil", description: "সম্প্রীতি আর ভালোবাসায় ইফতার ভাগ করে নেওয়া।", status: "Previous", link: "/updates" },
];

export const updates: UpdateItem[] = [
  { title: "Community activities are ongoing", category: "Community Development", date: "Live update", description: "আমাদের স্বাস্থ্য, শিক্ষা, খেলাধুলা, পরিবেশ ও জনকল্যাণমূলক কাজের পরিকল্পনা ও সমন্বয় চলমান।", status: "Ongoing", link: "/what-do-we-do" },
  { title: "Ramadan iftar distribution", category: "Relief & Welfare", date: "Previous work", description: "সম্প্রীতি আর ভালোবাসায় ইফতার ভাগ করে নেওয়ার একটি কমিউনিটি উদ্যোগ।", status: "Previous", link: "/events" },
  { title: "Tree distribution drive", category: "Environment", date: "Previous work", description: "দেশি ফলজ গাছের চারা ও পরিবেশ সচেতনতার উদ্যোগ।", status: "Previous", link: "/events" },
];

export const bloodDonors: BloodDonor[] = [
  { name: "MD SHAKIB AL HASAN", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01615955945", lastDonation: "", totalDonated: 0 },
  { name: "YEASIN ARAFAT ONTOR", bloodGroup: "A+", address: "Chatkhil, Noakhali", phone: "01885902689", lastDonation: "", totalDonated: 0 },
  { name: "Iyasin Arafat", bloodGroup: "AB+", address: "Taltola, Chatkhil", phone: "01787735360", lastDonation: "", totalDonated: 0 },
  { name: "IMAM HOSSSAIN SHOWKOT", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01872421278", lastDonation: "10 September, 2026", totalDonated: 1 },
  { name: "RAKIB HOSSEN", bloodGroup: "A+", address: "Taltola, Chatkhil", phone: "01855074040", lastDonation: "", totalDonated: 0 },
  { name: "Abdullah bin jisun", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01613794319", lastDonation: "", totalDonated: 0 },
  { name: "Iyan Kabir Yasin", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01864167071", lastDonation: "", totalDonated: 0 },
  { name: "Iyan Kabir Yasin", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01864167071", lastDonation: "", totalDonated: 0 },
  { name: "Abdul Kader", bloodGroup: "A-", address: "Taltola, Chatkhil", phone: "01852442223", lastDonation: "", totalDonated: 0 },
  { name: "Risalat Araf Dipro", bloodGroup: "B+", address: "Taltola, Chatkhil", phone: "01872196179", lastDonation: "", totalDonated: 0 },
  { name: "Monir Hossain Shanto", bloodGroup: "A-", address: "Taltola, Chatkhil", phone: "01715113069", lastDonation: "", totalDonated: 0 },
  { name: "Md. Rishad", bloodGroup: "A+", address: "Taltola, Chatkhil", phone: "01816740108", lastDonation: "", totalDonated: 0 },
  { name: "Jamal Uddin ", bloodGroup: "AB+", address: "Taltola, Chatkhil", phone: "01821705671", lastDonation: "", totalDonated: 0 },
  { name: "Ismail Hossan ", bloodGroup: "A+", address: "Taltola, Chatkhil", phone: "01876594144", lastDonation: "", totalDonated: 0 },
  { name: "Fahad Hosen", bloodGroup: "O+", address: "Taltola, Chatkhil", phone: "01859102455", lastDonation: "", totalDonated: 0 },
  { name: "MD Naim", bloodGroup: "A+", address: "Taltola, Chatkhil", phone: "01883867939", lastDonation: "9 October 2026", totalDonated: 1 },
];
export const bloodDonationStats: BloodDonationStats = {
  totalDonated: 2,
};

export const navItems = [
  { label: "Home", href: "/" }, { label: "About us", href: "/about-us" }, { label: "What we do?", href: "/what-do-we-do" },
  { label: "Events", href: "/events" },
  { label: "Updates", href: "/updates" },
  { label: "Blood Donation", href: "/blood", emphasis: true },
];
