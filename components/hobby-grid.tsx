import Image from "next/image"

const hobbies = [
  { name: "Crochet", image: "/images/crochet.jpg" },
  { name: "Sourdough", image: "/images/sourdough.jpg" },
  { name: "Watercolor", image: "/images/watercolor.jpg" },
  { name: "Candle Making", image: "/images/candle-making.jpg" },
  { name: "Tea Tasting", image: "/images/tea-tasting.jpg" },
  { name: "Puzzling", image: "/images/puzzles.jpg" },
  { name: "Calligraphy", image: "/images/calligraphy.jpg" },
  { name: "Reading", image: "/images/reading.jpg" },
]

export function HobbyGrid() {
  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Explore Hobbies</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Discover what excites you
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From creative arts to mindful practices, find the perfect hobby to add joy to your routine.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={hobby.image}
                alt={hobby.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <h3 className="font-serif text-lg md:text-xl text-card">{hobby.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          And many more to come...
        </p>
      </div>
    </section>
  )
}
