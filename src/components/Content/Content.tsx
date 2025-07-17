import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CallToActionButton from '../UI/CallToActionButton';
import { useRouter, useSearchParams } from 'next/navigation';

const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My Laser Strike System! + FREE Range Bag!',
}) => {
  const searchParams = useSearchParams();

  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="sticky top-0 left-0 right-0 w-full bg-[#2afe4e] text-black text-center py-2 px-4 text-[1.3rem] sm:text-[1.5rem] font-semibold z-50 shadow-md">
        <a 
          href={getCheckoutUrl('https://secure.vnsh.com/vnls1frb1/checkout')}
          className="text-black no-underline hover:no-underline hover:text-black"
        >
          Limited Gift! Get a <span className="line-through">$50</span> VNSH Range Bag FREE!
        </a>
      </div>
      <div className="w-full max-w-[1240px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-medium leading-snug md:leading-tight mb-0 px-2">
              <div>
                Cutting-Edge Dry Fire System Maximizes Accuracy With{' '}
                <span className="underline">$0.00 Spent On Ammo and 0 Hours At the Range…</span>
              </div>
              <div className="font-bold italic text-center text-base sm:text-xl md:text-4xl mt-1 whitespace-normal sm:whitespace-normal">
                (Train Like the Pros from the Comfort of Your Living Room!)
              </div>
            </h1>
          </header>

          <div className="w-full max-w-4xl mx-auto -mt-2 md:mt-0">
            <VidalyticsVideo />
          </div>

          <div className="text-center my-8">
            <CallToActionButton />
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/LSSRangeBag1.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center py-1">
            <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-red-600">
              The Fastest, Easiest Way to{' '}
              <span className="text-[#f16500]">
                Become An <span className="underline">Insanely Accurate Shooter</span>
              </span>{' '}
              <span className="italic">(Guaranteed, Or You Don't Pay a Dime)</span>
            </span>
          </header>
          <div className="space-y-4 text-xl leading-tight md:text-2xl">
            <p>Let me ask you something…</p>
            <p>
              Wouldn't it be amazing if every time you drew and shot your gun, you hit exactly what
              you were aiming for?
            </p>
            <p>Over and over again…</p>
            <p>And with lightning quick speed?</p>
            <p>
              I'm sure you said <span className="font-bold">YES!</span>
            </p>
            <p>That's every shooter's dream, to be deadly accurate and as fast as a pro.</p>
            <p>Anyone can become this good…</p>
            <p>The only problem is:</p>
            <div className="pl-8">
              <ol className="list-decimal font-bold">
                <li className="pl-2">It's impossible to find enough time to train…</li>
                <li className="pl-2 -my-3">
                  Shooting enough to get that kind of skill is crazy expensive!
                </li>
              </ol>
            </div>
            <p>That's where the VNSH Laser Strike Training System comes in…</p>
            <p>Because with this system in your hands…</p>
          </div>
          <header className="text-center py-1 my-6">
            <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-[#f16500]">
              You Will Become a Better Shot In Minutes –{' '}
              <span className="text-red-600">Without Spending a Dime On Ammo or Range Time!</span>
            </span>
          </header>
          <div className="w-full md:w-[55%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/vnsh-laser4-desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="content-paragraph">
              The VNSH Laser Strike Training System is a revolutionary dry fire laser training
              platform that simulates shooting live rounds{' '}
              <span className="italic font-bold">as closely as possible…</span>
            </p>
            <p className="content-paragraph">
              …so you can practice any time, any place, and without spending a single penny on range
              time or ammo!
            </p>
            <p className="content-paragraph">
              The Laser Strike System gives you a simple way to supplement your range days with the
              extra practice <span className="font-bold">you must have</span> to gain maximum
              accuracy and confidence with your firearm.
            </p>
            <p className="content-paragraph">
              And it also{' '}
              <span className="underline font-bold">
                saves you $100s – if not $1,000s – of dollars in the process.
              </span>
            </p>
            <p className="content-paragraph">
              By removing the time and ammo cost of going to the range…
            </p>
            <p className="content-paragraph">
              The Laser Strike System{' '}
              <span className="font-bold">gives you an "unfair advantage"</span> to becoming the
              best shooter possible.
            </p>
            <p className="content-paragraph">That's the simple reason why…</p>
          </div>
          <div className="text-center my-8">
            <CallToActionButton />
          </div>
          <hr className="my-8 border-t border-gray-200 w-11/12 mx-auto" />
          <header className="text-center py-1 my-6">
            <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-[#f16500]">
              1,000s of Gun Owners Have Used It to{' '}
              <span className="text-red-600 underline">Kill Their Bad Shooting Habits</span>... Like
              a Cheat Code for Better Accuracy and Speed!
            </span>
          </header>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              What does it take to become the{' '}
              <span className="italic font-bold">best shooter possible?</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed underline">
              It takes thousands of trigger pulls!!
            </p>
            <p className="text-base md:text-lg leading-relaxed font-bold">
              Just listen to World Champion marksman Robert Vogel…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              When asked “How often do you dry fire?” he replied…
            </p>
            <p className="text-base md:text-lg leading-relaxed text-center">
              <span className="bg-[#ff0] py-1 font-extrabold italic">
                “In one form or another, just about every day. For sheer skill building I feel it
                has no equal. For every live round that I actually fire,{' '}
                <span className="underline">
                  I probably mimic that round eight to 10 times in dry fire."
                </span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              See, even the professionals can’t afford to spend countless hours in the range.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              And they know dry fire training is the best shortcut to get their volume in.``
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              But the Laser Strike System{' '}
              <span className="font-bold underline">upgrades traditional dry fire</span> training
              <span className="font-bold italic"> from a shortcut to a full-on cheat code!</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Because instead of just letting you practice your draw, trigger pull, and gun
              handling…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System lets you{' '}
              <span className="font-bold italic">
                simulate putting rounds on target{' '}
                <span className="underline">with instant feedback!</span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              For anyone who LOVES to shoot… and wants to max out their confidence and accuracy…{' '}
              <span className="font-bold italic">
                but just doesn’t have the time, money, and ammo to do it at the range…
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System is a must-have.
            </p>
            <p className="text-base md:text-lg leading-relaxed">Even better though…</p>
          </div>
          <div className="text-center my-8">
            <CallToActionButton />
          </div>
          <div className="text-center my-8">
            <p className="text-xl md:text-xl font-semibold leading-normal text-red-600">
              <span className="bg-[#ff0] px-1 py-1">
                60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
              </span>
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto space-y-6">
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-[#f16500] block">
                The Laser Strike System Is
                <span className="text-red-600 block">Stupid-Simple to Use!</span>
              </span>
            </header>
            <div className="mx-auto w-full md:max-w-[80%]">
              <Image
                src="/contentimages/LaserStrikeDemoV2SNoGlitch.webp"
                alt="Laser Strike System"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="space-y-4 text-xl leading-tight md:text-2xl">
              <p>Now that you know what the Laser Strike System can do for you…</p>
              <p>Let’s take a quick look at how it works.</p>
              <p className="mb-4">It’s incredibly easy, and involves just three things:</p>
            </div>
            <div className="mb-8 -ml-4 md:-ml-6">
              <ul className="space-y-5 text-xl leading-tight md:text-2xl pl-4 md:pl-6">
                {[
                  {
                    step: 'The Laser Strike Cartridge:',
                    text: ' Cased with a beautiful graf metal finish, our laser cartridge comes in a caliber of your choosing to fit perfectly in your firearm. It features a soft rubber backing that absorbs the impact of the firing pin and activates the laser with every trigger pull.',
                  },
                  {
                    step: 'The Laser Strike Target System:',
                    text: (
                      <>
                        {
                          'Your Laser Strike comes with three targets and a tripod that function seamlessly with the companion smartphone app.'
                        }
                        <br />{' '}
                        <span className="block mt-4">
                          {
                            'Just hang up your target, put your phone on the tripod, do a quick calibration, then start training!'
                          }
                        </span>
                      </>
                    ),
                  },
                  {
                    step: 'Companion Smartphone App:',
                    text: ' Available for both Apple and Android phones, the free app that goes with your Laser Strike System offers innovative functionality that detects and records laser hits instantly, giving you additional insight with every shot.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <strong>{item.step}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>
                As you can see, the Laser Strike System is unbelievably simple to set up and use.
              </p>
              <p>All said, it takes no more than 5 minutes to get up-and-running anywhere.</p>
              <p>But that’s not the only thing that makes it great…</p>
            </div>
            <hr className="my-8 border-t border-gray-200 w-11/12 mx-auto" />

            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-tight text-[rgb(255,0,0)]">
                6 Reasons
                <span className="text-[#f16500]">
                  {' '}
                  the Laser Strike Will Help You Make the Shot{' '}
                </span>
                <span>You Can’t Afford to Miss…</span>
              </div>
            </header>
            <p>
              You carry a gun for <span className="font-bold">1 simple reason:</span>{' '}
              <span className="underline">
                to be able to defend your life and the lives of your loved ones.
              </span>
            </p>
            <p>And if you’re ever forced to deploy your firearm…</p>
            <p>
              You may not have more than a <span className="font-bold italic">few moments</span> and
              a <b>single shot</b> to do it effectively. That’s why it’s{' '}
              <span className="font-bold underline">so critical</span> to achieve the split-second
              level of accuracy the Laser Strike System can give you!
            </p>
            <p>
              It lets you <span className="font-bold italic">finally gain</span> the “second nature”
              response to reliably draw and put rounds on target{' '}
              <span className="font-bold italic">without thinking about it one bit. </span>
            </p>
            <p>And it lets you do it far faster than range time with live rounds alone!</p>
            <p>
              That simple fact alone is reason enough to own one, but that’s not the only thing that
              makes it great:
            </p>
            <div className="md:pl-6">
              <ul className="mb-6 text-xl md:text-2xl leading-none md:space-y-6">
                {/* First item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Helps Eliminate "Recoil Flinch":</b> Recoil
                        itself has zero impact on your accuracy. But your anticipation of recoil can
                        have a serious impact. Since the Laser Strike takes recoil out of the
                        equation, you can train yourself to eliminate the "recoil flinch" that
                        plagues so many shooters.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Reduces Firearm Wear-and-Tear:</b> Not only is
                        the Laser Strike guaranteed to be 100% safe for your guns, but it also
                        minimizes overall wear and the frequency with which you need to clean them –
                        since it reduces the amount of live ammo you use.
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list1.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
                {/* Second item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Companion Smartphone App:</b> Available for both
                        Apple and Android phones, the free app that goes with your Laser Strike
                        System offers innovative functionality that detects and records laser hits
                        instantly, giving you additional insight with every shot.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Compatible With a Wide Range of Firearms:</b> If
                        your gun shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with
                        the Laser Strike. Just be sure to select the appropriate caliber when
                        placing your order. If you don’t see your caliber, just know we plan to add
                        more soon!
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list2.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
                {/* 3rd item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">100% Safe for Home Use:</b> After ensuring your
                        gun is fully unloaded and contains nothing but the laser cartridge, the
                        Laser Strike lets you safely practice around friends and family with zero
                        worry.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Super Portable:</b> The entire Laser Strike
                        system can fit into any small backpack or gun bag no problem. Take it on
                        vacation, to a friend's house, or just about anywhere.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Totally Quiet:</b> There’s never any risk of
                        disturbing your wife, kids, or neighbors, because the Laser Strike lets you
                        practice in total silence!
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list3.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-red-600">
                Limited FREE Bonus Gift (Worth $50) Downright Gorgeous{' '}
                <span className="text-[#f16500]">VNSH Camo Range Bag for the</span> Perfect
                Range-Day!
              </span>
            </header>
            <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/LSSRangeBag1.webp"
                alt="Laser Strike System"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p>
              For a short time, we’re sending out our awesome{' '}
              <span className="font-bold italic">camo range bag</span>
              <span className="text-orange-600">
                {' '}
                100% FREE with every Laser Strike order (from this page ONLY!)
              </span>
            </p>
            <p>
              Our mission is simple… to help Americans defend themselves as{' '}
              <span className="font-bold italic">easily and effectively</span> as possible{' '}
              <span className="underline">everywhere they go.</span>
            </p>
            <p>And as we’ve said already…</p>
            <p>Training is key to being able to protect yourself effectively!</p>
            <p className="mb-4">
              Of course, the Laser Strike System is{' '}
              <span className="font-bold italic">one of the best</span> training aids money can buy.
            </p>
            <p>
              But to sweeten the deal even more… and assist you to train as effectively as possible…
            </p>
            <div className="bg-white rounded-lg mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <p className="text-xl mb-4">
                    We're throwing in this awesome range bag for nothing with every Laser Strike
                    order!
                  </p>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-start">
                      <img
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        className="w-7 h-7 mt-0.5 mr-3 flex-shrink-0"
                      />
                      <p className="font-bold text-lg">
                        Spacious 15L Capacity to Easily Hold Everything for the Perfect Range Day
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        className="w-7 h-7 mt-0.5 mr-3 flex-shrink-0"
                      />
                      <p className="font-bold text-lg">
                        Tons of Organization Options to Keep Your Gear Safe & Easily Accessible
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        className="w-7 h-7 mt-0.5 mr-3 flex-shrink-0"
                      />
                      <p className="font-bold text-lg">
                        Ultra-Tough, Reinforced Construction from Top to Bottom
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold mb-2">Normally $50…</p>
                  <p className="text-lg mb-4">
                    The VNSH Range Bag is yours{' '}
                    <span className="font-extrabold italic bg-[#ff0] py-1">totally FREE</span> with
                    your Laser Strike order today!
                  </p>
                  <p className="text-lg">
                    Plus, when you grab this deal, you'll be doing so{' '}
                    <span className="font-bold italic">100% Risk-Free</span>, because…
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col items-center gap-6">
                  <div className="w-full max-w-sm">
                    <Image
                      src="/contentimages/LSSRangeBag2.webp"
                      alt="VNSH Range Bag Front View"
                      width={480}
                      height={360}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full max-w-sm">
                    <Image
                      src="/contentimages/LSSRangeBag3.webp"
                      alt="VNSH Range Bag Side View"
                      width={480}
                      height={360}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-tight text-[#f16500]">
                <div>
                  You're Getting An <span className="text-red-600">Iron-Clad,</span>
                </div>
                <div className="text-red-600">Money-Back Guarantee</div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p>
              Love everything about your order, or{' '}
              <span className="font-bold italic">we’ll refund you every penny.</span>
            </p>
            <p>It’s that simple.</p>
            <p>
              If you aren’t totally thrilled, all you have to do is contact our{' '}
              <span className="font-bold italic">US-Based Support Team</span> within 60 days to get
              a full refund.
            </p>
            <p>
              <span className="bg-[#ff0] py-1">
                Plus, we also give you a{' '}
                <span className="font-bold italic">2-year workmanship guarantee</span> as well!
              </span>
            </p>
            <p>
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p>
              So if you want to get an awesome price on the{' '}
              <span className="font-bold italic">
                fastest, easiest way to become a <span className="underline">dead accurate</span>{' '}
                shooter…
              </span>
            </p>
            <p>Plus… get a FREE VNSH Range Bag with it…</p>
            <p id="package-selection">Then you owe it to yourself to grab this deal now!</p>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <hr className="my-8 border-t border-gray-200 w-11/12 mx-auto" />
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-tight text-[#f16500]">
                Frequently Answered Questions About the VNSH Laser Strike Training System
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
