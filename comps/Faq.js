/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 1,
      question: "Wen Mint?",
      answer:
        "Our mint will be in Q2 2022. We plan to launch around the same time Trove launches.",
    },
    {
        id: 2,
        question: "How Much Is Minting?",
        answer:
          "Mint is FREE on Arbitrum! (Just need to pay gas fees).",
      },
      {
        id: 3,
        question: "What Are Litter Kittens?",
        answer:
          "Litter Kittens are a collection of 5,555 uniquely generated NFTs based on the Arbitrum network. Kittens are super playful so it is important you sometimes rest. I know that is a lot to ask when you are all wanting WL though!",
      },
      {
        id: 4,
        question: "What Marketplace Will Kittens Be On?",
        answer:
          "Kittens will be exclusively launching with Trove. This will be the ONLY marketplace the collection will be on.",
      }
    // More questions...
  ]

  const faqimgs = [
    {
      id: 1,
      image: require('../public/assets/faq-topleft.jpg').default,
    },
    {
      id: 2,
      image: require('../public/assets/faq-topright.jpg').default,
    },
    {
      id: 3,
      image: require('../public/assets/faq-botleft.jpg').default,
    },
    {
      id: 4,
      image: require('../public/assets/faq-botright.jpg').default,
    }
  ]
  
  export default function Faq() {
    return (
      <div id="faq" className="bg-fit bg-no-repeat bg-top" style={{ backgroundImage: "url('../assets/faq-bg.png')", backgroundPositionY: "-10%" }} >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl font-minecraft">
              FAQ
            </h2>
          </div>
          <div className="mt-20 lg:flex space-between items-center">
            <dl className="lg:max-w-2xl lg:pr-6 lg:mr-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="pb-4 mb-8">
                  <dt className="font-semibold text-gray-900 uppercase text-3xl mb-6 font-minecraft">{faq.question}</dt>
                  <dd className="mt-3 text-white font-minecraft">{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <div className="grid-cols-2 grid gap-x-2 gap-y-2">
                {faqimgs.map((faqimg) => (
                  <div key={faqimg.id} className="flex justify-center items-center">
                    <img src={faqimg.image.src} width="326" height="326"/>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  