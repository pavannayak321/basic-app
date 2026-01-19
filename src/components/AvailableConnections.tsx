import FlipCard from "./FlipCard"

export default function AvailableConnections() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-12">
      <FlipCard
        name="Ramesh Kumar"
        role="Contractor"
        location="Hyderabad"
        experience="10+ years experience"
        skills={["Civil Works", "Site Management", "Planning"]}
      />

      <FlipCard
        name="Suresh Naidu"
        role="Labour"
        location="Secunderabad"
        experience="6 years experience"
        skills={["Masonry", "Concrete", "Brick Work"]}
      />

      <FlipCard
        name="Mahesh Rao"
        role="Agent"
        location="Gachibowli"
        experience="8 years experience"
        skills={["Recruitment", "Labour Supply", "Coordination"]}
      />
    </div>
  )
}
