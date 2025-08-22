import Image from 'next/image'
import FAQSection from '../components/FAQSection'

export default function Home() {
  return (
    <div>
      {/* Top Banner - Light gray with FREE SHIPPING text and SHOP button */}
      <div className="bg-gray-200 text-black py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-sm font-medium">FREE SHIPPING On All Orders</div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
            SHOP
          </button>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Hamburger Menu */}
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Center: Seratame Logo */}
            <div className="flex flex-col items-center">
              <div className="text-green-600 text-2xl mb-1">🌿</div>
              <div className="text-2xl font-bold text-black">Seratame</div>
              <div className="text-sm text-gray-600">RESTLESS LEG SYNDROME RELIEF</div>
            </div>
            
            {/* Right: Empty space for balance */}
            <div className="w-6"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-white py-6 md:py-10">
          <div className="max-w-6xl mx-auto px-4">
            {/* Headlines */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                How I Ended My Restless Legs...
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Naturally
              </h2>
              <p className="text-lg md:text-xl font-bold text-green-700 mb-4">
                Get the All Natural Remedy for Restless Legs. Discover the secret of Seratame.
              </p>
              <p className="text-black">From: The Seratame Team</p>
              <div className="text-gray-400 text-sm mt-2">[getsocial app="sharing_bar"]</div>
            </div>

            {/* Content with Left-Aligned Image */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left: Image */}
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-lg p-4">
                  <Image 
                    src="/profile1.jpg" 
                    alt="Woman with long dark brown hair in white collared shirt" 
                    className="w-full h-auto object-cover rounded" 
                    width={400} 
                    height={500} 
                  />
                </div>
              </div>
              
              {/* Right: Text Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="bg-white border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-4">Restless Legs</h3>
                  <p className="text-gray-700 mb-4">
                    If you're looking to simply mask your symptoms of restless legs – and not actually fix the underlying cause of what's going on – then this article is NOT for you.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    You can stop reading this right now.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700">
                    However, if you're looking to go beyond the "band aid" fixes, or home remedies that seem to help at first, only to make your symptoms much worse in the end, then keep reading.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <p className="text-green-700 font-semibold">
                      Because you're about to find out the critical message your body is trying to give you with your restless leg symptoms, and more importantly, what 3 key things you can do right now to give your body what it's been desperately crying out for – and finally shut down the underlying cause of your symptoms quickly.
                    </p>
                  </div>

                  <p className="text-gray-700">
                    If you have RLS, you already know the sheer agony of never sleeping, no matter how tired you are. Just lying awake in the middle of the night, being tormented by your body. It doesn't let up.
                  </p>

                  <p className="text-gray-700">
                    You could be totally exhausted but when you finally climb into bed to fall asleep – it creeps up on you… Something gets going inside of you, to full power – and it doesn't stop.
                  </p>

                  {/* Teal Quote Box - Matches Screenshot */}
                  <p className="text-gray-700">
                    As one sufferer put it "Imagine you're buried alive in a tight space, and the only thing you can think about is moving your limbs, and how you'll go absolutely crazy if you can't."
                  </p>

                  <div className="bg-teal-50 border border-teal-400 rounded-lg p-6 my-6">
                    <p className="text-teal-700 text-xl font-bold leading-relaxed mb-2">
                      "Imagine you're buried alive in a tight space, and the only thing you can think about is moving your limbs, and how you'll go absolutely crazy if you can't..."
                    </p>
                    <p className="text-teal-600 text-sm">— RLS Sufferer</p>
            </div>

                  <p className="text-gray-700">
                    It's a helpless feeling just lying there wide awake, yet worn-out at the same time. Feeling powerless to be able to do anything permanent to stop it.
                  </p>

                  <p className="text-gray-700">
                    And it feels utterly defeating… Because you've seen the doctors. Maybe you've even seen specialists.
                  </p>

                  <p className="text-gray-700">
                    Most of the time, what they'll typically do is prescribe you drugs. Often, they're drugs meant for other health conditions. Or worse, they'll prescribe you the more addictive kinds.
                  </p>

                  <p className="text-gray-700">
                    The scary ones you read about that are almost impossible to quit. And it seems like almost every study of these types of drugs reveal that they eventually lose their effectiveness over time.
                  </p>

                  {/* First Green Highlighted Box */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 font-semibold">
                      And what's worse, your symptoms often return much more vigorous than before!
                    </p>
                </div>

                  <p className="text-gray-700">
                    So obviously, it's really not an answer. But I believe we've uncovered something huge in the study and advancement of restless legs. And I am so thrilled to share this with you.
                  </p>

                  {/* Second Green Highlighted Box */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 font-semibold">
                      Because if you can understand what your body is saying, and you know how to respond, the messages can finally stop.
                    </p>
              </div>
                </div>
              </div>
                </div>
              </div>
        </section>

        {/* The 3 Key Problems Section */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                The 3 Key Problems with Restless Legs
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                Here is exactly how we've connected the dots and helped thousands with their restless legs symptoms… All without the use of drugs or expensive therapies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As I mentioned, there are really 3 main factors in people with restless legs:
              </p>
              
              {/* Numbered List */}
              <div className="text-left max-w-2xl mx-auto space-y-2 mb-8">
                <p className="text-lg text-gray-700">1. Malfunctioning dopamine-receptors</p>
                <p className="text-lg text-gray-700">2. Poor iron metabolism</p>
                <p className="text-lg text-gray-700">3. Chronic/long-term inflammation</p>
                </div>
              
              <p className="text-lg text-gray-700 mb-8">
                As you'll find out below, once you know how to correct all 3 malfunctions, symptoms can actually reside all on their own.
              </p>
              <p className="text-lg text-gray-700">
                Let's briefly explore all 3 of these:
              </p>
              </div>

            {/* First Problem: Malfunctioning Dopamine-Receptors */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                1. Malfunctioning Dopamine-Receptors
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Just about every medical researcher studying restless legs agrees that one of the most common factors affecting all patients is that their dopamine-receptors aren't functioning properly. <span className="text-sm text-gray-500">[1] Causes of Restless Legs. Role of Dopamine; Earley, Ph.D. 2018</span>
                </p>
                
                <p>
                  And dopamine receptors are so important. They're often called the "feel good" chemicals and their primary function is sending messages that control muscle movement.
                </p>
                
                <p>
                  That is <em>exactly</em> why almost any doctor you see prescribes dopamine-stimulating drugs for restless legs.
                </p>
                
                <p>
                  But this logic is flawed, and even they know this. Here's why.
                </p>
                
                <p>
                  The biggest problem with restless legs is the bulk of your receptors that are <strong>SUPPOSED</strong> to receive dopamine aren't receiving it. <span className="text-sm text-gray-500">[2] Restless Legs, Insomnia And Brain Chemistry: A Tangled Mystery Solved? Allen, Ph.D. 2013</span>
                </p>
            </div>
            </div>
            </div>
        </section>

        {/* The Iron Connection Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              <p>
                And iron is absolutely critical for the proper functioning of dopamine-receptors. But here's the catch...
              </p>
              
              {/* Prominent Teal Quote */}
              <div className="bg-teal-50 border border-teal-400 rounded-lg p-6 my-8">
                <p className="text-teal-700 text-xl font-bold leading-relaxed">
                  "Your iron levels are probably fine. Your iron metabolism most likely isn't..."
                </p>
            </div>
              
              {/* Section Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
                2. The Iron Connection - Poor Iron Metabolism
              </h3>
              
              <p>
                That's why doctors often test iron levels for RLS. Iron is essential for many bodily functions, especially for RLS sufferers.
              </p>
              
              <p>
                Testing iron levels isn't a bad idea. The problem is that these tests only check the amount of iron in the blood.
              </p>
              
              <p>
                <strong>"Your iron levels are probably fine. Your iron metabolism most likely isn't..."</strong>
              </p>
              
              <p>
                Here's a little secret that some doctors won't tell you.
              </p>
              
              <p>
                There are two common "avenues" doctors take based on test results, both of which can lead in the wrong direction.
              </p>
              
              <p>
                If blood tests show low iron, patients are given iron supplements.
              </p>
              
              <p>
                If blood tests show normal or near-normal iron, patients are prescribed "dopa-stimulating drug after another" as a temporary "band-aid."
              </p>
              
              <p>
                But doctors are missing the most important fact...
              </p>
              
              <p>
                RLS has nothing to do with the amount of iron in the blood, but <em>everything to do with low iron levels in your brain.</em>
              </p>
          </div>
            </div>
        </section>

        {/* Why Iron Supplementation is Bad Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              {/* Main Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
                Why supplementing with Iron is one of the worst things you can do for Restless Legs
              </h3>
              
              <p>
                It's not a matter of how much iron you have in your blood. In fact, it can make your symptoms worse or even fatally toxic to take too much iron. A recent study revealed that only 1 in 5 restless leg sufferers were actually iron deficient. <span className="text-sm text-gray-500">[5] Restless legs and low brain iron levels in patients; J Haba-Rubio, L Staner. 2005</span>
              </p>
              
              <p className="font-semibold">
                So what gives?
              </p>
              
              <p>
                The truth is, restless legs is caused by problems with iron transportation and delivery to the brain. What these experts are now realizing, is that it really boils down to how much iron can cross the blood-brain barrier and get into your brain, so it can be properly utilized by your dopamine-receptors. <span className="text-sm text-gray-500">[6] Response to intravenous iron in patients with iron deficiency and restless leg; Mehmood T, Auerbach M. 2014</span>
              </p>
              
              <p>
                We are absolutely convinced that inflammation is the #1 underlying cause beneath all of the restless legs factors mentioned above. In fact, the most recent studies have linked low-dopamine activity AND low-iron levels in the brain directly to long term inflammation in restless legs patients. <span className="text-sm text-gray-500">[7] Restless Legs, Insomnia And Brain Chemistry: A Tangled Mystery Solved? Allen, Ph.D. 2013</span>
              </p>
              
              <p>
                Iron is a critical element for the proper functioning of dopamine-receptors.
              </p>
              
              <p>
                So, obviously the next question becomes - Why do people with restless legs have a deficiency of iron in their brain?
              </p>
          </div>
        </div>
        </section>

        {/* Inflammation Section Preview */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
              "Inflammation – The Connecting Factor in Almost Every Restless Legs Case..."
            </h3>
      </div>
        </section>

        {/* Inflammation Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              {/* Section Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-teal-700">3.</span> How Inflammation is at the very Heart of Restless Legs
              </h3>
              
              <p>
                Restless legs is complex. If you want to uproot the cause of your suffering, and not just battle your symptoms forever, you have to connect all the dots with this condition.
              </p>
              
              <p className="font-semibold">
                And these dots all point back to inflammation.
              </p>
              
              <p>
                We are absolutely convinced that inflammation is the #1 underlying cause beneath all of the restless legs factors mentioned above.
              </p>
              
              <p>
                In fact, the most recent studies from 2016 and 2017 have linked low-dopamine activity AND low-iron levels in the brain directly to long term inflammation in restless legs patients. <span className="text-sm text-gray-500">[8]</span>
              </p>
              
              {/* Academic Citations */}
              <div className="text-sm text-gray-500 italic space-y-1 ml-4">
                <p>[8] <em>Inflammation Effects on Motivation and Motor Activity: Role of Dopamine; J. Felger, M. Treadway. 2016</em></p>
                <p>[9] <em>Iron and Inflammation – the Gut Reaction; S. Verma and B. Cherayil. 2017</em></p>
              </div>
              
              <p>
                According to this research, inflammation causes a chain of events to happen in the body which first leads to poor iron metabolism and eventually, a malfunction of dopamine receptors in restless leg patients. <span className="text-sm text-gray-500">[10]</span>
              </p>
              
              {/* Third Citation */}
              <div className="text-sm text-gray-500 italic ml-4">
                <p>[10] <em>Limitations of Serum Ferritin in Diagnosing Iron Deficiency in Inflammatory Conditions; A. Dignass K. Farrag. 2018</em></p>
            </div>
              
              <p>
                But before I can show you how to uproot all 3 of these causes, it's important that you know how this is happening in the body.
              </p>
              </div>
            </div>
        </section>

        {/* The Inflammation Loop Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                The Inflammation Loop and Restless Legs
              </h2>
                      </div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <p>
                During inflammation, your body releases immune cells called cytokines. Think of these as an army of troops for your immune system.
              </p>
              
              <p>
                For unknown reasons, these cytokine cells shut down something critical for allowing iron into the brain. <span className="text-sm text-gray-500">[11] Restless legs. Theoretical roles of inflammatory and immune mechanisms; L. Weinstock, A. Walters. 2011</span>
              </p>
              
              {/* Substantia Nigra Image */}
              <div className="text-center my-8">
                <img
                  src="/Substantia-Nigra-Zoom-in.jpg"
                  alt="Substantia Nigra Zoom-in - The Inflammation Loop and Restless Legs"
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                  style={{ maxHeight: '500px' }}
                />
                <p className="text-sm text-gray-500 mt-2 italic">
                  The Inflammation Loop and Restless Legs - Substantia Nigra Zoom-in
                </p>
              </div>
              
              <p>
                This iron-transporter is called <strong>ferroportin</strong>.
              </p>
              
              <p>
                Ferroportin is critical because its only job is to allow iron into your brain.
              </p>
              
              <p>
                In people with restless legs, who often have constant, low-grade inflammation, this precious ferroportin becomes scarce over time.
              </p>
              
              <p>
                As a result, the iron in your blood becomes stranded, not able to get to your brain.
              </p>
              
              <p>
                Due to this constant state of inflammation, other immune cells are released, which can alter the ability for dopamine-receptors to function.
              </p>
              
              <p>
                Many experts believe this is a built-in mechanism that the body activates during periods of stress or an inflammatory response.
              </p>
                        </div>
                      </div>
      </section>

        {/* Academic Quote and Solution Introduction Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              <p>
                In fact, Michael Treadway, professor in Emory's Department of Psychology, describes this critical link between inflammation and dopamine:
              </p>
              
              {/* First Quoted Paragraph */}
              <div className="border-l-4 border-teal-400 pl-6 py-2 bg-teal-50">
                <p className="italic text-gray-800">
                  "When your body is fighting an infection or healing a wound, your brain needs a mechanism to re-calibrate your motivation to do other things so you don't use up too much of your energy."
                </p>
                        </div>
              
              {/* Second Quoted Paragraph */}
              <div className="border-l-4 border-teal-400 pl-6 py-2 bg-teal-50">
                <p className="italic text-gray-800">
                  "We now have strong evidence suggesting that the immune system disrupts the dopamine system to help the brain perform this re-calibration."
                </p>
                        </div>
              
              <p>
                In other words, the body redirects its energy from producing 'feel good' chemicals over to making immune and inflammatory chemicals, so it can fight more effectively.
              </p>
              
              <p>
                When your body is chronically inflamed, all of your extra energy is being used up by your immune system.
              </p>
              
              <p>
                Because when your body is stuck in an un-ending loop of inflammation, there aren't as many resources for doing much else.
              </p>
              
              <p>
                And, as is the case for so many restless legs sufferers, their immune system never shuts off. It's on red alert every second of the day.
              </p>
                        </div>
                        </div>
        </section>

        {/* Solution Introduction Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                How to Quickly Shut Down Restless Leg Symptoms – Step-by-Step
              </h2>
                      </div>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Over the years, we've used so many different strategies for quickly shutting down restless leg symptoms. However, we've discovered a 3-part system, that when followed correctly, can shut down even the worst of symptoms in a matter of days, and sometimes, even hours.
              </p>
              
              <p>
                It doesn't require drugs and it's not expensive. It's a 1-2-3 punch that quickly and safely addresses all 3 of the biggest restless leg causes mentioned above.
              </p>
              </div>
                        </div>
        </section>

        {/* Lactobacillus Plantarum 299 Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              Lactobacillus Plantarum 299 (Probiotic) –<br />#1 Iron Synthesizer
            </h2>

            <div className="flex justify-center mb-8">
              <img
                src="/probiotics-300x225.jpg"
                alt="Lactobacillus Plantarum 299 Probiotic Bacteria"
                className="rounded-lg shadow-md"
                style={{ maxWidth: '500px', height: 'auto' }}
              />
            </div>

            <div className="space-y-6 text-gray-700">
              <p>
                We've already seen why just supplementing with more iron is in fact one of the worst things you can do for restless legs, so what <span className="italic font-semibold">does</span> work?
              </p>
              <p>
                When we were doing research into what was the most effective way for helping iron cross the blood-brain barrier, there was one winner which stood out from the rest – probiotics. Particularly the probiotic strain Lactobacillus plantarum 299.
              </p>
              <p>
                These are friendly bacteria that are already present in the human body, which work hard at breaking down vitamins and minerals from food so that they are more bio-available and useful to the body. <span className="text-sm text-gray-500">[12] Freeze-dried Lactobacillus plantarum 299v increases iron absorption in young females; Hoppe M, Önning G. 2017</span>
              </p>
              <p>
                But due to modern diet and lifestyle, most people are severely depleted in these friendly helpers. The probiotic strain Lactobacillus plantarum 299, is especially efficient at breaking down iron so that can cross the blood-brain barrier – where it's really needed most.
              </p>
              <p>
                The next super power we found in our research comes from an unlikely source. But we've seen it deliver consistent results time and time again...
              </p>
                      </div>
                    </div>
      </section>

        {/* Magnesium Glycinate Infographic Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Magnesium Glycinate – "A Spring Cleaning" for Your Dopamine Receptors
              </h2>
              <h3 className="text-xl text-gray-600">
                How Does Magnesium Glycinate Work?
              </h3>
              </div>

            {/* How Does Seratame Work Image */}
            <div className="flex justify-center mb-8">
              <img
                src="/NewHowDoesSeratameWorkNew-590x1024.min_.jpg"
                alt="How Does Seratame Work - Magnesium Glycinate Process"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
        </div>
      </section>

        {/* The Off-Switch for Inflammation Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                The Off-Switch for the "Inflammation Loop"
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Lastly, you want to focus efforts on putting out the 'fire' of inflammation.
              </p>
              
              <p>
                We've found that by stopping the inflammation that's happening, the natural repairing mechanisms within your body can re-activate and come back online.
              </p>
              
              <p>
                This is the most critical step. It's where we've spent the most time and research solving.
              </p>
            </div>

            {/* Turmeric Image */}
            <div className="flex justify-center mb-6">
              <Image
                src="/ingredient-curcumin.jpg"
                alt="Fresh turmeric root and bright yellow turmeric powder on wooden surface"
                width={500}
                height={350}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">
                There is no other compound in the world which provides more inflammation reducing effects per ounce than curcumin.
              </p>
            </div>
            </div>
        </section>

        {/* Curcumin and Vitamin D3 Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {/* Curcumin Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Curcumin – The Natural Anti-Inflammatory Powerhouse
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Curcumin is one of the longest-used and most powerful, natural anti-inflammatory agents in the world.
                  </p>
                  
                  <p>
                    It has the ability to "turn-off" immune cells that cause excessive inflammation without compromising the immune system's effectiveness.
                  </p>
                  
                  <p>
                    Hundreds of experiments demonstrate Curcumin's ability to stop inflammation. <span className="text-sm text-gray-500">[17] Safety and anti-inflammatory activity of curcumin: a component of tumeric; Chainani-Wu N. 2003</span>
                  </p>
                  
                  <p>
                    This makes Curcumin the quickest and most effective way to silence restless leg triggers.
                  </p>
                  
                  <p>
                    But there's a major deficiency that almost every patient seems to have in common.
                  </p>
                  
                  <p>
                    I saved this one for last because it causes the most violent episodes of restless legs – especially at night.
                  </p>
                </div>
              </div>

              {/* Vitamin D3 Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Vitamin D3 – Protector of Your Brain & Movement Receptors
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Restless legs originates and concludes in the brain. This is where the real battle is taking place.
                  </p>
                  
                  <p>
                    There are hundreds of studies that conclude this.
                  </p>
                  
                  <p>
                    Over a dozen landmark studies show Vitamin D deficiency in upwards of 75% of restless leg sufferers. <span className="text-sm text-gray-500">[18] An evaluation of sleep quality and the prevalence of restless legs in vitamin D deficiency; Cakir T., Dogan G. 2015</span>
                  </p>
                  
                  <p>
                    Vitamin D is the "sunshine vitamin." It acts as an anti-inflammatory and a protector for the brain's regions responsible for receiving nerve-pain and movement signals.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

        {/* Vitamin D3 and K2 Synergistic Effects Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              <p>
                Experts found that the replenishment of vitamin D levels had decreased both the pain/severity of restless legs symptoms in patients.
              </p>
              
              <p>
                But you don't want to just take any vitamin D. For one, it's not cheap.
              </p>
              
              <p>
                But second, you would be wasting most of it because regular vitamin D isn't readily absorbed in your body.
              </p>
              
              <p>
                Vitamin D3 is the most natural form that your body is able to utilize. It's the same form that your skin produces whenever it's exposed to sunlight.
              </p>
              
              <p>
                But here's the key to even <strong>BETTER</strong> results...
              </p>
              
              <p>
                Taking vitamin K2 along with D3.
              </p>
              
              <p>
                The K2 works with vitamin D3 to help your body direct the calcium and magnesium to the proper tissues in the body. Without it, you are at risk for soft tissue calcifications in the brain, aorta and other soft tissues in the body.
              </p>
              
              <p>
                Also, when taken together, K2 and D3 have a synergistic effect – both improving their brain protecting powers while increasing absorption rate of both compounds. <span className="text-sm text-gray-500">[19] The Synergistic Interplay between Vitamins D and K; A. Ballegooijen, S. Pilz. 2017</span>
              </p>
          </div>
            
            {/* Final Statement */}
            <div className="text-center mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                <strong>No Other Formula Compares to Seratame</strong>
              </h2>
          </div>
        </div>
      </section>

        {/* Seratame Product Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/bottle-placeholder.png"
                    alt="Seratame dietary supplement bottle with teal label, white bottle, and scattered capsules"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  {/* Product Details Overlay */}
                  <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    CLINICALLY TESTED
              </div>
                  <div className="absolute top-4 right-4 bg-white text-teal-600 px-3 py-1 rounded text-sm font-semibold border border-teal-600">
                    30-DAY SUPPLY
            </div>
                  <div className="absolute bottom-4 left-4 bg-white text-teal-600 px-3 py-1 rounded text-sm font-semibold border border-teal-600">
                    60 CAPSULES
              </div>
            </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-teal-700 mb-6">
                  The Complete Solution in One Bottle
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Seratame is unique in that it addresses all three main causes of restless legs in one bottle: dopamine malfunction, iron absorption, and inflammation.
                  </p>
                  
                  <p>
                    It's the easiest, most natural way to 'tame' your restless leg symptoms quickly. Seratame includes all the ingredients that you need to help stop restless leg symptoms for good.
                  </p>
                  
                  <p>
                    Our formula is all-natural. Every ingredient is naturally occurring and essential to the human body. No prescription drugs with nasty effects.
                  </p>
                  
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-teal-800 mb-4">Premium Ingredients Include:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Magnesium Glycinate</strong> – For dopamine receptor health</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Passionflower</strong> – Natural calming support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Turmeric Extract</strong> – Powerful anti-inflammatory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Vitamin D3 + K2</strong> – Brain protection & absorption</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Vitamin B6</strong> – Nervous system support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-teal-600">•</span>
                        <span><strong>Lactobacillus plantarum 299</strong> – Iron absorption</span>
                      </li>
                    </ul>
            </div>
                  
                  <p>
                    Seratame works to replenish all of the major body systems that are most common for patients.
                  </p>
                  
                  <p className="font-semibold text-teal-700">
                    But don't just take our word for it. Here's what NFL Hall of Fame athlete and former restless leg sufferer, Herb Adderley, has to say...
                  </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Herb Adderley Testimonial and Seratame Club Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Testimonial Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Herb Adderley Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="text-center">
                  <Image
                    src="/profile1.jpg"
                    alt="Herb Adderley in football uniform, Pro Football Hall of Fame '80"
                    width={200}
                    height={250}
                    className="rounded-lg shadow-md mb-4"
                  />
                  <div className="font-bold text-lg">Herb Adderley</div>
                  <div className="text-sm text-gray-600">Pro Football Hall of Fame '80</div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="lg:col-span-2 space-y-4 text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "Gone after 3 days..."
                </h3>
                
                <p>
                  I struggled with restless legs for over twenty years. I tried everything from over-the-counter drugs like "Magni-Life" and "Restless Legs Relief" to prescription medications. Nothing worked and the side effects were terrible - stomach upset, dry mouth, you name it.
                </p>
                
                <p>
                  After three days of taking Seratame, my legs calmed down and the agitation stopped. I can finally sleep through the night without the constant movement and discomfort. I strongly suggest to anyone with restless legs to try Seratame.
                </p>
                
                <div className="text-sm text-gray-600 italic">
                  -Herb Adderley, GREEN BAY PACKERS – 1961-69 – DALLAS COWBOYS – 1970-72 – PRO FOOTBALL HALL OF FAME – 1980
                </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  *Testimonials are individual accounts. Results may vary.
                </div>
              </div>
            </div>

            {/* The Seratame Club Section */}
            <div className="bg-teal-600 text-white rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  The Seratame Club
                </h2>
                <p className="text-xl">
                  A monthly delivery of our powerful supplement
                </p>
              </div>

              {/* Product and Pricing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Product Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/bottle-placeholder.png"
                      alt="Seratame dietary supplement bottle with teal label"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                    {/* Quality Guaranteed Badge */}
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      QUALITY GUARANTEED
                    </div>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="space-y-6">
                  {/* Customer Reviews */}
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <span className="text-yellow-300 text-2xl">★★★★☆</span>
                    </div>
                    <div className="text-sm">(170 Customer Reviews)</div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-teal-500">
                      <span>List Price:</span>
                      <span className="line-through text-lg">$49.95 per month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-teal-500">
                      <span>Sale Price:</span>
                      <span className="text-3xl font-bold text-green-300">$39.95 per month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-teal-500">
                      <span>Quantity:</span>
                      <span>60 capsules</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Shipping:</span>
                      <span className="text-green-300 font-semibold">FREE SHIPPING</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

        {/* Free eBook Promotion Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* eBook Cover */}
            <div className="mb-8">
              <div className="flex justify-center">
                <img
                  src="/Restless-Leg-ebook.jpg"
                  alt="HOW TO RELIEVE RESTLESS LEG SYNDROME NATURALLY - Restless Legs Secrets eBook"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>

            {/* eBook Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Free for a limited time only, this <strong className="underline">Restless Legs Secrets eBook</strong> shows you an easy to follow action plan that can help stop your restless legs quickly. And so much more... This eBook is available to members of the Seratame program and can be instantly downloaded to your computer after joining.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mb-8">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                JOIN NOW
            </button>
            </div>

            {/* Payment Method Icons */}
            <div className="flex justify-center items-center space-x-4">
              <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-semibold">MasterCard</div>
              <div className="bg-blue-800 text-white px-3 py-2 rounded text-sm font-semibold">Visa</div>
              <div className="bg-blue-500 text-white px-3 py-2 rounded text-sm font-semibold">Amex</div>
              <div className="bg-orange-600 text-white px-3 py-2 rounded text-sm font-semibold">Discover</div>
              <div className="bg-gray-600 text-white px-3 py-2 rounded text-sm font-semibold">Bank</div>
          </div>
        </div>
      </section>

            {/* 16th Section: Why Does Seratame Work & Supplement Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Why Does Seratame Work */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
              Why Does Seratame Work
            </h2>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto">
              Because each of the ingredients, when taken together, have proven to be clear-cut winners for relieving even the worst restless leg symptoms.
            </p>
            </div>

          {/* Supplement Facts Label Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/Seratame_new_label_Updated_2022_375x519.png"
              alt="Seratame Supplement Facts Label - Updated 2022"
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '600px' }}
            />
          </div>
          </div>
        </section>

      {/* 17th Section: Who Seratame is Ideal For & Usage Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Seratame is ideal for people with:
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-3 mb-8 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Restless legs
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Aches in the limbs at night
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                The inability to control the urge to move your limbs
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Body aches associated with restless leg symptoms
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Periodic Limb Movement (PLM)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Leg Cramps or muscle spasms
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Usage Instructions & Benefits</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Dosage:</strong> Take 2 capsules per day until your symptoms stop or greatly improve.
                </p>
                <p>
                  <strong>How it works:</strong> The unique formula is designed so that you see immediate results. You'll get the best results when you take Seratame consistently and long term because it works to replenish the vitamin/mineral/probiotic imbalances within your body.
                </p>
                <p>
                  <strong>Results Timeline:</strong> Most people start to see results in just 2-3 weeks of regular use, depending on the severity of their deficiency.
                </p>
              </div>
              </div>
            </div>
              </div>
      </section>

      {/* 18th Section: The Seratame Club Monthly Delivery */}
      <section className="py-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Banner - Labor Day Special Offer Style */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-4 px-6 rounded-t-2xl shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <h2 className="text-2xl font-bold">Special Limited Time Offer</h2>
            </div>
            <p className="text-lg font-semibold mt-1">Join The Seratame Club & Save Big!</p>
          </div>

          <div className="bg-white border-3 border-purple-600 rounded-b-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold text-purple-800 mb-2">1 Month AutoShip & Save</h3>
              <p className="text-xl text-gray-600">Get started with our powerful restless leg solution</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Visuals - Modern Layout */}
              <div className="relative">
                {/* Main Product - Seratame Bottle - Clean Design */}
                <div className="relative mb-8">
                  <img
                    src="/bottle-placeholder.png"
                    alt="Seratame Supplement Bottle"
                    className="w-80 h-auto mx-auto drop-shadow-lg"
                  />
                  
                  {/* Simple Clinical Badge - Top Left */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-500 rounded-full flex flex-col items-center justify-center text-white text-xs font-bold shadow-lg">
                    <span>CLINICAL</span>
                    <span>CITRUSLABS</span>
                    <span>TESTED</span>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mt-1">
                      <span className="text-teal-500 text-sm">✓</span>
                    </div>
                  </div>

                  {/* Simple Product Info */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm">
                    <p className="font-semibold text-gray-800">60 Capsules</p>
                    <p className="text-gray-600">Dietary Supplement</p>
                  </div>
                </div>

                {/* Simple Freebies Section */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Free eBook */}
                  <div className="text-center">
                    <div className="w-16 h-20 bg-purple-400 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-2xl">
                      📚
                    </div>
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                      FREE
                    </div>
                  </div>

                  {/* Free Pill Case */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-2xl">
                      💊
                    </div>
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                      FREE
                    </div>
                  </div>

                  {/* Free Shipping */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-2xl">
                      🚚
                    </div>
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                      FREE
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Information & Pricing - Modern Layout */}
              <div className="space-y-6">
                {/* Customer Reviews - Simple */}
                <div className="text-center bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 font-medium">(170+ Customer Reviews)</p>
                </div>

                {/* Benefits List - Modern Style */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-800">30-day supply delivered monthly</span>
                    </div>
                    <span className="line-through text-gray-400 font-semibold">$49.95</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-800">30% off for life</span>
                    </div>
                    <span className="line-through text-gray-400 font-semibold">$20</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-800">Free eBook guide</span>
                    </div>
                    <span className="line-through text-gray-400 font-semibold">$24</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-800">Free on-the-go pill case</span>
                    </div>
                    <span className="line-through text-gray-400 font-semibold">$9</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-800">Free USA Shipping!</span>
                    </div>
                    <span className="line-through text-gray-400 font-semibold">$12</span>
                  </div>
                </div>

                {/* Quantity Selector - Modern Style */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-800 font-semibold">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xl hover:bg-purple-200 transition-colors">
                      -
                    </button>
                    <span className="w-12 h-10 bg-white border-2 border-purple-200 rounded-lg flex items-center justify-center font-bold text-purple-800">1</span>
                    <button className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xl hover:bg-purple-200 transition-colors">
                      +
                    </button>
                  </div>
                </div>

                {/* Final Price */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-800">$39.95</p>
                  <p className="text-gray-600">per month</p>
                </div>

                {/* Add To Cart Button - Modern Style */}
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl text-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                  <span>ADD TO CART ►</span>
                </button>

                {/* Guarantees */}
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Delivered monthly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>60-Day Guarantee</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="flex justify-center space-x-3 pt-4">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                  <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                  <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
                  <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">DISC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 19th Section: Exclusive eBook Offer & What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Section: eBook Offer */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Exclusive to Seratame Members:<br />
              FREE Copy of the eBook
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* eBook Cover */}
              <div className="flex justify-center">
                <img
                  src="/Restless-Leg-ebook.jpg"
                  alt="HOW TO RELIEVE RESTLESS LEG SYNDROME NATURALLY - Restless Legs Secrets eBook"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* eBook Description & CTA */}
              <div className="space-y-6">
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p>
                    Free for a limited time only, this <strong className="underline">Restless Legs Secrets eBook</strong> shows you an easy to follow action plan that can help stop your restless legs quickly. And so much more... This eBook is available to members of the Seratame program and can be instantly downloaded to your computer after joining.
                  </p>
                </div>

                {/* JOIN NOW Button */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                  JOIN NOW
                </button>

                {/* Payment Icons */}
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                  <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                  <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
                  <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">DISC</div>
                  <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">BANK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: What's Included */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-teal-700 mb-6">
              What's Included with Your Order of Seratame?
            </h3>
            
            <ul className="space-y-3 mb-8 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Free shipping of your Seratame supplement
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Guide #1: 'How to End Restless Legs Naturally'
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Guide #2: 'Solving the Restless Legs Puzzle'
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                My 60-Day, No Questions Asked Money Back Guarantee
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                When you join the Seratame program, you'll get a bottle automatically sent to you once a month until you achieve the results you desire. If you're not satisfied for any reason, you can easily cancel your membership at any time by emailing{' '}
                <a href="mailto:info@purebiogenics.com" className="text-blue-600 hover:underline">info@purebiogenics.com</a>{' '}
                or calling our hotline at{' '}
                <a href="tel:877-269-2694" className="text-blue-600 hover:underline">(877) 269-2694</a>. 
                100% hassle-free and no commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 20th Section: Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-700 mb-12 text-left">
            How real people are getting real relief from Seratame's unique restless leg solution...
          </h2>
          
          <div className="space-y-8">
            {/* Testimonial 1: Valerie Thomas */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile1.jpg" 
                    alt="Valerie Thomas" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    Valerie Thomas, CA
                  </p>
              </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Helps me to relax and fall asleep faster at night..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      I've been struggling with restless legs for years. I've tried everything from pain pills (which gave me terrible side effects) to heat wraps and nothing seemed to work. After just two weeks of taking Seratame, I noticed a significant difference.
                    </p>
                    <p>
                      It helps me to relax and fall asleep faster at night, and my body just feels more "settled" overall. I'm so grateful to have found something that actually works without the horrible side effects I was experiencing before.
                    </p>
            </div>
          </div>
            </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are Individual accounts. Results may vary.
              </p>
            </div>

            {/* Testimonial 2: Christine Hadley */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile2.jpg" 
                    alt="Christine Hadley" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    Christine Hadley, NM
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "So happy to be symptom free now..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      I was misinformed about what restless leg syndrome actually was for a long time. I tried so many different things looking for relief, but nothing seemed to help. Then I found Seratame and it's hands down the best product I've ever used for this condition.
                    </p>
                    <p>
                      I'm so happy to be symptom free now and finally getting the rest I need. I wish I had found this product years ago!
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are Individual accounts. Results may vary.
              </p>
            </div>

            {/* Testimonial 3: Janice Miller */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile3.jpg" 
                    alt="Janice Miller" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    Janice Miller, TX
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Try it out, it really works..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      I suffered from restless legs for years and it was absolutely miserable. I tried prescription medications but the side effects were worse than the restless legs themselves. I found Seratame online and decided to give it a try.
                    </p>
                    <p>
                      I've been using it for a couple of months now and I'm getting great results. My restless legs are so much better and I'm finally sleeping through the night. Try it out, it really works!
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are Individual accounts. Results may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 21st Section: Additional Customer Testimonials & Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {/* Testimonial 1: Janice Miller (Different Quote) */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile4.jpg" 
                    alt="Janice Miller with baby" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    – Janice Miller, TX
                  </p>
              </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Try it out, it really works..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      I was suffering from RLS for many years. I tried prescriptions but found the side effects to be worse than the benefits I was getting. After doing a lot of research online, I found Seratame and have been using it for my RLS for a couple of months now with great results.
                    </p>
                    <p>
                      Try it out, It really works.
                    </p>
            </div>
              </div>
            </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are Individual accounts. Results may vary.
              </p>
              </div>

            {/* Testimonial 2: Mark Peters */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile5.jpg" 
                    alt="Mark Peters" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    – Mark Peters, NV
                  </p>
            </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "I take it every day..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      Just wanted to say thank you for such a great product. I take It every day. Keep up the good work.
                    </p>
              </div>
                </div>
              </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are individual accounts. Results may vary.
              </p>
            </div>

            {/* Testimonial 3: Susan Bashar */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="text-center">
                  <img 
                    src="/profile4.jpg" 
                    alt="Susan Bashar with Seratame bottle" 
                    className="w-32 h-32 rounded-lg border-2 border-gray-300 mx-auto mb-3"
                  />
                  <p className="text-lg font-semibold text-gray-800" style={{fontFamily: 'cursive'}}>
                    – Susan Bashar, FL
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Sleeping better now..."
                  </h3>
                  <div className="text-gray-700 space-y-3 leading-relaxed">
                    <p>
                      My mother has had RLS for a very long time, since I was a child. I researched your product and had a bottle ready for her when she came to visit me. It gave her enough relief so that by the end of her stay, she was sleeping better now than she had slept in a very long time.
                    </p>
                    <p>
                      She always takes your product now and I am pleased to say it works for her.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                *Testimonials are individual accounts. Results may vary.
              </p>
            </div>
          </div>

          {/* Concluding Statement */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                That's just a sneak peek of the results you can expect when you take advantage of what I'm about to reveal...
              </p>
              <p className="text-xl text-gray-700">
                What's more: there are <span className="underline font-semibold">zero side effects</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 22nd Section: Effectiveness, Growing Issue & Risk-Free Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Section 1: It Works Even If You Think You're Doomed */}
          <div>
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
              It Works Even If You Think You're Doomed with Poor Health Genetics...
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Even if you've been told that restless legs runs in the family and there's nothing you can do about it...
              </p>
              <p>
                Or if you're already well into your 50's, 60's or 70's...
              </p>
              <p>
                Seratame does all the work for you by addressing these 3 major factors, you are almost guaranteed to see results – and quickly!
              </p>
            </div>
              </div>

          {/* Section 2: A Growing Issue */}
          <div>
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
              A Growing Issue...
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The truth is, restless legs don't improve with age. The older we get, the more the body goes more deficient in vital minerals and nutrients. And as the inflammation grows, we have less resources available within us for stopping it.
              </p>
              <p>
                That is exactly why we created Seratame. To replenish those key deficiencies that most people with restless legs have – and uproot the cause of their symptoms.
              </p>
            </div>
          </div>

          {/* Section 3: What do you really have to lose? */}
          <div>
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
              What do you really have to lose?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Except for the frustration of lying awake for hours each night, desperately trying to go to sleep. Or all the toxic medications that may work for a while, only to make your symptoms much worse down the road, often producing scary side-effects.
              </p>
              <p>
                What's the worst case scenario? If you aren't happy with the results Seratame provides, or you simply just don't like something about it, you can send it back – even if it's empty – and we will give you a complete refund. No hassles, no questions, no problem.
              </p>
              <p>
                What's the best case scenario? Your body is calmer. You start to notice that you're actually falling asleep fast and staying asleep through the night. You're not worried about that crawling feeling that's always threatening to show up and ruin your peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 23rd Section: Final Persuasion & Money-Back Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              And either way, you still get to keep the 2 eBooks that came with your order as our thank you for giving us a try.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              Now there is a solution.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              You simply need to take action and try Seratame today. Your new life begins now.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">P.S.</p>
              <p>
                I really want this to work for you - just like it's worked for thousands of others, but I don't want you to pay for it, if somehow, it doesn't work for you.
              </p>
            </div>
            
            <p>
              If you follow the directions on the bottle - and even if you don't use any of the great tips and pointers outlined in the free eBooks - and if you aren't finally sleeping through the night, and seeing a major decrease in your symptoms...or if you don't feel a difference in how much calmer your body feels...
            </p>
            
            <p>
              If you don't agree this is the most effective solution for you...
            </p>
            
            <p className="text-xl font-bold text-green-700">
              I will send you back every penny of the purchase price.
            </p>
            
            <div className="mt-8 space-y-4">
              <p className="text-xl font-semibold text-gray-900">
                What if this is what finally ended the growing nightmare that has plagued you for God knows how long?
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                Wouldn't it be worth it to find out for yourself?
              </p>
            </div>
          </div>
        </div>
      </section>

                   {/* 24th Section: Frequently Asked Questions */}
             <FAQSection />

      {/* 25th Section: The Seratame Club & Exclusive eBook Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Top Section: The Seratame Club */}
          <div>
            {/* Top Banner */}
            <div className="bg-teal-600 text-white text-center py-6 rounded-t-lg">
              <h2 className="text-3xl font-bold mb-2">The Seratame Club</h2>
              <p className="text-lg">A monthly delivery of our powerful supplement</p>
            </div>

            <div className="bg-white border-2 border-teal-600 rounded-b-lg shadow-xl p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Product Visuals */}
                <div className="relative">
                  <div className="relative">
                    <img 
                      src="/bottle-placeholder.png" 
                      alt="Seratame Supplement Bottle" 
                      className="w-80 h-auto mx-auto"
                    />
                    {/* Product Label Details */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <h3 className="text-2xl font-bold text-teal-700">Seratame®</h3>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• Calms Agitated Legs</li>
                        <li>• Supports Healthy Circulation</li>
                        <li>• Promotes Calming, Energetic Response in the Body</li>
                      </ul>
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-2">
                        WORLD'S HIGHEST QUALITY INGREDIENTS
            </div>
            </div>
                    {/* 30-Day Supply Badge */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white text-xs px-2 py-1 rounded-r-lg">
                      30-DAY SUPPLY
            </div>
                    {/* Bottom Labels */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm">
                      <p className="font-semibold">60 Capsules</p>
                      <p className="text-gray-600">Dietary Supplement</p>
            </div>
              </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -left-4 bottom-0">
                    <div className="w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
                  </div>
                  <div className="absolute -right-4 top-1/2">
                    <div className="w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Product Information & Pricing */}
                <div className="space-y-6">
                  {/* Customer Reviews */}
                  <div className="text-center">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">(170 Customer Reviews)</p>
                  </div>

                  {/* Pricing Details */}
                  <div className="space-y-3 text-lg">
                    <p><span className="line-through text-gray-500">List Price: $49.95 per month</span></p>
                    <p className="text-green-600 font-bold text-xl">Sale Price: $39.95 per month</p>
                    <p>Quantity: 60 capsules</p>
                    <p className="text-green-600 font-semibold">Shipping: FREE SHIPPING</p>
                    <p>60-day Money-Back Guarantee</p>
                    <p className="font-semibold">Monthly Delivery. Cancel anytime</p>
                  </div>

                  {/* Add To Cart Button */}
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Add To Cart</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                    </svg>
                  </button>

                  {/* Payment Methods */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                    <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                    <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
                    <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">DISC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Exclusive eBook Offer */}
          <div>
            <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">
              Exclusive to Seratame Members: FREE Copy of the eBook
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* eBook Cover */}
              <div className="flex justify-center">
                <img
                  src="/Restless-Leg-ebook.jpg"
                  alt="HOW TO RELIEVE RESTLESS LEG SYNDROME NATURALLY - Restless Legs Secrets eBook"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* eBook Description */}
              <div className="text-center lg:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a member of The Seratame Club, you'll receive instant access to this comprehensive guide that shows you exactly how to relieve restless leg syndrome naturally. This exclusive eBook is packed with actionable strategies and insights that complement your Seratame supplement routine.
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

      {/* 26th Section: Restless Legs Secrets eBook Promotion & What Happens Next */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Top Section: eBook Promotion */}
          <div className="text-center">
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Free for a limited time only, this <strong className="underline">Restless Legs Secrets eBook</strong> shows you an easy to follow action plan that can help stop your restless legs quickly. And so much more... This eBook is available to members of the Seratame program and can be instantly downloaded to your computer after joining.
              </p>
            </div>

            {/* JOIN NOW Button */}
            <button className="w-full max-w-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 mb-6">
              JOIN NOW
            </button>

            {/* Payment Icons */}
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
              <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
              <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
              <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">DISC</div>
              <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">BANK</div>
          </div>
          </div>

          {/* Inside this eBook Section */}
          <div>
            <h3 className="text-2xl font-bold text-teal-700 mb-6">
              Inside this eBook You'll Discover:
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                The one thing you're likely eating at almost every meal you must avoid.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                7 key factors that could be contributing to your restless leg symptoms.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                The 5 top foods that are making your restless leg symptoms get even worse.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                How this one change to your sleep habit dramatically improves symptoms.
              </li>
          </ul>
          </div>

          {/* What Happens Next Section */}
            <div>
            <h3 className="text-2xl font-bold text-teal-700 mb-6">
              What Happens Next
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                After you click "Join Now," you'll arrive at our secure order form where you'll enter your details. Your Seratame supplement will be delivered right to your doorstep, and you'll get instant access to the "How to End Restless Legs Naturally" eBook, which you can download to your computer or mobile device.
              </p>
              <p>
                Plus, you'll also get instant access to our bonus eBook "Solving the Restless Legs Puzzle," which teaches you about the foods and toxins that "flare-up" your symptoms and which foods are best to eat.
              </p>
              <p>
                All of this includes my 60-day money-back guarantee. That way you can get started right away, worry-free and risk-free!
              </p>
            </div>
          </div>

          {/* P.P.S. Section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="font-semibold text-blue-900 mb-2">P.P.S.</p>
            <p className="text-gray-700 leading-relaxed">
              Remember, I personally guarantee for a full 60-days, when you take Seratame – I promise you'll feel an immediate difference in your restless leg symptoms and overall sleep quality.
            </p>
          </div>
          </div>
        </section>

      {/* 27th Section: Final Conclusion & Ultimate Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* P.P.S. Guarantee Section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="font-semibold text-blue-900 mb-2">P.P.S.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Remember, I personally guarantee for a full 60-days, when you take Seratame – you'll feel an immediate sense of calm, a deep and restful night's sleep and your restless legs symptoms going away.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              100% money-back refund. No questions-asked. No hassles. And you can still keep the 2 eBooks as our thank you for giving it a fair try.
            </p>
          </div>

          {/* Unique Formula Statement */}
          <div className="text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              There is no other formula out there that safely combines every single ingredient your body needs to both nourish and replenish all 3 major causes of restless legs in the body.
            </p>
          </div>

          {/* Limited-Time Price Offer */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              And there is no better time than today to try Seratame – because we've temporarily reduced the price for you down to <span className="font-bold text-green-700">$39.95</span>, from our regular <span className="line-through">$49.95 per month</span>.
            </p>
          </div>

          {/* Rhetorical Question */}
          <div className="text-center">
            <p className="text-2xl font-bold text-teal-700">
              Imagine if your restless legs was just a memory?
            </p>
          </div>

          {/* Addressing Skepticism */}
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              We know you may be skeptical. Because just like thousands of other men and women across the world, your restless legs has driven you to the edge.
            </p>
            <p className="mt-4">
              You've probably been to doctors who told you it's "something you have to live with" or kept you on a "medication merry-go-round."
            </p>
          </div>

          {/* Call to Action for Solution */}
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800">
              Now there is a real solution. Simply take action and start the Seratame Program now. Start your new life today.
            </p>
          </div>

          {/* Final Call to Action Link */}
          <div className="text-center pt-8">
            <a 
              href="#" 
              className="text-2xl font-bold text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
            >
              Join the Seratame Program Now – Click Here
            </a>
          </div>
        </div>
      </section>

      {/* 28th Section: Academic References */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            REFERENCES:
          </h2>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex">
              <span className="font-bold mr-4">1.</span>
              <span>Causes of Restless Legs. Role of Dopamine in RLS; Earley, Ph.D. 2018</span>
              </div>
            
            <div className="flex">
              <span className="font-bold mr-4">2.</span>
              <span>Restless Legs, Insomnia And Brain Chemistry: A Tangled Mystery Solved? Allen, Ph.D. 2013</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">3.</span>
              <span>Causes of Restless Legs. Role of Iron In RLS; Earley, Ph.D. 2018</span>
              </div>
            
            <div className="flex">
              <span className="font-bold mr-4">4.</span>
              <span>Ask a Neuroscientist: Restless Legs. Wu Tsal Neurosciences Institute. 2015</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">5.</span>
              <span>Restless legs and low brain iron levels in patients; J Haba-Rubio, L. Staner. 2005</span>
              </div>
            
            <div className="flex">
              <span className="font-bold mr-4">6.</span>
              <span>Iron deficiency and restless legs syndrome; R. Allen, C. Earley. 2007</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">7.</span>
              <span>Brain iron and restless legs syndrome; R. Allen, C. Earley. 2001</span>
              </div>
            
            <div className="flex">
              <span className="font-bold mr-4">8.</span>
              <span>Inflammation and restless legs syndrome; A. Weinstock, L. Walters. 2012</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">9.</span>
              <span>Restless legs syndrome and inflammation; M. Trotti, R. Allen. 2010</span>
          </div>
            
            <div className="flex">
              <span className="font-bold mr-4">10.</span>
              <span>Inflammatory mechanisms in restless legs syndrome; L. Weinstock, A. Walters. 2011</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">11.</span>
              <span>Restless legs. Theoretical roles of inflammatory and immune mechanisms; L. Weinstock, A. Walters. 2011</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">12.</span>
              <span>Freeze-dried Lactobacillus plantarum 299v Increases Iron absorption in young females; Hoppe M, Önning G. 2017</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">13.</span>
              <span>Magnesium therapy for periodic leg movements-related Insomnia and restless legs: an open pilot study; Hornyak, Voderholzer U. 1998</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">14.</span>
              <span>Magnesium In Prevention and Therapy; Uwe Gröber, Joachim Schmidt. 2015</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">15.</span>
              <span>Curcumin and inflammation: the role of curcumin in treating inflammatory conditions; J. Aggarwal, B. Harikumar. 2009</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">16.</span>
              <span>Anti-inflammatory properties of curcumin; S. Jurenka. 2009</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">17.</span>
              <span>Curcumin: a review of anti-inflammatory properties; A. Goel, A. Kunnumakkara. 2008</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">18.</span>
              <span>Vitamin D and restless legs syndrome; R. Wali, A. Alshahrani. 2016</span>
            </div>
            
            <div className="flex">
              <span className="font-bold mr-4">19.</span>
              <span>Vitamin D and K2: synergistic effects on bone and cardiovascular health; M. Kidd. 2010</span>
            </div>
          </div>
          </div>
        </section>

      {/* 29th Section: Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* ARTICLES Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">ARTICLES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Top 10 RLS Causes</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">What Causes RLS?</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Willis-Ekbom Disease</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Top 7 Foods for RLS</a></li>
                <li><a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">RLS and Pregnancy</a></li>
              </ul>
            </div>

            {/* SAFE & SECURE Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">SAFE & SECURE</h3>
              <p className="text-gray-700 mb-4">
                All orders on Seratame.com are protected by 128-bit encrypted SSL.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-bold text-black">Norton SECURED</span>
              </div>
            </div>

            {/* CONTACT Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">CONTACT</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">1-877-269-2694</p>
              <p className="text-gray-700 mb-2">9-5 PST, Monday-Friday</p>
              <p className="text-gray-700">info [@] purebiogenics.com</p>
            </div>

            {/* ORDER NOW Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">ORDER NOW</h3>
              <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mb-4 hover:bg-orange-600 transition-colors">
                ORDER / PRICING
              </button>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-red-500 rounded-full border-2 border-white flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-white font-bold text-center leading-tight">
                      FREE<br/>SHIPPING<br/>★ FREE<br/>SHIPPING<br/>★ FREE<br/>SHIPPING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mb-8 space-y-4">
            <p className="text-sm text-gray-500">
              * Testimonials represent individual customer experiences and should not be considered typical customer experiences. Every customer's body is different and will respond differently to natural supplements.
            </p>
            <p className="text-xs text-gray-400">
              † These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Information on this site is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication.
            </p>
          </div>

          {/* Footer Navigation and Copyright */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">HOME</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">PRODUCT INFO</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">INGREDIENTS</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">GUARANTEE</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">REFUND POLICY</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">SHIPPING POLICY</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">CONTACT</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">TERMS & CONDITIONS</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">CUSTOMER LOGIN</a>
            </div>
            
            <div className="text-center mb-4">
              <p className="text-gray-700">© 2014-2023 Pure Biogenics, LLC.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">Terms and Conditions</a>
              </div>
              
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                <div className="w-8 h-5 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                <div className="w-8 h-5 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">DISC</div>
                <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
                <div className="w-8 h-5 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">BANK</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </div>
  )
}