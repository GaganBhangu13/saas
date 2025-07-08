import CompanionCard from "@/components/companioncard";
import CompanionsList from "@/components/companionslist";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
        <section className="home-section">
            <CompanionCard 
              id="123"
              name="Neura the Brainy Explorer"
              topic="Neural network of the brain"
              subject="science"
              duration={45}
              color="#E5D0FF"
            />
            <CompanionCard 
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivatives & Integrals"
              subject="Math"
              duration={30}
              color="#FFDA6E"
            />
            <CompanionCard 
              id="789"
              name="Verba the Vocabulary Builder"
              topic="Language"
              subject="English Litrature"
              duration={30}
              color="#BDE7FF"
            />
            
        </section>

        <section className="home-section">
          <CompanionsList 
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:wfull"
            />
          <CTA />
        </section>
    </main>
  )
}

export default Page