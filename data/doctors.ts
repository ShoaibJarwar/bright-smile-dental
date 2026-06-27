import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ayesha Khan",
    title: "BDS, FCPS (Orthodontics)",
    specialization: "Orthodontics & Smile Design",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    bio: "Dr. Ayesha Khan completed her BDS from King Edward Medical University and her FCPS in Orthodontics from the College of Physicians and Surgeons Pakistan. She has trained at Guy's Hospital London and holds a certificate in Digital Smile Design. She leads Bright Smile's orthodontics and cosmetic department.",
    expertise: ["Clear Aligners", "Ceramic Braces", "Smile Makeovers", "Digital Smile Design"],
    available: true,
  },
  {
    id: "2",
    name: "Dr. Omar Farooq",
    title: "BDS, FCPS (Oral Surgery)",
    specialization: "Implants & Oral Surgery",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    bio: "Dr. Omar Farooq is our implantology lead, with over 1,200 implant placements to his name. He trained under Nobel Biocare's Global Institute programme and holds dual certification in surgical and prosthetic implantology. His minimally invasive approach reduces healing time significantly.",
    expertise: ["Nobel Biocare Implants", "Bone Grafting", "Wisdom Tooth Removal", "Full-Arch Rehabilitation"],
    available: true,
  },
  {
    id: "3",
    name: "Dr. Sara Ahmed",
    title: "BDS, MSc (Restorative Dentistry)",
    specialization: "Cosmetic & Restorative",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    bio: "Dr. Sara Ahmed holds an MSc in Restorative Dentistry from the University of Manchester. She specialises in porcelain veneers, composite bonding, and full-mouth rehabilitation. Her eye for aesthetics and her gentle chair-side manner make her a favourite among patients seeking cosmetic work.",
    expertise: ["Porcelain Veneers", "Composite Bonding", "Teeth Whitening", "Full-Mouth Rehab"],
    available: true,
  },
];