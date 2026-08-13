import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

const DEFAULT_ROW1_ITEMS = [
  {
    type: 'text',
    brand: 'Luna Studio',
    text: 'Optimal IT Solutions delivered our site ahead of schedule with a clean, high-converting design that feels polished and modern.',
    author: 'Mia Townsend',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'image',
    brand: 'Bolt Commerce',
    text: 'Performance improved immediately — page speed and lead flow both jumped after launch.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'text',
    brand: 'Horizon Labs',
    text: 'The new website feels premium and captures our technical expertise perfectly.',
    author: 'Noah Patel',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'text',
    brand: 'Luna Studio',
    text: 'Optimal IT Solutions delivered our site ahead of schedule with a clean, high-converting design that feels polished and modern.',
    author: 'Mia Townsend',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'image',
    brand: 'Bolt Commerce',
    text: 'Performance improved immediately — page speed and lead flow both jumped after launch.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'text',
    brand: 'Horizon Labs',
    text: 'The new website feels premium and captures our technical expertise perfectly.',
    author: 'Noah Patel',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  }
];

const DEFAULT_ROW2_ITEMS = [
  {
    type: 'blue',
    brand: 'GrowthSpark',
    text: 'They understood our goals instantly and turned them into a beautiful, fast website.',
    author: 'Ava Wallace',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'image',
    brand: 'Nova Works',
    text: 'The final product exceeded our expectations and our team is thrilled with the results.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'text',
    brand: 'Pulse Creative',
    text: 'Their process is clear, helpful, and user-focused — the launch experience was excellent.',
    author: 'Jordan Kim',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'blue',
    brand: 'GrowthSpark',
    text: 'They understood our goals instantly and turned them into a beautiful, fast website.',
    author: 'Ava Wallace',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  },
  {
    type: 'image',
    brand: 'Nova Works',
    text: 'The final product exceeded our expectations and our team is thrilled with the results.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'text',
    brand: 'Pulse Creative',
    text: 'Their process is clear, helpful, and user-focused — the launch experience was excellent.',
    author: 'Jordan Kim',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80'
  }
];

function renderMarqueeItems(items, prefix) {
  return items.map((item, index) => {
    const key = `${prefix}-${index}`;

    return (
      <SwiperSlide key={key}>
        <div
          className="w-[min(92vw,280px)] sm:w-[min(80vw,300px)] md:w-[min(62vw,330px)] h-55 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-sm"
          style={{
            backgroundColor: item.type === 'text' ? '#F4F5F7' : 'transparent'
          }}
        >
        {item.type === 'image' ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={item.image}
              alt={item.brand}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20 p-6 flex flex-col justify-between text-white">
              <div className="inline-block bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold w-fit">
                {item.brand}
              </div>
              <p className="text-xs font-medium leading-relaxed">&quot;{item.text}&quot;</p>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-block bg-gray-200/80 px-3 py-1 rounded-full text-xs font-bold text-gray-700 w-fit mb-3">
                {item.brand}
              </div>
              <p className="text-xs font-medium text-gray-800 leading-relaxed">{item.text}</p>
            </div>

            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <img src={item.avatar} alt={item.author} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-[11px] font-bold text-gray-900">{item.author}</span>
              </div>
              <div className="flex text-amber-400 text-[10px]">★★★★★</div>
            </div>
          </>
        )}
      </div>
    </SwiperSlide>
    );
  });
}

export default function WordOnTheStreetSection({ row1Items = DEFAULT_ROW1_ITEMS, row2Items = DEFAULT_ROW2_ITEMS }) {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-350 mx-auto px-8 md:px-16 mb-10 flex items-center gap-3">
        
        <h2 className="mx-auto max-w-208 text-center text-[32px] sm:text-[44px] lg:text-[52px] font-black leading-[1.05] tracking-tight text-[#0A0A0A]">
        WORDS ON THE STREET
        </h2>
      </div>

      <div className="relative w-full overflow-hidden mb-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={{
            enabled: true,
            momentum: false
          }}
          loop={true}
          speed={25000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false
          }}
          className="px-4 sm:px-6"
        >
          {renderMarqueeItems(row1Items, 'r1')}
        </Swiper>
      </div>

      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={{
            enabled: true,
            momentum: false
          }}
          loop={true}
          speed={28000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
            pauseOnMouseEnter: false,
            waitForTransition: false
          }}
          className="px-4 sm:px-6"
        >
          {renderMarqueeItems(row2Items, 'r2')}
        </Swiper>
      </div>
    </section>
  );
}
