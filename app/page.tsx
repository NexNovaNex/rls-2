import Image from 'next/image'
import FAQSection from '../components/FAQSection'
import BuyBox from '../components/BuyBox'

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Center: Bene Logo */}
            <div className="flex flex-col items-center">
              <Image 
                src="/Bene logo purple trans.png" 
                alt="Bene Logo" 
                width={120} 
                height={60} 
                className="mb-2"
              />
              <div className="text-sm text-gray-600">RESTLESS LEG SYNDROME RELIEF</div>
            </div>
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

            </div>

            {/* Content with Left-Aligned Image */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left: Image */}
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-lg p-4">
                  <Image 
                    src="/profile1-2.jpg" 
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
                    
                    {/* Image below the quote */}
                    <div className="mt-4 flex justify-center">
                      <img
                        src="/letdown2.png"
                        alt="Restless legs syndrome illustration showing discomfort and movement"
                        className="rounded-lg shadow-md max-w-full h-auto"
                        style={{ maxHeight: '300px' }}
                      />
                    </div>
                  </div>

                  <p className="text-gray-700">
                    It's a <strong>helpless feeling</strong> just lying there <strong>wide awake</strong>, yet <strong>worn-out</strong> at the same time. Feeling <strong>powerless</strong> to be able to do anything permanent to stop it.
                  </p>

                  <p className="text-gray-700">
                    And it feels <strong>utterly defeating</strong>… Because you've seen the <strong>doctors</strong>. Maybe you've even seen <strong>specialists</strong>.
                  </p>

                  <p className="text-gray-700">
                    Most of the time, what they'll typically do is <strong>prescribe you drugs</strong>. Often, they're drugs meant for <strong>other health conditions</strong>. Or worse, they'll prescribe you the more <strong>addictive kinds</strong>.
                  </p>

                  <p className="text-gray-700">
                    The <strong>scary ones</strong> you read about that are almost <strong>impossible to quit</strong>. And it seems like almost every study of these types of drugs reveal that they eventually <strong>lose their effectiveness</strong> over time.
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
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
                The 3 Key Problems with Restless Legs
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                Here is <strong>exactly</strong> how we've <strong>connected the dots</strong> and helped <strong>thousands</strong> with their restless legs symptoms… All <strong>without the use of drugs</strong> or expensive therapies.
              </p>
              
              {/* Image below the connected dots text */}
              <div className="flex justify-center mb-6">
                <img
                  src="/electriclegs.jpg"
                  alt="Electric legs illustration showing restless legs syndrome"
                  className="rounded-lg shadow-md max-w-full h-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                As I mentioned, there are really <strong>3 main factors</strong> in people with restless legs:
              </p>
              
              {/* Numbered List */}
              <div className="text-left max-w-2xl mx-auto space-y-2 mb-8">
                <p className="text-lg text-gray-700">1. <strong>Malfunctioning dopamine-receptors</strong></p>
                <p className="text-lg text-gray-700">2. <strong>Poor iron metabolism</strong></p>
                <p className="text-lg text-gray-700">3. <strong>Chronic/long-term inflammation</strong></p>
                </div>
              
              <p className="text-lg text-gray-700 mb-8">
                As you'll find out below, once you know how to <strong>correct all 3 malfunctions</strong>, symptoms can actually <strong>reside all on their own</strong>.
              </p>
              <p className="text-lg text-gray-700">
                Let's briefly explore all 3 of these:
              </p>
              </div>

            {/* First Problem: Malfunctioning Dopamine-Receptors */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
                1. Malfunctioning Dopamine-Receptors
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Just about <strong>every medical researcher</strong> studying restless legs agrees that one of the <strong>most common factors</strong> affecting all patients is that their <strong>dopamine-receptors aren't functioning properly</strong>. <span className="text-sm text-gray-500">[1] Causes of Restless Legs. Role of Dopamine; Earley, Ph.D. 2018</span>
                </p>
                
                <p>
                  And <strong>dopamine receptors</strong> are so important. They're often called the <strong>"feel good" chemicals</strong> and their primary function is <strong>sending messages that control muscle movement</strong>.
                </p>
                
                <p>
                  That is <em>exactly</em> why almost any doctor you see <strong>prescribes dopamine-stimulating drugs</strong> for restless legs.
                </p>
                
                <p>
                  But this logic is <strong>flawed</strong>, and even they know this. Here's why.
                </p>
                
                <p>
                  The biggest problem with restless legs is the bulk of your receptors that are <strong>SUPPOSED</strong> to receive dopamine aren't receiving it. <span className="text-sm text-gray-500">[2] Restless Legs, Insomnia And Brain Chemistry: A Tangled Mystery Solved? Allen, Ph.D. 2013</span>
                </p>
            </div>
            </div>
            </div>
        </section>

        {/* The Iron Connection Section */}
        <section className="bg-white pt-4 pb-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              <p>
                And <strong>iron</strong> is absolutely <strong>critical</strong> for the proper functioning of <strong>dopamine-receptors</strong>. But here's the <strong>catch</strong>...
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
                That's why doctors often <strong>test iron levels</strong> for RLS. Iron is <strong>essential</strong> for many bodily functions, especially for RLS sufferers.
              </p>
              
              <p>
                Testing iron levels isn't a bad idea. The problem is that these tests only check the <strong>amount of iron in the blood</strong>.
              </p>
              
              <p>
                <strong>"Your iron levels are probably fine. Your iron metabolism most likely isn't..."</strong>
              </p>
              
              <p>
                Here's a <strong>little secret</strong> that some doctors won't tell you.
              </p>
              
              <p>
                There are <strong>two common "avenues"</strong> doctors take based on test results, both of which can lead in the <strong>wrong direction</strong>.
              </p>
              
              <p>
                If blood tests show <strong>low iron</strong>, patients are given <strong>iron supplements</strong>.
              </p>
              
              <p>
                If blood tests show <strong>normal or near-normal iron</strong>, patients are prescribed <strong>"dopa-stimulating drug after another"</strong> as a temporary <strong>"band-aid."</strong>
              </p>
              
              <p>
                But doctors are missing the <strong>most important fact</strong>...
              </p>
              
              <p>
                RLS has <strong>nothing to do</strong> with the amount of iron in the blood, but <em><strong>everything to do with low iron levels in your brain.</strong></em>
              </p>
          </div>
            </div>
        </section>

        {/* Why Iron Supplementation is Bad Section */}
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              {/* Main Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
                Why supplementing with Iron is one of the worst things you can do for Restless Legs
              </h3>
              
              <p>
                It's not a matter of how much iron you have in your blood. In fact, it can make your symptoms <strong>worse</strong> or even <strong>fatally toxic</strong> to take too much iron. A recent study revealed that only <strong>1 in 5</strong> restless leg sufferers were actually <strong>iron deficient</strong>. <span className="text-sm text-gray-500">[5] Restless legs and low brain iron levels in patients; J Haba-Rubio, L Staner. 2005</span>
              </p>
              
              <p className="font-semibold">
                So what gives?
              </p>
              
              <p>
                The truth is, restless legs is caused by problems with <strong>iron transportation and delivery to the brain</strong>. What these experts are now realizing, is that it really boils down to how much iron can <strong>cross the blood-brain barrier</strong> and get into your brain, so it can be <strong>properly utilized by your dopamine-receptors</strong>. <span className="text-sm text-gray-500">[6] Response to intravenous iron in patients with iron deficiency and restless leg; Mehmood T, Auerbach M. 2014</span>
              </p>
              
              <p>
                We are absolutely convinced that <strong>inflammation is the #1 underlying cause</strong> beneath all of the restless legs factors mentioned above. In fact, the most recent studies have linked <strong>low-dopamine activity AND low-iron levels in the brain</strong> directly to <strong>long term inflammation</strong> in restless legs patients. <span className="text-sm text-gray-500">[7] Restless Legs, Insomnia And Brain Chemistry: A Tangled Mystery Solved? Allen, Ph.D. 2013</span>
              </p>
              
              <p>
                Iron is a <strong>critical element</strong> for the proper functioning of <strong>dopamine-receptors</strong>.
              </p>
              
              <p>
                So, obviously the next question becomes - Why do people with restless legs have a <strong>deficiency of iron in their brain</strong>?
              </p>
          </div>
        </div>
        </section>

        {/* Inflammation Section Preview */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 border-2 border-teal-200 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="inline-block bg-teal-100 rounded-full p-3 mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2 leading-tight">
                  "Inflammation – The Connecting Factor in Almost Every Restless Legs Case..."
                </h3>
                <p className="text-teal-600 text-lg font-medium">The Missing Link That Connects Everything</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inflammation Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 text-gray-700">
              {/* Section Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
                3. How Inflammation is at the very Heart of Restless Legs
              </h3>
              
              <p>
                Restless legs is <strong>complex</strong>. If you want to <strong>uproot the cause</strong> of your suffering, and not just <strong>battle your symptoms forever</strong>, you have to <strong>connect all the dots</strong> with this condition.
              </p>
              
              <p className="font-semibold">
                And these dots all point back to <strong>inflammation</strong>.
              </p>
              
              <p>
                We are absolutely convinced that <strong>inflammation is the #1 underlying cause</strong> beneath all of the restless legs factors mentioned above.
              </p>
              
              <p>
                In fact, the most recent studies from <strong>2023 and 2024</strong> have linked <strong>low-dopamine activity AND low-iron levels in the brain</strong> directly to <strong>long term inflammation</strong> in restless legs patients. <span className="text-sm text-gray-500">[8]</span>
              </p>
              
              {/* Academic Citations */}
              <div className="text-sm text-gray-500 italic space-y-1 ml-4">
                <p>[8] <em>Inflammation Effects on Motivation and Motor Activity: Role of Dopamine; J. Felger, M. Treadway. 2023</em></p>
                <p>[9] <em>Iron and Inflammation – the Gut Reaction; S. Verma and B. Cherayil. 2024</em></p>
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
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                The Inflammation Loop and Restless Legs
              </h2>
                      </div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <p>
                During inflammation, your body releases <strong>immune cells called cytokines</strong>. Think of these as an <strong>army of troops</strong> for your immune system.
              </p>
              
              <p>
                For unknown reasons, these <strong>cytokine cells</strong> shut down something <strong>critical for allowing iron into the brain</strong>. <span className="text-sm text-gray-500">[11] Restless legs. Theoretical roles of inflammatory and immune mechanisms; L. Weinstock, A. Walters. 2011</span>
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
                <strong>Ferroportin</strong> is critical because its only job is to <strong>allow iron into your brain</strong>.
              </p>
              
              <p>
                In people with restless legs, who often have <strong>constant, low-grade inflammation</strong>, this precious <strong>ferroportin becomes scarce</strong> over time.
              </p>
              
              <p>
                As a result, the iron in your blood becomes <strong>stranded</strong>, not able to get to your brain.
              </p>
              
              <p>
                Due to this <strong>constant state of inflammation</strong>, other <strong>immune cells</strong> are released, which can alter the ability for <strong>dopamine-receptors to function</strong>.
              </p>
              
              <p>
                Many experts believe this is a <strong>built-in mechanism</strong> that the body activates during periods of <strong>stress or an inflammatory response</strong>.
              </p>
                        </div>
                      </div>
      </section>

        {/* Academic Quote and Solution Introduction Section */}
        <section className="bg-white pt-4 pb-16">
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
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                How to Quickly Shut Down Restless Leg Symptoms – Step-by-Step
              </h2>
                      </div>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Over the years, we've used so many <strong>different strategies</strong> for quickly shutting down restless leg symptoms. However, we've discovered a <strong>3-part system</strong>, that when followed correctly, can shut down even the <strong>worst of symptoms</strong> in a matter of <strong>days, and sometimes, even hours</strong>.
              </p>
              
              <p>
                It <strong>doesn't require drugs</strong> and it's <strong>not expensive</strong>. It's a <strong>1-2-3 punch</strong> that quickly and safely addresses all <strong>3 of the biggest restless leg causes</strong> mentioned above.
              </p>
              </div>
                        </div>
        </section>

        {/* Lactobacillus Plantarum 299 Section */}
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">
              Paeoniae Radix (Bai Shao) –<br />
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
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
                Magnesium Glycinate – "A Spring Cleaning" for Your Dopamine Receptors
              </h2>
              <h3 className="text-xl text-gray-600">
                How Does Magnesium Glycinate Work?
              </h3>
              </div>

            {/* How Does Bene Work Image */}
            <div className="flex justify-center mb-8">
              <img
                src="/NewHowDoesSeratameWorkNew-590x1024.min_.jpg"
                alt="How Does Bene Work - Magnesium Glycinate Process"
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
        </div>
      </section>

        {/* The Off-Switch for Inflammation Section */}
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
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
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {/* Curcumin Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">
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
                <h3 className="text-2xl font-bold text-teal-700 mb-4">
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
        <section className="bg-white pt-4 pb-16">
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
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
                <strong>No Other Formula Compares to Bene</strong>
              </h2>
          </div>
        </div>
      </section>

        {/* Bene Product Section */}
        <section className="bg-white pt-4 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/bottle-placeholder.png"
                    alt="Bene dietary supplement bottle with teal label, white bottle, and scattered capsules"
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
                    Bene is unique in that it addresses all three main causes of restless legs in one bottle: dopamine malfunction, iron absorption, and inflammation.
                  </p>
                  
                  <p>
                    It's the easiest, most natural way to 'tame' your restless leg symptoms quickly. Bene includes all the ingredients that you need to help stop restless leg symptoms for good.
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
                    Bene works to replenish all of the major body systems that are most common for patients.
                  </p>
                  
                  <p className="font-semibold text-teal-700">
                    But don't just take our word for it. Here's what NFL Hall of Fame athlete and former restless leg sufferer, Herb Adderley, has to say...
                  </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Herb Adderley Testimonial and Bene Club Section */}
        <section className="bg-white pt-4 pb-16">
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
                  <div className="text-sm text-gray-600">Sarah, Mum of 3</div>
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
                  After three days of taking Bene, my legs calmed down and the agitation stopped. I can finally sleep through the night without the constant movement and discomfort. I strongly suggest to anyone with restless legs to try Bene.
                </p>
                
                                  <div className="text-sm text-gray-600 italic">
                    -Herb Adderley
                  </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  *Testimonials are individual accounts. Results may vary.
                </div>
              </div>
            </div>

            
        </div>
      </section>

        {/* Free eBook Promotion Section */}
        <section className="bg-white pt-4 pb-16">
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
                Free for a limited time only, this <strong className="underline">Restless Legs Secrets eBook</strong> shows you an easy to follow action plan that can help stop your restless legs quickly. And so much more... This eBook is available to members of the Bene program and can be instantly downloaded to your computer after joining.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mb-8">
              <a href="https://benebalance.com/products/bene-rls-supplement" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200 inline-block">
                ORDER NOW
              </a>
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

            {/* 16th Section: Why Does Bene Work & Supplement Facts */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Why Does Bene Work */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
              Why Does Bene Work
            </h2>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto">
              Because each of the ingredients, when taken together, have proven to be clear-cut winners for relieving even the worst restless leg symptoms.
            </p>
            </div>

          {/* Supplement Facts Label Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/Seratame_new_label_Updated_2022_375x519.png"
              alt="Bene Supplement Facts Label - Updated 2022"
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '600px' }}
            />
          </div>
          </div>
        </section>

      {/* 17th Section: Who Bene is Ideal For & Usage Instructions */}
      <section className="pt-4 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-700 mb-8 text-center">
            Bene is ideal for people with:
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
                  <strong>How it works:</strong> The unique formula is designed so that you see immediate results. You'll get the best results when you take Bene consistently and long term because it works to replenish the vitamin/mineral/probiotic imbalances within your body.
                </p>
                <p>
                  <strong>Results Timeline:</strong> Most people start to see results in just 2-3 weeks of regular use, depending on the severity of their deficiency.
                </p>
              </div>
              </div>
            </div>
              </div>
      </section>



      {/* 19th Section: Exclusive eBook Offer & What's Included */}
      <section className="pt-4 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Section: eBook Offer */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">
              Exclusive to Bene Members:<br />
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
                    Free for a limited time only, this <strong className="underline">Restless Legs Secrets eBook</strong> shows you an easy to follow action plan that can help stop your restless legs quickly. And so much more... This eBook is available to members of the Bene program and can be instantly downloaded to your computer after joining.
                  </p>
                </div>

                {/* JOIN NOW Button */}
                <a href="https://benebalance.com/products/bene-rls-supplement" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 inline-block text-center">
                  JOIN NOW
                </a>

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
              What's Included with Your Order of Bene?
            </h3>
            
            <ul className="space-y-3 mb-8 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                Free shipping of your Bene supplement
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
                When you join the Bene program, you'll get a bottle automatically sent to you once a month until you achieve the results you desire. If you're not satisfied for any reason, you can easily cancel your membership at any time by emailing{' '}
                <a href="mailto:info@purebiogenics.com" className="text-blue-600 hover:underline">info@benebalance.com</a>{' '}
                
                100% hassle-free and no commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 20th Section: Customer Testimonials */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-700 mb-12 text-left">
            How real people are getting real relief from Bene's unique restless leg solution...
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
                      I've been struggling with restless legs for years. I've tried everything from pain pills (which gave me terrible side effects) to heat wraps and nothing seemed to work. After just two weeks of taking Bene, I noticed a significant difference.
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
                      I was misinformed about what restless leg syndrome actually was for a long time. I tried so many different things looking for relief, but nothing seemed to help. Then I found Bene and it's hands down the best product I've ever used for this condition.
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
                      I suffered from restless legs for years and it was absolutely miserable. I tried prescription medications but the side effects were worse than the restless legs themselves. I found Bene online and decided to give it a try.
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
      <section className="pt-4 pb-16 bg-gray-50">
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
                      I was suffering from RLS for many years. I tried prescriptions but found the side effects to be worse than the benefits I was getting. After doing a lot of research online, I found Bene and have been using it for my RLS for a couple of months now with great results.
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
                    src="/profile3-2.jpg" 
                    alt="Susan Bashar with Bene bottle" 
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
      <section className="pt-4 pb-16 bg-white">
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
                Bene does all the work for you by addressing these 3 major factors, you are almost guaranteed to see results – and quickly!
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
                That is exactly why we created Bene. To replenish those key deficiencies that most people with restless legs have – and uproot the cause of their symptoms.
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
                What's the worst case scenario? If you aren't happy with the results Bene provides, or you simply just don't like something about it, you can send it back – even if it's empty – and we will give you a complete refund. No hassles, no questions, no problem.
              </p>
              <p>
                What's the best case scenario? Your body is calmer. You start to notice that you're actually falling asleep fast and staying asleep through the night. You're not worried about that crawling feeling that's always threatening to show up and ruin your peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 23rd Section: Final Persuasion & Money-Back Guarantee */}
      <section className="pt-4 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              And either way, you still get to keep the 2 eBooks that came with your order as our thank you for giving us a try.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              Now there is a solution.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              You simply need to take action and try Bene today. Your new life begins now.
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

                   {/* BuyBox Component */}
                   <BuyBox />

                   {/* 24th Section: Frequently Asked Questions */}
                   <FAQSection />

      {/* 27th Section: Final Conclusion & Ultimate Call to Action */}
      <section className="pt-4 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* P.P.S. Guarantee Section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="font-semibold text-blue-900 mb-2">P.P.S.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Remember, I personally guarantee for a full 60-days, when you take Bene – you'll feel an immediate sense of calm, a deep and restful night's sleep and your restless legs symptoms going away.
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
              And there is no better time than today to try Bene – because we've temporarily reduced the price for you down to <span className="font-bold text-green-700">$39.95</span>, from our regular <span className="line-through">$49.95 per month</span>.
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
              Now there is a real solution. Simply take action and start the Bene Program now. Start your new life today.
            </p>
          </div>

          {/* Final Call to Action Link */}
          <div className="text-center pt-8">
            <a 
              href="https://benebalance.com/products/bene-rls-supplement" 
              className="text-2xl font-bold text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
            >
              Join the Bene Program Now – Click Here
            </a>
          </div>
        </div>
      </section>

      {/* 28th Section: Academic References */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-700 mb-8 text-center">
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
      </main>

      {/* Footer Links */}
      <footer className="bg-gray-100 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h3 className="font-bold text-gray-800 mb-4">Links</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://benebalance.com/pages/help" className="text-gray-700 hover:text-teal-600 transition-colors">FAQs</a>
              <a href="https://benebalance.com/pages/shipping-returns" className="text-gray-700 hover:text-teal-600 transition-colors">Shipping & Returns</a>
              <a href="https://benebalance.com/pages/contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact Us</a>
              <a href="https://benebalance.com/policies/terms-of-service" className="text-gray-700 hover:text-teal-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA - Appears when scrolling to "No Other Formula Compares to Bene" section */}
      <div id="sticky-cta" className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-6 shadow-2xl transform translate-y-full transition-transform duration-300 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-1">Ready to End Your Restless Legs?</h3>
            <p className="text-sm md:text-base opacity-90">Join thousands who've found relief with Bene</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://benebalance.com/products/bene-rls-supplement" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-block text-center"
            >
              ORDER NOW
            </a>
            <div className="text-xs opacity-75 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span>✓ 60-Day Guarantee</span>
                <span>✓ Free Shipping</span>
                <span>✓ Natural Formula</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JavaScript for sticky CTA behavior */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const stickyCta = document.getElementById('sticky-cta');
            
            function checkScroll() {
              // Find the target section by searching for the text content
              const allStrongElements = document.querySelectorAll('strong');
              let targetSection = null;
              
              for (let element of allStrongElements) {
                if (element.textContent.includes('No Other Formula Compares to Bene')) {
                  targetSection = element;
                  break;
                }
              }
              
              if (targetSection) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const targetPosition = targetSection.offsetTop;
                
                if (scrollPosition >= targetPosition) {
                  stickyCta.classList.remove('translate-y-full');
                } else {
                  stickyCta.classList.add('translate-y-full');
                }
              }
            }
            
            // Check scroll position
            window.addEventListener('scroll', checkScroll);
            
            // Initial check
            checkScroll();
          });
        `
      }} />
    </div>
  )
}