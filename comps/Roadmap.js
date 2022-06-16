

/* This example requires Tailwind CSS v2.0+ */
const roadmap = [
  {
    id: 1,
    stage: "Stage 1",
    content:
      "Release the kittens, all 5,555 for WL only. Launch is going to be in Q2 2022. Kittens launch onto the Trove marketplace after minting.",
    image: require("../public/assets/roadmap-1.png").default
  },
  {
    id: 2,
    stage: "Stage 2",
    content:
      ["Introduction of staking. ", <br />, <br />, " Rewards of staking is that your kitten becomes more playful the longer you stake. ", <br />, <br />, " Benefits of staking is that it will earn you airdrops. These could include toys, food or a new home. Your kitten's playfullness will also play a part in the future of farming $smolcoin!"],
    image: require("../public/assets/roadmap-2.png").default
  },
  {
    id: 3,
    stage: "Stage 3",
    content:
      ['Introduction of utility, beginning with houses/habitats. ', <br />, <br />, ' Benefits of houses/habitats. ', <br />, <br />, ' - A place for your kitten to rest and hide. ', <br />, <br />, ' - Staking rewards increase by "X%" amount when your kitten spends enough time in its habitat / home.'],
    image: require("../public/assets/roadmap-3.png").default
  },
  {
    id: 4,
    stage: "Stage 4",
    content:
      ["Farming $smolcoin ", <br />, <br />, " Your kitten's playfullness will effect the rate at which you can farm $smolcoin staking for enough time will give you access to farming."],
    image: require("../public/assets/roadmap-4.png").default
  },
];

export default function Roadmap() {
  return (
    <div id="roadmap" className="bg-cover bg-no-repeat py-32 bg-top" style={{ backgroundImage: "url('../assets/roadmap-bg.png')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl uppercase text-center font-minecraft">
            Roadmap
          </h2>
        </div>
        <div className="mt-20">
          <dl className="space-y-10">
            {roadmap.map((faq) => (
              <div className="flex items-center lg:justify-between lg:flex-row flex-col lg:space-y-12" key={faq.id}>
                <div className="w-48 pr-4 pb-8 lg:w-72">
                  <img src={faq.image.src} />
                </div>
                <div className="flex-1">
                  <dt className="font-semibold text-gray-900 uppercase text-3xl font-minecraft">{faq.stage}</dt>
                  <p className="mt-3 text-white uppercase text-l font-minecraft">{faq.content}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
