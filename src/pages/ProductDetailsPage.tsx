import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';
import { ColorSelector } from '../components/ColorSelector/ColorSelector';
import { CapacitySelector } from '../components/CapacitySelector/CapacitySelector';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
import { ProductSlider } from '../components/ProductsSlider/ProductsSlider';
import { ButtonMain } from '../components/ButtonMain';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { ProductWithDetails } from '../types/ProductWithDetails';
import { useProductsWithDetails } from '../context/ProductsWithDetailsContext';
import type { ColorKey } from '../types/ColorKey';
import { ErrorMessage } from '../components/ErrorMessage';

export const ProductDetailsPage = () => {
  const allProducts = useProductsWithDetails();
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  const currentProduct = allProducts.find(p => p.details?.id === itemId);
  const imagesForGallery = product?.details?.images || [];
  const availableColors: ColorKey[] =
    currentProduct?.details?.colorsAvailable || [];
  const availableCapacities = currentProduct?.details?.capacityAvailable || [];
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (
      !allProducts ||
      !Array.isArray(allProducts) ||
      allProducts.length === 0
    ) {
      setLoading(true);
      return;
    }

    setLoading(true);
    setError(false);

    setProduct(null);
    setShowMessage(false);

    const foundProduct = allProducts.find(p => p.itemId === itemId);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError(true);
    }

    setLoading(false);
  }, [allProducts, itemId]);

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);

    const base = product?.itemId.split('-').slice(0, -2).join('-');
    if (!base) return;

    const targetProduct = allProducts.find(
      p =>
        p.color.replace(' ', '-') === color &&
        p.capacity === (selectedCapacity || product?.capacity) &&
        p.itemId.includes(base),
    );

    if (targetProduct) {
      navigate(`/${targetProduct.category}/${targetProduct.itemId}`);
    } else {
      setShowMessage(true);
    }
  };

  const handleSelectCapacity = (capacity: string) => {
    setSelectedCapacity(capacity);

    const base = product?.itemId
      .split('-')
      .filter(item => {
        let colorParts;
        if (product.color.includes('-')) {
          colorParts = product.color.toLowerCase().split('-');
        } else {
          colorParts = product.color.toLowerCase().split(' ');
        }
        return (
          item !== product.capacity.toLowerCase() && !colorParts.includes(item)
        );
      })
      .join('-');

    if (!base) return;

    const targetProduct = allProducts.find(
      p =>
        p.capacity === capacity &&
        p.color === (selectedColor || product?.color) &&
        p.itemId.includes(base),
    );

    if (targetProduct) {
      navigate(`/${targetProduct.category}/${targetProduct.itemId}`);
    } else {
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (product) {
      setSelectedColor(product.color);
      setSelectedCapacity(product.capacity);
    }
  }, [itemId, product]);

  if (loading) {
    return (
      <div className="min-w-[320px] max-w-[1136px] mx-auto flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage text={'Something went wrong!'} />;
  }

  const recommendedProducts = allProducts
    .filter(
      p => p.itemId !== product?.itemId && p.category === product?.category,
    )
    .slice(0, 10);

  const sliderConfig = {
    titleForBrand: 'You may also like',
    marginTop: 'mt-16',
  };

  return !product || showMessage ? (
    <ErrorMessage
      text={'Product was not found'}
      back={true}
    />
  ) : (
    <div className="min-w-[320px] max-w-[1136px] mx-auto">
      <div className="mb-4 tablet:mb-6">
        <Breadcrumbs />
      </div>

      <div className="mb-6 tablet:mb-8">
        <button
          onClick={() => navigate(-1)} // Використовуємо useNavigate
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <span className="text-base tablet:text-lg">←</span>
          <span className="text-xs tablet:text-sm font-semibold">Back</span>
        </button>
      </div>

      <h1 className="text-xl tablet:text-2xl desktop:text-[28px] font-bold text-primary mb-8 tablet:mb-10 desktop:mb-12">
        {product.name}
      </h1>

      <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-8 desktop:gap-16 mb-12 tablet:mb-16 desktop:mb-20 min-w-0">
        <div className="flex-1 min-w-0 flex items-start justify-center">
          <ProductGallery images={imagesForGallery} />
        </div>
        <div className="flex-1 min-w-0 justify-between relative">
          <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider absolute top-0 right-0 ">
            ID: {product.id}
          </p>
          <div className="min-w-0 space-y-4 tablet:space-y-6 desktop:max-w-80">
            <p className="text-xs tablet:text-sm text-secondary font-semibold tracking-wider mb-2">
              Available colors
            </p>
            <ColorSelector
              colors={availableColors}
              selectedColor={selectedColor}
              onSelectColor={handleSelectColor}
            />
            <div className="h-px w-full bg-elements"></div>

            <div className="space-y-1">
              <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider">
                Select capacity
              </p>
            </div>
            <CapacitySelector
              availableCapacities={availableCapacities}
              selectedCapacity={selectedCapacity}
              onSelectCapacity={handleSelectCapacity}
            />
            <div className="h-px w-full bg-elements"></div>

            <div className="flex items-baseline gap-3 py-4">
              <span className="text-2xl tablet:text-3xl desktop:text-[32px] font-bold text-primary">
                ${product.price}
              </span>
              <span className="text-lg tablet:text-xl desktop:text-[22px] text-secondary line-through">
                ${product.fullPrice}
              </span>
            </div>

            <div className="flex gap-2 tablet:gap-4">
              <ButtonMain product={product} />
              <FavoriteButton product={product} />
            </div>

            <div className="space-y-2 pt-6">
              <div className="flex flex-col gap-y-2 text-xs tablet:text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Screen</span>
                  <span className="text-primary font-medium">
                    {product.screen}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Resolution</span>
                  <span className="text-primary font-medium">
                    {product.details && 'resolution' in product.details
                      ? product.details.resolution
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Processor</span>
                  <span className="text-primary font-medium">
                    {product.details && 'processor' in product.details
                      ? product.details.processor
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">RAM</span>
                  <span className="text-primary font-medium">
                    {product.ram}
                  </span>
                </div>
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
          <div className="h-px w-full bg-elements mt-4 mb-8"></div>
          <div className="space-y-6 text-secondary text-default">
            {product.details?.description &&
            product.details.description.length > 0 ? (
              product.details.description.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3 text-primary">
                    {section.title}
                  </h3>
                  {section.text.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="leading-relaxed mb-3"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))
            ) : (
              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  About {product.name}
                </h3>
                <p className="leading-relaxed">
                  Detailed information about this product is not available at
                  the moment.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full desktop:w-auto mt-8 desktop:mt-0">
          <h2 className="text-xl tablet:text-2xl font-bold mb-6 text-primary">
            Tech specs
          </h2>
          <div className="h-px w-full bg-elements mb-7"></div>
          <div className="space-y-0">
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Screen</span>
              <span className="text-primary text-sm font-medium">
                {product.screen}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Resolution</span>
              <span className="text-primary text-sm font-medium">
                {product.details?.resolution || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Processor</span>
              <span className="text-primary text-sm font-medium">
                {product.details?.processor || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">RAM</span>
              <span className="text-primary text-sm font-medium">
                {product.ram}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Built in memory</span>
              <span className="text-primary text-sm font-medium">
                {product.capacity}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Camera</span>
              <span className="text-primary text-sm font-medium">
                {product.details && 'camera' in product.details
                  ? product.details.camera
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Zoom</span>
              <span className="text-primary text-sm font-medium">
                {product.details && 'zoom' in product.details
                  ? product.details.zoom
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-secondary text-sm">Cell</span>
              <span className="text-primary text-sm font-medium">
                {product.details && 'cell' in product.details
                  ? product.details.cell.join(', ')
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProductSlider
        sliderConfig={sliderConfig}
        products={recommendedProducts}
      />
    </div>
  );
};
