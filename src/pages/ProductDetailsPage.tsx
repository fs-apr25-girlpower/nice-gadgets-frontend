import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';
import { ColorSelector } from '../components/ColorSelector/ColorSelector';
import { CapacitySelector } from '../components/CapacitySelector/CapacitySelector';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
import { ProductSlider } from '../components/ProductsSlider/ProductsSlider';
import { ButtonMain } from '../components/ButtonMain';
//import { useProducts } from '../context/ProductsContext';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getProductsWithDetails } from '../api/getProductsWithDetails';
import type { ProductWithDetails } from '../types/ProductWithDetails';
import { useProductsWithDetails } from '../context/ProductsWithDetailsContext';

export const ProductDetailsPage = () => {
  const allProducts = useProductsWithDetails();
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Стан для конкретного продукту, який ми знайдемо
  const [product, setProduct] = useState<ProductWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Додаємо стан для помилок

  // Стани для вибору кольору, об'єму та зображення (якщо вони використовуються в дочірніх компонентах)
  //const [selectedColor, setSelectedColor] = useState<string>('');
  //const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  //const [selectedImage, setSelectedImage] = useState<string>('');

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

    // Шукаємо продукт у вже завантаженому контексті
    const foundProduct = allProducts.find(
      p => `${p.id}` === productId,
      //p => `${p.id}` === productId || p.itemId === productId,
    );

    if (foundProduct) {
      setProduct(foundProduct);

      if (
        foundProduct.details?.colorsAvailable &&
        foundProduct.details.colorsAvailable.length > 0
      ) {
        //setSelectedColor(foundProduct.details.colorsAvailable[0]);
      }

      if (
        foundProduct.details?.capacityAvailable &&
        foundProduct.details.capacityAvailable.length > 0
      ) {
        //setSelectedCapacity(foundProduct.details.capacityAvailable[0]);
      }

      if (
        foundProduct.details?.images &&
        foundProduct.details.images.length > 0
      ) {
        //setSelectedImage(foundProduct.details.images[0]);
      }
    } else {
      setError(true); // Продукт не знайдено
    }

    setLoading(false); // Завантаження завершено
  }, [allProducts, productId, setLoading]);

  // --- Умовний рендеринг: Loader, Product Not Found ---
  if (loading) {
    return (
      <div className="min-w-[320px] max-w-[1136px] mx-auto flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  // Якщо продукт не знайдено або він null після завантаження
  if (error || !product) {
    return (
      <div className="min-w-[320px] max-w-[1136px] mx-auto">
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Product not found
          </h1>
          <p className="text-secondary mb-6">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => navigate(-1)} // Використовуємо navigate(-1)
            className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // useEffect(() => {
  //   const loadProductDetails = async () => {
  //     if (!allProducts || !Array.isArray(allProducts)) {
  //       return;
  //     }

  //     const currentProduct = allProducts.find(
  //       product =>
  //         product.id.toString() === productId || product.itemId === productId,
  //     );

  //     if (!currentProduct) {
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const productsWithDetails = await getProductsWithDetails();
  //       const detailedProduct = productsWithDetails.find(
  //         product =>
  //           product.id === currentProduct.id ||
  //           product.itemId === currentProduct.itemId,
  //       );

  //       setProductWithDetails(
  //         detailedProduct || { ...currentProduct, details: null },
  //       );
  //     } catch (error) {
  //       console.error('Error loading product details:', error);
  //       setProductWithDetails({ ...currentProduct, details: null });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProductDetails();
  // }, [allProducts, productId]);

  // if (!allProducts || !Array.isArray(allProducts) || loading) {
  //   return (
  //     <div className="min-w-[320px] max-w-[1136px] mx-auto">
  //       <p>
  //         <Loader />
  //       </p>
  //     </div>
  //   );
  // }

  // if (!productWithDetails) {
  //   return (
  //     <div className="min-w-[320px] max-w-[1136px] mx-auto">
  //       <div className="flex flex-col items-center justify-center py-16">
  //         <h1 className="text-2xl font-bold text-primary mb-4">
  //           Product not found
  //         </h1>
  //         <p className="text-secondary mb-6">
  //           The product you&apos;re looking for doesn&apos;t exist.
  //         </p>
  //         <button
  //           onClick={() => window.history.back()}
  //           className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
  //         >
  //           Go Back
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // const currentProduct = productWithDetails;
  // const details = productWithDetails.details;

  const recommendedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 10);

  const sliderConfig = {
    titleForBrand: 'You may also like',
    marginTop: 'mt-16',
  };

  return (
    <div className="min-w-[320px] max-w-[1136px] mx-auto">
      <div className="mb-4 tablet:mb-6">
        <Breadcrumbs />
      </div>

      <div className="mb-6 tablet:mb-8">
        <button
          onClick={() => navigate(-1)} // Використовуємо useNavigate
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          // onClick={() => window.history.back()}
          // className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
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
          <ProductGallery
          // images={product.details?.images || null}
          // selectedImage={selectedImage}
          // setSelectedImage={setSelectedImage}
          />
        </div>
        <div className="flex-1 min-w-0 space-y-4 tablet:space-y-6">
          <div className="space-y-1">
            <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider">
              Available colors
            </p>
            <div className="text-xs tablet:text-sm text-primary">
              ID: {product.itemId}
            </div>
          </div>
          <ColorSelector
          // colors={product.details.colorsAvailable || []}
          // selectedColor={selectedColor}
          // onSelectColor={setSelectedColor}
          />

          <div className="space-y-1">
            <p className="text-xs tablet:text-sm text-secondary font-semibold uppercase tracking-wider">
              Select capacity
            </p>
          </div>
          <CapacitySelector
          // capacities={product.details.capacityAvailable || []}
          // selectedCapacity={selectedCapacity}
          // onSelectCapacity={setSelectedCapacity}
          />

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

          <div className="space-y-2 pt-6 border-t border-elements">
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
                <span className="text-primary font-medium">{product.ram}</span>
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
          <div className="space-y-0">
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Screen</span>
              <span className="text-primary text-sm font-medium">
                {product.screen}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Resolution</span>
              <span className="text-primary text-sm font-medium">
                {product.details?.resolution || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Processor</span>
              <span className="text-primary text-sm font-medium">
                {product.details?.processor || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">RAM</span>
              <span className="text-primary text-sm font-medium">
                {product.ram}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Built in memory</span>
              <span className="text-primary text-sm font-medium">
                {product.capacity}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
              <span className="text-secondary text-sm">Camera</span>
              <span className="text-primary text-sm font-medium">
                {product.details && 'camera' in product.details
                  ? product.details.camera
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-elements">
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
