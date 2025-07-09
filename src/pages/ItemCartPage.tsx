import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';
import { ColorSelector } from '../components/ColorSelector/ColorSelector';
import { CapacitySelector } from '../components/CapacitySelector/CapacitySelector';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
import { ProductSlider } from '../components/ProductsSlider/ProductsSlider';
import { ButtonMain } from '../components/ButtonMain';

export const ItemCartPage = () => {
  const sliderConfig = {
    titleForBrand: 'You may also like',
    classNameForButtonPrev: 'slider-prev-btn',
    classNameForButtonNext: 'slider-next-btn',
    marginTop: 'mt-16',
  };

  return (
    <div className="min-w-[320px] max-w-[1136px] mx-auto">
      <div className="mb-4 tablet:mb-6">
        <Breadcrumbs />
      </div>

      <div className="mb-6 tablet:mb-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <span className="text-base tablet:text-lg">←</span>
          <span className="text-xs tablet:text-sm font-semibold">Back</span>
        </button>
      </div>

      <h1 className="text-xl tablet:text-2xl desktop:text-[28px] font-bold text-primary mb-8 tablet:mb-10 desktop:mb-12">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-8 desktop:gap-16 mb-12 tablet:mb-16 desktop:mb-20 min-w-0">
        <div className="flex-1 min-w-0 flex items-start justify-center">
          <ProductGallery />
        </div>
        <div className="flex-1 min-w-0 space-y-4 tablet:space-y-6">
          <div className="space-y-1">
            <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider">
              Available colors
            </p>
            <div className="text-xs tablet:text-sm text-primary">
              ID: 802390
            </div>
          </div>
          <ColorSelector />

          <div className="space-y-1">
            <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider">
              Select capacity
            </p>
          </div>
          <CapacitySelector />

          <div className="flex items-baseline gap-3 py-4">
            <span className="text-2xl tablet:text-3xl desktop:text-[32px] font-bold text-primary">
              $799
            </span>
            <span className="text-lg tablet:text-xl desktop:text-[22px] text-secondary line-through">
              $1199
            </span>
          </div>

          <div className="flex gap-2 tablet:gap-4">
            <ButtonMain />
            <FavoriteButton />
          </div>

          <div className="space-y-2 pt-6 border-t border-elements">
            <div className="flex flex-col gap-y-2 text-xs tablet:text-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Screen</span>
                <span className="text-primary font-medium">6.5&quot; OLED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Resolution</span>
                <span className="text-primary font-medium">2688x1242</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Processor</span>
                <span className="text-primary font-medium">
                  Apple A12 Bionic
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">RAM</span>
                <span className="text-primary font-medium">4 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col desktop:flex-row gap-8 desktop:gap-16 mb-16 desktop:mb-20">
        <div className="flex-1 min-w-0 w-full desktop:w-auto">
          <h2 className="text-xl tablet:text-2xl font-bold mb-6 text-primary">
            About
          </h2>
          <div className="space-y-6 text-secondary text-sm tablet:text-base">
            <div>
              <h3 className="font-semibold mb-3 text-primary">
                And then there was Pro
              </h3>
              <p className="leading-relaxed">
                A transformative triple-camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind-blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary">Camera</h3>
              <p className="leading-relaxed">
                Meet the first triple-camera system to combine cutting-edge
                technology with the legendary simplicity of iPhone. Capture up
                to four times more scene. Get beautiful portraits with sharp
                focus on your subject and artfully blurred backgrounds. And take
                macro photos of tiny subjects that would be impossible to
                photograph with traditional smartphone cameras.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary">
                Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
                Love it.
              </h3>
              <p className="leading-relaxed">
                iPhone 11 Pro lets you capture videos that are beautifully true
                to life, with greater detail and smoother motion. Epic
                processing power means it can shoot 4K video with extended
                dynamic range and cinematic video stabilization — all out of the
                box. You get more creative control, too, with four times more
                scene and powerful new editing tools to play with.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full desktop:w-auto mt-8 desktop:mt-0">
          <h2 className="text-xl tablet:text-2xl font-bold mb-6 text-primary">
            Tech specs
          </h2>
          <div className="space-y-0">
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Screen</span>
              <span className="text-primary text-sm font-medium">
                6.5&quot; OLED
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Resolution</span>
              <span className="text-primary text-sm font-medium">
                2688x1242
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Processor</span>
              <span className="text-primary text-sm font-medium">
                Apple A12 Bionic
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">RAM</span>
              <span className="text-primary text-sm font-medium">4 GB</span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Built in memory</span>
              <span className="text-primary text-sm font-medium">64 GB</span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Camera</span>
              <span className="text-primary text-sm font-medium">
                12 Mp + 12 Mp + 12 Mp (Triple)
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Zoom</span>
              <span className="text-primary text-sm font-medium">
                Optical, 2x
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Cell</span>
              <span className="text-primary text-sm font-medium">
                GSM, LTE, UMTS
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProductSlider sliderConfig={sliderConfig} />
    </div>
  );
};
