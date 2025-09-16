import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Award, BookOpen } from "lucide-react"

/**
 * Team Section Component
 *
 * Displays team member profiles with enhanced information and social links.
 * Features responsive grid layout and interactive member cards.
 */
export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Colenso Speer",
      role: "Team Mentor",
      bio: "Associate Professor in the Department of Biology at the University of Maryland, Dr. Speer specializes in neuroscience and brain connectivity research. He brings a wealth of experience in mentoring undergraduate research teams and guiding innovative projects in computational neuroscience.",
      image: "/speer.jpg",
      social: { linkedin: "https://speerlab.org", email: "cspeer@umd.edu" },
      faculty: true,
    },
    {
      name: "Nedelina Tchangalova",
      role: "Team Librarian",
      bio: "As the Public Health & Hearing and Speech Librarian at the University of Maryland, Nedelina assists with locating and evaluating scholarly sources, developing literature reviews, and navigating topics such as open science and data management.",
      image: "/nedelina.png",
      social: { linkedin: "https://www.linkedin.com/in/nedelina-tchangalova-0867526/", email: "nedelina@umd.edu" },
      faculty: true,
    },
    {
      name: "Darshana Adhikari",
      role: "Team Liaison",
      bio: "Darshana is a Neurobiology and Physiology major from Baltimore, MD. Outside of GEMS she is a part of the Do Good Institute, a research assistant at the Song Lab, and volunteers at Johns Hopkins Child Life Center. Aside from the academics she likes to paint landscapes and read books.",
      image: "/darshana.jpg",
      social: {linkedin: "https://www.linkedin.com/in/darshana-adhikari-189641318?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5%2FAyVe2HRPSEJuGlIaCqOw%3D%3D", email: "darshu06@terpmail.umd.edu" },
    },
    {
      name: "Sravya Tallapragada",
      role: "Mentor Liaison",
      bio: "Sravya is a neuroscience major from Laurel, MD. She is an ophthalmology tech and a research assistant for the Aphasia Lab and CCN Lab on campus. She is also a member of Phi Delta Epsilon. In her free time, she loves to dance and hike with her dog. She hopes to pursue a career in medicine.",
      image: "/sravya.jpg",
      social: {linkedin: "#", email: "srayvat@umd.edu" },
    },
    {
      name: "Anna Gatti",
      role: "Librarian Liaison",
      bio: "Anna is a Hearing and Speech Sciences major pursuing a career in speech pathology. She is from Catonsville, MD, and currently works in an autism research lab at UMD. In her spare time, she likes to sing and play the guitar! With prior research experience, she brings organizational skills and patience to the team.",
      image: "/anna.jpg",
      social: {linkedin: "#", email: "agatti@terpmail.umd.edu" },
    },
    {
      name: "Ezra Geller",
      role: "Website Manager",
      bio: "Ezra is a computer engineering major exploring web development and user experience design and is from Baltimore, MD. He also enjoys camping, playing chess, sports, and spending time with friends.",
      image: "/ezra.jpeg",
      social: {linkedin: "https://www.linkedin.com/in/ezrageller/", email: "ebgeller@terpmail.umd.edu" },
    },
    {
      name: "Saaket Potluri",
      role: "Website Manager",
      bio: "I'm a really nice person.",
      image: "/placeholder-user.jpg",
      social: {linkedin: "#", email: "#" },
    },
    {
      name: "Suhani Aryal",
      role: "Social Media Manager",
      bio: "Suhani is a Public Health Science major from Silver Spring, Maryland. Outside of Gemstones, she’s also a research assistant at UMD’s School of Public Health Aerobiology lab, and Georgetown’s Lombardi Comprehensive Cancer Center. In her free time she likes to do nail art and henna.",
      image: "/suhani.jpg",
      social: {linkedin: "#", email: "saryal@terpmail.umd.edu" },
    },
    {
      name: "Srihan Pothapragada",
      role: "Social Media Manager",
      bio: "I'm a really nice person.",
      image: "/placeholder-user.jpg",
      social: {linkedin: "#", email: "#" },
    },
    {
      name: "Oluwatayo (David) Feyemiwo",
      role: "Financial Liaison",
      bio: "David is an electrical engineering major who loves music and money. In his free time, he likes to play video games and sports.",
      image: "/david.jpg",
      social: {linkedin: "https://www.linkedin.com/in/oluwatayo-fayemiwo/", email: "fayemiwo@terpmail.umd.edu" },
    },
    {
      name: "Jehan Idsassi",
      role: "Financial Liaison",
      bio: "Jehan is a neuroscience major on the pre-medicine track from Prince George’s County, Maryland. Her academic interests include neurosurgery, neurological disorders, and regenerative medicine, and she brings both clinical insight and research experience in stem cell biology to support the team’s investigation. In her free time, Jehan enjoys reading, writing, baking, and spending time outdoors. She aspires to pursue an MD/PhD and become a neurosurgeon.",
      image: "/jehan.png",
      social: {linkedin: "https://www.linkedin.com/in/jehan-idsassi-9a0a8a375/", email: "jidsassi@terpmail.umd.edu" },
    },
    {
      name: "Madhobee Kabir",
      role: "Ombudsperson & Clerk",
      bio: "Madhobee is a neuroscience major and human development minor from Germantown, MD. She is a research assistant for the Comprehensive Assessment and Intervention Program lab at University of Maryland and an education intern at UP Robotics. In her free time, she likes hanging out with her friends and trying new foods. She aspires to pursue psychiatry in the future.",
      image: "/madhobee.jpeg",
      social: {linkedin: "https://www.linkedin.com/in/madhobee-kabir-6109b1249/", email: "madhobeekabir@gmail.com" },
    },
    {
      name: "Samantha Gallagher",
      role: "Ombudsperson & Clerk",
      bio: "Samantha is a Psychology Major from Annapolis, MD. She is a volunteer Emergency Medical Technician in College Park and teaches people how to recognize a drug overdose and use Narcan. In her free time she enjoys working out and watching sports. She hopes to pursue a career in medicine.",
      image: "/samantha.jpeg",
      social: {linkedin: "https://www.linkedin.com/in/samantharaegallagher/", email: "samantharaegallagher@gmail.com" },
    },
  ]

  // Split into faculty helpers and researchers
  const facultyHelpers = teamMembers.filter(m => m.faculty === true)
  const researchers = teamMembers.filter(m => m.faculty !== true)

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Get to know the passionate faculty mentors and dedicated student researchers driving our mission forward.
          </p>
        </div>

        {/* Faculty Helpers Section */}
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Faculty Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-16">
          {facultyHelpers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 hover:scale-102"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-accent/20 group-hover:border-accent/50 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`mailto:${member.social.email}`} target="_blank" aria-label={`Email ${member.name}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.social.linkedin} target="_blank" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Researchers Section */}
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Student Researchers</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 hover:scale-102"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-accent/20 group-hover:border-accent/50 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`mailto:${member.social.email}`} target="_blank" aria-label={`Email ${member.name}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={member.social.linkedin} target="_blank" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
