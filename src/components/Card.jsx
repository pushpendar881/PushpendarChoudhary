function Card({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-lg block"
    >
      <div className="p-6 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-2 flex items-center justify-center">
            <div className="w-8 h-8 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9z" />
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              {title}
            </h2>
            <p className="text-zinc-400">{description}</p>
          </div>
        </div>
        <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors gap-2 group">
          View Details{" "}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function MultiCardGrid() {
  const cards = [
    {
      title: "Image Classifier",
      description: "Classification of images using CNN",
      link: "https://github.com/pushpendar881/CatDogClassifier",
    },
    {
      title: "House Price Prediction",
      description: "Prediction of house prices using various ML techniques",
      link: "https://github.com/pushpendar881/HousePricePrediction",
    },
    {
      title: "ChatBot",
      description:
        "Implemented an advanced image captioning framework combining BLIP for visual understanding and the Mistral 7B LLM for producing coherent and descriptive captions.",
      link: "https://github.com/pushpendar881/AI_ChatBot",
    },
  ];

  return (
    <div className="flex justify-center items-center w-auto max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiCardGrid;
